import React, { useState } from 'react';

const CustomSelect = ({ options, selected }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = () => {
        setIsOpen(false);
    };
    return (
        <div className="custom-select">
            <div className="selected-option" onClick={() => setIsOpen(!isOpen)}>
                {selected}
            </div>
            {isOpen && (
                <ul className="options-list">
                    {options.map((option, index) => (
                        <li
                            key={index}
                            onClick={() => handleSelect()}
                            className={selected === option ? "active" : ""}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CustomSelect;