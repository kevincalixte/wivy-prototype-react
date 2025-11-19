import React from 'react'

function UserList({state}) {
    const states = [
        "assets/img/user/user-connected.svg",
        "assets/img/user/user-away.svg",
        "assets/img/user/user-busy.svg",
        "assets/img/user/user-offline.svg"
    ];
    
    let stateImg;
    switch (state) {
        case 0:
            stateImg = states[0];
            break;
        case 1:
            stateImg = states[1];
            break;
        case 2:
            stateImg = states[2];
            break;
        case 3:
            stateImg = states[3];
            break;
        default:
            stateImg = states[3];
    }

    return (

        <div className='p-1.5'>
            <article className=" h-35 bg-zinc-900 rounded-2xl flex overflow-hidden">
                <div className="h-full aspect-square relative">
                    <div className="absolute bottom-1.5 right-1.5">
                        <img src={stateImg} alt="En ligne" className="w-5 h-5" />
                    </div>

                    <img
                        src="assets/img/home/album-meet/meet1.jpg"
                        alt="Profil utilisateur"
                        className=" h-full object-cover"
                    />
                </div>
                <div>

                    <h2 className='text-white font-bold text-lg ml-4 mt-2'>John, 29</h2>
                    <p className='text-gray-400 text-sm ml-4 mt-1'>5 km away</p>
                    <p className='text-white text-sm ml-4 mt-2'>Loves hiking, photography, and good coffee. Always up for an adventure!</p>


                </div>
            </article>
        </div>
    );
}

export default UserList