import React, { useState } from "react";
import "../css/SpeakerCard.css";

export default function SpeakerCard({ name, title, imageUrl, bio }) {
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);

  const toggleDetails = () => {
    setIsDetailsVisible(!isDetailsVisible);
  };

  return (
    <div className="speaker-card">
      <img
        src={imageUrl}
        alt={`Foto do ${name}`}
        className="speaker-card__image"
      />
      <h3 className="speaker-card__name">{name}</h3>
      <p className="speaker-card__title">{title}</p>
      <div className="speaker-card__spacer" />
      <button onClick={toggleDetails} className="speaker-card__button">
        {isDetailsVisible ? "Esconder Detalhes" : "Ver Detalhes"}
      </button>
      {isDetailsVisible && <p className="bio speaker-card__bio">{bio}</p>}
    </div>
  );
}
