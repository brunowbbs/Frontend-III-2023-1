// import "./styles.css";

import styles from "./styles.module.css";

function Card(props) {
  // const { teste, usuario } = props;

  // const { id, name, turma, ativo } = usuario;

  // console.log(turma);

  // const { usuario } = props;

  // const { name, turma } = usuario;

  // console.log(usuario);

  // const usuario = "Wesley"

  //   if(usuario === "Wesley"){
  //     styles.rowGreen
  //   }else{
  //     styles.rowred
  //   }

  return (
    // <li className={props.usuario.ativo ? styles.rowGreen : styles.rowRed}>
    <li style={{ background: props.usuario.cor }}>
      <h3>{props.usuario.name}</h3>
      <p>{props.usuario.turma}</p>
    </li>
  );
}

export default Card;
