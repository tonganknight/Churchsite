import React, { useState } from 'react';
import {Breakpoint} from 'react-socks';
import Footer from "../Footer";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import DatePicker from 'sassy-datepicker';

function Mobile() {

    const [ScheduleButton, SetScheduleButton]=React.useState(false);

    const [AvailableTimes, setAvailableTimes]=useState([
     "9:00AM","9:15AM","9:20AM","9:30AM","9:35AM","9:40AM"
        ])

    

    function ScheduleView (){

        if(ScheduleButton === false){
            return(
                <div className='MobileScheduleButtonFlex'>
                        <button onClick={ScheduleUIClick}className="MobileScheduleButton">Schedule Appointments</button> 
                </div>
            )
        };

        if(ScheduleButton === true){
            return(
                <div className='MobileBgFlex'>

                    <div className="MobileCard">

                        <div className='MobileCardTextTitle'> Please Select Date
                        </div>

                        <DatePicker id="dateP"/>

                        <div className='MobileCardTextTitle'> Please Select Time
                        </div>
                    
                        <Dropdown placeholder="Select a Time" options={AvailableTimes} />
                        
                        <button className="MobileScheduleButton">Submit and Request</button>
             
                    </div>

                </div>
            )
        }
    };

    /*handles the Schedule Button Click*/ 
    function ScheduleUIClick(){
        SetScheduleButton(true);
    }


    return(

    <Breakpoint small down>

        <div className="MobileAppFlex">

            <div className="MobileBanner">Bridgerland Park 2nd Ward</div>

            <div className='MobileBgFlex'>

                 <div className="MobileCard">
                    <div className='MobileCardText'> Relief Society Ministering Interviews
                    </div>
                </div>
                    
            </div>

            <ScheduleView/>

            
            <Footer/>
               

        </div>
            
            
    </Breakpoint>



    )

};

export default Mobile