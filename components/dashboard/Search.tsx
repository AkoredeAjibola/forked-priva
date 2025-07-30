import React, { ReactNode } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';

function Search({
    label = 'Search Patient Reports or Appointments',
}: {
    label?: string;
}): ReactNode {
    return (
        <form className="w-full md:w-80 flex md:ml-0" action="#">
            <label htmlFor="search-field" className="sr-only">
                {label}
            </label>
            <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                    <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
                </div>
                <input
                    id="search-field"
                    className="border border-gray-300 shadow-sm block w-full h-full pl-12 pr-3 py-2 text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 sm:text-sm"
                    placeholder={label}
                    type="search"
                    name="search"
                />
            </div>
        </form>
    );
}

export default Search;
