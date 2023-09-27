
import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell } from "recharts";

const Statistics = () => {
    const [donations, setDonations] = useState([]);

    useEffect(() => {
        const donationsData = JSON.parse(localStorage.getItem("donations")) || [];
        setDonations(donationsData);
    }, []);

    const percentageDonated = (donations.length / 12) * 100;

    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

    const data = [
        { name: "Donated", value: percentageDonated },
        { name: "Remaining", value: 100 - percentageDonated },
    ];

    return (
        <div className="h-[80vh]  mx-auto ">
            <h2 className="text-2xl font-bold mb-4 pt-5 text-black text-center">Donation Statistics</h2>
            <p className="text-xl mb-4 text-black text-center">Total Donations: {donations.length}</p>

            <div className="text-xl font-bold">
                <div className=" w-[20%] text-center mx-auto bg-blue-600 text-white p-2 ">Donated: {percentageDonated.toFixed(2)}%</div>
                <div className=" bg-[#00C49F] mt-5 text-white p-2 w-[20%] text-center mx-auto">Remaining: {(100 - percentageDonated).toFixed(2)}%</div>
            </div>
            <div className="flex justify-center items-center">
                <PieChart width={400} height={400}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="40%"
                        innerRadius={0}
                        outerRadius={150}
                        fill="#8884d8"
                        paddingAngle={0}
                        dataKey="value"
                        labelLine={false} // Disable label lines
                        startAngle={0} // Start the chart from the top
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index]} />
                        ))}
                    </Pie>
                </PieChart>

            </div>
        </div>
    );
};

export default Statistics;

