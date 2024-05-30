import React, { useContext, useState } from 'react'
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
    const [filterdata, setfilterdata] = useState(buses)
    const [filterbus, setfilterbus] = useState({
        primo: false,
        seatfilter: true,
        timefilter: true
        

    })
    const [sortingbus, setsortingbus] = useState(buses)
    const [sortOrder, setSortOrder] = useState({
        key: null,
        order: 'default'
    });

    const sortFunctions = { // object with key and value as function
        departureTime: (a, b) => {
            const [hourA, minuteA] = a.departureTime.split(':').map(Number);
            const [hourB, minuteB] = b.departureTime.split(':').map(Number);
            return hourA !== hourB ? hourA - hourB : minuteA - minuteB;
        },
        duration: (a, b) => {
            const [hourA, minuteA] = a.duration.split(':').map(Number);
            const [hourB, minuteB] = b.duration.split(':').map(Number);
            return hourA !== hourB ? hourA - hourB : minuteA - minuteB;

        },
        destinationTime: (a, b) => {
            const [hourA, minuteA] = a.destinationTime.split(':').map(Number);
            const [hourB, minuteB] = b.destinationTime.split(':').map(Number);
            return hourA !== hourB ? hourA - hourB : minuteA - minuteB;
        },
        rating: (a, b) => b.rating - a.rating,
        price: (a, b) => a.price - b.price,
        AvaliableSeats: (a, b) => b.AvaliableSeats.length - a.AvaliableSeats.length,
    };


    const sorting = (key) => {
        let order = 'ascending';
        if (sortOrder.key === key) {
            if (sortOrder.order === 'ascending') {
                order = 'descending';
                console.log(1);
            } else if (sortOrder.order === 'descending') {
                order = 'default';
                console.log(2);
            } else {
                order = 'ascending';
                console.log(3);
            }
        }

        let sortedArray = [...buses];
        if (order === 'ascending') {
            sortedArray.sort(sortFunctions[key]);
        } else if (order === 'descending') {
            sortedArray.sort((a, b) => sortFunctions[key](b, a));
        }

        setSortOrder({ key, order });
        setsortingbus(order === 'default' ? buses : sortedArray);


    };
    const stylecolor = (key) => {
        // if (sortOrder.key === key && sortOrder.order === 'ascending') {
        //     return 'button-ascending, text'
        // }
        // else if (sortOrder.key === key && sortOrder.order === 'descending') {
        //     return 'button-descending, text'
        // }
        // else {
        //     return 'text'
        // }
            return {
            color: sortOrder.key === key && sortOrder.order !== 'default' ? '#db4444' : '#000',
        }
    }
    const uparrow = (key) => {
       return { 
        display : sortOrder.key === key && sortOrder.order === 'ascending' ? 'inline-block' : sortOrder.key === key && sortOrder.order === 'descending' ? 'none' : 'none'
       }
    }
    const downarrow = (key) => {
        return { 
         display : sortOrder.key === key && sortOrder.order === 'descending' ? 'inline-block' : sortOrder.key === key && sortOrder.order === 'ascending' ? 'none' : 'none'
        }
     }
// console.log(buses.sort( (a, b) => b.AvaliableSeats.length - a.AvaliableSeats.length)); //upper sorting work same as this log


