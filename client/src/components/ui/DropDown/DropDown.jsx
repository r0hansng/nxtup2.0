import { useState, useRef, useEffect } from "react";
import {
  IconChevronDown,
  IconBrandReact,
  IconBrandVue,
  IconBrandSvelte,
} from "@tabler/icons-react";

const DropDown = () => {
  const options = [
    { label: "React", value: "react", icon: <IconBrandReact size={16} /> },
    { label: "Vue", value: "vue", icon: <IconBrandVue size={16} /> },
    { label: "Svelte", value: "svelte", icon: <IconBrandSvelte size={16} /> },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
    console.log("Selected:", option);
  };

  return (
    <div className="p-10">
      <div className="relative w-64" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex w-full items-center justify-between rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <span className="truncate">{selected?.label || "Select a framework"}</span>
          <IconChevronDown size={18} className="text-gray-500" />
        </button>

        {isOpen && (
          <div className="absolute z-10 mt-2 w-full rounded-md border border-gray-200 bg-white shadow-lg">
            {options.map((option) => (
              <div
                key={option.value}
                onClick={() => handleSelect(option)}
                className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
              >
                {option.icon && <span>{option.icon}</span>}
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DropDown;