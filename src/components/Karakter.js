// Karakter bileşeniniz buraya gelecek

export default function Karakter(props) {
  const { data } = props;

  return (
    <div>
      <button>{data.name}</button>
      <button>{data.birth_year}</button>
    </div>
  );
}
