import React, { createContext } from 'react'
import * as Images from '../../assets/Images/Image'






export const MyContext = createContext();

export const buses = [
    {
        id: 1,
        logoimg: Images.PrimoLogo,
        primo: true,
        title: 'Gajraj Travels',
        busType: 'A/C Sleeper (2+1)',
        departureTime: '22:00',
        departureLocation: 'Jodhpur',
        duration: '07:10',
        destinationTime: '05:10',
        destinationLocation: 'Jaipur',
        rating: '4.8',
        numberOfRating: '333',
        price: '650',
        AvaliableSeats: [1, 2, 5, 11, 13, 16, 17, 19, 20, 22, 25, 26, 28, 33, 35],
        singleSeats: '12 Single Seats',
        seatLayout: {
            lower: { 
                firstRow:[
                        [1, 2, 3, 4, 5, 6], 
                        [7, 8, 9, 10, 11, 12]],
                secondRow: [[13, 14, 15, 16, 17, 18]]
            },
            upper: {
                firstRow: [
                    [19, 20, 21, 22, 23, 24], 
                    [25, 26, 27, 28, 29, 30]
                ],
                secondRow: [[31, 32, 33, 34, 35, 36]]
            }
        }
    },
    {
        id: 2,
        logoimg: Images.PrimoLogo,
        primo: true,
        title: 'Jain travels regd',
        busType: 'A/C Sleeper (2+1)',
        departureTime: '22:30',
        departureLocation: 'Jodhpur',
        duration: '07:25',
        destinationTime: '05:55',
        destinationLocation: 'Jaipur',
        rating: '4.4',
        numberOfRating: '378',
        price: '650',
        AvaliableSeats: [1, 4, 7, 11, 13, 16, 18, 20, 21, 22, 23, 25, 28, 30, 35 ],
        singleSeats: '24 window Seats',
        seatLayout: {
            lower: { 
                firstRow:[
                        [1, 2, 3, 4, 5, 6], 
                        [7, 8, 9, 10, 11, 12]],
                secondRow: [[13, 14, 15, 16, 17, 18]]
            },
            upper: {
                firstRow: [
                    [19, 20, 21, 22, 23, 24], 
                    [25, 26, 27, 28, 29, 30]
                ],
                secondRow: [[31, 32, 33, 34, 35, 36]]
            }
        }
    },
    {
        id: 3,
        logoimg: Images.PrimoLogo,
        primo: true,
        title: 'M R Travels',
        busType: 'A/C Seater / Sleeper (2+1)',
        departureTime: '22:45',
        departureLocation: 'Jodhpur',
        duration: '07:15',
        destinationTime: '06:00',
        destinationLocation: 'Jaipur',
        rating: '4.6',
        numberOfRating: '419',
        price: '500',
        AvaliableSeats: [1, 6, 7, 10, 15, 19, 21, 22, 24, 25, 27, 33, 34, 35, 40 ],
        singleSeats: '26 single Seats',
        seatLayout: {
            lower: {
                firstRow: [
                    [1, 2, 3, 4, 5, 6, 7, 8],
                         [9, 10, 11, 12, 13, 14, 15, 16]
                        ],
                secondRow: [[17, 18, 19, 20, 21, 22]]
            },
            upper: {
                firstRow: [
                    [23, 24, 25, 26, 27, 28], 
                    [29, 30, 31, 32, 33, 34]
                ],
                secondRow: [[35, 36, 37, 38, 39, 40]]

            }
        }
    },
    {
        id: 4,
        logoimg: Images.PrimoLogo,
        primo: true,
        title: 'M R Travels',
        busType: 'A/C Seater / Sleeper (2+1)',
        departureTime: '22:05',
        departureLocation: 'Jodhpur',
        duration: '06:40',
        destinationTime: '04:40',
        destinationLocation: 'Jaipur',
        rating: '4.5',
        numberOfRating: '117',
        price: '500',
        AvaliableSeats: [5, 6, 7, 10, 13, 18, 19, 20, 21, 22, 23, 30, 31, 33, 40 ],
        singleSeats: '26 window Seats',
        seatLayout: {
            lower: {
                firstRow: [
                    [1, 2, 3, 4, 5, 6, 7, 8],
                         [9, 10, 11, 12, 13, 14, 15, 16]
                        ],
                secondRow: [[17, 18, 19, 20, 21, 22]]
            },
            upper: {
                firstRow: [
                    [23, 24, 25, 26, 27, 28], 
                    [29, 30, 31, 32, 33, 34]
                ],
                secondRow: [[35, 36, 37, 38, 39, 40]]

            }
        }
    },

    {
        id: 5,
        logoimg: Images.PrimoLogo,
        primo: true,
        title: 'Jain travels regd',
        busType: 'A/C Sleeper (2+1)',
        departureTime: '20:00',
        departureLocation: 'Jodhpur',
        duration: '06:15',
        destinationTime: '02:15',
        destinationLocation: 'Jaipur',
        rating: '4.6',
        numberOfRating: '50',
        price: '950',
        AvaliableSeats: [3, 4, 5, 9, 13, 18, 19, 20, 22, 25, 29, 30, 33, 34, 35, 36 ],
        singleSeats: '21 window Seats',
        seatLayout: {
            lower: { 
                firstRow:[
                        [1, 2, 3, 4, 5, 6], 
                        [7, 8, 9, 10, 11, 12]],
                secondRow: [[13, 14, 15, 16, 17, 18]]
            },
            upper: {
                firstRow: [
                    [19, 20, 21, 22, 23, 24], 
                    [25, 26, 27, 28, 29, 30]
                ],
                secondRow: [[31, 32, 33, 34, 35, 36]]
            }
        }
    },
    {
        id: 6,
        logoimg: Images.PrimoLogo,
        primo: true,
        title: 'Jain travels regd',
        busType: 'NON-AC Seater / Sleeper 2+1',
        departureTime: '22:00',
        departureLocation: 'Jodhpur',
        duration: '08:12',
        destinationTime: '06:12',
        destinationLocation: 'Jaipur',
        rating: '4.0',
        numberOfRating: '52',
        price: '400',
        AvaliableSeats: [4, 5, 7, 8, 13, 14, 20, 22, 23, 30, 31, 33, 34, 39, 40, 42 ],
        singleSeats: '6 Single Seats',
        seatLayout: {
            lower: {
                firstRow: [
                    [1, 2, 3, 4, 5, 6, 7, 8, 9],
                 [10, 11, 12, 13, 14, 15, 16, 17, 18]
                ] ,
                secondRow: [[19, 20, 21, 22, 23, 24]]
            },
            upper: {
                firstRow: [
                    [25, 26, 27, 28, 29, 30],
                 [31, 32, 33, 34, 35, 36]
                ],
                secondRow: [[37, 38, 39, 40, 41, 42]]

            }
        }
    },
    {
        id: 7,
        // logoimg: Images.PrimoLogo,
        title: 'Jain travels regd',
        busType: 'A/C Seater / Sleeper (2+1)',
        departureTime: '14:00',
        departureLocation: 'Jodhpur',
        duration: '06:45',
        destinationTime: '20:45',
        destinationLocation: 'Jaipur',
        rating: '3.6',
        numberOfRating: '49',
        price: '500',
        AvaliableSeats: [1, 2, 5, 9, 11, 21, 25, 28, 30, 32, 33, 34, 35, 40 ],
        singleSeats: '26 window Seats',
        seatLayout: {
            lower: {
                firstRow: [
                    [1, 2, 3, 4, 5, 6, 7, 8],
                         [9, 10, 11, 12, 13, 14, 15, 16]
                        ],
                secondRow: [[17, 18, 19, 20, 21, 22]]
            },
            upper: {
                firstRow: [
                    [23, 24, 25, 26, 27, 28], 
                    [29, 30, 31, 32, 33, 34]
                ],
                secondRow: [[35, 36, 37, 38, 39, 40]]

            }
        }
    },
    {
        id: 8,
        // logoimg: Images.PrimoLogo,
        title: 'Bhagwati Travels and Tours',
        busType: 'A/C Sleeper (2+1)',
        departureTime: '23:30',
        departureLocation: 'Jodhpur',
        duration: '06:30',
        destinationTime: '06:00',
        destinationLocation: 'Jaipur',
        rating: '2.6',
        numberOfRating: '65',
        price: '400',
        AvaliableSeats: [1, 3, 8, 10,22, 25,  32, 33, 34, 35, 38, 42 ],
        singleSeats: '6 window Seats',
        seatLayout: {
            lower: {
                firstRow: [
                    [1, 2, 3, 4, 5, 6, 7, 8, 9],
                 [10, 11, 12, 13, 14, 15, 16, 17, 18]
                ] ,
                secondRow: [[19, 20, 21, 22, 23, 24]]
            },
            upper: {
                firstRow: [
                    [25, 26, 27, 28, 29, 30],
                 [31, 32, 33, 34, 35, 36]
                ],
                secondRow: [[37, 38, 39, 40, 41, 42]]

            }
        }
    },
    {
        id: 9,
        // logoimg: Images.PrimoLogo,
        title: 'Swagat Travels',
        busType: 'A/C Seater / Sleeper (2+1)',
        departureTime: '22:42',
        departureLocation: 'Jodhpur',
        duration: '06:48',
        destinationTime: '05:30',
        destinationLocation: 'Jaipur',
        rating: '3.0',
        numberOfRating: '18',
        price: '500',
        AvaliableSeats: [5, 7, 9, 10, 11, 35, 36, 37, 38, 39, 40 ],
        singleSeats: '12 window Seats',
        seatLayout: {
            lower: {
                firstRow: [
                    [1, 2, 3, 4, 5, 6, 7, 8],
                         [9, 10, 11, 12, 13, 14, 15, 16]
                        ],
                secondRow: [[17, 18, 19, 20, 21, 22]]
            },
            upper: {
                firstRow: [
                    [23, 24, 25, 26, 27, 28], 
                    [29, 30, 31, 32, 33, 34]
                ],
                secondRow: [[35, 36, 37, 38, 39, 40]]

            }
        }
    },
]
