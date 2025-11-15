import { createContext } from "react";

// TABLEAUX D'IMAGES POUR LE SLIDE PAR CATEGORIE

// MEET
export const meetImages = [
    '/assets/img/meet1.jpg',
    '/assets/img/meet2.jpg',
    '/assets/img/meet3.jpg',
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
    '/assets/img/love1.jpg',
    '/assets/img/love2.jpg',
    '/assets/img/love3.jpg',
];

const ContextSlideImage = createContext(null);

export default ContextSlideImage;