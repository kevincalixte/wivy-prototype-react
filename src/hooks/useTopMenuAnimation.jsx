import { useState, useEffect } from 'react'

// HOOK PERSONNALISÉ POUR L'ANIMATION DU MENU
// Gère l'apparition progressive : logo d'abord, puis les boutons
function useTopMenuAnimation() {
    // État pour savoir si les boutons doivent être visibles
    const [showButtons, setShowButtons] = useState(false)

    useEffect(() => {
        // Attend 600ms avant d'afficher les boutons
        // Ça laisse le temps au logo de glisser de droite à gauche
        const timer = setTimeout(() => {
            setShowButtons(true)
        }, 600)
        
        // Nettoyage : annule le timer si le composant est supprimé
        return () => clearTimeout(timer)
    }, []) // [] = s'exécute une seule fois au chargement

    return { showButtons }
}

export default useTopMenuAnimation
