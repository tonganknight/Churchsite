import React, { useState } from 'react';
import {Breakpoint} from 'react-socks';
import Footer from "../Footer";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import DatePicker from 'sassy-datepicker';

var moment = require('moment');

function Mobile() {

    const [ScheduleButton, SetScheduleButton]=React.useState(false);
    const [ShowModal, setShowModal]=useState(false)

    const [AvailableTimes, setAvailableTimes]=useState([
     "9:00AM","9:15AM","9:20AM","9:30AM","9:35AM","9:40AM"
        ])

    const [SelectedDate, SetSelectedDate]= useState([
        {
            SMonthAndYear: "None Selected",
            SDay: "None Here"
        }
]);


    const onChange = (date) => {
        let DatePulled = date.toString();


        /*for some reason saving this to state freezes datepicker*/

        /*let dateObject = new Date(DatePulled);
        let momentObject = moment(dateObject);
        let momentString = momentObject.format('MMMM Do YYYY');
        let NewArrDate =[...SelectedDate];
        NewArrDate.splice(0, 1, {STime: `${momentString}`});

        SetSelectedDate(NewArrDate);*/

    }

    function SubmitClick(){
        /*Select the Dropdown Button Class because the created did not pass down a prop for it*/
        let Dbox = document.getElementsByClassName("is-selected");
        
        /*Target the returned Elements, there is only one with is-selected class*/
        let Dselect =Dbox[0].innerHTML;
        /* Target the inner html at place 0 so we can see what is selected on the dropdown button*/
        /*get the Month on the datepicker*/
        let MTitle = document.getElementsByClassName("sdp--text sdp--month-name");
        let DMonth =MTitle[0].innerHTML;
        /*get the Date on the datepicker*/
        let DDate = document.getElementsByClassName("sdp--date-btn__selected");
        let CDate = DDate[0].innerHTML;

        let NewDate = DMonth + " " + CDate;
        console.log(NewDate);
        /*Update the State with the new date*/
        let NewArrDate =[...SelectedDate];
        NewArrDate.splice(0, 1, {SMonthAndYear: `${DMonth}`, SDay: `${CDate}`});
        SetSelectedDate(NewArrDate);
        /*remove Picker*/
        setShowModal(true);
       document.getElementById("TextDate").innerHTML = "";
       document.getElementById("TextTime").InnerText = "";


        
        
        
        
        
    }

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

                    <div id="DPickCard" className="MobileCard">

                        <div  id="TextDate" className='MobileCardTextTitle'> Please Select Date
                        </div>

                       
                            <DatePicker className={ShowModal ? "hide" : ""} onChange={onChange} id="dateP"/>
                       
                        <div id="TextTime" className='MobileCardTextTitle'> Please Select Time
                        </div>
                    
                        <Dropdown placeholder="Select a Time" options={AvailableTimes} />
                        
                        <button onClick={SubmitClick} className="MobileScheduleButton">Submit and Request</button>
             
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