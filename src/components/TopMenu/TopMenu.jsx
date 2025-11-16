import React from 'react'
import { Search, Heart, Users, LogIn } from 'lucide-react';
import SearchBar from '../SearchBar/SearchBar';
import useTopMenuAnimation from '../../hooks/useTopMenuAnimation';

// FONCTION QUI GERE LE MENU DU HAUT
function TopMenu() {
    // Utilise le hook d'animation personnalisé
    const { showButtons } = useTopMenuAnimation()

    return (
        <>
            <nav className='TopMenu text-white w-full h-14 flex items-center justify-between px-5'>
                {/* Logo avec animation de slide depuis la droite */}
                <a 
                    href="" 
                    className='animate-[slideFromRight_0.6s_ease-out]'
                >
                    <img className='w-12' src='/assets/logos/wivy-app-logo-transparent.png' alt="Wivy Logo" />
                </a>
                
                {/* Boutons de navigation qui apparaissent en fondu après le logo */}
                <ul className={`flex gap-4 items-center transition-opacity duration-500 ${showButtons ? 'opacity-100' : 'opacity-0'}`}>
                    <li className='flex gap-1 items-center hover:font-bold hover:scale-110 hover:bg-white/10 px-3 py-2 rounded-full transition-all transform-gpu'><a href="" className='flex gap-1' onClick={handlerClickMeet}><Search /><span>Meet</span></a></li>
                    <li className='flex gap-1 items-center hover:font-bold hover:text-white hover:scale-110 hover:bg-blue-500/20 px-3 py-2 rounded-full transition-all transform-gpu'><a href="" className='flex gap-1'><Users /><span>Friends</span></a></li>
                    <li className='flex gap-1 items-center hover:font-bold hover:text-white hover:scale-110 hover:bg-fuchsia-500/20 px-3 py-2 rounded-full transition-all transform-gpu'><a href="" className='flex gap-1 '><Heart /><span>Love</span></a></li>
                </ul>
                
                {/* Bouton login qui apparait aussi en fondu */}
                <a 
                    href="" 
                    className={`hover:scale-110 transform-gpu transition-opacity duration-500 ${showButtons ? 'opacity-100' : 'opacity-0'}`}
                >
                    <LogIn />
                </a>
            </nav>
        </>
    )
}

// HANDLER CLICK 

const handlerClickMeet = () => {
    {

        console.log('meet')
    }
    <SearchBar></SearchBar>
}

export default TopMenu
