import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const features = [
  {
    title: "Smart Code Analysis",
    description:
      "AI-powered detection of bugs, complexity, and inefficiencies.",
  },
  {
    title: "Personalized DevScore",
    description:
      "Real-time metrics that reflect your actual development growth.",
  },
  {
    title: "Contextual Coaching",
    description:
      "Your 24x7 AI buddy for advice, refactors, and learning paths.",
  },
  {
    title: "Visual Dashboards",
    description: "Insightful graphs, reviews, and skill maps for your journey.",
  },
];

const Home = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html, body {
          font-family: 'Poppins', sans-serif;
          background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
          color: #f1f5f9;
          scroll-behavior: smooth;
        }

        .home-container {
          padding: 3rem 1rem;
          animation: fadeIn 1s ease-in;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .home-title {
          font-size: 3rem;
          font-weight: 700;
          text-align: center;
          color: #38bdf8;
          text-shadow: 0 0 20px #38bdf8;
          animation: neonGlow 3s ease-in-out infinite alternate;
        }

        @keyframes neonGlow {
          0% { text-shadow: 0 0 10px #38bdf8; }
          100% { text-shadow: 0 0 20px #38bdf8, 0 0 30px #38bdf8; }
        }

        .home-subtitle {
          font-size: 1.125rem;
          color: #cbd5e1;
          text-align: center;
          margin: 1rem auto 3rem;
          max-width: 700px;
        }

        .button-group {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 3rem;
        }

        .btn-primary, .btn-secondary {
          padding: 0.75rem 2rem;
          border-radius: 50px;
          font-weight: 600;
          font-size: 1rem;
          text-decoration: none;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .btn-primary {
          background: #38bdf8;
          color: #0f172a;
          box-shadow: 0 5px 15px rgba(56, 189, 248, 0.4);
        }

        .btn-primary:hover {
          background: #0ea5e9;
          transform: translateY(-3px);
        }

        .btn-secondary {
          border: 2px solid #38bdf8;
          color: #38bdf8;
          background: transparent;
        }

        .btn-secondary:hover {
          background: rgba(56, 189, 248, 0.1);
          transform: translateY(-3px);
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          max-width: 1100px;
          margin: 0 auto 4rem;
        }

        .feature-card {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 1.25rem;
          padding: 1.75rem;
          backdrop-filter: blur(12px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25);
          transition: all 0.3s ease-in-out;
        }

        .feature-card:hover {
          transform: scale(1.05);
          box-shadow: 0 12px 40px rgba(56, 189, 248, 0.3);
        }

        .feature-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #bae6fd;
          margin-bottom: 0.5rem;
        }

        .feature-desc {
          font-size: 1rem;
          color: #cbd5e1;
        }

        .section-title {
          text-align: center;
          font-size: 2rem;
          color: #60a5fa;
          margin-bottom: 2rem;
        }

        .how-it-works {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          max-width: 900px;
          margin: 0 auto 4rem;
        }

        @media (min-width: 768px) {
          .how-it-works {
            flex-direction: row;
            justify-content: space-between;
          }
        }

        .step-card {
          background: #1e293b;
          padding: 1.5rem;
          border-radius: 1rem;
          flex: 1;
          text-align: center;
          color: #f1f5f9;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          transition: transform 0.3s ease;
        }

        .step-card:hover {
          transform: translateY(-5px);
        }

        .step-card strong {
          font-size: 1.25rem;
          color: #38bdf8;
        }

        .final-cta {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 1.25rem;
          padding: 2rem;
          text-align: center;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25);
        }

        .final-cta h2 {
          font-size: 2rem;
          color: #60a5fa;
        }

        .footer {
          margin-top: 4rem;
          padding: 2rem;
          text-align: center;
          font-size: 0.875rem;
          color: #94a3b8;
          border-top: 1px solid #334155;
        }

        .footer a {
          color: #60a5fa;
          margin: 0 0.5rem;
        }

        .footer a:hover {
          text-decoration: underline;
        }
      `}</style>

      <div className="home-container">
        <Navbar />
        <h1 className="home-title">
          Your AI Companion to Become a Better Developer
        </h1>
        <p className="home-subtitle">
          CodeMentorAI isn’t just a tool — it’s a transformation engine for
          developers, from beginner to pro.
        </p>

        <div className="button-group">
          <Link to="/login" className="btn-primary">
            Get Started
          </Link>
          <Link to="/register" className="btn-secondary">
            Register
          </Link>
        </div>

        <div className="features-grid">
          {features.map((feature, idx) => (
            <div key={idx} className="feature-card">
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.description}</p>
            </div>
          ))}
        </div>

        <h2 className="section-title">How It Works</h2>
        <div className="how-it-works">
          <div className="step-card">
            <strong>1. Sign Up</strong>
            <br />
            Set your goals and let the AI understand your journey.
          </div>
          <div className="step-card">
            <strong>2. Upload or Code</strong>
            <br />
            Use our interface or upload files to analyze and improve.
          </div>
          <div className="step-card">
            <strong>3. Learn & Grow</strong>
            <br />
            Evolve with DevScore, coaching, and continuous insights.
          </div>
        </div>

        <div className="final-cta">
          <h2>Start your journey with CodeMentorAI today</h2>
          <div className="button-group" style={{ marginTop: "1.5rem" }}>
            <Link to="/login" className="btn-primary">
              Get Started
            </Link>
            <Link to="/register" className="btn-secondary">
              Register
            </Link>
          </div>
        </div>

        <footer className="footer">
          © {new Date().getFullYear()} CodeMentorAI · Built with 💙 by
          developers
          <br />
          <a href="#">Privacy</a> · <a href="#">Terms</a> ·{" "}
          <a href="#">Contact</a>
        </footer>
      </div>
    </>
  );
};

export default Home;
