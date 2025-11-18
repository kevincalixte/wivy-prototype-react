import React from 'react'
import { useState } from 'react';

export const toogleModal = () => {
    const [showModal, setShowModal] = useState(false);
    setShowModal(!showModal);
}
function Modal() {


    return (
        <>
            {showModal &&

                <div className=" fixed inset-0 flex items-start justify-center bg-black opacity-70 z-50 ">

                    <div className='text-black  flex justify-center w-[80vw] h-[35vh] bg-white rounded-2xl mt-15'>

                    </div>

                </div>

            }
        </>
    )
}

export default Modal