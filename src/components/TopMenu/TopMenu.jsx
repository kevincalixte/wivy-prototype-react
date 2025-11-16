import React from 'react'
import { Search, Heart, Users, LogIn } from 'lucide-react';
import SearchBar from '../SearchBar/SearchBar';

// FONCTION QUI GERE LE MENU DU HAUT
function TopMenu() {

    return (

        <>
            <nav className='TopMenu text-white w-full h-14 flex items-center justify-between px-5'>
                <a href=""><img className='w-12' src='/assets/logos/wivy-app-logo-transparent.png' alt="Wivy Logo" /></a>
                <ul className='flex gap-4 items-center'>
                    <li className='flex gap-1 items-center hover:font-bold hover:scale-110 hover:bg-white/10 px-3 py-2 rounded-full transition-all transform-gpu'><a href="" className='flex gap-1' onClick={handlerClickMeet}><Search /><span>Meet</span></a></li>
                    <li className='flex gap-1 items-center hover:font-bold hover:text-white hover:scale-110 hover:bg-blue-500/20 px-3 py-2 rounded-full transition-all transform-gpu'><a href="" className='flex gap-1'><Users /><span>Friends</span></a></li>
                    <li className='flex gap-1 items-center hover:font-bold hover:text-white hover:scale-110 hover:bg-fuchsia-500/20 px-3 py-2 rounded-full transition-all transform-gpu'><a href="" className='flex gap-1 '><Heart /><span>Love</span></a></li>
                </ul>
                <a href="" className='hover:scale-110 transform-gpu'><LogIn /></a>
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
