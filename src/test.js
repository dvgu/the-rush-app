import React from 'react'
import JsonData from './data/rushing.json'
 function JsonDataDisplay(){
    const DisplayData=JsonData.map(
        (info)=>{
            return(
                <tr>
                    <td>{info.Player}</td>
                    <td>{info.Team}</td>
                    <td>{info.Pos}</td>
                    <td>{info.Att}</td>
                    <td>{info['Att/G']}</td>
                    <td>{info.Yds}</td>
                    <td>{info.TD}</td>
                    <td>{info.Lng}</td>
                    <td>{info['1st']}</td>
                    <td>{info['1st%']}</td>
                    <td>{info['20+']}</td>
                    <td>{info['40+']}</td>
                    <td>{info.FUM}</td>

                </tr>
            )
        }
    )
 
    return(
        <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Team</th>
                    <th>Position</th>
                    <th>Rushing Attempts Per Game Average</th>
                    <th>Rushing Attempts</th>
                    <th>Total Rushing Yards</th>
                    <th>Longest Rush</th>
                    <th>Rushing First Downs</th>
                    <th>rushing First Down Percentage</th>
                    <th>Rushing 20+ Yards Each</th>
                    <th>Rushing 40+ Yards Each</th>
                    <th>Rushing Fumbles</th>
                    </tr>
                </thead>
                <tbody>                  
                    {DisplayData}
                    
                </tbody>
            </table>
             
        </div>
    )
 }
 
 export default JsonDataDisplay;