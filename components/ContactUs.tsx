import React, { FunctionComponent, useState } from 'react'
import SmartLink from './SmartLink';

interface ContactUsProps {
  /**
   * Input type
   */
  type: string;
  /**
   * Click handler
   */
  onChange?: () => void;
}

/**
 * Input component for user interaction
 */
const ContactUs: FunctionComponent<ContactUsProps> = ({ type, ...props }) => {

  return (
    <div>
      {/* <SectionTitle title="Fale Conosco" description="Formas de entrar em contato consco"/> */}
      <div>
        <SmartLink label={'contato@sharpy.com'} type={'email'} icon={'email'}/>
        <SmartLink label={'+55 21 1111 1111'} type={'phone'} icon={'phone'}/>
        <SmartLink label={'Rua Lorem Ipsum Dolor, 25, Nome do Bairro, Estado - xx'} type={'address'} icon={'place'}/>
      </div>
    </div>
  )
}

export default ContactUs;
