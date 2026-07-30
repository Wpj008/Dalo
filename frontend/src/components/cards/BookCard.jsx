import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ShoppingCart, User } from "lucide-react";

export const BookCard = ({ book }) => {
  const imageUrl = book.image
    ? `${process.env.REACT_APP_STORAGE_URL}/${book.image}`
    : "/images/placeholder-book.jpg";

  return (
    <Link
      to={`/books/${book.id}`}
      className="group block h-full"
      data-testid={`book-card-${book.id}`}
    >
      <article className="h-full flex flex-col overflow-hidden rounded-md border border-dmi-charcoal/10 bg-white hover:border-dmi-gold/60 transition-all duration-500 hover:-translate-y-1">

        {/* Couverture */}
        <div className="relative aspect-[4/3] overflow-hidden">

          <img
            src={imageUrl}
            alt={book.titre}
            className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-dmi-charcoal/40 via-transparent to-transparent" />

          {/* Disponibilité */}
          <span
            className={`absolute top-4 left-4 px-3 py-1 rounded-sm text-[10px] uppercase tracking-[0.32em] ${
              book.disponible
                ? "bg-green-600 text-white"
                : "bg-red-600 text-white"
            }`}
          >
            {book.disponible ? "Disponible" : "Indisponible"}
          </span>

        </div>

        {/* Contenu */}
        <div className="p-6 flex flex-col flex-1">

          {/* Titre */}
          <h3 className="font-serif text-2xl leading-tight text-dmi-charcoal group-hover:text-dmi-gold transition-colors line-clamp-2">
            {book.titre}
          </h3>

          {/* Auteur */}
          {book.auteur && (
            <div className="flex items-center gap-2 mt-5 text-xs text-dmi-charcoal/60">
              <User size={14} className="text-dmi-gold" />

              {book.auteur}
            </div>
          )}

          {/* Description */}
          {book.description && (
            <p className="mt-4 text-sm leading-7 text-dmi-charcoal/70 line-clamp-3">
              {book.description}
            </p>
          )}

          {/* Prix */}
          {book.prix && (
            <div className="flex items-center gap-2 mt-5 text-sm">
              <ShoppingCart size={16} className="text-dmi-gold" />

              <span className="font-semibold text-dmi-charcoal">
                {book.prix} {book.devise}
              </span>
            </div>
          )}

          {/* Bouton toujours aligné en bas */}
          <div className="mt-auto pt-8 flex items-center justify-between">

            <span className="text-xs uppercase tracking-[0.2em] text-dmi-charcoal/70 group-hover:text-dmi-gold transition-colors">
              Voir le livre
            </span>

            <ArrowUpRight
              size={18}
              className="text-dmi-charcoal/70 group-hover:text-dmi-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
            />

          </div>

        </div>

      </article>
    </Link>
  );
};