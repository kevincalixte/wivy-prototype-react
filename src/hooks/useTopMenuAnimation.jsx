import { useState, useEffect } from 'react'

// HOOK PERSONNALISÉ POUR L'ANIMATION DU MENU
// Gère l'apparition progressive : logo d'abord, puis les boutons
function useTopMenuAnimation() {
    const [showButtons, setShowButtons] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowButtons(true)
        }, 600)
        return () => clearTimeout(timer)
    }, [])

    return [showButtons, setShowButtons]
}

export default useTopMenuAnimation
