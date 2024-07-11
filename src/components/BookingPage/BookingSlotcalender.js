import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function BookingSchedule() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTime(null); // Reset selected time when date changes
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleBooking = () => {
    if (selectedDate && selectedTime) {
      // Perform booking logic here
      alert(`Booking confirmed for ${selectedDate.toLocaleDateString()} at ${selectedTime}`);
      // You can replace the console.log with your booking logic (e.g., API call, form submission)
    } else {
      alert('Please select a date and time');
    }   
  };

  // Dummy time slots for demonstration
  const timeSlots = ['10:00 AM', '12:00 PM', '2:00 PM', '4:00 PM'];

  return (
    <div className="booking-schedule">
      <h2>Book Your Schedule</h2>
      <div>
        <label>Select Date:</label>
        <DatePicker selected={selectedDate} onChange={handleDateChange} />
      </div>
      {selectedDate && (
        <div>
          <label>Select Time Slot:</label>
          <select onChange={(e) => handleTimeSelect(e.target.value)} value={selectedTime}>
            <option value="">Select Time Slot</option>
            {timeSlots.map((time, index) => (
              <option key={index} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
      )}
      <button onClick={handleBooking}>Book Schedule</button>
    </div>
  );
}
