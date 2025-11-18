import React, { useEffect } from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'

function FormSubscribe({setFormSubscribeVisible} ) {
    
  const handlerClick = () => {
    const BorderShadow = document.querySelector('.Bordershadow');
    const buttonsBorder = BorderShadow.querySelectorAll('button');
    buttonsBorder.forEach(button => {
      button.style.display = 'block';
    })
    const TopMenu = document.querySelector('.TopMenu');
    const buttonsTopMenu = TopMenu.querySelectorAll('li');
    buttonsTopMenu.forEach(button => {
      button.style.display = 'block';
    })
    setFormSubscribeVisible(false);
  }
    return (
        <div className='h-[90%] text-center  text-white text-lg bg-black opacity-55 rounded-2xl z-50 p-5'>

            <h1 className='py-4 text-2xl font-bold'>We need your number 😉</h1>
            <div className='flex items-center justify-center gap-1'>
                <Input className="w-30" label="Country" type="text" placeholder="FR +33" />
                <Input className= "w-50" label="Phone Number" type="text" placeholder="" />
            </div>
            <p className='text-sm text-left'>You will receive a text message to confirm your registration. Message and data usage charges may apply. <span className='text-emerald-300 hover:font-bold'><a href="">Have you lost your number?</a></span> </p>
            <div className='flex gap-10 justify-center'>
                <Button className='mt-7' onClick={handlerClick}>Cancel</Button>
                <Button className='mt-7'>Next</Button>
            </div>
        </div>
    )
}

export default FormSubscribe