// src/components/ColorPicker.tsx
import React, { useState, useEffect } from "react";

const ColorPicker: React.FC = () => {
  const [color, setColor] = useState<string>("#ffffff");

  useEffect(() => {
    // Cargar color guardado al montar el componente
    const savedColor = localStorage.getItem("selectedColor");
    if (savedColor) {
      setColor(savedColor);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("selectedColor", color);
  }, [color]);

  const resetColor = () => {
    setColor("#ffffff");
  };

  return (
    <div>
      <h2>Selector de Colores</h2>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        aria-label="color-picker"
      />
      <button 
        onClick={resetColor}
        style={{ marginLeft: "10px" }}
        aria-label="reset-color"
      >
        Resetear a Blanco
      </button>
      <div
        data-testid="color-box"
        style={{
          marginTop: "1rem",
          color: "white",
          width: "150px",
          height: "150px",
          backgroundColor: color,
          border: "1px solid #000",
        }}
      />
    </div>
  );
};

export default ColorPicker;