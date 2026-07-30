import React from "react";
import { BooksHero } from "../components/books/BooksHero";
import { BooksGrid } from "../components/books/BooksGrid";

export default function Books() {
  return (
    <div data-testid="page-books">
      <BooksHero />
      <BooksGrid />
    </div>
  );
}