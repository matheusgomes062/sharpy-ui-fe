import React, { FunctionComponent, useState, useEffect, useRef } from 'react'
import useOutsideClick from '../hooks/useOutsideClick';
import Icon from '@mdi/react';
import { mdiChevronDown, mdiChevronUp } from '@mdi/js';
import IDropDownProps from 'types/DropDownProps';

function dropDownOptions(options: string[] | undefined, handleValue: { (value: string): void; (arg0: string): void; }, optionTextColor: { (option: string): "text-primary-orange" | "text-primary-purple"; (arg0: string): any; }, ref: React.LegacyRef<HTMLDivElement> | undefined) {
  return (
    <div className="absolute mt-4 overflow-auto bg-white border-2 border-solid w-80 max-h-80 border-primary-purple sm:max-md:w-full">
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

const DropDown: FunctionComponent<IDropDownProps> = ({ placeholder, options, ...props }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const [value, setValue] = useState('');

  const dropDownIcon = showDropdown ? mdiChevronUp : mdiChevronDown;

  const ref = useRef(null);

  const handleValue = (value: string) => {
    setValue(value);
    setShowDropdown(!showDropdown);
  }

  const handleClick = () => setShowDropdown(!showDropdown);
  
  const optionTextColor = (option: string) => option == value ? "text-primary-orange" : "text-primary-purple";

  useEffect(() => {
    !placeholder && setValue(options[0]);
  }, [options, placeholder])
  
  useOutsideClick(ref, () => {
    showDropdown && handleClick();
  });

  return (
    <div className="h-auto sm:max-md:w-full" data-cy="dropdown" ref={ref}>
      <div
        onClick={handleClick}
        className="flex h-12 p-2 border-2 border-solid cursor-pointer max-h-12 group w-80 border-primary-purple hover:border-primary-orange hover:outline-primary-orange hover:outline hover:outline-1 sm:max-md:w-full"
        {...props}
      >
        <div className="flex items-center justify-between w-full px-2">
          {placeholder && !value ? (
            <p className="md:text-xs text-mobsm">{placeholder}</p>
          ) : (
            <p
              data-cy="selected-value"
              className="truncate md:text-xs text-mobsm"
            >
              {value}
            </p>
          )}
          <Icon
            path={dropDownIcon}
            size={1}
            color="disabled"
            className="fill-primary-orange group-hover:fill-primary-purple"
          />
        </div>
      </div>
      <div className="relative sm:max-md:w-full">
        {showDropdown &&
          dropDownOptions(options, handleValue, optionTextColor, ref)}
      </div>
    </div>
  );
}

export default DropDown;