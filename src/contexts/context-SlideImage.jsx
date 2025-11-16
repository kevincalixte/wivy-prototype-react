import { createContext } from "react";

// TABLEAUX D'IMAGES POUR LE SLIDE PAR CATEGORIE

// MEET
export const meetImages = [
    '/assets/img/home/album-meet/meet1.jpg',
    '/assets/img/home/album-meet/meet2.jpg',
    '/assets/img/home/album-meet/meet3.jpg',
    '/assets/img/home/album-meet/meet4.jpg',
];

// FRIENDS
export const friendsImages = [
    '/assets/img/home/album-friends/friends1.jpg',
    '/assets/img/home/album-friends/friends2.jpg',
    '/assets/img/home/album-friends/friends3.jpg',
    '/assets/img/home/album-friends/friends4.jpg',
];

// LOVE
export const loveImages = [
    '/assets/img/home/album-love/love1.jpg',
    '/assets/img/home/album-love/love2.jpg',
    '/assets/img/home/album-love/love3.jpg',
    '/assets/img/home/album-love/love4.jpg',
];

const ContextSlideImage = createContext();

export default ContextSlideImage;