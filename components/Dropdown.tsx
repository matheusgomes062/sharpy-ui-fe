import React, { FunctionComponent, useState, useEffect, useRef } from 'react'
import useOutsideClick from '../hooks/useOutsideClick';
import '@material-design-icons/font';


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

function dropDownOptions(options: string[] | undefined, handleValue: { (value: string): void; (arg0: string): void; }, optionTextColor: { (option: string): "text-primary-orange" | "text-primary-purple"; (arg0: string): any; }) {
  return (
    <div className="
      mt-4
      w-96
      border-solid border-2 border-primary-purple
      dropdown-options"
    >
      <ul className="px-5 pt-8">
        {options?.map((value, index) => {
          return <li
            data-cy={`dropdown-option-${index}`}
            className={`pb-8 cursor-pointer ${optionTextColor(value)}
            hover:text-primary-orange`}
            key={index}
            onClick={ () => handleValue(value)}
          >
            {value}
          </li>
        })}
      </ul>
    </div>
  )
}

const DropDown: FunctionComponent<DropDownProps> = ({ placeholder, options, ...props }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [value, setValue] = useState('');

  const dropDownIcon = showDropdown ?  "expand_less" : "expand_more"

  const ref = useRef(null);

  const handleValue = (value: string) => {
    setValue(value)
    setShowDropdown(!showDropdown);
  }

  const handleClick = () => setShowDropdown(!showDropdown)
  
  const optionTextColor = (option: string) => option == value ? "text-primary-orange" : "text-primary-purple"

  useEffect(() => {
    !placeholder && setValue(options[0]);
  }, [options, placeholder])
  
  useOutsideClick(ref, () => {
    showDropdown && setShowDropdown(!showDropdown);
  });

  return (
    <div className="w-96 h-12" ref={ref} data-cy="dropdown">
      <div
        onClick={handleClick}
        className="
          group
          w-96 h-12
          border-solid border-2 border-primary-purple p-2
          focus:border-primary-orange focus:outline-primary-orange
          focus:outline
          cursor-pointer
          hover:border-primary-orange hover:outline-primary-orange hover:outline"
      >
        <div className="w-full flex justify-between px-2">
          { placeholder && !value ? <p>{placeholder}</p> : <p data-cy="selected-value">{value}</p>} 
          <div>
            <span className="material-icons-outlined text-center text-primary-orange group-hover:text-primary-purple">{dropDownIcon}</span>
          </div>
        </div>
      </div>
      {
        showDropdown && dropDownOptions(options, handleValue, optionTextColor)
      }
    </div>
  )
}

export default DropDown;
