import React, { useState, FunctionComponent } from "react";
import ITextAreaProp from "types/TextAreaProp";

const TextArea: FunctionComponent<ITextAreaProp> = ({ onChange }) => {
  const [value, setValue] = useState("");
  const [characterCount, setCharacterCount] = useState(0);

  const handleChange = (event: { target: { value: any } }) => {
    const inputValue = event.target.value;
    const characterCount = Math.min(inputValue.length, 500);
    setValue(inputValue.substring(0, 500));
    setCharacterCount(characterCount);
    onChange(inputValue.substring(0, 500));
  };

  return (
    <div className=" text-right flex flex-col border-2 border-solid w-full border-primary-purple hover:border-primary-orange hover:outline-primary-orange hover:outline hover:outline-1">
      <textarea
        value={value}
        onChange={handleChange}
        maxLength={500}
        placeholder={"Cover Letter"}
        data-cy="textarea"
        className="w-full appearance-none md:placeholder:text-xs placeholder:text-mobsm outline-0 h-52 p-7 border-0 overflow-hidden resize-none"
      />
      <p className="mb-7 mr-7">{characterCount}/500</p>
    </div>
  );
};

export default TextArea;
