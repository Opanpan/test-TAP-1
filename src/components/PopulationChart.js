import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const PopulationChart = () => {
  const chartData = {
    labels: ["Jakarta", "Jawa Barat", "Jawa Tengah", "Jawa Timur", "Bali"],
    datasets: [
      {
        label: "Jumlah Penduduk (Jiwa)",
        data: [10000000, 50000000, 40000000, 39000000, 5000000],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
    ],
}

  return (
    <div style={{ width: '70%', margin: '0 auto' }}>
      <h2>Grafik Penduduk Indonesia 2024</h2>
      <Bar data={chartData} />
    </div>
  );
};

export default PopulationChart;
