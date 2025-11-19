import React from 'react'

function UserList() {
    return (

        <div className='p-1.5'>
            <article className=" h-35 bg-zinc-900 rounded-2xl flex overflow-hidden">
                <div className="h-full aspect-square relative">
                    <div className="absolute bottom-1.5 right-1.5">
                        <img src="assets/img/user/user-connected.svg" alt="En ligne" className="w-5 h-5" />
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