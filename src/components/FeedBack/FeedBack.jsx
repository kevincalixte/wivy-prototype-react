import React from 'react'
import { GoStarFill } from "react-icons/go";

function FeedBack() {
    const fillStars = Array(5).fill(0);
    return (

        <div className='flex justify-center'>

            <div className="flex flex-col rounded-xl m-3 p-5 bg-black text-white w-60" >
                <div className='flex gap-1.5 items-center mb-5'>
                    <p className='mr-2 text-xl'>Benjamin</p>
                    {
                        fillStars.map((star, index) => (
                            <GoStarFill key={index} className=' fill-yellow-500 text-sm' />
                        ))
                    }
                </div>
                <p>I had a good experience using this website, you should try it ! 😉</p>
            </div>
            
        </div>
    )
}

export default FeedBack