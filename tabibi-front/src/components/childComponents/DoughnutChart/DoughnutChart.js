import React from 'react'
import { Doughnut } from 'react-chartjs-2';

function DoughnutChart() {
  const data = {
    labels: ["Direct", "Referral", "Social"],
    datasets: [{
      data: [55, 30, 15],
      backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
      hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  };
  const options = {
    cutout: '80%',
    plugins:{legend:{display:true}},
  }
  return (
    <div class="col-xl-4 col-lg-5">
      <div class="card shadow mb-4">   
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Users</h6>
        </div>                            
        <div class="card-body">
          <div class="chart-pie pt-4 pb-2">
              <Doughnut data={data} options={options}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoughnutChart