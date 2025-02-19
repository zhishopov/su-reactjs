const user = {
  name: "Marylin Monroe",
  imageUrl: "./assets/marylin-monroe.jpeg",
  imageSize: 90,
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        style={{ width: user.imageSize, height: user.imageSize }}
      />
    </>
  );
}
