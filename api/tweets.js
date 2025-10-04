const fetch = require("node-fetch");

module.exports = async (req, res) => {
  try {
    const tag = req.query.tag || "istnbg";
    const response = await fetch(
      `https://api.twitter.com/2/tweets/search/recent?query=${encodeURIComponent(tag)}&tweet.fields=created_at,author_id`,
      {
        headers: {
          Authorization: `Bearer ${process.env.BEARER_TOKEN}`
        }
      }
    );

    if (!response.ok) {
      throw new Error(`Twitter API error: ${response.statusText}`);
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