//........filter
    const primobus = () => {
        setsortingbus(filterdata.filter( filterbus.primo === false ? ((i) => i.primo === !filterbus.primo) : ((i) => 'hello')))
        setfilterbus((prevvalue) => ({...prevvalue,  primo: !prevvalue.primo}))
        console.log(filterbus.primo);
    }
    const TimeDuration = (key) => {
        const busestime = filterdata.map( (i) => intimerange(i.departureTime, key))
        const filterData = filterbus.timefilter ? (filterdata.filter((_,index) => busestime[index])) : (filterdata)
        setfilterbus((prevvalue) => ({...prevvalue, timefilter: !prevvalue.timefilter}))
        return setsortingbus(filterData)
        // return console.log(setsortingbus(filterdata.filter((_,index) => busestime[index])));
    }
    const arrivaltime = (key) => {
        const busestime = filterdata.map( (i) => intimerange(i.destinationTime, key))
        const filterData = filterbus.timefilter ? (filterdata.filter((_,index) => busestime[index])) : (filterdata)
        setfilterbus((prevvalue) => ({...prevvalue, timefilter: !prevvalue.timefilter}))
        return setsortingbus(filterData)
    }


    const intimerange = (time, range) => {
        // console.log(range);
        const [hours, minutes] = time.split(':').map(Number)
        const timeinminute = hours*60 + minutes;
        switch(range){
            case 'before 6am':
            return timeinminute < 360;

            case '6am to 12pm':
            return timeinminute >= 360 && timeinminute < 720;

            case '12pm to 6pm':
            return timeinminute >= 720 && timeinminute < 1080;

            case 'After 6pm':
            return timeinminute >= 1080;


            default:
            return true;
        }
    }

    const bustype = (key) => {
        setsortingbus( filterbus.seatfilter ? (filterdata.filter((i) => i.busType.includes(key))) : (filterdata))
        setfilterbus((prevvalue) => ({...prevvalue, seatfilter: !prevvalue.seatfilter}))
        // console.log(filterdata.filter((i) => i.busType.includes(key))); 
    }

