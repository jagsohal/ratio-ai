export default async function handler(req, res) {
  const { comments } = req.body;

  // Simple mock analysis
  const words = comments.split(/\s+/);
  const keywords = [...new Set(words)].slice(0, 10);

  const ratio = {
    likes: Math.floor(Math.random() * 1000),
    replies: Math.floor(Math.random() * 500),
  };

  const sentiment = {
    positive: Math.random(),
    negative: Math.random(),
    neutral: Math.random(),
  };

  res.status(200).json({ ratio, keywords, sentiment });
}
