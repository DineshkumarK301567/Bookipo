import React from "react";


export default function Today() {

    return (
        <div className="sessions">
            <div className="slot_today">
                <div className="slot_session">
                    <h5>Morning slot</h5>
                </div>
                <div className="sess_bn py-2">
                    <button className="btn btn-outline-custom" >09.00 AM <br />
                        &#8377;900</button>
                    <button className="btn btn-outline-custom">10.00 AM <br />
                        &#8377;500</button>
                    <button className="btn btn-outline-custom">11.00 PM  <br />
                        &#8377;2000</button>
                        
                </div>
                <hr />
                <div className="slot_session">
                    <h5> Afternoon slot</h5>
                </div>
                <div className="py-2">
                    <button className="btn btn-outline-custom" >01.00 PM <br />
                        &#8377;900</button>
                    <button className="btn btn-outline-custom">02.00 PM <br />
                        &#8377;500</button>
                    <button className="btn btn-outline-custom">04.00 PM  <br />
                        &#8377;2000</button>
                    <button className="btn btn-outline-custom">05.00 PM <br />
                        &#8377;650</button>
                </div>
                <hr />
                <div className="slot_session">
                    <h5> Evening slot</h5>
                </div>
                <div className="py-2">
                    <button className="btn btn-outline-custom" >06.00 PM <br />
                        &#8377;900</button>
                    <button className="btn btn-outline-custom">07.00 PM <br />
                        &#8377;500</button>
                    <button className="btn btn-outline-custom">08.00 PM  <br />
                        &#8377;2000</button>
                    <button className="btn btn-outline-custom">10.00 PM <br />
                        &#8377;650</button>
                </div>
            </div>

        </div>
    )
}