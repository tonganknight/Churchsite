import React from 'react';
import {Breakpoint} from 'react-socks';
import Footer from "../Footer";

function Mobile() {

    const [ScheduleButton, SetScheduleButton]=React.useState(false);


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
                        <div className='MobileCardTextTitle'> Schedule an Appointment
                        </div>

                        <div className='MobileCardText'>Please Select an available time
                        </div>

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