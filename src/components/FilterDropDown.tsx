import { useState } from "react";
import { LiaSlidersHSolid } from "react-icons/lia";
import { IoClose } from "react-icons/io5";

export default function FiltersDropdown({ isOpen, setIsOpen }: any) {
  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 justify-center w-full rounded-md border border-gray-300 shadow-sm px-2 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <LiaSlidersHSolid className="text-cyan-400" size="1.2em" /> Filters
      </button>

      {isOpen && (
        <div className="origin-top-right absolute z-50 left-0 md:left-4 md:top-16 mt-2 w-56 md:w-40 lg:w-56 rounded-md shadow-lg bg-white ring-1 ring-neutral-200 focus:outline-none">
          <div className="py-1">
            <h3 className="text-gray-900 px-4 py-2 text-sm font-medium">
              Filters{" "}
              <IoClose
                onClick={() => setIsOpen(!isOpen)}
                className="float-right cursor-pointer"
              />
            </h3>

            <div className="border-t border-gray-200">
              <label className="block text-sm font-medium text-gray-700 px-4 py-2">
                Operating in
              </label>
              <select
                className="block w-full h-6 mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
                defaultValue=""
              >
                <option value="" className="flex " disabled>
                  Select a Country
                </option>
                <option value="country1">Country 1</option>
                <option value="country2">Country 2</option>
                <option value="country3">Country 3</option>
              </select>
            </div>

            <div className="border-t border-gray-200">
              <label className="block text-sm font-medium text-gray-700 px-4 py-2">
                Ferry types
              </label>
              <div className="px-4 py-2">
                <div className="flex items-center">
                  <input
                    id="normal-ferries"
                    name="ferry-types"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="normal-ferries"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    Normal ferries
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="high-speed-ferries"
                    name="ferry-types"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="high-speed-ferries"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    High-speed ferries
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
