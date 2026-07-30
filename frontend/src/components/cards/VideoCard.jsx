import React from "react";
import { Link } from "react-router-dom";
import { Play, Clock } from "lucide-react";
import { useLang } from "../../i18n/LanguageContext";

export const VideoCard = ({ video, large = false }) => {
  const { lang } = useLang();

  const imageUrl = video.thumbnail
    ? video.thumbnail
    : video.image
    ? `${process.env.REACT_APP_STORAGE_URL}/${video.image}`
    : "/images/placeholder-video.jpg";

  return (
    <Link
      to={`/teachings/${video.id}`}
      className="group block"
      data-testid={`video-card-${video.id}`}
    >
      <div
        className={`relative overflow-hidden rounded-md bg-dmi-charcoal ${
          large ? "aspect-[16/9]" : "aspect-video"
        }`}
      >
        <img
          src={imageUrl}
          alt={video.titre}
          className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-dmi-charcoal/80 via-dmi-charcoal/10 to-transparent" />

        {video.duree && (
          <div className="absolute top-3 right-3 inline-flex items-center gap-1 bg-dmi-charcoal/80 backdrop-blur-sm text-white text-[10px] px-2 py-1 rounded">
            <Clock size={10} />
            {video.duree}
          </div>
        )}

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="w-16 h-16 rounded-full bg-dmi-gold flex items-center justify-center shadow-gold-glow">
            <Play
              size={22}
              className="text-dmi-charcoal ml-1"
              fill="currentColor"
            />
          </div>
        </div>
      </div>

      <div className="mt-4">
        <div className="text-[10px] uppercase tracking-[0.32em] text-dmi-gold/90">
          {video.date &&
            new Date(video.date).toLocaleDateString(
              lang === "fr" ? "fr-FR" : "en-US",
              {
                day: "2-digit",
                month: "short",
                year: "numeric",
              }
            )}
        </div>

        <h3 className="font-serif text-xl sm:text-2xl text-dmi-charcoal mt-2 leading-snug group-hover:text-dmi-gold transition-colors">
          {video.titre}
        </h3>
      </div>
    </Link>
  );
};