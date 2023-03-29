import Box from "../../components/Box";
import BaseTemplate from "../../templates/base-template";

function HomePage() {
  function msg() {
    alert("ok");
  }

  return (
    <BaseTemplate>
      <div>
        <h1>Minha pagina</h1>
        <Box msg={msg}>
          <h2>Titulo passado via props</h2>
          {/* <button onClick={msg}></button> */}
        </Box>
      </div>
    </BaseTemplate>
  );
}

export default HomePage;
