import React, { FunctionComponent, useState } from 'react'
import SmartLink from './SmartLink';
import SectionTitle from './SectionTitle';
import { mdiEmailOutline, mdiPhone, mdiMapMarkerOutline } from '@mdi/js';
import IContactUsProps from 'types/ContactUsProps';

/**
 * Input component for user interaction
 */
const ContactUs: FunctionComponent<IContactUsProps> = ({ title, description, email, phone, address }) => {

  return (
    <div className='w-full flex justify-center h-[480px] bg-primary-gray bg-opacity-30'>
      <div className='flex flex-col justify-center'>
        <SectionTitle sectionTitle={title} description={description} mode="dark" />
        <div className='flex flex-col md:flex-row md:[&>*]:mr-14 sm:[&>*]:mb-6'>
          <SmartLink label={email} type={'email'} icon={mdiEmailOutline} iconSize={1} href={'/'}/>
          <SmartLink label={phone} type={'tel'} icon={mdiPhone} iconSize={1} href={'/'}/>
          <SmartLink label={address} type={'text'} icon={mdiMapMarkerOutline} iconSize={1} href={'/'}/>
        </div>
      </div>
    </div>
  )
}

export default ContactUs;
