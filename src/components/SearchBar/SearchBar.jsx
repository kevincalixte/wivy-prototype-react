import { TextAlignCenter } from 'lucide-react'
import React from 'react'
import { Search } from 'lucide-react'

// FONCTION QUI GERE LA BARRE DE RECHERCHE
function SearchBar() {
  return (
<>
  <input type="search" className=' text-white' placeholder='Rechercher ...' />
</>
    // <div className="w-80 border border-gray-300 rounded-4xl text-center">
    //   <div className=" border-gray-300 p-0.5">
    //     <Search className='w-3/4' />
    //   </div>
    //   <input className='outline-0 w-90' type="text" />
    // </div>
    /* 
      w-80 = width: 20rem (320px largeur)
      border = border: 1px solid (bordure 1px)
      border-gray-300 = border-color: lightgray (couleur gris clair)
      rounded-lg = border-radius: 0.5rem (8px coins arrondis)
      p-0.5 = padding: 0.125rem (2px espacement interne)
      text-center = text-align: center (texte centré)
      hidden = display: none (élément caché)
    */
    /* 
      mr-2 = margin-right: 0.5rem (8px marge droite)
      border-r = border-right: 1px solid (bordure droite)
      border-gray-300 = border-color: lightgray (couleur gris clair)
      p-0.5 = padding: 0.125rem (2px espacement)
    */

    /* w-3/4 = width: 75% (largeur 3/4) */
    /* 
      outline-0 = outline: 0 (pas de contour au focus)
      w-90 = width: 90% (largeur 90%)
    */
  )
}

export default SearchBar