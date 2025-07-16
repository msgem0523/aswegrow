import React, { useState } from 'react';

const teaList = [
  {
    id: 'ms-georgia-peach',
    name: 'Ms. Georgia Peach',
    shortDesc: 'Southern Sweetness Meets Soulful Wellness',
    benefits: [
      'Supports digestion',
      'Rich in antioxidants',
      'Glowing skin',
      'Heart & immune support'
    ],
    fullContent: (
      <>
        <h2>🍑 “Ms. Georgia Peach” – Southern Sweetness Meets Soulful Wellness</h2>
        <p><strong>Light. Luscious. Naturally Healing.</strong></p>
        <p>
          “Ms. Georgia Peach” is a refreshing herbal tea made with bamboo leaf, mint, juicy peaches, 
          and gently sweetened with monk fruit. She’s more than sweet — she’s packed with vitamins, fiber, 
          and antioxidants that nourish from the inside out.
        </p>
        <h3>🌿 Why You’ll Love It</h3>
        <ul>
          <li><strong>🍑 Peaches –</strong> Support digestion, boost immunity, promote glowing skin, reduce blood pressure, improve eye health, and fight inflammation.</li>
          <li><strong>🌱 Mint –</strong> Supports digestion, mental clarity, is naturally antibacterial & stress-relieving.</li>
          <li><strong>🎋 Bamboo Leaf –</strong> Detoxifying and rich in silica; supports skin, bone, and hair health.</li>
          <li><strong>🍃 Monk Fruit –</strong> Naturally sweet, zero-calorie, blood sugar-friendly.</li>
        </ul>
        <h4>🏷️ Ingredients</h4>
        <p>Bamboo Leaf • Mint • Peaches • Monk Fruit</p>
        <h4>🌿 Benefits</h4>
        <ul>
          <li>✔️ Supports digestion & gut health</li>
          <li>✔️ Rich in antioxidants & vitamin C</li>
          <li>✔️ Promotes healthy skin, heart & immune function</li>
          <li>✔️ Caffeine-Free • Sugar-Free • Naturally Healing</li>
        </ul>
        <h4>🍵 Steep Instructions</h4>
        <p>1–2 tsp per 8 oz of hot water. Steep 5–7 minutes. Enjoy hot or chilled.</p>
        <p><em>From the heart of the South — brewed with love.</em></p>
      </>
    )
  },
  {
    id: 'mama-renea',
    name: 'Mama Renea',
    shortDesc: 'Immunity Blend – Strength in Every Sip',
    benefits: [
      'Boosts immunity',
      'Reduces inflammation',
      'Gut healing'
    ],
    fullContent: (
      <>
        <h2>🍋✨ “Mama Renea” Immunity Blend Tea – Strength in Every Sip</h2>
        <p><strong>Brew. Sip. Heal. 💛</strong></p>
        <p>
          “Mama Renea” is more than tea — it’s herbal armor, soul comfort, and daily nourishment in one.
          This healing blend of bamboo leaf and mint is infused with immune-boosting lemon, 
          anti-inflammatory turmeric and ginger, and warming spices like cinnamon and pepper. 
          Monk fruit adds a sweet, sugar-free finish.
        </p>
        <h3>🌿 Why You’ll Love It</h3>
        <ul>
          <li>✔️ Strengthens the immune system</li>
          <li>✔️ Aids digestion & gut health</li>
          <li>✔️ Naturally reduces inflammation</li>
          <li>✔️ Promotes clarity, comfort, and calm</li>
          <li>✔️ Caffeine-free, additive-free, sugar-free</li>
        </ul>
        <h4>🏷️ Ingredients</h4>
        <p>Bamboo Leaf • Mint • Lemon • Turmeric • Ginger • Cinnamon • Pepper • Eucalyptus • Gordolobo • Monk Fruit</p>
        <h4>🌿 Benefits</h4>
        <ul>
          <li>✔️ Immunity & Digestion</li>
          <li>✔️ Inflammation & Joint Health</li>
          <li>✔️ Skin, Brain & Heart Wellness</li>
          <li>✔️ Naturally sweetened • No caffeine • No additives</li>
        </ul>
        <h4>🍵 Steep Instructions</h4>
        <p>1–2 tsp per 8 oz of hot water. Steep 5–7 minutes. Enjoy warm for full immune support.</p>
        <p><em>Brew. Sip. Heal. 💛</em></p>
      </>
    )
  },
  {
    id: 'mama-natalie',
    name: 'Mama Natalie',
    shortDesc: 'Earthy. Bold. Restorative.',
    benefits: [
      'Heart health',
      'Circulation',
      'Nourishing roots'
    ],
    fullContent: (
      <>
        <h2>❤️🌿 “Mama Natalie” Brew – Earthy. Bold. Restorative.</h2>
        <p><strong>Crafted for the nurturers. Inspired by tradition. Brewed with purpose.</strong></p>
        <p>
          “Mama Natalie” is a rich, grounding herbal tea designed to nourish from the inside out — 
          supporting blood pressure, circulation, and overall vitality. With powerful roots, 
          heart-loving herbs, and naturally sweet monk fruit, this blend is your daily ritual for full-body balance.
        </p>
        <h3>🌟 Why You’ll Love It</h3>
        <ul>
          <li><strong>🧄 Garlic –</strong> Supports circulation, heart health & relaxed blood vessels</li>
          <li><strong>🫚 Ginger –</strong> Anti-inflammatory & may help lower blood pressure</li>
          <li><strong>🌺 Hibiscus –</strong> Antihypertensive, antioxidant-rich & tangy</li>
          <li><strong>🌿 Parsley + Basil –</strong> Regulate blood flow & fight free radicals</li>
          <li><strong>🍠 Beets –</strong> High in nitrates for natural blood vessel dilation</li>
          <li><strong>🌾 Lemongrass –</strong> Calms the nervous system & supports circulation</li>
          <li><strong>🍂 Cinnamon –</strong> Helps manage blood sugar & blood pressure</li>
          <li><strong>🍃 Mint –</strong> Soothes digestion, promotes clarity, cools the body</li>
          <li><strong>🎋 Bamboo Leaf –</strong> Detoxifying; supports skin, hair, and bones</li>
          <li><strong>🍈 Monk Fruit –</strong> Naturally sweet with zero sugar</li>
        </ul>
        <h4>🏷️ Ingredients</h4>
        <p>
          Garlic • Ginger • Parsley • Hibiscus • Lemongrass • Beets • Basil • Mint • 
          Bamboo Leaf • Cinnamon • Monk Fruit
        </p>
        <h4>🌿 Benefits</h4>
        <ul>
          <li>✔️ Supports blood pressure & circulation</li>
          <li>✔️ Promotes heart, brain, and full-body balance</li>
          <li>✔️ Naturally sweetened • No caffeine • No additives</li>
        </ul>
        <h4>🍵 Steep Instructions</h4>
        <p>Steep 1–2 tsp in 8 oz of hot water for 7–10 minutes. Enjoy warm or iced.</p>
        <p><em>🫖 Made to honor the strength in every generation.</em></p>
        <p style={{ color: 'red' }}><strong>⚠️ Always consult your healthcare provider before use, especially if on medication.</strong></p>
      </>
    )
  }
];

const Teas = () => {
  const [selectedTea, setSelectedTea] = useState(null);

  return (
    <div className="tea-page">
      <h1>🌿 As We Grow Teas</h1>

      <div className="tea-grid">
        {teaList.map((tea) => (
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
          <button onClick={() => setSelectedTea(null)}>❌ Close</button>
          <div className="tea-card">{selectedTea.fullContent}</div>
        </div>
      )}
    </div>
  );
};

export default Teas;