// console.log(filterdata.map( (i)=> (i.departureTime, key)))}

    return (
        <>
            <section>
                <div className='main my-[100px] w-[100%]'>
                    <div className='upper-portion px-6'>
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
                                <button className='py-[10px] text-[12px] border-b opacity-70' onClick={primobus} ><i className='inline-block mr-2'><FaSearchLocation /></i>Primo Bus</button>
                            </div>
                            <div className='Departure mb-8'>
                                <h3 className='pb-[16px] text-[12px]  tracking-wider font-[600] uppercase'>Departure Time</h3>
                                <div className='py-2 text-[12px]  flex'>
                                    <input className='p-2 mr-3' type="Checkbox" name="" id="6am" onClick={() => TimeDuration('before 6am')}/>
                                    <label className='flex opacity-70 ' htmlFor="6am">
                                        <i className=' mr-2 pt-1'><BsSunrise /></i>
                                        <p> Before 6 am</p>
                                    </label>
                                </div>
                                <div className='py-2 text-[12px]  flex'>
                                    <input className='p-2 mr-3' type="Checkbox" name="" id="12pm" onClick={() => TimeDuration('6am to 12pm')} />
                                    <label className='flex opacity-70 ' htmlFor="12pm">
                                        <i className=' mr-2 pt-1'><BsSun /></i>
                                        <p> 6 am to 12 pm</p>
                                    </label>
                                </div>
                                <div className='py-2 text-[12px]  flex'>
                                    <input className='p-2 mr-3' type="Checkbox" name="" id="5pm" onClick={() => TimeDuration('12pm to 6pm')} />
                                    <label className='flex opacity-70 ' htmlFor="5pm">
                                        <i className=' mr-2 pt-1'><BsSun /></i>
                                        <p> 12 pm to 6 pm</p>
                                    </label>
                                </div>
                                <div className='py-2 text-[12px]  flex'>
                                    <input className='p-2 mr-3' type="Checkbox" name="" id="6pm" onClick={() => TimeDuration('After 6pm')} />
                                    <label className='flex opacity-70 ' htmlFor="6pm">
                                        <i className=' mr-2 pt-1'><BsSunset /></i>
                                        <p> After 6 pm</p>
                                    </label>
                                </div>
                            </div>
                            <div className='Bus-Types mb-8 uppercase'>
                                <h3 className='pb-[16px] text-[12px]  tracking-wider font-[600]'>Bus Types</h3>
                                <div className='py-2 text-[12px]  flex'>
                                    <input className='p-2 mr-3' type="Checkbox" name="" id="seater" onClick={() => bustype('Seater')} />
                                    <label className='flex opacity-70 ' htmlFor="seater">
                                        SEATER
                                    </label>
                                </div>
                                <div className='py-2 text-[12px]  flex'>
                                    <input className='p-2 mr-3' type="Checkbox" name="" id="sleeper" onClick={() => bustype('Sleeper')}/>
                                    <label className='flex opacity-70 ' htmlFor="sleeper">
                                        SLEEPER
                                    </label>
                                </div>
                                <div className='py-2 text-[12px]  flex'>
                                    <input className='p-2 mr-3' type="Checkbox" name="" id="ac" onClick={() => bustype('A/C')} />
                                    <label className='flex opacity-70 ' htmlFor="ac">
                                        AC
                                    </label>
                                </div>
                                <div className='py-2 text-[12px]  flex'>
                                    <input className='p-2 mr-3' type="Checkbox" name="" id="nonac" onClick={() => bustype('NON-AC')}/>
                                    <label className='flex opacity-70 ' htmlFor="nonac">
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
                                    <input className='p-2 mr-3' type="Checkbox" name="" id="before" onChange={() => arrivaltime('before 6am')} />
                                    <label className='flex opacity-70 ' htmlFor="before">
                                        <i className=' mr-2 pt-1'><BsSunrise /></i>
                                        <p> Before 6 am</p>
                                    </label>
                                </div>
                                <div className='py-2 text-[12px]  flex'>
                                    <input className='p-2 mr-3' type="Checkbox" name="" id="amtopm" onChange={() => arrivaltime('6am to 12pm')} />
                                    <label className='flex opacity-70 ' htmlFor="amtopm">
                                        <i className=' mr-2 pt-1'><BsSun /></i>
                                        <p> 6 am to 12 pm</p>
                                    </label>
                                </div>
                                <div className='py-2 text-[12px]  flex'>
                                    <input className='p-2 mr-3' type="Checkbox" name="" id="pmtopm" onChange={() => arrivaltime('12pm to 6pm')}/>
                                    <label className='flex opacity-70 ' htmlFor="pmtopm">
                                        <i className=' mr-2 pt-1'><BsSun /></i>
                                        <p> 12 pm to 6 pm</p>
                                    </label>
                                </div>
                                <div className='py-2 text-[12px]  flex'>
                                    <input className='p-2 mr-3' type="Checkbox" name="" id="after"onChange={() => arrivaltime('After 6pm')} />
                                    <label className='flex opacity-70 ' htmlFor="after">
                                        <i className=' mr-2 pt-1'><BsSunset /></i>
                                        <p> After 6 pm</p>
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
                            <div className='sort px-3 mb-4 grid grid-cols-8'>
                                <h3> <span className='text-[14px] font-[600]'>{sortingbus.length} Buses</span> found</h3>
                                <h3 className='font-[600] text-[14px] mx-auto'>SORT BY:</h3>
                                <button className='text-[14px] opacity-75 text-left' style={stylecolor('departureTime')} onClick={() => sorting('departureTime')}>Departure <span style={uparrow('departureTime')}>↑</span><span style={downarrow('departureTime')}>↓</span></button>
                                <button className='text-[14px] opacity-75 text-left' style={stylecolor('duration')} onClick={() => sorting('duration')}>Duration<span style={uparrow('duration')}>↑</span><span style={downarrow('duration')}>↓</span></button>
                                <button className='text-[14px] opacity-75 text-left' style={stylecolor('destinationTime')} onClick={() => sorting('destinationTime')}>Arrival<span style={uparrow('destinationTime')}>↑</span><span style={downarrow('destinationTime')}>↓</span></button>
                                <button className='text-[14px] opacity-75 text-left' style={stylecolor('rating')} onClick={() => sorting('rating')}>Rating<span style={uparrow('rating')}>↓</span><span style={downarrow('rating')}>↑</span></button>
                                <button className='text-[14px] opacity-75 text-left' style={stylecolor('price')} onClick={() => sorting('price')}>Fare<span style={uparrow('price')}>↑</span><span style={downarrow('price')}>↓</span></button>
                                <button className='text-[14px] opacity-75 text-left' style={stylecolor('AvaliableSeats')} onClick={() => sorting('AvaliableSeats')}>Seat Avalible<span style={uparrow('AvaliableSeats')}>↓</span><span style={downarrow('AvaliableSeats')}>↑</span></button>
                            </div>
                            {
                                sortingbus.map((i) => (
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