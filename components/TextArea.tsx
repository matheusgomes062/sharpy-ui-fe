import React, { useState, FunctionComponent } from "react";
import ITextAreaProp from "types/TextAreaProp";

const TextArea: FunctionComponent<ITextAreaProp> = ({ onChange, textAreaPlaceholder, name }) => {
  const [value, setValue] = useState("");
  const [characterCount, setCharacterCount] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value;
    const characterCount = Math.min(inputValue.length, 500);
    setValue(inputValue.substring(0, 500));
    setCharacterCount(characterCount);

    onChange && onChange(e);
  };

  return (
    <div className="flex flex-col w-full text-right border-2 border-solid border-primary-purple hover:border-primary-orange hover:outline-primary-orange hover:outline hover:outline-1">
      <textarea
        value={value}
        onChange={handleChange}
        maxLength={500}
        name={name}
        placeholder={textAreaPlaceholder}
        data-cy="textarea"
        className="w-full p-2 overflow-hidden border-0 appearance-none resize-none md:placeholder:text-xs placeholder:text-mobsm outline-0 h-52"
      />
      <p className="mb-7 mr-7">{characterCount}/500</p>
    </div>
  );
};

export default TextArea;
