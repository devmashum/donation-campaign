import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
    const { category_name, title, picture, id, text_button_bg, category_bg, card_bg } = category;

    const cardStyle = {
        backgroundColor: card_bg,

        /* Add other card styles as needed */
    };

    const categoryStyle = {
        backgroundColor: category_bg,
        /* Add other category styles as needed */
    };



    return (
        <div>
            <Link to={`/donatedetails/${id}`}><div>
                <img className=' rounded-t-md' src={picture} alt="" />

                <div style={cardStyle}>
                    <h1 className=' text-xs ' >{category_name}
                    </h1>
                    <h3 className=' text-sm ' style={categoryStyle}>{title}</h3></div>
            </div></Link >
        </div >
    );
};

export default Category;