import React,{useState, useEffect} from 'react';
import './App.css';

import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Chart } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);



function App() {

  const [chartData,setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});


  useEffect(() => {

    setChartData({
      labels: ["Red", "Blue", "Green", "Violet", "Orange", "Yellow"],
      datasets: [
        {
          label: 'couleurs preferes des français',
          data: [23, 21, 32, 12, 15, 9],
          borderColor: "rgb(53,162,235)",
          backgroundColor: "rgb(53,162,235, 0.4)"
        }
      ]
    });

    setChartOptions({
      responsive: true,
      plugins: {
        legend: {
          position: "top"
        },
        title: {
          display: true,
          text: "Whom st let day"
        }
      }
    });

  },[])

 

  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <Bar data={chartData} options={chartOptions}/>
        </div>
      </div>
    </div>
  );
}

export default App;
