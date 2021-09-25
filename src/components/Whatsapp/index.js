import React from "react";
import { ImWhatsapp } from 'react-icons/im'


export const WhatsappButton = () => {
  return (
    <>
      <a 
        className='whatsapp-link'
        href='https://wa.me/5491149930524'
        target="_blank"
        rel="noreferrer"
      >
        <ImWhatsapp
          className='whatsapp-icon'
        />
      </a>
    </>
  );
};
