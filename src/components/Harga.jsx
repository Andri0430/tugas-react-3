export default function Harga(props) {
  return (
    <p
      style={{
        color: "white",
        fontWeight: "bold",
        paddingInline: "10px",
        margin: "4px",
      }}
    >
      {props.hargaBarang}
    </p>
  );
}
