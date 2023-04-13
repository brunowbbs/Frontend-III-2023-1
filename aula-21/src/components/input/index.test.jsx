import { render, screen, fireEvent } from "@testing-library/react";
import Input from ".";

describe("<Input/>", () => {
  test("Verificar se esta sendo renderizado", () => {
    render(<Input />);

    const input = screen.getByPlaceholderText("Digite seu nome");

    fireEvent.change(input, { target: { value: "Wesley" } });

    expect(input.value).toContain("Wes");
  });
});
