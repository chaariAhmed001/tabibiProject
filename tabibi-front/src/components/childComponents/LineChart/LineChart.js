import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2';

function LineChart({color,users}) {
  //console.log(users)
const [dataa, setDataa] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
  
  const getData = (dataa,users)=>{
    users.map((data) => {
    let mounth=data.crated && data.crated.slice(5,7);
    mounth=(mounth.charAt(0)==='0'?data.crated && data.crated.slice(6,7) :mounth)
    dataa[mounth]=dataa[mounth]+1;
    setDataa(dataa)
  });}
  useEffect(() => {
    if (users && users !== "") 
    getData(dataa,users);
},[dataa,users]);
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
          {
          label: 'users',
          lineTension: 0.3,
          backgroundColor: color ? color : "rgba(78, 115, 223, 0.05)",
          borderColor: "rgba(78, 115, 223, 1)",
          pointRadius: 3,
          pointBackgroundColor: "rgba(78, 115, 223, 1)",
          pointBorderColor: "rgba(78, 115, 223, 1)",
          pointHoverRadius: 3,
          pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
          pointHoverBorderColor: "rgba(78, 115, 223, 1)",
          pointHitRadius: 10,
          pointBorderWidth: 2,
          fill: true,
          data: dataa,
          },
          
        ],
      };
      
      const options = {
        plugins:{legend:{display:false}},
      }
  return (
    <div className="col-xl-8 col-lg-7">
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Users</h6>
            </div>
            <div className="card-body">
                <div className="chart-area">
                    <Line data={data} options={options}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LineChart