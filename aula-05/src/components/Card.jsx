export default function Card(props) {
  return (
    <div>
      <h4>{props.dado.titulo}</h4>
      <p>{props.dado.subtitulo}</p>
      <img src={props.dado.url} />
    </div>
  );
}

// export default function Card(props) {
//   const { dado } = props;

//   const { titulo, subtitulo, url } = dado;

//   return (
//     <div>
//       <h4>{titulo}</h4>
//       <p>{subtitulo}</p>
//       <img src={url} />
//     </div>
//   );
// }
