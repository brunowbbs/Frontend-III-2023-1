import { render, screen } from "@testing-library/react";
import Box from "./index";

describe("<Box/>", () => {
  test("Testar se o componente de box estã renderizando corretamente", () => {
    // // const { debug } = render(<Box />);
    // // console.log(debug());

    // //AAA

    // render(<Box />);

    const TEXTO = "MEU TESTE";

    render(<Box text={TEXTO} />);

    const texto = screen.getAllByRole("heading", { level: 1, name: TEXTO });

    // // const texto = screen.getByTestId("meu-texto");

    expect(texto).toHaveLength(3);
  });

  // test("Testar se o componente de box estã renderizando corretamente 2", () => {
  //   // // const { debug } = render(<Box />);
  //   // // console.log(debug());

  //   const TEXTO = "MEU TESTE";

  //   render(<Box text={TEXTO} />);

  //   const texto = screen.getByRole("heading", { level: 1, name: TEXTO });

  //   expect(texto).toBeInTheDocument();
  // });
});
