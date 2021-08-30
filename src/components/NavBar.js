import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const NavBar = () => {
  const { books, addBooks, removeBooks } = useContext(BookContext);

  return (
    <div className="navbar">
      <h1>Ninja Reading List</h1>
      <p>Currently you have {books.length} to get through!!</p>
    </div>
  );
};

export default NavBar;
