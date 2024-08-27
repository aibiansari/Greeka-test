import { useState } from "react";
import { GoSortDesc } from "react-icons/go";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function SortByDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Sort by Reviews");

  const handleOptionChange = (optionText: any) => {
    setSelectedOption(`Sort by Reviews (${optionText})`);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <GoSortDesc size="1.4em" className="mr-2" />
        <span className="hidden md:block">{selectedOption}</span>
        <span className="block md:hidden">Sort by Reviews</span>
        <MdKeyboardArrowDown size="1.4em" className="ml-7 md:ml-2" />
      </button>

      {isOpen && (
        <div className="origin-top-right z-50 absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <div className="border-t border-gray-200">
              <div
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => handleOptionChange("High Five")}
              >
                5 Stars - High Five
              </div>
              <div
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => handleOptionChange("Fantastic Four")}
              >
                4 Stars - Fantastic Four
              </div>
              <div
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => handleOptionChange("Three Cheers")}
              >
                3 Stars - Three Cheers
              </div>
              <div
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => handleOptionChange("Two Thumbs Up")}
              >
                2 Stars - Two Thumbs Up
              </div>
              <div
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => handleOptionChange("Solo Star")}
              >
                1 Star - Solo Star
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
