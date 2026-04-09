// api/[id].js
import fetch from "node-fetch";

export default async function handler(req, res) {
  const { id } = req.query; // gets the dynamic path parameter
  if (!id) {
    res.status(400).send("No paste ID provided.");
    return;
  }
  try {
    const response = await fetch(`https://paste.rs/${id}`);
    const text = await response.text();
    res.setHeader("Content-Type", "text/plain");
    res.status(200).send(text);
  } catch (err) {
    res.status(500).send("Error fetching paste.");
  }
}
