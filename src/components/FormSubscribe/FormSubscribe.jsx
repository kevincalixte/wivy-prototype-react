import React, { useEffect } from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'

function FormSubscribe() {

    return (
        <div className='h-[80%] text-center  text-white text-lg bg-black opacity-55 rounded-2xl z-50 p-5'>

            <h1 className='py-4 text-2xl font-bold'>We need your number 😉</h1>
            <div className='flex items-center justify-center gap-5'>
                <Input className="w-30" label="Country" type="text" placeholder="FR +33" />
                <Input label="Phone Number" type="text" placeholder="" />
            </div>
            <p className='text-sm flex text-left'>You will receive a text message to confirm your registration. Message and data usage charges may apply. <span className='text-emerald-300 hover:font-bold'><a href="">Have you lost your number?</a></span> </p>
            <div className=''>
                <Button className='mt-5'>Cancel</Button>
                <Button className='mt-5'>Next</Button>
            </div>
        </div>
    )
}

export default FormSubscribe