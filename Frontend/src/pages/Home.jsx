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
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Titillium+Web:wght@300;600&display=swap');

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          font-family: 'Titillium Web', sans-serif;
          background-color: #020617;
          color: #38BDF8;
          overflow-x: hidden;
          animation: fadeIn 2s ease-in-out;
        }

        .home-container {
          padding: 3rem 1rem;
          position: relative;
        }

        .home-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 3rem;
          text-align: center;
          background: linear-gradient(to right, #ef4444, #22c55e, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 1rem;
          text-shadow: 0 0 12px rgba(59,130,246, 0.25);
          transition: transform 0.3s;
        }

        .home-title:hover {
          transform: scale(1.05);
        }

        .home-subtitle {
          text-align: center;
          font-size: 1.1rem;
          color: #64748B;
          margin: 1.5rem auto 3rem;
          max-width: 720px;
        }

        .button-group {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          flex-wrap: wrap;
          margin-bottom: 3rem;
        }

        .btn-primary, .btn-secondary {
          padding: 0.75rem 2rem;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          border-radius: 12px;
          text-decoration: none;
          text-align: center;
          transition: all 0.3s ease;
        }

        .btn-primary {
          background-color: #38BDF8;
          color: #020617;
          border: none;
        }

        .btn-primary:hover {
          background-color: #60A5FA;
          transform: scale(1.05);
        }

        .btn-secondary {
          background-color: transparent;
          border: 2px solid #38BDF8;
          color: #38BDF8;
        }

        .btn-secondary:hover {
          background-color: rgba(56,189,248, 0.1);
          transform: scale(1.05);
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 2rem;
          max-width: 1100px;
          margin: 0 auto 4rem;
        }

        .feature-card {
          background: rgba(15,23,42, 0.5);
          border: 1px solid #38BDF8;
          border-radius: 16px;
          padding: 1.5rem;
          box-shadow: 0 8px 32px 0 rgba(56,189,248, 0.25);
          backdrop-filter: blur(8px);
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .feature-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 40px rgba(56,189,248, 0.4);
        }

        .feature-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 1.5rem;
          color: #38BDF8;
          margin-bottom: 0.5rem;
        }

        .feature-desc {
          font-size: 1rem;
          color: #CBD5E1;
        }

        .section-title {
          text-align: center;
          font-size: 2rem;
          margin: 3rem 0 2rem;
          font-family: 'Orbitron', sans-serif;
          color: #60A5FA;
          text-shadow: 0 0 10px rgba(96,165,250, 0.4);
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
          background-color: rgba(15,23,42, 0.5);
          border: 1px solid rgba(56,189,248, 0.3);
          border-radius: 16px;
          padding: 1.5rem;
          flex: 1;
          color: #38BDF8;
          backdrop-filter: blur(6px);
          box-shadow: 0 6px 28px rgba(59,130,246, 0.2);
          transition: transform 0.3s;
        }

        .step-card:hover {
          transform: scale(1.03);
          border-color: #60A5FA;
        }

        .step-card strong {
          font-size: 1.25rem;
          color: #38BDF8;
        }

        .final-cta {
          background-color: rgba(56,189,248, 0.03);
          border-radius: 16px;
          text-align: center;
          padding: 2rem;
          margin-bottom: 3rem;
        }

        .final-cta h2 {
          font-size: 2rem;
          color: #38BDF8;
          font-family: 'Orbitron', sans-serif;
        }

        .footer {
          padding: 2rem;
          text-align: center;
          font-size: 0.875rem;
          color: #64748B;
          border-top: 1px solid rgba(255,255,255,0.05);
          background-color: #0f172a;
        }

        .footer a {
          color: #EF4444;
          margin: 0 0.5rem;
          transition: color 0.3s;
        }

        .footer a:hover {
          color: #f87171;
          text-decoration: underline;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
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
