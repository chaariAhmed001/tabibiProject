import React from 'react'
import { Line } from 'react-chartjs-2';

function LineChart({color}) {

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
          data: [0, 10, 5, 15, 10, 20, 15, 25, 20, 30, 25, 40],
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