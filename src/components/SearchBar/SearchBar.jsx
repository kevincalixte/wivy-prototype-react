import { TextAlignCenter } from 'lucide-react'
import React from 'react'
import { Search } from 'lucide-react'

// FONCTION QUI GERE LA BARRE DE RECHERCHE
function SearchBar({ onBlur }) {
  return (
    <div className='animate-[slideFromLeft_0.4s_ease-out] ml-2 text-black rounded-full px-3 py-2 w-70 bg-white/20'>
        <input type="search" className=' duration-300 outline-none text-white w-full' placeholder='Rechercher ...' autoFocus maxLength={25} onBlur={onBlur} />
    </div>
  )
}

export default SearchBar