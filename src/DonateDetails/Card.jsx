import React from 'react';

const Card = ({ donation }) => {
    const { picture, title, category_name, id, price } = donation;
    return (
        <div className=''>
            <div className='flex'>
                <div className='w-[50%]'><img className='w-full h-40 ' src={picture} alt="" />
                </div>
                <div className='bg-blue-100 w-[50%] '>
                    <div className='w-full  '>
                        <p className=' text-xs ml-2 mt-2'>{category_name}</p>
                        <h3 className=' text-sm font-bold ml-2 my-5'>{title}</h3>
                        <p className=' text-sm ml-2'>${price}</p>
                    </div>

                </div>


            </div>
            <div className='w-full text-center bg-blue-500'><button className='  ml-2'>View Details</button>
            </div>
        </div>

    );
};

export default Card;