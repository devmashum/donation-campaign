// 
import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';
import Card from '../DonateDetails/Card';

const Donation = () => {
    const [donations, setDonations] = useState([]);
    const [notFound, setNotFound] = useState(false);
    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
        const donationsItems = JSON.parse(localStorage.getItem('donations')) || [];

        if (donationsItems.length > 0) {
            setDonations(donationsItems);
        } else {
            setNotFound("No Donation Found!");
        }
    }, []);
    console.log(isShow);
    return (
        <div>
            {notFound ? (
                <p className='h-[80vh] flex justify-center items-center'>{notFound}</p>
            ) : (
                <div className='w-9/12 mx-auto grid md:grid-cols-2 gap-5 pb-10 '>
                    {
                        isShow ? donations.map(donation => <Card key={donation.id} donation={donation}></Card>)
                            :
                            donations.slice(0, 4).map(donation => <Card key={donation.id} donation={donation}></Card>)
                    }
                </div>

            )}
            <div> {donations.length > 4 && <button onClick={() => setIsShow(!isShow)} className='text-center w-full bg-blue-200 '>{isShow ? "Show Less" : "Show more"}</button>} </div>
        </div>
    );
};

export default Donation;
