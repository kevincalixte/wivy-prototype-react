import { TextAlignCenter } from 'lucide-react'
import React from 'react'
import { Search } from 'lucide-react'

// FONCTION QUI GERE LA BARRE DE RECHERCHE
function SearchBar() {
    return (
        /* 
          w-80 = width: 20rem (320px largeur)
          border = border: 1px solid (bordure 1px)
          border-gray-300 = border-color: lightgray (couleur gris clair)
          rounded-lg = border-radius: 0.5rem (8px coins arrondis)
          p-0.5 = padding: 0.125rem (2px espacement interne)
          text-center = text-align: center (texte centré)
          hidden = display: none (élément caché)
        */
        <div className="w-80 border border-gray-300 rounded-lg p-0.5 text-center hidden">
            {/* 
              mr-2 = margin-right: 0.5rem (8px marge droite)
              border-r = border-right: 1px solid (bordure droite)
              border-gray-300 = border-color: lightgray (couleur gris clair)
              p-0.5 = padding: 0.125rem (2px espacement)
            */}
            <div className="mr-2 border-r border-gray-300 p-0.5">
                {/* w-3/4 = width: 75% (largeur 3/4) */}
                <Search className='w-3/4' />
            </div>
            {/* 
              outline-0 = outline: 0 (pas de contour au focus)
              w-90 = width: 90% (largeur 90%)
            */}
            <input className='outline-0 w-90' type="text" />
        </div>
    )
}

export default SearchBar