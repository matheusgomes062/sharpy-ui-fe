import React, { FunctionComponent, useState } from 'react'
import SmartLink from './SmartLink';
import SectionTitle from './SectionTitle';

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
    <div className='w-full flex justify-center h-[480px] bg-primary-gray bg-opacity-30'>
      <div className='flex flex-col justify-center'> test
        <SectionTitle title="Fale Conosco" description="Formas de entrar em contato consco"/>
        <div className='flex flex-row [&>*]:mr-14'>
          <SmartLink label={'contato@sharpy.com'} type={'email'} icon={'email'}/>
          <SmartLink label={'+55 21 1111 1111'} type={'phone'} icon={'phone'}/>
          <SmartLink label={'Rua Lorem Ipsum Dolor, 25, Nome do Bairro, Estado - xx'} type={'address'} icon={'place'}/>
        </div>
      </div>
    </div>
  )
}

export default ContactUs;
