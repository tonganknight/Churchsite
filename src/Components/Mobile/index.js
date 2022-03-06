import React from 'react';
import {Breakpoint} from 'react-socks';

function Mobile() {



    return(

    <Breakpoint small down>

        <div className="MobileAppFlex">

            <div className="MobileBanner">Bridgerland Park 2nd Ward</div>

            <div className='MobileBgFlex'>

                 <div className="MobileCard">
                    <div>This is test text</div>    
                </div>
                
            </div>

               

        </div>
            
            
    </Breakpoint>



    )

};

export default Mobile