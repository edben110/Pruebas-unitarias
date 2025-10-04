// src/components/SearchList.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchList from "./SearchList";

describe("SearchList", () => {
  test("muestra todos los elementos inicialmente", () => {
    render(<SearchList />);
    expect(screen.getByText("Sebastian")).toBeInTheDocument();
    expect(screen.getByText("Manuela")).toBeInTheDocument();
    expect(screen.getByText("Carlos")).toBeInTheDocument();
    expect(screen.getByText("Ana")).toBeInTheDocument();
    expect(screen.getByText("Maria")).toBeInTheDocument();
  });

  test("filtra la lista al escribir", () => {
    render(<SearchList />);
    const input = screen.getByLabelText("search-input");
    fireEvent.change(input, { target: { value: "Manu" } });
    expect(screen.getByText("Manuela")).toBeInTheDocument();
    expect(screen.queryByText("Sebastian")).not.toBeInTheDocument();
  });

  test('muestra "No encontrado" si no hay coincidencias', () => {
    render(<SearchList />);
    const input = screen.getByLabelText("search-input");
    fireEvent.change(input, { target: { value: "zzz" } });
    expect(screen.getByText("No encontrado")).toBeInTheDocument();
  });
});
