import { render, screen, fireEvent } from "@testing-library/react";
import Button from ".";

describe("<Button/>", () => {
  test("Verificar se o componente de botao esta sendo renderizado corretamente", () => {
    render(
      <>
        <Button />
        <Button />
      </>
    );

    const button = screen.getAllByRole("button");

    expect(button).toHaveLength(2);
  });

  test("Verificar se o titulo do botao esta sendo renderizado corretamente", () => {
    render(<Button title="Clique aqui" />);

    const titleButton = screen.getByText("Clique aqui");

    expect(titleButton).toBeInTheDocument();
  });

  test("Veirificar se a funcao é executada quando o botao é clicado", () => {
    const mockFunction = jest.fn();

    render(<Button handeClick={mockFunction} />);

    const button = screen.getByRole("button");

    fireEvent.click(button);

    expect(mockFunction).toHaveBeenCalled();
  });
});
