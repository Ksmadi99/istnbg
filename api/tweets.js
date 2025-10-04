export default async function handler(req, res) {
  const { query } = req;
  const tag = query.tag || "donggyu";

  const BEARER_TOKEN = process.env.BEARER_TOKEN; // will be stored safely in Vercel

  const url = `https://api.x.com/2/tweets/search/recent?query=from:ist_ent%20%23${tag}&tweet.fields=created_at,text,author_id`;

  const response = await fetch(url, {
    headers: { "Authorization": `Bearer ${BEARER_TOKEN}` }
  });

  const data = await response.json();
  res.status(200).json(data);
}
