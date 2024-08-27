"use client";
import Cards from "@/components/Cards";
import FiltersDropdown from "@/components/FilterDropDown";
import { IoSearch } from "react-icons/io5";
import { CiGlobe } from "react-icons/ci";
import React from "react";
import SortByDropdown from "@/components/SortBy";

const App: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const ferryOperators = "57";
  return (
    <>
      <div className="flex flex-col p-4">
        <h1 className="font-bold text-3xl md:text-4xl">Ferry operators</h1>
        <span>
          Discover the{" "}
          <span className="font-bold">{ferryOperators} ferry operators</span> we
          work with
        </span>
        <div className="pt-4 pb-2 flex items-center justify-start gap-3">
          <FiltersDropdown isOpen={isOpen} setIsOpen={setIsOpen} />
          <SortByDropdown />
          <div className="md:flex cursor-pointer hidden items-center justify gap-1 text-sm ring-1 text-neutral-700 ring-neutral-300 rounded-md p-2">
            <IoSearch />
            Search
          </div>
          <div className="flex-1 flex items-center justify-end">
            <div className="md:flex cursor-pointer hidden items-center justify gap-1 text-sm font-bold ring-1 text-cyan-400 ring-neutral-300 rounded-md p-2">
              <CiGlobe />
              Live Map View
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:grid grid-cols-4">
        {isOpen && (
          <div className="ring-2 ring-neutral-300 col-span-1 mr-2 ml-4 rounded-lg mb-6"></div>
        )}
        <div className={` ${isOpen ? "col-span-3" : "col-span-4"}`}>
          <Cards />
        </div>
      </div>
      <div className="block md:hidden pb-8">
        <Cards />
      </div>
    </>
  );
};

export default App;
