import React, { Fragment, useState } from "react";
import './Dashboard.css';
import { Link } from "react-router-dom/dist";
import { Line } from 'react-chartjs-2';
import { Chart as chartjs, LineElement, CategoryScale, LinearScale, PointElement, Legend } from 'chart.js'



chartjs.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend

)


const Dashboard = () => {


  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'Sales',
      data: [300, 500, 280, 900, 452, 840, 680, 360, 920, 1200, 1100, 850],
      backgroundColor: '#107B38',
      borderColor: '#107B38',
      PointBorderColor: 'pink',
      fill: true,
      // tension : 0.4

    }]
  }

  const options1 = {
    Plugin: {
      legend: true
    },
    scales: {
      y: {

      }
    }
  }



  return (
    <div className="Categorypage">
      <div className="PageTit ">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h3>Dashboard</h3>
              <p><Link to="/dashboard">Dasboard</Link></p>
            </div>
            {/* <div className="col-6">
              <div className="dasHBoarDfilT">
                <div className="row">
                  <div className="col-4">
                    <p>Date</p>
                  </div>
                  <div className="col-8">
                    <Fragment>
                      <div className="defalut">
                        <CheckboxDropdownComponent
                          displayText="Last 3 Month"
                          options={options}
                          onChange={option => {
                            if (!checkboxValue.includes(option)) {
                              const newValue = [...checkboxValue, option];
                              setValue(newValue);
                            }
                          }}
                          
                        
                        />
                      </div>
                     
                    </Fragment>
                  </div>
                </div>
              </div>

            </div> */}
          </div>
        </div>
      </div>
      <div className="CateCont">
        <div className="container">
          <div className="row">
            <div className="CateGorTab">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div className="Count OranGE">
                    <h3>30</h3>
                    <h6>Total Course</h6>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="Count BluE">
                    <h3>55</h3>
                    <h6>Total Subscribers</h6>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="Count PuRp">
                    <h3>126</h3>
                    <h6>Learners</h6>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="Count YlW">
                    <h3>66</h3>
                    <h6>Educators</h6>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="GrAphS" style={
                    {
                      height: '520px',
                      width: '100%'
                    }
                  }>
                    <Line data={data} options1={options1}></Line>
                  </div>


                </div>
              </div>
              <div className="row pt-3">
                <div className="col-lg-3 col-md-6">
                  <div className="Count GRn">
                    <h3>20</h3>
                    <h6>Active Course</h6>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="Count ReD">
                    <h3>10</h3>
                    <h6>Pending Course</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
