import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";





const generateDates = (numDays) => {
    const dates = [];
    for (let i = 0; i < numDays; i++) {
        const date = new Date();
        date.setDate(date.getDate() + i);
        dates.push({
            day: date.toLocaleDateString("en-US", { weekday: "long" }),
            date: date.toLocaleDateString("en-US", { month: "short", day: 'numeric' }),
        })
    }
    return dates;
}
/* need to change functionality while connecting backend */
const generateTimeSlots = () => {
    const slots = [];
    const startHour = 9;
    const endHour = 17;
    for (let hour = startHour; hour <= endHour; hour++) {
        slots.push(`${hour}:00 - ${hour + 1}:00`);
    }
    return slots;
};
export default function NewBookingSlot() {

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);

    const dates = generateDates(7); // Generate dates for the next 7 days
    const slots = generateTimeSlots();

    useEffect(() => {
        setNav1(sliderRef1);
        setNav2(sliderRef2);
    }, []);
    return (
        <div>
            <div className="slider-container">
                <Slider asNavFor={nav2} ref={slider => (sliderRef1 = slider)}>
                    {dates.map((item, index) => (
                        <div key={index} className="date-slide">
                            <h3>{item.day}</h3>
                            <p>{item.date}</p>
                        </div>
                    ))}
                </Slider>
                <hr />
                <Slider
                    asNavFor={nav1}
                    ref={slider => (sliderRef2 = slider)}
                    slidesToShow={3}
                    swipeToSlide={true}
                    focusOnSelect={true}
                >
                    {slots.map((slot, index) => (
                        <div key={index} className="slot-slide">
                            <button className="slot-button">{slot}</button>
                        </div>
                    ))}
                </Slider>
            </div>

        </div>
    )
}