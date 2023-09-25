import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const DonateDetails = () => {
    const categories = useLoaderData();
    const [category, setCategory] = useState(null); // Initialize category with null
    const { id } = useParams();

    useEffect(() => {
        // Use parseInt to convert id to a number, assuming id is a number
        const categoryId = parseInt(id);

        // Use optional chaining to safely access properties
        const findCategory = categories?.find((category) => category.id === categoryId);

        setCategory(findCategory);
    }, [id, categories]);

    console.log(category);

    return (
        <div className="w-9/12 mx-auto">
            {category ? (
                <div className=" justify-center items-center  h-[80vh]">
                    <img className="w-full h-80 mx-auto  " src={category.picture} alt="" />

                    <div className=" bg-[#0B0B0B80] w-auto h-10 relative  bottom-10 border border-red-400 "></div>
                    <button className="bg-[#FF444A] text-white  shadow-2xl relative bottom-20 -right-2 p-2 ">Price: Donate ${category.price}</button>
                    <h2 className="text-2xl font-bold -mt-20">{category.title}</h2>
                    <p>{category.description}</p>
                </div>
            ) : (
                <p>Category not found</p>
            )}
        </div>
    );
};

export default DonateDetails;
