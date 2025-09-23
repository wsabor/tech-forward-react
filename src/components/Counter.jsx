import React, { useState, useEffect } from "react";

import "../css/Counter.css";
import "../App.css";

export default function Counter() {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");
  const [eventStarted, setEventStarted] = useState(false);

  useEffect(() => {
    const eventDate = new Date("2025-10-25T09:00:00"); // Data e hora do evento

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = eventDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setEventStarted(true);
        return;
      }

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);

      setDays(String(d).padStart(2, "0"));
      setHours(String(h).padStart(2, "0"));
      setMinutes(String(m).padStart(2, "0"));
      setSeconds(String(s).padStart(2, "0"));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="countdown" className="section bg-gray-200">
      <div className="container">
        {eventStarted ? (
          <h2 className="section-title mt-16">O evento começou!</h2>
        ) : (
          <h2 className="section-title mt-16">
            Contagem Regressiva para o Evento
          </h2>
        )}
        <div className="countdown-container">
          <div className="countdown-item">
            <span>{days}</span>
            <p>Dias</p>
          </div>
          <div className="countdown-item">
            <span>{hours}</span>
            <p>Horas</p>
          </div>
          <div className="countdown-item">
            <span>{minutes}</span>
            <p>Minutos</p>
          </div>
          <div className="countdown-item">
            <span>{seconds}</span>
            <p>Segundos</p>
          </div>
        </div>
      </div>
    </section>
  );
}
