import { render, screen, fireEvent, act } from "@testing-library/react";
import CountdownTimer from "./CountdownTimer";

describe("CountdownTimer", () => {
  test("renderiza los inputs y botones", () => {
    render(<CountdownTimer />);
    expect(screen.getByLabelText(/Horas/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Min/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Seg/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Iniciando' })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Pausando' })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Reanudando' })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Reiniciar' })).toBeInTheDocument();
  });

  test("inicia y cuenta hacia atrás", () => {
    jest.useFakeTimers();
    render(<CountdownTimer />);
    fireEvent.change(screen.getByLabelText(/Horas/i), { target: { value: "0" } });
    fireEvent.change(screen.getByLabelText(/Min/i), { target: { value: "0" } });
    fireEvent.change(screen.getByLabelText(/Seg/i), { target: { value: "3" } });
  fireEvent.click(screen.getByRole('button', { name: 'Iniciar' }));
    expect(screen.getByText("00:00:03")).toBeInTheDocument();
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(screen.getByText("00:00:02")).toBeInTheDocument();
    act(() => {
      jest.advanceTimersByTime(2000);
    });
    expect(screen.getByText("00:00:00")).toBeInTheDocument();
    jest.useRealTimers();
  });

  test("pausa y reanuda el temporizador", () => {
    jest.useFakeTimers();
    render(<CountdownTimer />);
    fireEvent.change(screen.getByLabelText(/Seg/i), { target: { value: "2" } });
  fireEvent.click(screen.getByRole('button', { name: 'Iniciar' }));
    act(() => {
      jest.advanceTimersByTime(1000);
    });
  fireEvent.click(screen.getByRole('button', { name: 'Pausar' }));
    act(() => {
      jest.advanceTimersByTime(2000);
    });
    // Debe seguir en 00:00:01
    expect(screen.getByText("00:00:01")).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: 'Reanudar' }));
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(screen.getByText("00:00:00")).toBeInTheDocument();
    jest.useRealTimers();
  });

  test("reinicia el temporizador", () => {
    jest.useFakeTimers();
    render(<CountdownTimer />);
    fireEvent.change(screen.getByLabelText(/Seg/i), { target: { value: "5" } });
  fireEvent.click(screen.getByRole('button', { name: 'Iniciar' }));
    act(() => {
      jest.advanceTimersByTime(2000);
    });
  fireEvent.click(screen.getByRole('button', { name: 'Reiniciar' }));
    expect(screen.getByText("00:00:05")).toBeInTheDocument();
    jest.useRealTimers();
  });
});
