import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Error from "../MainLayout/Error";
import Home from "../Pages/Home";
import Donation from "../Pages/Donation";
import Statistics from "../Pages/Statistics";
import DonateDetails from "../DonateDetails/DonateDetails";


const myCreatedRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,

        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('data.json')
            },
            {
                path: '/donation',
                element: <Donation></Donation>
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>
            },
            {
                path: '/donatedetails/:id',
                element: <DonateDetails></DonateDetails>,
                loader: () => fetch('data.json')
            }
        ]


    },

])


export default myCreatedRoute;