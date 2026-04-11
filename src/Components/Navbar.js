import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBrain, FaFire, FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  const [isTutorialOpen, setIsTutorialOpen] = useState(false);
  const [logoPulse, setLogoPulse] = useState(false);

  // Logo pulse effect every 4 seconds
  useEffect(() => {
    const pulseInterval = setInterval(() => {
      setLogoPulse(true);
      setTimeout(() => setLogoPulse(false), 500);
    }, 4000);
    return () => clearInterval(pulseInterval);
  }, []);

  return (
    <nav style={styles.navbar}>
      {/* --- Logo Section --- */}
      <Link to="/" style={{ textDecoration: 'none' }}>
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

      {/* --- Navigation Links --- */}
      <div style={styles.navLinks}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/about" style={styles.link}>About</Link>
        <Link to="/courses" style={styles.link}>Courses</Link>
        <Link to="/tutorials" style={styles.link}>Tutorials</Link>

        {/* Tutorials Dropdown */}
        <div
          style={{ position: 'relative', cursor: 'pointer' }}
          onMouseEnter={() => setIsTutorialOpen(true)}
          onMouseLeave={() => setIsTutorialOpen(false)}
        >
          {/* <span style={styles.link}>
            Tutorials <FaChevronDown size={10} style={{ marginLeft: '4px' }} />
          </span>
          {isTutorialOpen && (
            <div style={styles.dropdown}>
              <Link to="/tutorials/web" style={styles.dropdownItem}>Web Development</Link>
              <Link to="/tutorials/data" style={styles.dropdownItem}>Data Science</Link>
              <Link to="/tutorials/design" style={styles.dropdownItem}>Graphic Design</Link>
            </div>
          )} */}
        </div>
      </div>

      {/* --- Auth Button --- */}
      <Link to="/login" style={styles.loginBtn}>Login / Sign Up</Link>
    </nav>
  );
};

// --- Professional Styles ---
const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 10%',
    backgroundColor: 'rgba(255,255,255,0.98)',
    position: 'fixed',
    top: 0,
    width: '100%',
    boxSizing: 'border-box',
    zIndex: 1000,
    boxShadow: '0 2px 15px rgba(0,0,0,0.05)',
    backdropFilter: 'blur(10px)',
    fontFamily: "'Inter', sans-serif"
  },
  logoContainer: { display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' },
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
  brainIcon: { fontSize: '20px', color: '#fff', zIndex: 2 },
  fireIcon: { 
    fontSize: '14px', color: '#fef3c7', position: 'absolute', 
    top: '2px', right: '2px' 
  },
  logoText: {
    fontSize: '24px', fontWeight: '900', color: '#f97316', 
    letterSpacing: '-1px', textDecoration: 'none'
  },
  navLinks: { display: 'flex', gap: '35px', fontWeight: '600' },
  link: { 
    textDecoration: 'none', color: '#334155', transition: '0.3s ease', 
    fontSize: '16px', display: 'flex', alignItems: 'center' 
  },
  dropdown: {
    position: 'absolute', top: '100%', left: 0, backgroundColor: '#fff',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)', borderRadius: '12px',
    padding: '10px 0', width: '220px', display: 'flex', flexDirection: 'column',
    border: '1px solid #f1f5f9'
  },
  dropdownItem: { 
    padding: '12px 20px', fontSize: '14px', cursor: 'pointer', 
    color: '#334155', textDecoration: 'none', transition: '0.2s' 
  },
  loginBtn: {
    backgroundColor: '#1d4ed8', color: '#fff', textDecoration: 'none',
    padding: '12px 28px', borderRadius: '8px', fontWeight: '700',
    boxShadow: '0 4px 15px rgba(29, 78, 216, 0.3)', transition: '0.3s'
  }
};

export default Navbar;