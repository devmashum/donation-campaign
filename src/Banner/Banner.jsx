

import React, { useState } from "react";
import Category from "../Category/Category";

const Banner = ({ categories }) => {

    const [searchValue, setSearchValue] = useState("");

    const [filteredCategories, setFilteredCategories] = useState([]);
    console.log(categories);


    const handleSearch = () => {
        console.log("Search Value:", searchValue);

        const filtered = categories.filter(category => {
            const lowercaseName = category.category_name ? category.category_name.toLowerCase() : "";
            const lowercaseSearch = searchValue.toLowerCase();
            const includes = lowercaseName.includes(lowercaseSearch);
            console.log("Category:", category.category_name, "Includes:", includes);
            return includes;
        });

        console.log("Filtered Categories:", filtered);
        setFilteredCategories(filtered);
    };



    return (
        <div className="background">
            <h2 className="text-3xl font-bold h-[40vh] flex justify-center items-center text-center mt-10 md:mt-0">I Grow By Helping People In Need</h2>
            <div className="flex justify-center items-center">
                <div>
                    <input
                        className="bg-blue-50 p-1 rounded-l-lg"
                        type="text"
                        placeholder="Search here..."
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                </div>
                <div>
                    <button
                        className="bg-[#FF444A] text-white p-1 rounded-r-lg"
                        onClick={handleSearch}
                    >
                        Search
                    </button>
                </div>
            </div>
            <div className="grid md:grid-cols-4 mt-40 gap-2 pb-10">

                {filteredCategories.length > 0
                    ? filteredCategories.map(category => (
                        <Category key={category.id} category={category} />
                    ))
                    : categories.map(category => (
                        <Category key={category.id} category={category} />
                    ))}
            </div>
        </div>
    );
};

export default Banner;
