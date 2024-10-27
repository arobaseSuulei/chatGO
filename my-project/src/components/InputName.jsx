import {useEffect, useState} from "react";

export default function InputName() {
    return (
        <div>
            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Operation name
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="text-gray-500 sm:text-sm">$</span>
                </div>
                <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter the name of operation"
                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <div className="absolute inset-y-0 right-0 flex items-center">
                    <label htmlFor="currency" className="sr-only">
                        Currency
                    </label>

                </div>
            </div>
        </div>
    )
}
