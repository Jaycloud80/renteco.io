import React from 'react';
import './Home.css';
import Banner from './Banner';
import Card from './Card';
import photo from './photographer.jpg';

function Home() {

    return (
        <div className="home"> 
                <Banner
                heading='Explore the World of Eco Friendly Renting' 
                subheading='Reduce your carbon renting out goods and services instead of buying.'
            //    buttonText='Launch Marketplace'
               />
                {/* <div className='home__section'> */}
                {/* <Card
                src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                alt='sexy'
                title="Rent Items"
                description="Choose from cars and apartments to bikes and kyacks"
            /> */}
             {/* <Card
                src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                title="Rent Homes and Apartments"
                description="Find a sublease or a vacation rental"
            /> */}
            {/* <Card
                src={photo}
                title="Rent Services"
                description="Hire a photographers or a book a massage"
            /> */}
            {/* <Card
                src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                title="Rent Software"
                description="Borrow the remainder of a someones software subscription"
            /> */}
            {/* </div> */}
            <div className='home__header'>
            <h3>Featured Rentals</h3>
            </div>
            <div className='home__section'>
            <Card
                src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
                title="3 Bedroom Flat in Bournemouth"
                description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
                price="$130/day"
            />
            <Card
                src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                title="Penthouse in London"
                description="Enjoy the amazing sights of London with this stunning penthouse"
                price="$350/day"
            />
            <Card
                src="https://media.nomadicmatt.com/2018/apartment.jpg"
                title="1 Bedroom apartment"
                description="Superhost with great amenities and a fabolous shopping complex nearby"
                price="$70/day"
            /> 
       
                </div>
        </div>
    )
}

export default Home
