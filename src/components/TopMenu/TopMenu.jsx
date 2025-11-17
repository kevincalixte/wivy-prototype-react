import React from 'react'
import { Search, Heart, Users, LogIn } from 'lucide-react';
import SearchBar from '../SearchBar/SearchBar';
import useTopMenuAnimation from '../../hooks/useTopMenuAnimation';
import { useState } from 'react';

// FONCTION QUI GERE LE MENU DU HAUT
function TopMenu({ setCurrentAlbum, meetImages, friendsImages, loveImages }) {

    const [showButtons, setShowButtons] = useTopMenuAnimation()
    // const [animationLogo, setAnimationLogo] = useState(false);
    const [showSearchBar, setShowSearchBar] = useState(false);

    const handlerClickMeet = (event) => {
        // setAnimationLogo(true);
        setCurrentAlbum(meetImages);
        setShowButtons(false);
        setShowSearchBar(true);
    }
    // logoWivy ${animationLogo ? 'animate-[slideFromLeft_0.2s_ease-out]' : '
    return (
        <>
            <nav className='TopMenu text-white w-full h-14 flex items-center justify-between px-1'>
                {showSearchBar && <SearchBar onBlur={() => { setShowSearchBar(false); setShowButtons(true); }} />}
                <a
                    href=""
                    className={'animate-[slideFromRight_0.6s_ease-out]'}
                >
                    <img className='w-12' src='assets/logos/wivy-app-logo-transparent.png' alt="Wivy Logo" />
                </a>

                <ul className={`${showButtons ? 'flex' : 'hidden'} gap-2 items-center`}>
                    <li className='flex gap-1 items-center hover:font-bold hover:scale-110 hover:bg-white/10 px-3 py-2 rounded-full transition-all transform-gpu'>
                        <a href="#" className='flex gap-1' onClick={handlerClickMeet}><Search /><span>Meet</span></a>
                    </li>
                    <li className='flex gap-1 items-center hover:font-bold hover:text-white hover:scale-110 hover:bg-blue-500/20 px-3 py-2 rounded-full transition-all transform-gpu'>
                        <a href="#" className='flex gap-1' onClick={() => setCurrentAlbum(friendsImages)}><Users /><span>Friends</span></a>
                    </li>
                    <li className='flex gap-1 items-center hover:font-bold hover:text-white hover:scale-110 hover:bg-fuchsia-500/20 px-3 py-2 rounded-full transition-all transform-gpu'>
                        <a href="#" className='flex gap-1 ' onClick={() => setCurrentAlbum(loveImages)}><Heart /><span>Love</span></a>
                    </li>
                </ul>
            </nav>

        </>

    )
}

export default TopMenu
