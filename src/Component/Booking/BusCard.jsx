import React, { useState } from 'react'
import { IoIosStar } from "react-icons/io";
import { SlPeople } from "react-icons/sl";
import * as Images from '../../assets/Images/Image.js'
import { MdOutlineDirectionsBus, MdSos } from "react-icons/md";
import { BiCctv } from "react-icons/bi";
import { PiPlugChargingLight, PiPlusCircle } from "react-icons/pi";
import { FaBottleWater } from "react-icons/fa6";
import { buses } from '../Data/Context.js';


function BusCard({ imgurl, title, busType, departureTime, departureLocation, duration, destinationTime, destinationLocation, rating, numberOfRating, price, AvaliableSeats, singleSeats, seatlayout }) {
    const [toggelviewseat, settoggleviewsaet] = useState(true)
    const handelviewSeats = () => {
        settoggleviewsaet(!toggelviewseat)
    }
    const [faredetails, setfaredetails] = useState(false)
    const Showfare = () => {
        setfaredetails(!faredetails)
    }
    const togglestyle = {
        transition: 'opacity .5s ease-out',
        opacity: !toggelviewseat ? '1' : '0',
    }

    const RatingBox = {
        backgroundColor: rating >= 4 ? '#38b87c' : rating >= 3 ? '#ebaf3c' : '#f04747'
    }
    const icons = [<MdOutlineDirectionsBus />, <BiCctv />, <PiPlugChargingLight />, <FaBottleWater />, <PiPlusCircle />]

    const [seatBooking, setseatBooking] = useState([])
    const bookseats = (seat) => {
        if (seatBooking.includes(seat)) {
            const selectedseat = seatBooking.filter((selectedSeat) => (selectedSeat !== seat))
            setseatBooking(selectedseat)
            return // this if condition do the selecting and unselecting of seats 
        }
        else {
            seatBooking.length < 6 ? (setseatBooking(prevState => ([...prevState, seat]))) :
                (window.alert('The maximum number of seats that can be selected is 6'))
        }
    }


    const avalblseats = (seat) => (AvaliableSeats.includes(seat));
    console.log(seatBooking);
    const selectedSeat = (seat) => seatBooking.includes(seat)

    const generateSeats = (array, key = '') => {
        return array.map((item) =>
            <div className='seats flex justify-between py-1'>
                {item.map((seat) =>
                    <div className='seat border-[2px] w-[50px] text-center cursor-pointer rounded'
                        style={{
                            backgroundColor: avalblseats(seat) ? (selectedSeat(`${key}${seat}`) ? '#db4444' : '#fff') : ('#d3d3d3'),
                            color: selectedSeat(`${key}${seat}`) ? '#fff' : '#000',
                        }}
                        key={seat}
                        // onClick={ avalblseats ? () => bookseats(`${key}${seat}`) : () => (donothing())} 
                        onClick={avalblseats(seat) ? () => bookseats(`${key}${seat}`) : undefined}>
                        {key}{seat}
                    </div>
                )}</div>
        )
    }




    return (
        <>
            <div>
                <div className='Buscard shadow-xl border rounded py-4 px-6 group '>
                    <div className='grid grid-cols-8 mb-10 relative'>
                        {imgurl && <div className='w-[80px] h-[36px] mb-1 col-span-8'><img className='w-[100%] h-[100%] object-cover' src={imgurl} alt="" /></div>}
                        <h4 className='font-[700] text-[14px] col-span-2'>{title}</h4>
                        <h4 className='font-[700] text-[20px]'> {departureTime}</h4>
                        <p className='text-[14px] opacity-70'> {duration}</p>
                        <h4 className='font-[700] text-[20px]'> {destinationTime}</h4>
                        <p className='flex w-[50px] rounded text-[#fff] pt-1' style={RatingBox}> <i className='pt-1 mr-2'><IoIosStar /></i>{rating}</p>
                        <p className='font-[700] text-[20px]'> <span className='font-[400] text-[14px] opacity-70'>INR</span> {price} </p>
                        <p className='text-[12px] opacity-70 col-start-1 col-span-2'>{busType}</p>
                        <p className=' col-start-6 flex opacity-70'> <i className='pt-1 mr-2'><SlPeople /></i> {numberOfRating}</p>
                        <p className='col-start-8 opacity-70'>{AvaliableSeats.length} Seats available</p>
                        <p className=' col-start-3 opacity-70'>{departureLocation}</p>
                        <p className=' col-start-5 opacity-70'>{destinationLocation}</p>
                        <p className='  col-start-8 opacity-70'>{singleSeats}</p>
                    </div>

                    <div className='flex'>
                        {icons.map((icon, index) => (

                            <div key={index} className='text-[20px] opacity-50 p-2'>
                                {icon}
                            </div>
                        ))}
                    </div>

                    <div className='flex  '>
                        <div className='text-[14px]? flex ml-auto opacity-0 group-hover:opacity-100 transition-all duration-1000 hover:text-[#da4e52] pt-2'>
                            <p className=' after:content-["|"] after:mx-2 after:text-[#da4e52]'>AmenitiesBus</p>
                            <p className=' after:content-["|"] after:mx-2 after:text-[#da4e52]'>Photos</p>
                            <p className=' after:content-["|"] after:mx-2 after:text-[#da4e52]'>Boarding & Dropping</p>
                            <p className=' after:content-["|"] after:mx-2 after:text-[#da4e52]'>Points</p>
                            <p className=' after:content-["|"] after:mx-2 after:text-[#da4e52]'>ReviewsBooking</p>
                            <p className=' '>policiesBus Route</p>
                        </div>
                        <button className='py-2 px-4 bg-[#db4444] text-[#fff] ml-auto font-[500] rounded' onClick={handelviewSeats}>
                            {!toggelviewseat ? 'hide Seats' : 'view Seats'}
                        </button>
                    </div>
                </div>
                {!toggelviewseat &&
                    <>
                        <div className='main relative mt-10 flex justify-between px-10' style={togglestyle} >
                            <div className='buslayout'>
                                <div className='bg-[#dde1ff] w-[500px] text-center  py-2 rounded'>
                                    <p>Click on an Available seat to proceed with your transaction.</p>
                                </div>
                                <div className='lowerdeck  border-[2px] border-[#0007] w-[500px] px-4 py-3 mt-12' >
                                    <h3 className=' uppercase mb-4'>lower deck</h3>
                                    <div className='firstRow '>
                                        {generateSeats(seatlayout.lower.firstRow, 'L')}
                                    </div>

                                    <div className='secondRow mt-6'>
                                        {generateSeats(seatlayout.lower.secondRow, 'L')}
                                    </div>
                                </div>

                                <div className='upperdeck  border-[2px] border-[#0007] w-[500px] px-4 py-3 mt-12' >
                                    <h3 className=' uppercase mb-4'>upper deck</h3>
                                    <div className='firstRow '>
                                        {generateSeats(seatlayout.upper.firstRow, 'U')}
                                    </div>

                                    <div className='secondRow mt-6'>
                                        {generateSeats(seatlayout.upper.secondRow, 'U')}
                                    </div>
                                </div>
                            </div>

                            {
                                seatBooking.length > 0 &&
                                <div className='seats details w-[40%] shadow-lg rounded py-10 px-5 '>
                                    <div className='flex justify-between'>
                                        <h3 className='font-[700] '>Boarding & Dropping</h3>
                                        <p className='text-[#5279d0] font-[700] '>CHANGE</p>
                                    </div>
                                    <div className='flex justify-between mt-4'>
                                        <div className='flex'>
                                            <p className='bg-[#0007] rounded-[50%] w-[5px] h-[5px] mt-[10px] mr-[10px]'></p>
                                            <p className=' opacity-60'>{departureLocation}</p>
                                        </div>
                                        <p className='font-[700]'>{departureTime}</p>
                                    </div>
                                    <div className='flex flex-col absolute h-[40px] -mt-2 leading-5 overflow-hidden '>
                                        <p>⁞</p>
                                        <p>⁞</p>
                                        <p>⁞</p>
                                        <p>⁞</p>
                                        <p>⁞</p>
                                    </div>
                                    <div className='flex justify-between mt-6 '>
                                        <div className='flex'>
                                            <p className='bg-[#0007] rounded-[50%] w-[5px] h-[5px] mt-[10px] mr-[10px]'></p>
                                            <p className=' opacity-60'>{destinationLocation}</p>
                                        </div>
                                        <p className='font-[700]'>{destinationTime}</p>
                                    </div>
                                    <div className='mt-6 flex justify-between border-y py-4 '>
                                        <p className='font-[600]'>Seat No.</p>
                                        <div>{
                                            seatBooking.join(", ")
                                        }
                                        </div>
                                    </div>
                                    <div className='mt-6  '>
                                        <p className='font-[600]'>Fare Details</p>
                                        {
                                            faredetails &&
                                            <div className='flex justify-between mt-3' style={{opacity: faredetails ? 1 : 0, transition: 'all .5s ease .3s'}}>
                                                <p className=' opacity-75 font-[300] capitalize'>basic fare</p>
                                                <div className=' opacity-75'>INR {price * seatBooking.length}</div>
                                            </div>
                                        }
                                        <div className='flex justify-between mt-3'>
                                            <div>
                                                <p className=' opacity-75 font-[300]'>Amount</p>
                                                <p className='opacity-75 text-[10px]'>Taxes will be calculated during payment</p>
                                            </div>
                                            <div className='font-[600]'>INR {price * seatBooking.length}</div>
                                        </div>
                                    </div>
                                    <div className='text-end mt-3'>
                                        <button className='text-[#d84e55] text-[14px]' onClick={() => Showfare()}>{!faredetails ? 'Show Fare Details' : 'hide Fare Details'}</button>
                                    </div>

                                    <button className='mt-4 w-[100%] py-2  rounded uppercase text-[#fff] text-[14px] bg-[#d84e55]'>Proceed to book</button>
                                </div>
                            }

                        </div>
                    </>
                }



            </div>
        </>
    )
}

export default BusCard