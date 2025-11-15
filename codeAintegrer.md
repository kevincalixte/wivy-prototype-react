import React, { useState, useEffect, useRef } from 'react'
import { Search, Heart, Users, LogIn } from 'lucide-react';
import SearchBar from '../SearchBar/SearchBar';

// FONCTION QUI GERE LE MENU DU HAUT
function TopMenu() {
    const [showSearch, setShowSearch] = useState(false);
    const navRef = useRef(null);

    // Gérer le clic en dehors pour fermer la search bar
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setShowSearch(false);
            }
        };

        if (showSearch) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showSearch]);

    const handleMeetClick = (e) => {
        e.preventDefault();
        setShowSearch(true);
    };

    return (

        <>
            <nav ref={navRef} className='TopMenu bg-neutral-800 text-white w-full h-16 flex items-center justify-between px-5'>
                <a href=""><img className='w-12' src='/assets/logos/wivy-app-logo-transparent.png' alt="Wivy Logo" /></a>
                
                {showSearch ? (
                    <SearchBar isVisible={showSearch} />
                ) : (
                    <ul className='flex gap-10 items-center'>
                        <li className='flex gap-1 items-center hover:font-bold hover:scale-110 transform-gpu'>
                            <a href="#" className='flex gap-1' onClick={handleMeetClick}><Search /><span>Meet</span></a>
                        </li>
                        <li className='flex gap-1 items-center hover:font-bold hover:text-blue-500 hover:scale-110 transform-gpu'>
                            <a href="" className='flex gap-1'><Users /><span>Friends</span></a>
                        </li>
                        <li className='flex gap-1 items-center hover:font-bold hover:text-fuchsia-500 hover:scale-110 transform-gpu'>
                            <a href="" className='flex gap-1 '><Heart /><span>Love</span></a>
                        </li>
                    </ul>
                )}
                
                <a href="" className='hover:scale-110 transform-gpu'><LogIn /></a>
            </nav>
        </>

    )
}

export default TopMenu



import React from 'react'
import { Search } from 'lucide-react'

// FONCTION QUI GERE LA BARRE DE RECHERCHE
function SearchBar({ isVisible }) {
    return (
        <div style={{...styles.search, display: isVisible ? 'flex' : 'none'}}>
            <div style={styles.searchIcon}>
                <Search className='w-3/4' />
            </div>
            <input className='outline-0 w-90 bg-transparent text-white' type="text" placeholder="Search..." />
        </div>
    )
}

const styles = {
    search: {
        width: '20rem',
        border: '1px solid lightgray',
        borderRadius: '0.5rem',
        padding: '0.1rem',
        alignItems: 'center',
    },
    searchIcon: {
        marginRight: '.5rem',
        borderRight: '1px solid lightgray',
        padding: "0.1rem"
    }
}
export default SearchBar