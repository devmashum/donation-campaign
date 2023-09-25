// 
import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';
import Card from '../DonateDetails/Card';

const Donation = () => {
    const [donations, setDonations] = useState([]);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        const donationsItems = JSON.parse(localStorage.getItem('donations')) || [];

        if (donationsItems.length > 0) {
            setDonations(donationsItems);
        } else {
            setNotFound("No Donation Found!");
        }
    }, []);

    return (
        <div>
            {notFound ? (
                <p className='h-[80vh] flex justify-center items-center'>{notFound}</p>
            ) : (
                <div className='w-9/12 mx-auto grid md:grid-cols-2 gap-5 pb-10 '>
                    {
                        donations.map(donation => <Card key={donation.id} donation={donation}></Card>)
                    }
                </div>
            )}
        </div>
    );
};

export default Donation;
