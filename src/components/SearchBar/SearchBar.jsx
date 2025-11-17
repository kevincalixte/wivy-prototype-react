import { TextAlignCenter } from 'lucide-react'
import React from 'react'
import { Search } from 'lucide-react'

// FONCTION QUI GERE LA BARRE DE RECHERCHE
function SearchBar() {
  return (
<>
  <input type="search" className=' text-white' placeholder='Rechercher ...' />
</>
  )
}

export default SearchBar