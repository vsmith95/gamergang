require("dotenv").config();
const express = require("express");
const axios = require("axios");
const app = express();

const instance = axios.create({
  baseURL: "https://api.igdb.com/v4",
  headers: {
    Accept: "application/json",
    "Client-ID": process.env.TWITCH_CLIENT_ID,
    Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
  },
});

app.use("/games", (req, res) => {
  return instance({
    url: "/games",
    method: "POST",
    data: "fields name,aggregated_rating;",
  }).then((response) => res.json(response.data));
});

app.use("/covers", (req, res) => {
  return instance({
    url: "/covers",
    method: "POST",
    data: "fields *;",
  }).then((response) => res.json(response.data));
});

app.use("/genres", (req, res) => {
  return instance({
    url: "/genres",
    method: "POST",
    data: "fields *;",
  }).then((response) => res.json(response.data));
});

app.use("/age-ratings", (req, res) => {
  return instance({
    url: "/age_ratings",
    method: "POST",
    data: "fields *;",
  }).then((response) => res.json(response.data));
});

app.use("/", (req, res) =>
  res.json({
    message: "welcome homes",
  })
);

const port = 3001;
app.listen(3001, () => console.log("Example app listening on port " + port));
