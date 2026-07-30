import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ShoppingCart, User } from "lucide-react";
import { getBook } from "../api/books";

export default function BookDetail() {
  const { id } = useParams();

  const [book, setBook] = useState(null);

  useEffect(() => {
    const loadBook = async () => {
      try {
        const data = await getBook(id);
        setBook(data);
      } catch (error) {
        console.error("Unable to load book.", error);
      }
    };

    loadBook();
  }, [id]);

  if (!book) {
    return (
      <div className="dmi-section text-center">
        Chargement...
      </div>
    );
  }

  const imageUrl = book.image
    ? `${process.env.REACT_APP_STORAGE_URL}/${book.image}`
    : "/images/placeholder-book.jpg";

  return (
    <div className="bg-white min-h-screen" data-testid="page-book-detail">

      {/* Hero */}
      <section className="bg-dmi-charcoal text-white py-24">
        <div className="dmi-container">

          <Link
            to="/books"
            className="inline-flex items-center gap-2 text-white/70 hover:text-dmi-gold transition-colors"
          >
            <ArrowLeft size={18} />
            Retour aux livres
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-center mt-10">

            {/* Couverture */}
            <div>
              <img
                src={imageUrl}
                alt={book.titre}
                className="rounded-md shadow-2xl w-full max-w-md mx-auto"
              />
            </div>

            {/* Informations */}
            <div>

              <h1 className="font-serif text-5xl">
                {book.titre}
              </h1>

              {book.auteur && (
                <div className="flex items-center gap-3 mt-6 text-white/80">
                  <User size={18} />

                  {book.auteur}
                </div>
              )}

              {book.description && (
                <p className="mt-8 leading-8 text-white/80">
                  {book.description}
                </p>
              )}

              {book.prix && (
                <div className="mt-10 flex items-center gap-3 text-2xl font-semibold">

                  <ShoppingCart size={22} />

                  {book.prix} {book.devise}

                </div>
              )}

              {book.lien_achat && (
                <a
                  href={book.lien_achat}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex mt-10 px-8 py-4 bg-dmi-gold text-dmi-charcoal rounded-md hover:opacity-90 transition"
                >
                  Acheter le livre
                </a>
              )}

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}