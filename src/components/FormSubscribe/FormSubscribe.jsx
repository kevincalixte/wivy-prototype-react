import React, { useEffect } from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'

function FormSubscribe({ setFormSubscribeVisible }) {

  // CLICK CANCEL
  const handlerClickCancel = () => {
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

  // CLICK NEXT
  // SERT A MASQUER LES ELEMENTS
  const handlerClickNext = () => {
    const form = document.querySelector('.FormSubscribe');
    const elements = form.querySelectorAll(':scope > :not(.Title, .Text, .Button)');
    // console.log(elements);
    elements.forEach(element => {
      // console.log(element)
      // element[0].textcontent = 'Check your messages';
      element.style.display = 'none';
    });
    const Title = form.querySelector('.Title');
    const Text = form.querySelector('.Text');
    Title.textContent = 'Check your messages 📩';
    Text.innerHTML = 'We have sent you a code to verify your phone number. Please enter the code in the field below. <span class="text-emerald-300 hover:font-bold"><a href="#">Send again ?</a></span>';
    const buttonQuit = document.querySelector('.Button');
    // console.log(buttonRetry)
    // buttonRetry.classList.remove('hidden');
    buttonQuit.style.display = 'block';
    // const divInput = form.creatEelement('div');
    const Input = form.querySelector('.Input')

    for (let i = 0; i < 4; i++) {
      const clone = Input.cloneNode(true)
      // form.insertBefore(clone, Text); OK
      // divInput.appendChild(clone);
    }
  }

  // SERT A RENVOYER LE CODE DE SECURITE PAR SMS
  const handlerClickRetry = () => { }
  return (
    
    <div className='ease-in-out FormSubscribe h-[90%] text-center  text-white text-lg bg-black/60 opacity-95 rounded-2xl z-50 p-5'>
    <h1 className='Title py-4 text-2xl font-bold'>We need your number 😉</h1>
      <div className='flex items-center justify-center gap-1'>
        <Input className="Input w-30" label="Country" type="text" placeholder="FR +33" />
        <Input className="w-50" label="Phone Number" type="text" placeholder="" />
      </div>
      <p className='Text text-sm text-left'>You will receive a text message to confirm your registration. Message and data usage charges may apply. <span className='text-emerald-300 hover:font-bold'><a href="#">Have you lost your number?</a></span> </p>
      <div className=' flex gap-10 justify-center'>
        <Button className=' mt-7' onClick={handlerClickCancel}>Cancel</Button>
        <Button className=' mt-7' onClick={handlerClickNext}>Next</Button>
      </div>
      {/* <Button className='ButtonRetry hidden' onClick={handlerClickRetry}>Retry</Button> */}


      <Button className='Button hidden m-auto mt-7' onClick={handlerClickCancel}>Quit</Button>

    </div>
  )
}

export default FormSubscribe