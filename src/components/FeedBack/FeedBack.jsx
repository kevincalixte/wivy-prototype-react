import React from 'react'
import { GoStarFill } from "react-icons/go";

function FeedBack() {
    return (
        
        <div className="rounded-xl m-auto p-10 bg-black text-white w-1/2 " >
            <div className='flex gap-1.5 items-center mb-5'>
                <p className='mr-2 text-xl'>Benjamin</p>
                <GoStarFill className=' fill-yellow-500 text-lg'/>
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
            </div>
            <div>I had a good experience using this website, you should try it ! 😉</div>

        </div>
    )
}

export default FeedBack