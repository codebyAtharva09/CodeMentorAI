import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const features = [
  {
    title: "Smart Code Analysis",
    description: "Scan for bugs, complexity, and hidden code smells using AI.",
  },
  {
    title: "Personalized DevScore",
    description: "Track your skill level and growth over time for each commit.",
  },
  {
    title: "Contextual Coaching",
    description: "Get real-time guidance when you're stuck or need feedback.",
  },
  {
    title: "Visual Dashboards",
    description: "See reports, trends, and challenges to keep improving.",
  },
];

const Home = () => {
  return (
    <>
      <style>{`
        .home-container {
          background: linear-gradient(to bottom right, white, #ebf8ff);
          min-height: 100vh;
          padding: 3rem 1rem;
          text-align: center;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          display: flex;
          flex-direction: column;
        }

        .home-title {
          font-size: 3rem;
          font-weight: 800;
          color: #1e3a8a;
          margin-bottom: 1rem;
        }

        .home-subtitle {
          color: #4b5563;
          font-size: 1.125rem;
          max-width: 600px;
          margin: 0 auto 2rem auto;
        }

        .button-group {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .btn-primary, .btn-secondary {
          padding: 0.75rem 1.5rem;
          border-radius: 9999px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s;
        }

        .btn-primary {
          background-color: #2563eb;
          color: white;
        }

        .btn-primary:hover {
          background-color: #1d4ed8;
        }

        .btn-secondary {
          border: 2px solid #2563eb;
          color: #2563eb;
          background-color: transparent;
        }

        .btn-secondary:hover {
          background-color: #e0f2fe;
        }

        .features-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          max-width: 1000px;
          margin: 2.5rem auto 0 auto;
        }

        @media (min-width: 640px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .feature-card {
          background-color: white;
          border-radius: 1rem;
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
          padding: 1.5rem;
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .feature-card:hover {
          transform: scale(1.02);
          box-shadow: 0 15px 25px rgba(0, 0, 0, 0.15);
        }

        .feature-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #1e40af;
          margin-bottom: 0.5rem;
        }

        .feature-desc {
          color: #4b5563;
        }

        .section-title {
          font-size: 2rem;
          font-weight: 700;
          color: #1e3a8a;
          margin-top: 4rem;
          margin-bottom: 1.5rem;
        }

        .testimonial-card {
          background: white;
          padding: 1.5rem;
          margin: 1rem;
          border-radius: 1rem;
          max-width: 300px;
          box-shadow: 0 5px 10px rgba(0,0,0,0.05);
        }

        .testimonial-quote {
          font-style: italic;
          color: #374151;
        }

        .testimonial-author {
          margin-top: 0.75rem;
          font-weight: 600;
          color: #1d4ed8;
        }

        .how-it-works {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          max-width: 800px;
          margin: 0 auto;
        }

        @media (min-width: 768px) {
          .how-it-works {
            flex-direction: row;
            justify-content: center;
          }
        }

        .step-card {
          background: #f8fafc;
          padding: 1.5rem;
          border-radius: 1rem;
          flex: 1;
          box-shadow: 0 6px 10px rgba(0,0,0,0.05);
        }

        .trusted-logos {
          display: flex;
          gap: 2rem;
          justify-content: center;
          flex-wrap: wrap;
          opacity: 0.7;
        }

        .logo {
          height: 40px;
        }

        .final-cta {
          background-color: #eff6ff;
          padding: 2rem;
          margin-top: 4rem;
          border-radius: 1rem;
        }

        .footer {
          margin-top: 3rem;
          background-color: #f0f9ff;
          color: #1e3a8a;
          padding: 1.5rem;
          text-align: center;
          font-size: 0.95rem;
          border-top: 1px solid #cbd5e1;
        }

        .footer a {
          color: #1d4ed8;
          text-decoration: none;
          margin: 0 0.25rem;
          font-weight: 500;
        }

        .footer a:hover {
          text-decoration: underline;
        }
      `}</style>

      <div className="home-container">
        <Navbar />

        <div className="content-wrapper">
          <h1 className="home-title">Your AI Companion to Become a Better Developer</h1>
          <p className="home-subtitle">
            CodeMentorAI is not just a code generator — it's your personal coach, growth tracker, and real-time guide.
          </p>

          <div className="button-group">
            <Link to="/login" className="btn-primary">Get Started</Link>
            <Link to="/register" className="btn-secondary">Register</Link>
          </div>

          <div className="features-grid">
            {features.map((f, idx) => (
              <div key={idx} className="feature-card">
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-desc">{f.description}</p>
              </div>
            ))}
          </div>

          {/* How it Works */}
          <h2 className="section-title">How It Works</h2>
          <div className="how-it-works">
            <div className="step-card"><strong>1. Sign Up</strong><br />Create your account and set your dev goals.</div>
            <div className="step-card"><strong>2. Upload or Code</strong><br />Use our editor or upload code to get real-time feedback.</div>
            <div className="step-card"><strong>3. Learn & Improve</strong><br />Track your growth with DevScore and coaching tips.</div>
          </div>


          {/* Final CTA */}
          <div className="final-cta">
            <h2 className="home-title" style={{ fontSize: "2rem" }}>Start your journey with CodeMentorAI today</h2>
            <div className="button-group" style={{ marginTop: "1.5rem" }}>
              <Link to="/login" className="btn-primary">Get Started</Link>
              <Link to="/register" className="btn-secondary">Register</Link>
            </div>
          </div>
        </div>

        <footer className="footer">
          © {new Date().getFullYear()} CodeMentorAI. Built with 💙 by passionate developers.
          <br />
          <a href="#">Privacy Policy</a> · <a href="#">Terms</a> · <a href="#">Contact</a>
        </footer>
      </div>
    </>
  );
};

export default Home;