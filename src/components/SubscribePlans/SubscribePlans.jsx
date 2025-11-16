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
    <div className="p-10 bg-black text-white flex justify-between">

      <div>

        <h2 className='text-center mb-3'>Free</h2>
        <ul>
          <CheckYes>Illimited chat</CheckYes>
          <CheckNo>Limited swipes</CheckNo>
          <CheckNo>Limited profiles</CheckNo>
        </ul>
      </div>

      <div>
        <h2 className='text-center mb-3'>Premium</h2>
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