const express = require("express");
const fetch = require("node-fetch");

const app = express();

app.get("/api/user/:user", async (req, res) => {
  let resp = await fetch(
    `https://api.scratch.mit.edu/users/${req.params.user}`
  );
  let { id, username } = await resp.json();

  res.json({
    id,
    username,
  });
});

app.get("/api/user/:user/picture", async (req, res) => {
  let resp = await fetch(
    `https://api.scratch.mit.edu/users/${req.params.user}`
  );
  let { id, username } = await resp.json();

  res.redirect(`https://cdn2.scratch.mit.edu/get_image/user/${id}_500x500.png`);
});

export default app;
