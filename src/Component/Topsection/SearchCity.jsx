import React, { useState, useMemo } from 'react';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import { City } from 'country-state-city';
const SearchCity = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const indiaCountryCode = "IN";
    const cities = City.getCitiesOfCountry(indiaCountryCode);
    
    // cities.forEach(element => {
        
    //     console.log(element)

    // });
    // cities.map((city,index)=>(
    //     console.log(city.name,index)
    // ))


    // memo to avoid recalculating filteredCities on every render
    const filteredCities = useMemo(() => {
        return searchTerm
            ? cities.filter((city) =>
                city.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            : cities;
    }, [searchTerm]);

    const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

    const handleCitySelect = (city) => {
        setSearchTerm(city);
        setIsDropdownOpen(false); 
    };

    const clearSearch = () => {
        setSearchTerm('');
        setIsDropdownOpen(false);
    };

    return (
        <div className="search relative z-40">
            {/* Dropdown trigger */}
            <div className="flex items-center bg-gray-50 border-2 border-blue-100 rounded-xl mt-2 mr-2 cursor-pointer">
                <input
                    type="text"
                    name="input-city"
                    id="input-city"
                    placeholder="Search City..."
                    className="w-full focus:outline-none text-sm p-2 rounded bg-gray-50"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onClick={() => !isDropdownOpen && toggleDropdown()} // Open dropdown if not already open
                />
                {searchTerm && (
                    <button 
                        className="text-gray-600 p-1" 
                        onClick={clearSearch}
                    >
                        &#10005;
                    </button>
                )}
                {isDropdownOpen ? (
                    <RiArrowDropUpLine className="m-1 text-gray-600" size={30} />
                ) : (
                    <RiArrowDropDownLine className="m-1 text-gray-600" size={30} />
                )}
            </div>

            {/* Dropdown list */}
            {isDropdownOpen && (
                <div className="absolute bg-white shadow-lg rounded mt-1 overflow-y-scroll max-h-36 w-full">
                    {filteredCities.length > 0 ? (
                        filteredCities.map((city,index) => (
                            <div
                                key={index}
                                className="p-2 text-sm font-semibold border-b last:border-b-0 cursor-pointer hover:bg-blue-100"
                                onClick={() => handleCitySelect(city.name)}
                            >
                                {city.name}
                            </div>
                        ))
                    ) : (
                        <div className="text-center text-sm text-gray-500 p-2">
                            No cities found
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default SearchCity;
