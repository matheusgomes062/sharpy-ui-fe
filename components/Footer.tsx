import React, { FunctionComponent } from 'react';
import Icon from '@mdi/react';
import { mdiLinkedin, mdiTwitter, mdiGithub } from '@mdi/js';
import Image from 'next/image';

const routes = [
  {
    title: 'Home',
    path: ''
  },
  {
    title: 'Quem Somos',
    path: ''
  },
  {
    title: 'Nosso Time',
    path: ''
  },
  {
    title: 'Trabalhe Conosco',
    path: ''
  },
  {
    title: 'Soluções',
    path: ''
  },
  {
    title: 'Login',
    path: ''
  },
  {
    title: 'Inscrever-se',
    path: ''
  },
  {
    title: 'Fale Conosco',
    path: ''
  },
  {
    title: 'Política de Privacidade',
    path: ''
  },
  {
    title: 'Termos & Condições',
    path: ''
  },
]
  
const Footer: FunctionComponent = () => {
  const linksStyle = "text-white md:text-xxxs text-mobxs";
  
  return (
    <footer className="w-screen bg-black" data-cy="footer">
      <div className="flex justify-center py-20">
        <div className="mx-10">
          <Image width={181} height={59} src="/sharpy-logo.svg" alt="sharpy SVG" />
          <div className="flex mt-5 space-x-20 md:mt-20 sm:max-md:flex-col-reverse sm:max-md:space-x-0">
            <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
              {routes.slice(0,4).map(route => (<div key={route.title}><a className={`${linksStyle}`}>{route.title}</a></div>))}

              {routes.slice(4,8).map(route => (<div key={route.title}><a className={`${linksStyle}`}>{route.title}</a></div>))}          

              {routes.slice(8, 10).map(route => (<div key={route.title}><a className={`${linksStyle}`}>{route.title}</a></div>))}      
            </div>
            <div className="flex justify-start mt-5 space-x-9 md:mt-0 sm:mb-9">
              <Icon path={mdiLinkedin} color="white" size={2.2}/>
              <Icon path={mdiTwitter} color="white" size={2.2}/>
              <Icon path={mdiGithub} color="white" size={2.2}/>
            </div>
          </div>
          <div className="flex justify-between mt-5 text-white md:mt-20 sm:max-md:flex-col-reverse">
            <p>© 2022, Sharpy • Todos os direitos Reservados.</p>
            <p className="sm:max-md:mb-5">Designed by Proteína Digital & Developed by Sharpy.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
