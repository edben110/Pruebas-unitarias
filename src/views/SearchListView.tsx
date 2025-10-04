import React from "react";
import SearchList from "../components/SearchList";

const SearchListView: React.FC = () => {
  return (
    <div style={{ padding: "2rem" , color:"white"}}>
      <h1>Vista del Buscador</h1>
      <SearchList />
    </div>
  );
};

export default SearchListView;
