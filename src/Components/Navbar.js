import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBrain, FaFire, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoPulse, setLogoPulse] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const pulseInterval = setInterval(() => {
      setLogoPulse(true);
      setTimeout(() => setLogoPulse(false), 500);
    }, 4000);
    return () => clearInterval(pulseInterval);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const isActive = (path) => location.pathname === path;

  return (
    <nav style={styles.navbar} className="navbar-container">

      {/* Logo */}
      <Link to="/" style={{ textDecoration: 'none' }} onClick={closeMobileMenu}>
        <div style={{ 
          ...styles.logoContainer, 
          animation: logoPulse ? 'logoPulse 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)' : 'none' 
        }}>
          <div style={styles.logoIcon}>
            <FaBrain style={styles.brainIcon} />
            <FaFire style={styles.fireIcon} />
          </div>
          <span style={styles.logoText}>BRAINPYRO</span>
        </div>
      </Link>

      {/* Hamburger */}
      <div className="hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        {isMobileMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
      </div>

      {/* Nav Links */}
      <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
        
        <Link to="/" className={`nav-item ${isActive('/') ? 'active' : ''}`} onClick={closeMobileMenu}>
          Home
        </Link>

        <Link to="/about" className={`nav-item ${isActive('/about') ? 'active' : ''}`} onClick={closeMobileMenu}>
          About
        </Link>

        <Link to="/courses" className={`nav-item ${isActive('/courses') ? 'active' : ''}`} onClick={closeMobileMenu}>
          Courses
        </Link>

        <Link to="/tutorials" className={`nav-item ${isActive('/tutorials') ? 'active' : ''}`} onClick={closeMobileMenu}>
          Tutorials
        </Link>

        {/* Mobile Auth */}
        <div className="mobile-only-auth">
          <Link to="/login" style={styles.loginBtn} onClick={closeMobileMenu}>
            Login / Sign Up
          </Link>
        </div>
      </div>

      {/* Desktop Auth */}
      <div className="desktop-auth">
        <Link to="/login" style={styles.loginBtn}>
          Login / Sign Up
        </Link>
      </div>

      {/* Styles */}
      <style>{`

        /* Nav Items */
        .nav-item {
          position: relative;
          text-decoration: none;
          color: #334155;
          font-weight: 600;
          font-size: 16px;
          padding: 5px 0;
          transition: 0.3s;
        }

        /* Hover */
        .nav-item:hover {
          color: #f97316;
        }

        /* Underline animation (Desktop) */
        .nav-item::after {
          content: "";
          position: absolute;
          width: 0%;
          height: 3px;
          left: 0;
          bottom: -5px;
          background: linear-gradient(90deg, #f97316, #fb923c);
          transition: width 0.3s ease;
          border-radius: 10px;
        }

        .nav-item:hover::after {
          width: 100%;
        }

        /* Active Desktop */
        .nav-item.active {
          color: #f97316;
        }

        .nav-item.active::after {
          width: 100%;
        }

        /* Navbar Layout */
        .navbar-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 10%;
            background-color: rgba(255, 255, 255, 0.98);
            position: fixed;
            top: 0;
            width: 100%;
            box-sizing: border-box;
            z-index: 1000;
            box-shadow: 0 2px 15px rgba(0,0,0,0.05);
            backdrop-filter: blur(10px);
            font-family: 'Inter', sans-serif;
        }

        .hamburger {
            display: none;
            cursor: pointer;
            color: #334155;
        }

        .nav-links {
            display: flex;
            gap: 35px;
            align-items: center;
        }

        .mobile-only-auth {
            display: none;
        }

        /* 🔥 MOBILE STYLES */
        @media (max-width: 968px) {

            .navbar-container {
                padding: 15px 5%;
            }

            .hamburger {
                display: block;
            }

            .desktop-auth {
                display: none;
            }

            .nav-links {
                position: absolute;
                top: -1000px;
                left: 0;
                width: 100%;
                flex-direction: column;
                background-color: white;
                gap: 10px;
                padding: 10px 0;
                transition: 0.4s ease;
                box-shadow: 0 10px 20px rgba(0,0,0,0.1);
            }

            .nav-links.active {
                top: 70px;
            }

            .nav-links a {
                width: 100%;
                text-align: center;
                padding: 15px 0;
            }

            /* ❌ Remove underline */
            .nav-item::after {
                display: none;
            }

            /* ✅ Centered Active Tab */
            .nav-item.active {
                background: rgba(249,115,22,0.1);
                color: #f97316;
                font-weight: 700;
                border-radius: 8px;
                margin: 5px 15px;
            }

            /* Tap feedback */
            .nav-item:active {
                background-color: #f1f5f9;
                border-radius: 8px;
            }

            .mobile-only-auth {
                display: block;
                padding: 20px 0;
                width: 100%;
                text-align: center;
            }
        }

        @keyframes logoPulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
        }

      `}</style>
    </nav>
  );
};

const styles = {
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    cursor: 'pointer'
  },
  logoIcon: {
    position: 'relative',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '12px',
    background: 'linear-gradient(135deg, #f97316, #fb923c)',
    boxShadow: '0 8px 20px rgba(249, 115, 22, 0.3)'
  },
  brainIcon: {
    fontSize: '20px',
    color: '#fff',
    zIndex: 2
  },
  fireIcon: {
    fontSize: '14px',
    color: '#fef3c7',
    position: 'absolute',
    top: '2px',
    right: '2px'
  },
  logoText: {
    fontSize: '24px',
    fontWeight: '900',
    color: '#f97316',
    letterSpacing: '-1px'
  },
  loginBtn: {
    backgroundColor: '#1d4ed8',
    color: '#fff',
    textDecoration: 'none',
    padding: '12px 28px',
    borderRadius: '8px',
    fontWeight: '700',
    boxShadow: '0 4px 15px rgba(29, 78, 216, 0.3)',
    transition: '0.3s',
    display: 'inline-block'
  }
};

export default Navbar;