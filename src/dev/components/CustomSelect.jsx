import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getCurrentLanguageSelector } from '../../store/reducers/languages.reducer';

const CustomSelect = ({ options, selected, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const language = useSelector(getCurrentLanguageSelector);

    const handleSelect = (option) => {
        onChange(option);
        setIsOpen(false);
    };
    return (
        <div className="custom-select">
            <div className="selected-option" onClick={() => setIsOpen(!isOpen)}>
                {selected?.[language] || "—"}
            </div>
            {isOpen && (
                <ul className="options-list">
                    {options.map((option, index) => (
                        <li
                            key={index}
                            onClick={() => handleSelect(option)}
                            className={selected?.en === option.en ? "active" : ""}
                        >
                            {option[language]}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CustomSelect;