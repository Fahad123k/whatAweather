import React, { useState, useMemo } from 'react';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';

const SearchCity = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const cities = [
        "Agra", "Ahmedabad", "Ajmer", "Aligarh", "Allahabad", "Amritsar", "Aurangabad", 
        "Bangalore", "Bareilly", "Bhopal", "Bhubaneswar", "Bikaner", "Chandigarh", 
        "Chennai", "Coimbatore", "Cuttack", "Dehradun", "Delhi", "Dhanbad", 
        "Durgapur", "Faridabad", "Firozabad", "Ghaziabad", "Gorakhpur", "Gurgaon", 
        "Guwahati", "Gwalior", "Hubli", "Hyderabad", "Imphal", "Indore", "Jabalpur", 
        "Jaipur", "Jalandhar", "Jammu", "Jamshedpur", "Jhansi", "Jodhpur", "Kanpur", 
        "Karnal", "Kochi", "Kolhapur", "Kolkata", "Kota", "Kozhikode", "Lucknow", 
        "Ludhiana", "Madurai", "Mangalore", "Meerut", "Moradabad", "Mumbai", "Mysore", 
        "Nagpur", "Nashik", "Noida", "Patiala", "Patna", "Pondicherry", "Pune", 
        "Raipur", "Rajkot", "Ranchi", "Rourkela", "Salem", "Siliguri", "Srinagar", 
        "Surat", "Thane", "Thiruvananthapuram", "Thrissur", "Tiruchirappalli", 
        "Tirunelveli", "Tirupati", "Tiruppur", "Udaipur", "Ujjain", "Vadodara", 
        "Varanasi", "Vasai-Virar", "Vijayawada", "Visakhapatnam", "Warangal", 
        "Yamunanagar"
    ];

    // memo to avoid recalculating filteredCities on every render
    const filteredCities = useMemo(() => {
        return searchTerm
            ? cities.filter((city) =>
                city.toLowerCase().includes(searchTerm.toLowerCase())
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
                        filteredCities.map((city, index) => (
                            <div
                                key={index}
                                className="p-2 text-sm font-semibold border-b last:border-b-0 cursor-pointer hover:bg-blue-100"
                                onClick={() => handleCitySelect(city)}
                            >
                                {city}
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
