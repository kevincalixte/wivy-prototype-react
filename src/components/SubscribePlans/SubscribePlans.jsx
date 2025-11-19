import React from 'react'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const CheckYes = ({ children }) => (
  <li className="flex items-center gap-2">
    <IoMdCheckmarkCircleOutline className='text-green-600' />
    {children}
  </li>
)
const CheckNo = ({ children }) => (
  <li className="flex items-center gap-2">
    <IoMdCheckmarkCircleOutline className='text-red-600' />
    {children}
  </li>
)

// FONCTION QUI GERE LES DIFFERENTS ABONNEMENTS
function SubscribePlans() {

  return (

    <div className='flex flex-wrap justify-center'>
      <div className='rounded-xl m-2 p-5 bg-black text-white text-sm flex-col justify-around w-50'>
        <h2 className='font-bold mb-3'>Free</h2>
        <ul>
          <CheckYes>Illimited chat</CheckYes>
          <CheckNo>Limited swipes</CheckNo>
          <CheckNo>Limited profiles</CheckNo>
        </ul>
      </div>

      <div className='rounded-xl m-2 p-5 bg-black text-white text-[] flex-col justify-around w-50'>
        <h2 className='font-bold mb-3'>Premium <span>5€ / month</span></h2>
        <ul >
          <CheckYes>Illimited chat</CheckYes>
          <CheckYes>Limited swipes</CheckYes>
          <CheckYes>Limited profiles</CheckYes>
        </ul>
      </div>
    </div>


  )
}

export default SubscribePlans