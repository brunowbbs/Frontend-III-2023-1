function Footer(props) {
  console.log(props);

  return (
    <footer>
      <center>{props.title ? props.title : "Valor Default"}</center>
      <center>{props.idade ? props.idade : 0}</center>
      {/* <center>{props.title || "Valor Default"}</center> */}
    </footer>
  );

  // if (props.title) {
  //   return (
  //     <footer>
  //       <center>{props.title}</center>
  //     </footer>
  //   );
  // } else {
  //   return (
  //     <footer>
  //       <center>VALOR DEFAULT</center>
  //     </footer>
  //   );
  // }
}

export default Footer;
