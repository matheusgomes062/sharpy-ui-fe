import React, { FunctionComponent, useState } from 'react'
import SmartLink from './SmartLink';
import SectionTitle from './SectionTitle';
import { mdiEmailOutline, mdiPhone, mdiMapMarkerOutline } from '@mdi/js';

interface ContactUsProps {
  /**
   * Title for Section title
   */
  title: string;
  /**
   * Description for Section title
   */
  description: string;
  /**
   * Email for Contact us link
   */
  email: string;
  /**
   * Phone for Contact us link
   */
  phone: string;
  /**
   * Address for Contact us link
   */
  address: string;
}

/**
 * Input component for user interaction
 */
const ContactUs: FunctionComponent<ContactUsProps> = ({ title, description, email, phone, address }) => {

  return (
    <div className='w-full flex justify-center h-[480px] bg-primary-gray bg-opacity-30'>
      <div className='flex flex-col justify-center'>
        <SectionTitle title={title} description={description} mode="dark" />
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
