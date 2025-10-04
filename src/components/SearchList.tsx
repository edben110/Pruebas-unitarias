// src/components/SearchList.tsx
import React, { useState } from "react";

const names = ["Sebastian", "Manuela", "Carlos", "Ana", "Maria"];

const SearchList: React.FC = () => {
  const [query, setQuery] = useState("");

  const filtered = names.filter((name) =>
    name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h2>Buscador en Lista</h2>
      <input
        type="text"
        placeholder="Buscar nombre..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label="search-input"
      />
      <ul>
        {filtered.length > 0 ? (
          filtered.map((name) => <li key={name}>{name}</li>)
        ) : (
          <p>No encontrado</p>
        )}
      </ul>
    </div>
  );
};

export default SearchList;
