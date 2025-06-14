import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { getUserProgress } from "../api/api";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LeaderboardPage = () => {
  const [progressData, setProgressData] = useState({
    labels: [],
    datasets: []
  });
  const [stats, setStats] = useState({
    totalSubmissions: 0,
    highestDevScore: 0,
    rank: 'Bronze'
  });

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const { progress } = await getUserProgress();
        
        // Process progress data for chart
        const labels = progress.map(p => {
          const date = new Date(p.timestamp);
          return date.toLocaleDateString();
        });

        const devScores = progress.map(p => p.dev_score);
        const codeQuality = progress.map(p => p.code_quality);

        setProgressData({
          labels,
          datasets: [
            {
              label: "DevScore Progress",
              data: devScores,
              borderColor: "rgb(75, 192, 192)",
              tension: 0.1
            },
            {
              label: "Code Quality",
              data: codeQuality,
              borderColor: "rgb(255, 99, 132)",
              tension: 0.1
            }
          ]
        });

        // Calculate stats
        const totalSubmissions = progress.length;
        const highestDevScore = Math.max(...devScores);
        const rank = calculateRank(highestDevScore);

        setStats({
          totalSubmissions,
          highestDevScore,
          rank
        });

      } catch (error) {
        console.error("Error fetching progress:", error);
      }
    };

    fetchProgress();
  }, []);

  const calculateRank = (score) => {
    if (score >= 90) return 'Diamond';
    if (score >= 80) return 'Platinum';
    if (score >= 70) return 'Gold';
    if (score >= 60) return 'Silver';
    return 'Bronze';
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <style>{`
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .stat-card {
          background: rgba(0, 0, 0, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(16px);
          padding: 1.5rem;
          border-radius: 1rem;
          text-align: center;
        }

        .chart-container {
          background: rgba(0, 0, 0, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(16px);
          padding: 2rem;
          border-radius: 1rem;
          margin-top: 2rem;
        }

        .achievement {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: rgba(0, 0, 0, 0.4);
          padding: 1rem;
          border-radius: 0.5rem;
          margin-bottom: 1rem;
        }

        .achievement-icon {
          font-size: 1.5rem;
        }
      `}</style>

      <h1 className="text-3xl font-bold mb-8 text-center font-orbitron bg-gradient-to-r from-blue-400 to-emerald-400 text-transparent bg-clip-text">
        Your Coding Journey
      </h1>

      <div className="stats-grid">
        <div className="stat-card">
          <h3 className="text-xl font-semibold mb-2">Current Rank</h3>
          <p className="text-4xl font-bold text-emerald-400">{stats.rank}</p>
        </div>
        <div className="stat-card">
          <h3 className="text-xl font-semibold mb-2">Total Submissions</h3>
          <p className="text-4xl font-bold text-blue-400">{stats.totalSubmissions}</p>
        </div>
        <div className="stat-card">
          <h3 className="text-xl font-semibold mb-2">Highest DevScore</h3>
          <p className="text-4xl font-bold text-purple-400">{stats.highestDevScore}</p>
        </div>
      </div>

      <div className="chart-container">
        <h2 className="text-2xl font-bold mb-6">Progress Over Time</h2>
        <Line
          data={progressData}
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: "top"
              },
              title: {
                display: true,
                text: "Your Development Progress"
              }
            },
            scales: {
              y: {
                beginAtZero: true,
                max: 100
              }
            }
          }}
        />
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-6">Recent Achievements</h2>
        {stats.highestDevScore >= 80 && (
          <div className="achievement">
            <span className="achievement-icon">🏆</span>
            <div>
              <h3 className="font-semibold">Code Quality Master</h3>
              <p className="text-gray-400">Achieved a DevScore of 80 or higher</p>
            </div>
          </div>
        )}
        {stats.totalSubmissions >= 5 && (
          <div className="achievement">
            <span className="achievement-icon">⭐</span>
            <div>
              <h3 className="font-semibold">Dedicated Learner</h3>
              <p className="text-gray-400">Submitted 5 or more code samples for analysis</p>
            </div>
          </div>
        )}
        {progressData.datasets[0]?.data.length >= 2 && (
          <div className="achievement">
            <span className="achievement-icon">🎯</span>
            <div>
              <h3 className="font-semibold">Progress Tracker</h3>
              <p className="text-gray-400">Started tracking your coding progress</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeaderboardPage;