import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
    const { category_name, title, picture, id, text_button_bg, category_bg, card_bg, title_color, category_color, text_button_color } = category;

    const cardStyle = {
        backgroundColor: card_bg,
        textColor: title_color


    };

    const categoryStyle = {
        backgroundColor: category_bg,

    };

    const buttonBg = {
        backgroundColor: text_button_bg,
        color: text_button_color

    };
    const titleColor = {
        color: title_color
    }



    return (
        <div>
            <Link to={`/donatedetails/${id}`}><div>
                <img className=' rounded-t-md' src={picture} alt="" />

                <div style={cardStyle} className='rounded-b-md'>
                    <button style={buttonBg} className=' text-xs m-1 rounded p-1 ' >{category_name}
                    </button>
                    <h3 className=' text-sm m-1 ' style={titleColor} >{title}</h3></div>
            </div></Link >
        </div >
    );
};

export default Category;