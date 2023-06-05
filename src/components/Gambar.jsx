export default function Gambar(props) {
  return (
    <div
      style={{
        backgroundColor: "orange",
        height: "140px",
        width: "130px",
        margin: "auto",
        backgroundImage: `url("${props.gambar}")`,
        backgroundSize: "contain",
      }}
    ></div>
  );
}
