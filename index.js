// index.js
const express = require("express");
const fetch = require("node-fetch");

const app = express();
const PORT = process.env.PORT || 10000; // Render assigns a dynamic port

app.get("/:id", async (req, res) => {
  const id = req.params.id;
  if (!id) return res.status(400).send("No paste ID provided.");
  try {
    const response = await fetch(`https://paste.rs/${id}`);
    const text = await response.text();
    res.setHeader("Content-Type", "text/plain");
    res.send(text);
  } catch (err) {
    res.status(500).send("Error fetching paste.");
  }
});

app.get("/", (req, res) => {
  res.send("Scripthub Render Proxy is running. Use /<paste-id>");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
