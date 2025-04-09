// Importation de React et de deux hooks : useState (pour gérer l'état) et useEffect (pour les effets secondaires)
import React, { useState, useEffect } from 'react';

// Fonction principale de React
function App() {
  // Déclaration d'un état 'name' pour stocker le prénom saisi dans le champ input
  const [name, setName] = useState('');

  // État 'savedName' pour afficher le prénom enregistré dans le localStorage (ou vide si rien)
  const [savedName, setSavedName] = useState('');

  // useEffect se lance au premier affichage du composant (équivalent à "componentDidMount")
  useEffect(() => {
    // On récupère la valeur 'username' stockée dans le localStorage
    const stored = localStorage.getItem('username'); // "imed"

    // Si une valeur est trouvée, on la stocke dans l'état 'savedName'
    if (stored) {
      setSavedName(stored);
    }
  }, []); // Le tableau vide signifie que cet effet ne s'exécute qu'une seule fois (au montage)

  // Fonction appelée lorsqu'on clique sur le bouton "Sauvegarder"
  const handleSave = () => {
    // Enregistre la valeur de 'name' dans le localStorage sous la clé 'username'
    localStorage.setItem('username', name);

    // Met à jour l'état 'savedName' pour refléter la nouvelle valeur enregistrée
    setSavedName(name);
  };
  // Fonction appelée lorsqu'on clique sur le bouton "Sauvegarder"
  const handleDelete = () => {
    // Supprime la valeur de 'name' du localStorage sous la clé 'username'
    localStorage.removeItem('username');

    // Met à jour l'état 'savedName' pour refléter la nouvelle valeur enregistrée
    setSavedName(''); // vide
  };

  // JSX retourné pour l'affichage de l'application
  return (
    <div style={{ padding: '20px' }}>
      {/* Affiche "Bonjour" suivi du prénom enregistré, ou "visiteur" si rien n’est encore enregistré */}
      <h1>Bonjour {savedName ? savedName : 'visiteur'} !</h1>

      {/* Champ de saisie pour entrer un prénom */}
      <input
        type="text"
        placeholder="Entre ton prénom"
        value={name} // L'état 'name' est lié à la valeur du champ
        onChange={(e) => setName(e.target.value)} // Met à jour 'name' quand on tape
      />

      {/* Bouton pour sauvegarder le prénom dans le localStorage */}
      <button onClick={handleSave} style={{ marginLeft: '10px' }}>
        Sauvegarder
      </button>
      {/* Bouton pour supprimer le prénom du localStorage */}
      <button onClick={handleDelete} style={{ marginLeft: '10px' }}>
        Supprimer
      </button>
    </div>
  );
}

// Exportation du composant principal pour l'utiliser dans l'application
export default App;
