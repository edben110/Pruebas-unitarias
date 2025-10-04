import { render, screen } from "@testing-library/react";
import DigitalClock from "./DigitalClock";

describe("DigitalClock", () => {
  test("muestra la hora y fecha actual correctamente", () => {
    const now = new Date();
    render(<DigitalClock />);
    // Verifica el formato HH:MM:SS
    const timeRegex = /\d{2}:\d{2}:\d{2}/;
    expect(screen.getByText(timeRegex)).toBeInTheDocument();
    // Verifica la fecha actual
    const today = now.toLocaleDateString();
    expect(screen.getByDisplayValue(today)).toBeInTheDocument();
  });
});
