# 📝 TODO LIST

- [] Vide 
- [🚀] Presentation 
- [🚀] Modale de connexion/inscription
- [🛠️] Bouton Love etc reste de la meme couleur 
- [💡] Bouton Download App
- [💡] Search bar : tags, filtre mots interdits
- [💡] Events : chapeau de noel sur le logo voir 
---

> Ajoute une nouvelle ligne en commençant par `- [ ]` pour une case à cocher, l’emoji sera ajouté automatiquement selon la tâche !

- ✨ pour une nouveauté
- 🚀 pour une tâche prioritaire
- 🛠️ pour du technique
- 💡 pour une idée
- ✅ pour terminé

---

IDEAS

function getCurrentEvent() {
  const now = new Date();
  const month = now.getMonth() + 1;
  const day = now.getDate();

  if (month === 12 && day >= 15 && day <= 31) return 'christmas';
  if (month === 10 && day >= 25 && day <= 31) return 'halloween';
  // Ajoute d'autres fêtes ici
  return null;

const event = getCurrentEvent();

return (
  <nav className="...">
    <div className="relative w-12 h-12">
      <img className="w-12" src="assets/logos/wivy-app-logo-transparent.png" alt="Wivy Logo" />
      {event === 'christmas' && (
        <img
          src="assets/logos/santa-hat.png"
          alt="Santa Hat"
          className="absolute top-0 left-0 w-6 h-6"
          style={{ transform: 'rotate(-20deg)' }}
        />
      )}
      {event === 'halloween' && (
        <img
          src="assets/logos/halloween-hat.png"
          alt="Halloween Hat"
          className="absolute top-0 left-0 w-6 h-6"
        />
      )}
    </div>
    {/* ...le reste du menu... */}
  </nav>
);