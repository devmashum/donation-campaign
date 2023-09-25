import Category from "../Category/Category";


const Banner = ({ categories }) => {
    console.log(categories);
    return (
        <div className="background">
            <h2 className="text-3xl font-bold h-[40vh] flex justify-center items-center text-center mt-10 md:mt-0">I Grow By Helping People In Need</h2>
            <div className="flex justify-center items-center ">
                <div>
                    <input className="bg-blue-50 p-1 rounded-l-lg" type="text" name="" id="" placeholder="search here ..." />
                </div>
                <div>
                    <button className="bg-[#FF444A] text-white p-1 rounded-r-lg ">Search</button>
                </div>

            </div>
            <div className=" grid md:grid-cols-4 mt-40 gap-2 ">
                {
                    categories?.map(category => <Category key={category.id} category={category}></Category>)
                }
            </div>
        </div>
    );
};

export default Banner;