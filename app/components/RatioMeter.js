export default function RatioMeter({ ratio }) {
  const { likes, replies } = ratio;
  return (
    <div className="p-4 bg-white shadow rounded">
      <h2 className="text-xl font-semibold mb-2">Ratio Meter</h2>
      <p>👍 Likes: {likes}</p>
      <p>💬 Replies: {replies}</p>
      <p>
        Ratio: {(likes / (replies || 1)).toFixed(2)} (likes per reply)
      </p>
    </div>
  );
}
