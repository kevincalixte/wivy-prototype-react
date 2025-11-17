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
    <div className="rounded-xl mx-8 p-5 bg-black text-white text-center flex justify-around">
      <div>

        <h2 className='font-bold  mb-3'>Free <span className='line-through'>5€ / month</span></h2>
        <ul>
          <CheckYes>Illimited chat</CheckYes>
          <CheckNo>Limited swipes</CheckNo>
          <CheckNo>Limited profiles</CheckNo>
        </ul>
      </div>

      <div>
        <h2 className='font-bold mb-3'>Premium <span>5€ / month</span></h2>
        <ul >
          <CheckYes>Illimited chat</CheckYes>
          <CheckNo>Limited swipes</CheckNo>
          <CheckNo>Limited profiles</CheckNo>
        </ul>
      </div>

    </div>
  )
}

export default SubscribePlans