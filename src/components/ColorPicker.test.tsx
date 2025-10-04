// src/components/ColorPicker.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ColorPicker from "./ColorPicker";

describe("ColorPicker", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("el color inicial es blanco cuando no hay color guardado", () => {
    render(<ColorPicker />);
    const box = screen.getByTestId("color-box");
    expect(box).toHaveStyle("background-color: rgb(255, 255, 255)");
  });

  test("al seleccionar un nuevo color, el div se actualiza", () => {
    render(<ColorPicker />);
    const input = screen.getByLabelText("color-picker");
    const box = screen.getByTestId("color-box");

    fireEvent.change(input, { target: { value: "#ff0000" } });
    expect(box).toHaveStyle("background-color: rgb(255, 0, 0)");
  });

  test("guarda el color en localStorage", () => {
    render(<ColorPicker />);
    const input = screen.getByLabelText("color-picker");

    fireEvent.change(input, { target: { value: "#00ff00" } });
    expect(localStorage.getItem("selectedColor")).toBe("#00ff00");
  });

  test("resetea el color a blanco al hacer clic en el botón", () => {
    render(<ColorPicker />);
    const input = screen.getByLabelText("color-picker");
    const resetButton = screen.getByLabelText("reset-color");
    const box = screen.getByTestId("color-box");

    // Cambiar a un color diferente
    fireEvent.change(input, { target: { value: "#ff0000" } });
    expect(box).toHaveStyle("background-color: rgb(255, 0, 0)");

    // Resetear a blanco
    fireEvent.click(resetButton);
    expect(box).toHaveStyle("background-color: rgb(255, 255, 255)");
    expect(localStorage.getItem("selectedColor")).toBe("#ffffff");
  });
});
