import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Calendar, User, Tag, ArrowLeft, Play, FileText, Headphones } from "lucide-react";

import { getTeaching } from "../api/teachings";
import { Reveal } from "../components/common/Reveal";

export default function TeachingDetail() {
  const { id } = useParams();

  const [teaching, setTeaching] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeaching = async () => {
      try {
        const data = await getTeaching(id);
        setTeaching(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeaching();
  }, [id]);

  if (loading) {
    return (
      <section className="dmi-section">
        <div className="dmi-container text-center py-32">
          Chargement...
        </div>
      </section>
    );
  }

  if (!teaching) {
    return (
      <section className="dmi-section">
        <div className="dmi-container text-center py-32">
          Enseignement introuvable.
        </div>
      </section>
    );
  }

  const imageUrl = teaching.image
    ? `${process.env.REACT_APP_STORAGE_URL}/${teaching.image}`
    : "/images/placeholder-video.jpg";

  return (
    <section className="bg-white">

      {/* HERO IMAGE */}

      <div className="relative h-[60vh] overflow-hidden">
        <img
          src={imageUrl}
          alt={teaching.titre}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 flex items-end">
          <div className="dmi-container pb-20">

            <Link
              to="/teachings"
              className="inline-flex items-center gap-2 text-white/90 hover:text-dmi-gold mb-6 transition-colors"
            >
              <ArrowLeft size={18} />
              Retour aux enseignements
            </Link>

            <Reveal>
              <h1 className="font-serif text-4xl md:text-6xl text-white max-w-5xl leading-tight">
                {teaching.titre}
              </h1>
            </Reveal>

          </div>
        </div>
      </div>

      {/* CONTENT */}

      <section className="dmi-section">
        <div className="dmi-container max-w-5xl">

          <div className="grid md:grid-cols-3 gap-10">

            {/* LEFT */}

            <div className="md:col-span-2">

              <div className="flex flex-wrap gap-6 text-sm text-dmi-charcoal/70 mb-10">

                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  {new Date(teaching.date).toLocaleDateString("fr-FR")}
                </div>

                <div className="flex items-center gap-2">
                  <User size={18} />
                  {teaching.orateur}
                </div>

                <div className="flex items-center gap-2">
                  <Tag size={18} />
                  {teaching.categorie}
                </div>

              </div>

              <div className="prose prose-lg max-w-none">
                <p className="leading-8 whitespace-pre-line text-dmi-charcoal/80">
                  {teaching.description}
                </p>
              </div>

            </div>

            {/* RIGHT */}

            <div>

              <div className="sticky top-28 rounded-xl border border-gray-200 p-6 shadow-sm">

                <h3 className="font-serif text-2xl mb-6">
                  Ressources
                </h3>

                <div className="space-y-4">

                  {teaching.video_url && (
                    <a
                      href={teaching.video_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 w-full bg-dmi-gold text-dmi-charcoal py-3 rounded-md font-medium hover:opacity-90 transition"
                    >
                      <Play size={18} />
                      Regarder la vidéo
                    </a>
                  )}

                  {teaching.audio_url && (
                    <a
                      href={teaching.audio_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 w-full border border-dmi-charcoal py-3 rounded-md hover:bg-dmi-charcoal hover:text-white transition"
                    >
                      <Headphones size={18} />
                      Écouter l'audio
                    </a>
                  )}

                  {teaching.document_url && (
                    <a
                      href={teaching.document_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 w-full border border-dmi-charcoal py-3 rounded-md hover:bg-dmi-charcoal hover:text-white transition"
                    >
                      <FileText size={18} />
                      Télécharger le document
                    </a>
                  )}

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

    </section>
  );
}