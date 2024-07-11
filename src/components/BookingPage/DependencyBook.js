import React from "react";
import DayTimePicker from '@mooncake-dev/react-day-time-picker';


export default function DependencyBook() {
    const handleScheduled = dateTime => {
        alert('your schedule has been booked ', dateTime);
      };



    return(
        <div classname="justify-content-center">
            <p className="calender-heading">Pick your date and time</p>
            <div>
                <DayTimePicker timeSlotSizeMinutes={60}  confirmText={"Schedule"}  onConfirm={handleScheduled} />
            </div>
        </div>
    )
}