import React, { FunctionComponent, useState, useEffect, useRef } from 'react'
import useOutsideClick from '../hooks/useOutsideClick';
import Icon from '@mdi/react';
import { mdiChevronDown, mdiChevronUp } from '@mdi/js';


interface DropDownProps {
    /**
   * Placeholder of the dropdown
   */
  placeholder: string;
    /**
   * Options of the dropdown
   */
  options: string[];
}

function dropDownOptions(options: string[] | undefined, handleValue: { (value: string): void; (arg0: string): void; }, optionTextColor: { (option: string): "text-primary-orange" | "text-primary-purple"; (arg0: string): any; }, ref: React.LegacyRef<HTMLDivElement> | undefined) {
  return (
    <div className="z-10 mt-4 overflow-auto border-2 border-solid max-h-80 w-96 border-primary-purple dropdown-options">
      <ul className="px-5 pt-8">
        {options?.map((value, index) => {
          return (
            <li
              data-cy={`dropdown-option-${index}`}
              className={`pb-8 cursor-pointer ${optionTextColor(value)}
            hover:text-primary-orange`}
              key={index}
              onClick={() => handleValue(value)}
            >
              {value}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const DropDown: FunctionComponent<DropDownProps> = ({ placeholder, options, ...props }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [value, setValue] = useState('');
  const [iconColor, setIconColor] = useState('black');

  const dropDownIcon = showDropdown ? mdiChevronUp : mdiChevronDown;

  const ref = useRef(null);

  const handleValue = (value: string) => {
    setValue(value);
    setShowDropdown(!showDropdown);
    changeIconColorToBlack();
  }

  const handleClick = () => setShowDropdown(!showDropdown);
  
  const optionTextColor = (option: string) => option == value ? "text-primary-orange" : "text-primary-purple";

  const changeIconColorToBlack = () => setIconColor("black");

  const changeIconColorToOrange = () => setIconColor("#FF4800");

  const changIconToBlackWhenMouseOut = () => !showDropdown && changeIconColorToBlack();

  useEffect(() => {
    !placeholder && setValue(options[0]);
  }, [options, placeholder])
  
  useOutsideClick(ref, () => {
    showDropdown && handleClick();
    changeIconColorToBlack();
  });

  return (
    <div className="h-auto w-96" data-cy="dropdown" ref={ref}>
      <div
        onMouseOver={changeIconColorToOrange}
        onMouseOut={changIconToBlackWhenMouseOut}
        onClick={handleClick}
        className="h-12 p-2 border-2 border-solid cursor-pointer w-96 border-primary-purple focus:border-primary-orange focus:outline-primary-orange focus:outline hover:border-primary-orange hover:outline-primary-orange hover:outline"
      >
        <div className="flex justify-between w-full px-2">
          { placeholder && !value ? <p>{placeholder}</p> : <p data-cy="selected-value">{value}</p>} 
          <div>
            <Icon path={dropDownIcon} color={iconColor} size={1}/>
          </div>
        </div>
      </div>
      {
        showDropdown && dropDownOptions(options, handleValue, optionTextColor, ref)
      }
    </div>
  )
}

export default DropDown;