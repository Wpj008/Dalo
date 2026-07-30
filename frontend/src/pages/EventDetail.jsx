import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Tag,
  Clock,
} from "lucide-react";

import { Reveal } from "../components/common/Reveal";
import { getEvent } from "../api/events";

export default function EventDetail() {
  const { id } = useParams();

  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const data = await getEvent(id);
        setEvent(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
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

  if (!event) {
    return (
      <section className="dmi-section">
        <div className="dmi-container text-center py-32">
          Evénement introuvable.
        </div>
      </section>
    );
  }

  const imageUrl = event.image
    ? `${process.env.REACT_APP_STORAGE_URL}/${event.image}`
    : "/images/placeholder-event.jpg";

  return (
    <section className="bg-white">

      {/* HERO */}

      <div className="relative h-[60vh] overflow-hidden">

        <img
          src={imageUrl}
          alt={event.titre}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 flex items-end">
          <div className="dmi-container pb-20">

            <Link
              to="/events"
              className="inline-flex items-center gap-2 text-white hover:text-dmi-gold mb-6 transition-colors"
            >
              <ArrowLeft size={18} />
              Retour aux événements
            </Link>

            <Reveal>
              <h1 className="font-serif text-5xl text-white max-w-5xl">
                {event.titre}
              </h1>
            </Reveal>

          </div>
        </div>

      </div>

      {/* CONTENT */}

      <section className="dmi-section">
        <div className="dmi-container">

          <div className="grid lg:grid-cols-3 gap-14">

            {/* LEFT */}

            <div className="lg:col-span-2">

              <div className="flex flex-wrap gap-6 mb-10 text-sm text-dmi-charcoal/70">

                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  {new Date(event.date_debut).toLocaleDateString("fr-FR")}
                </div>

                {event.date_fin && (
                  <div className="flex items-center gap-2">
                    <Clock size={18} />
                    Jusqu'au{" "}
                    {new Date(event.date_fin).toLocaleDateString("fr-FR")}
                  </div>
                )}

                <div className="flex items-center gap-2">
                  <MapPin size={18} />
                  {event.lieu}, {event.ville}, {event.pays}
                </div>

                {event.event_type && (
                  <div className="flex items-center gap-2">
                    <Tag size={18} />
                    {event.event_type.nom}
                  </div>
                )}

              </div>

              <div className="prose prose-lg max-w-none">

                <p className="leading-8 whitespace-pre-line text-dmi-charcoal/80">
                  {event.description ||
                    "La description de cet événement sera disponible prochainement."}
                </p>

              </div>

            </div>

            {/* RIGHT */}

            <div>

              <div className="sticky top-28 border border-gray-200 rounded-xl p-6 shadow-sm">

                <h3 className="font-serif text-2xl mb-6">
                  Informations
                </h3>

                <div className="space-y-5">

                  <div>
                    <div className="text-xs uppercase tracking-widest text-gray-500 mb-1">
                      Statut
                    </div>

                    <span className="inline-flex px-3 py-1 rounded-full bg-dmi-gold text-dmi-charcoal text-sm font-medium">
                      {event.statut}
                    </span>
                  </div>

                  <div>
                    <div className="text-xs uppercase tracking-widest text-gray-500 mb-1">
                      Type
                    </div>

                    <div className="font-medium">
                      {event.event_type?.nom}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs uppercase tracking-widest text-gray-500 mb-1">
                      Ville
                    </div>

                    <div>{event.ville}</div>
                  </div>

                  <div>
                    <div className="text-xs uppercase tracking-widest text-gray-500 mb-1">
                      Pays
                    </div>

                    <div>{event.pays}</div>
                  </div>

                  <div>
                    <div className="text-xs uppercase tracking-widest text-gray-500 mb-1">
                      Lieu
                    </div>

                    <div>{event.lieu}</div>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

    </section>
  );
}