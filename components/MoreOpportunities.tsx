import { FunctionComponent } from 'react';
import Button from './Button';

const MoreOpportunities: FunctionComponent = () => {
  return (
    <div className="container">
      <h1 className="text-lg font-bold">Mais Oportunidades</h1>
      <div className="h-3 mt-4 w-14 bg-primary-orange" />
      <div className="mt-2">
        <Button primary={true} label={'Ver Mais'} size='sm'/>
      </div>
    </div>
  )
}

export default MoreOpportunities;