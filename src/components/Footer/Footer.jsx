import React from 'react'
import { FaFacebook, FaInstagram, FaSnapchat, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
function Footer() {
  const liHoverBlue = "hover:text-blue-500 transition-colors";
  const liHoverMagenta = "hover:text-fuchsia-500 transition-colors ";
  return (

    <div className=' bg-black text-white '>
      <div className=' flex justify-around p-10 w-full  mt-25'>

        <ul >
          <li className='mb-5'>Suivez nous sur : </li>

          <div className='flex gap-2'>
            <li className={liHoverMagenta}><a href=""><FaFacebook /></a></li>
            <li className={liHoverMagenta}><a href=""><FaInstagram /></a></li>
            <li className={liHoverMagenta}><a href=""><FaXTwitter /></a></li>
            <li className={liHoverMagenta}><a href=""><FaSnapchat /></a></li>
            <li className={liHoverMagenta}><a href=""><FaTiktok /></a></li>
            <li className={liHoverMagenta}><a href=""><FaYoutube /></a></li>
          </div>

        </ul>

        <ul>
          <li className='mb-5'>Liens</li>
          <div className='flex flex-col gap-3'>
            <li className={liHoverBlue}><a href="">Terms & Conditions</a></li>
            <li className={liHoverBlue}><a href="">Cookie Policy</a></li>
            <li className={liHoverBlue}><a href="">Community Guidelines</a></li>
            <li className={liHoverBlue}><a href="">Report Illegal Content</a></li>
          </div>
        </ul>
      </div>

      <div className='text-center py-5'>
        <p >Copyright - Kevin Calixte - Formation Ceppic 2025-2026</p>
      </div>

    </div>

  )
}

export default Footer