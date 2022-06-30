require("dotenv").config();
const express = require("express");
const axios = require("axios");
const app = express();
var cors = require("cors");
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

app.use("/games", (req, res) => {
  let searchQuery = "";
  if (req.query.search) {
    searchQuery = `search "${req.query.search}%"`;
  }
  return instance({
    url: "/games",
    method: "POST",
    data: `fields name,rating,cover; ${searchQuery}; limit 5;`,
  })
    .then(async (response) => {
      const newResponse = [];

      for (const result of response.data) {
        const cover_photo = await instance({
          url: "/covers",
          method: "POST",
          data: `fields *; where id = '${result.cover}'; limit 1;`,
        });

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

app.use("/", (req, res) =>
  res.json({
    message: "welcome homes",
  })
);

const port = 3002;
app.listen(port, () => console.log("Example app listening on port " + port));
