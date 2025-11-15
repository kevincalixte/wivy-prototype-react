import { TextAlignCenter } from 'lucide-react'
import React from 'react'
import { Search } from 'lucide-react'

// FONCTION QUI GERE LA BARRE DE RECHERCHE
function SearchBar() {
    return (
        <div style={styles.search}>
            <div style={styles.searchIcon}>
                <Search className='w-3/4' />
            </div>
            <input className='outline-0 w-90' type="text" />
        </div>
    )
}

const styles = {
    search: {
        width: '20rem',
        border: '1px solid lightgray',
        borderRadius: '0.5rem',
        padding: '0.1rem',
        textAlign: 'center',
        // display: 'flex'
        display: 'none'
    },
    searchIcon: {
        marginRight: '.5rem',
        borderRight: '1px solid lightgray',
        padding: "0.1rem"
    }
}
export default SearchBar