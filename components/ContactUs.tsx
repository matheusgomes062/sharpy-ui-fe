import React, { FunctionComponent, useState } from 'react'
import SmartLink from './SmartLink';
import SectionTitle from './SectionTitle';
import { mdiEmailOutline, mdiPhone, mdiMapMarkerOutline } from '@mdi/js';

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
      <div className='flex flex-col justify-center'>
        <SectionTitle title="Fale Conosco" description="Formas de entrar em contato consco"/>
        <div className='flex flex-row [&>*]:mr-14'>
          <SmartLink label={'contato@sharpy.com'} type={'email'} icon={mdiEmailOutline} fontSize={'sm'} iconSize={3} href={'/'}/>
          <SmartLink label={'+55 21 1111 1111'} type={'tel'} icon={mdiPhone} fontSize={'sm'} iconSize={3} href={'/'}/>
          <SmartLink label={'Rua Lorem Ipsum Dolor, 25, Nome do Bairro, Estado - xx'} type={'text'} icon={mdiMapMarkerOutline} fontSize={'sm'} iconSize={3} href={'/'}/>
        </div>
      </div>
    </div>
  )
}

export default ContactUs;
