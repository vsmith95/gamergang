require("dotenv").config();
const express = require("express");
const axios = require("axios");
const app = express();
var cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");

const instance = axios.create({
  baseURL: "https://api.igdb.com/v4",
  headers: {
    Accept: "application/json",
    "Client-ID": process.env.TWITCH_CLIENT_ID,
    Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
  },
});

app.use(cors());

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});

app.use("/", (req, res) =>
  res.json({
    message: "welcome homes",
  })
);

app.use("/games", (req, res) => {
  let searchQuery = "";
  if (req.query.search) {
    searchQuery = `search "${req.query.search}%"`;
  }
  if (req.query.genres) {
    searchQuery =
      searchQuery === ""
        ? `where genres = ${req.query.genres}`
        : `${searchQuery}; where genres = (${req.query.genres})`;
  }

  return instance({
    url: "/games",
    method: "POST",
    data: `fields name,rating,cover,genres; ${searchQuery}; limit 5;`,
  })
    .then(async (response) => {
      const newResponse = [];

      for (const result of response.data) {
        let cover_photo = {
          data: [
            {
              url: "//via.placeholder.com/90/FF0000/FFFFFF?Text=image here",
            },
          ],
        };

        if (result.cover) {
          cover_photo = await instance({
            url: "/covers",
            method: "POST",
            data: `fields *; where id = '${result.cover}'; limit 1;`,
          });
        }

        const [firstCoverPhoto] = cover_photo.data;
        newResponse.push({ ...result, cover_photo: firstCoverPhoto });
      }

      return res.json(newResponse);
    })
    .catch((error) => {
      return res.status(400).json(error);
    });
});

app.use("/covers", (req, res) => {
  return instance({
    url: "/covers",
    method: "POST",
    data: "fields *; limit 5;",
  }).then((response) => res.json(response.data));
});

app.use("/genres", (req, res) => {
  return instance({
    url: "/genres",
    method: "POST",
    data: "fields name,slug,checksum,url; limit 5;",
  }).then((response) => res.json(response.data));
});

app.use("/age-ratings", (req, res) => {
  return instance({
    url: "/age_ratings",
    method: "POST",
    data: "fields *; limit 5;",
  }).then((response) => res.json(response.data));
});

const port = process.env.PORT || 3002;
app.listen(port, () => console.log("Example app listening on port " + port));
