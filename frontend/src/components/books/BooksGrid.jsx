import React, { useEffect, useState } from "react";
import { getBooks } from "../../api/books";
import { BookCard } from "../cards/BookCard";

export const BooksGrid = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const loadBooks = async () => {
      try {
        const data = await getBooks();

        // Récupération des livres publiés depuis l'API Laravel.
        setBooks(data);
      } catch (error) {
        console.error("Unable to load books.", error);
      }
    };

    loadBooks();
  }, []);

  return (
    <section className="dmi-section bg-white" data-testid="books-grid">
      <div className="dmi-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {books.map((book) => (
            <BookCard
              key={book.id}
              book={book}
            />
          ))}
        </div>
      </div>
    </section>
  );
};