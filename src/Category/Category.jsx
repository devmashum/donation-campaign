import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {

    const { category_name, title, picture, id } = category;

    return (
        <div>
            <Link to={`/donatedetails/${id}`}><div>
                <img className='rounded-lg' src={picture} alt="" />

                <div>
                    <h1 className='bg-blue-100 rounded-lg p-1 text-sm mt-2'>{category_name}
                    </h1>
                    <h3 className=' text-sm'>{title}</h3></div>
            </div></Link>
        </div>
    );
};

export default Category;