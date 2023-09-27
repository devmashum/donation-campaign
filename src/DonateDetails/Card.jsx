import React from 'react';

const Card = ({ donation }) => {
    const { picture, title, category_name, id, price, text_button_bg, text_button_color, category_bg, card_bg, title_color } = donation;

    console.log(donation);

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
        color: text_button_bg
    }

    return (
        <div className=''>

            <div className='rounded-2xl'>

                <div className='flex justify-center  '>
                    <div><img className='rounded-l-xl h-40  ' src={picture} alt="" /></div>

                    <div style={cardStyle} className='rounded-r-xl  '>

                        <button className=' text-sm ml-2 rounded p-1 mt-5' style={buttonBg} >{category_name}
                        </button>

                        <h3 className=' text-xl  ml-2'   >{title}</h3>

                        <h3 className=' text-base ml-2 ' style={titleColor}>${price}</h3>
                        <button style={buttonBg} className=' ml-2 text-white rounded p-1'> View Details</button>

                    </div>
                </div>
            </div >





        </div >

    );
};

export default Card;