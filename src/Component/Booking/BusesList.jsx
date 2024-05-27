import React, { useContext } from 'react'
import { FaSearchLocation, FaBed } from "react-icons/fa";
import { BsSunrise, BsSun, BsSunset } from "react-icons/bs";
import { CiSearch, CiWifiOn } from "react-icons/ci";
import { MdOutlineDirectionsBus, MdSos } from "react-icons/md";
import { BiCctv, BiBlanket } from "react-icons/bi";
import { PiPlugChargingLight, PiPlusCircle } from "react-icons/pi";
import { FaBottleWater } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";
import { LiaToiletSolid } from "react-icons/lia";
import { MyContext } from '../Data/Context';
import BusCard from './BusCard';

function BusesList() {
    let Search = <CiSearch />;
    const { buses } = useContext(MyContext)
    // console.log(buses);
    return (
        <>
            <section>
                <div className='main my-[100px] w-[100%]'>
                    <div className='px-6'>
                        <div className='flex py-2'>
                            <p className='font-[600] text-[12px] after:content-[">"] after:mr-1'>Home </p>
                            <p className=' text-[12px] after:content-[">"] after:mr-1 opacity-65 '>Bus Tickets </p>
                            <p className=' text-[12px] opacity-65 '>Jodhpur to Jaipur Bus</p>
                        </div>
                        <div className='py-2'>
                            <h2 className='font-[600]'>Jodhpur to Jaipur Bus</h2>
                        </div>
                        <div className='flex border-y py-3'>
                            <p className='font-[600] text-[16px] after:content-["→"] after:mx-2 after:text-[16px] '> Jodhpur</p>
                            <p className='font-[600] text-[16px] after:content-["<"] after:mx-2 after:text-[16px] '>Jaipur(Rajasthan)</p>
                            <p className='font-[600] text-[16px] after:content-[">"] after:mx-2 after:text-[16px] relative '> 24 may <span className=' absolute -bottom-1 left-[30%] font-[400] text-[12px]'>fri</span> </p>
                            <button className='border rounded py-1 px-6 bg-[#f8f4f4]'>Modify</button>
                        </div>
                    </div>

                    <div className='SearchResult relative mt-[50px] flex justify-between w-[100%] '>
                        <div className='Fliter-Box sticky bottom-0 px-6 py-3 w-[20%]'>
                            <div className='Filter mb-8'>
                                <h3 className='pb-[20px] text-[12px] border-b tracking-wider font-[600]'>FILTER</h3>
                                <p className='py-[10px] text-[12px] border-b opacity-70'><i className='inline-block mr-2'><FaSearchLocation /></i>Live Tracking</p>
                                <p className='py-[10px] text-[12px] border-b opacity-70'><i className='inline-block mr-2'><FaSearchLocation /></i>Primo Bus</p>
                            </div>
                            <div className='Departure mb-8'>
                                <h3 className='pb-[16px] text-[12px]  tracking-wider font-[600] uppercase'>Departure Time</h3>
                                <div className='py-2 text-[12px]  flex'>
                                    <input className='p-2 mr-3' type="Checkbox" name="" id="" />
                                    <label className='flex opacity-70 ' htmlFor="">
                                        <i className=' mr-2 pt-1'><BsSunrise /></i>
                                        <p> Before 6 am</p>
                                    </label>
                                </div>
                                <div className='py-2 text-[12px]  flex'>
                                    <input className='p-2 mr-3' type="Checkbox" name="" id="" />
                                    <label className='flex opacity-70 ' htmlFor="">
                                        <i className=' mr-2 pt-1'><BsSun /></i>
                                        <p> 6 am to 12 pm</p>
                                    </label>
                                </div>
                                <div className='py-2 text-[12px]  flex'>
                                    <input className='p-2 mr-3' type="Checkbox" name="" id="" />
                                    <label className='flex opacity-70 ' htmlFor="">
                                        <i className=' mr-2 pt-1'><BsSun /></i>
                                        <p> 12 pm to 6 pm</p>
                                    </label>
                                </div>
                                <div className='py-2 text-[12px]  flex'>
                                    <input className='p-2 mr-3' type="Checkbox" name="" id="" />
                                    <label className='flex opacity-70 ' htmlFor="">
                                        <i className=' mr-2 pt-1'><BsSunset /></i>
                                        <p> After 6 am</p>
                                    </label>
                                </div>
                            </div>
                            <div className='Bus-Types mb-8 uppercase'>
                                <h3 className='pb-[16px] text-[12px]  tracking-wider font-[600]'>Bus Types</h3>
                                <div className='py-2 text-[12px]  flex'>
                                    <input className='p-2 mr-3' type="Checkbox" name="" id="" />
                                    <label className='flex opacity-70 ' htmlFor="">
                                        SEATER
                                    </label>
                                </div>
                                <div className='py-2 text-[12px]  flex'>
                                    <input className='p-2 mr-3' type="Checkbox" name="" id="" />
                                    <label className='flex opacity-70 ' htmlFor="">
                                        SLEEPER
                                    </label>
                                </div>
                                <div className='py-2 text-[12px]  flex'>
                                    <input className='p-2 mr-3' type="Checkbox" name="" id="" />
                                    <label className='flex opacity-70 ' htmlFor="">
                                        AC
                                    </label>
                                </div>
                                <div className='py-2 text-[12px]  flex'>
                                    <input className='p-2 mr-3' type="Checkbox" name="" id="" />
                                    <label className='flex opacity-70 ' htmlFor="">
                                        NONAC
                                    </label>
                                </div>
                            </div>
                            <div className='Seat-Availability mb-8 '>
                                <h3 className='pb-[10px] text-[12px]  tracking-wider font-[600] uppercase'>SEAT AVAILABILITY</h3>
                                <div className='py-2 text-[12px]  flex'>
                                    <input className='p-2 mr-3' type="Checkbox" name="" id="" />
                                    <label className='flex opacity-70 ' htmlFor="">
                                        Single Seats
                                    </label>
                                </div>
                            </div>
                            <div className='Arrival mb-8'>
                                <h3 className='pb-[16px] text-[12px]  tracking-wider font-[600] uppercase'>Arrival Time</h3>
                                <div className='py-2 text-[12px]  flex'>
                                    <input className='p-2 mr-3' type="Checkbox" name="" id="" />
                                    <label className='flex opacity-70 ' htmlFor="">
                                        <i className=' mr-2 pt-1'><BsSunrise /></i>
                                        <p> Before 6 am</p>
                                    </label>
                                </div>
                                <div className='py-2 text-[12px]  flex'>
                                    <input className='p-2 mr-3' type="Checkbox" name="" id="" />
                                    <label className='flex opacity-70 ' htmlFor="">
                                        <i className=' mr-2 pt-1'><BsSun /></i>
                                        <p> 6 am to 12 pm</p>
                                    </label>
                                </div>
                                <div className='py-2 text-[12px]  flex'>
                                    <input className='p-2 mr-3' type="Checkbox" name="" id="" />
                                    <label className='flex opacity-70 ' htmlFor="">
                                        <i className=' mr-2 pt-1'><BsSun /></i>
                                        <p> 12 pm to 6 pm</p>
                                    </label>
                                </div>
                                <div className='py-2 text-[12px]  flex'>
                                    <input className='p-2 mr-3' type="Checkbox" name="" id="" />
                                    <label className='flex opacity-70 ' htmlFor="">
                                        <i className=' mr-2 pt-1'><BsSunset /></i>
                                        <p> After 6 am</p>
                                    </label>
                                </div>
                            </div>
                            <div className='Boarding-point mb-6 '>
                                <h3 className='pb-[12px] text-[12px] tracking-wider font-[600] uppercase'>BOARDING POINT</h3>
                                <div className='py-2 text-[12px]  flex'>
                                    <input className='p-2 border rounded' type="text" placeholder='BOARDING POINT' name="" id="" />
                                </div>
                            </div>
                            <div className='Dropping-point mb-6 '>
                                <h3 className='pb-[12px] text-[12px] tracking-wider font-[600] uppercase'>DROPPING POINT</h3>
                                <div className='py-2 text-[12px]  flex'>
                                    <input className='p-2 border rounded' type="text" placeholder='DROPPING POINT' name="" id="" />
                                </div>
                            </div>
                            <div className='Operator mb-6 '>
                                <h3 className='pb-[12px] text-[12px] tracking-wider font-[600] uppercase'>Operator</h3>
                                <div className='py-2 text-[12px]  flex'>
                                    <input className='p-2 border rounded' type="text" placeholder='OPERATOR' name="" id="" />
                                </div>
                            </div>
                            <div className='RTC-busType mb-6 '>
                                <h3 className='pb-[10px] text-[12px] tracking-wider font-[600] uppercase'>RTC BUS TYPE</h3>
                                <div className='py-2 text-[12px]  flex'>
                                    <input className='p-2 mr-3' type="Checkbox" name="" id="" />
                                    <label className='flex opacity-70 ' htmlFor="">
                                        EXPRESS
                                    </label>
                                </div>
                            </div>
                            <div className='Amenities mb-6  '>
                                <h3 className='pb-[10px] text-[12px] tracking-wider font-[600] uppercase'>Amenities</h3>
                                <button className='uppercase flex px-3 py-1 mb-2 border rounded ' >
                                    <i className='inline-block mr-2'><CiWifiOn /></i>
                                    <p className='text-[12px]'>wifi</p>
                                </button>
                                <button className='uppercase flex px-3 py-1 mb-2 border rounded ' >
                                    <i className='inline-block mr-2'><FaBottleWater /></i>
                                    <p className='text-[12px]'>Water Bottle</p>
                                </button>
                                <button className='uppercase flex px-3 py-1 mb-2 border rounded ' >
                                    <i className='inline-block mr-2'><FaBed /></i>
                                    <p className='text-[12px]'>bed sheet</p>
                                </button>
                                <button className='uppercase flex px-3 py-1 mb-2 border rounded ' >
                                    <i className='inline-block mr-2'><BiBlanket /></i>
                                    <p className='text-[12px]'>blankets</p>
                                </button>
                                <button className='uppercase flex px-3 py-1 mb-2 border rounded ' >
                                    <i className='inline-block mr-2'><PiPlugChargingLight /></i>
                                    <p className='text-[12px]'>charging point</p>
                                </button>
                                <button className='uppercase flex px-3 py-1 mb-2 border rounded ' >
                                    <i className='inline-block mr-2'><MdOutlineDirectionsBus /></i>
                                    <p className='text-[12px]'>track my bus</p>
                                </button>
                                <button className='uppercase flex px-3 py-1 mb-2 border rounded w-[100%] ' >
                                    <i className='inline-block mr-2'><MdSos /></i>
                                    <p className='text-[12px] overflow-hidden text-ellipsis text-nowrap'>emergency contact number</p>
                                </button>
                                <button className='uppercase flex px-3 py-1 mb-2 border rounded ' >
                                    <i className='inline-block mr-2'><LiaToiletSolid /></i>
                                    <p className='text-[12px]'>toilet</p>
                                </button>

                            </div>


                        </div>

                        <div className='buslist w-[80%]'>
                            {
                                buses.map((i) => (
                                    <div className='mb-[50px]'>
                                        <BusCard
                                            key={i.id}
                                            imgurl={i.logoimg}
                                            title={i.title}
                                            busType={i.busType}
                                            departureTime={i.departureTime}
                                            departureLocation={i.departureLocation}
                                            duration={i.duration}
                                            destinationTime={i.destinationTime}
                                            destinationLocation={i.destinationLocation}
                                            rating={i.rating}
                                            numberOfRating={i.numberOfRating}
                                            price={i.price}
                                            AvaliableSeats={i.AvaliableSeats}
                                            singleSeats={i.singleSeats}
                                            seatlayout={i.seatLayout}

                                        />
                                    </div>
                                ))
                            }
                        </div>

                    </div>
                </div>

            </section>
        </>
    )
}

export default BusesList