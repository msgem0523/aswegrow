import { teaList } from './teaData';
import React, { useState } from 'react';

import { teas } from './data/teaData';

const Teas = () => {
  const [selectedTea, setSelectedTea] = useState(null);

  return (
    <div className="tea-page">
      <h1>🌿 As We Grow Herbal Teas</h1>
      <p className="intro-text">
        Sip With Purpose. Heal With Plants. Thrive With Us. Explore our healing tea blends — from gut health to hormone balance, there's something for every soul.
      </p>

      <div className="tea-grid">
        {teas.map((tea) => (
          <div
            className="tea-preview-card"
            key={tea.id}
            onClick={() => setSelectedTea(tea)}
          >
            <h3>{tea.name}</h3>
            <p>{tea.shortDesc}</p>
            <ul>
              {tea.benefits.map((b, i) => (
                <li key={i}>✔️ {b}</li>
              ))}
            </ul>
            <button>View Details</button>
          </div>
        ))}
      </div>

      {selectedTea && (
        <div className="tea-modal">
          <button className="close-btn" onClick={() => setSelectedTea(null)}>❌ Close</button>
          <div className="tea-card">{selectedTea.fullContent}</div>
        </div>
      )}
    </div>
  );
};

export default Teas;
