import React, { FunctionComponent, useState } from 'react'
import { mdiMagnify, mdiTrayArrowUp } from "@mdi/js";
import Icon from "@mdi/react";

interface InputProps {
  /**
   * Input Placeholder
   */
  placeholder: string;
  /**
   * Input type
   */
  type: 'text' | 'file';
  /**
   * Input type
   */
  icon: 'magnify' | 'trayArrowUp' | 'none';
  /**
   * Click handler
   */
  onChange?: () => void;
}

const Icons = {
  'magnify': mdiMagnify,
  'trayArrowUp': mdiTrayArrowUp,
  'none': ''
};

function show(text: string) { 
  return <p className="fixed w-64 truncate opacity-40">{text}</p>;
}

const Input: FunctionComponent<InputProps> = ({ placeholder, type, icon, ...props }) => {
  const [value, setValue] = useState('');

  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => setValue(event.target.value);

  const shouldOpacityBeZero = () => type === "file" && "opacity-0 max-h-6";

  const isTypeOfFile = () => type === "file" && true;

  const isFileUploaded = () => value;

  return (
    <div
      className="relative flex items-center justify-between h-12 p-2 border-2 border-solid group w-80 max-h-12 border-primary-purple hover:border-primary-orange hover:outline-primary-orange hover:outline hover:outline-1 sm:max-md:w-full"
      {...props}
    >
      <>
        {(() => {
          return (
            isTypeOfFile() &&
            (isFileUploaded() ? show(value) : show(placeholder))
          );
        })()}
        <input
          type={type}
          role="input"
          data-cy="input"
          placeholder={placeholder}
          onChange={handleChange}
          value={value}
          className={`w-full appearance-none md:placeholder:text-xs placeholder:text-mobsm outline-0 ${shouldOpacityBeZero()}`}
        />
        <Icon
          path={Icons[icon]}
          size={1}
          color="disabled"
          className="fill-primary-orange group-hover:fill-primary-purple"
        />
      </>
    </div>
  );
}

export default Input;
