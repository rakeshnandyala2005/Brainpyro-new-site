import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock, FaPhoneAlt } from 'react-icons/fa';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer'; 

const Login = () => {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <div style={styles.pageWrapper}>
      {/* 1. Added Navbar for consistent navigation */}
      <Navbar />

      <div style={styles.container}>
        {/* Back to Home Link */}
        <Link to="/" style={styles.backBtn}>
          <span>Back to Home</span>
        </Link>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={styles.card}
        >
          {/* --- Tab Switcher --- */}
          <div style={styles.tabContainer}>
            <div 
              style={{
                ...styles.tab, 
                color: activeTab === 'login' ? '#1d4ed8' : '#64748b',
                borderBottom: activeTab === 'login' ? '3px solid #1d4ed8' : '3px solid transparent'
              }}
              onClick={() => setActiveTab('login')}
            >
              Login
            </div>
            <div 
              style={{
                ...styles.tab, 
                color: activeTab === 'signup' ? '#1d4ed8' : '#64748b',
                borderBottom: activeTab === 'signup' ? '3px solid #1d4ed8' : '3px solid transparent'
              }}
              onClick={() => setActiveTab('signup')}
            >
              Sign Up
            </div>
          </div>

          {/* --- Form Content with Animation --- */}
          <AnimatePresence mode="wait">
            {activeTab === 'login' ? (
              <motion.div
                key="login"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 style={styles.title}>Welcome Back</h2>
                <p style={styles.subtitle}>Enter your credentials to continue</p>

                <div style={styles.inputGroup}>
                  <FaEnvelope style={styles.icon} />
                  <input type="email" placeholder="Email Address" style={styles.input} />
                </div>
                <div style={styles.inputGroup}>
                  <FaLock style={styles.icon} />
                  <input type="password" placeholder="Password" style={styles.input} />
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }} 
                  whileTap={{ scale: 0.98 }} 
                  style={styles.mainBtn}
                >
                  Login Now
                </motion.button>
              </motion.div>
            ) : (
              <motion.div
                key="signup"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 style={styles.title}>Create Account</h2>
                <p style={styles.subtitle}>Join BrainPyro to start your tech journey</p>

                <div style={styles.inputGroup}>
                  <FaUser style={styles.icon} />
                  <input type="text" placeholder="Full Name" style={styles.input} />
                </div>
                <div style={styles.inputGroup}>
                  <FaEnvelope style={styles.icon} />
                  <input type="email" placeholder="Email Address" style={styles.input} />
                </div>
                <div style={styles.inputGroup}>
                  <FaPhoneAlt style={styles.icon} />
                  <input type="tel" placeholder="Mobile Number" style={styles.input} />
                </div>
                <div style={styles.inputGroup}>
                  <FaLock style={styles.icon} />
                  <input type="password" placeholder="Create Password" style={styles.input} />
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }} 
                  whileTap={{ scale: 0.98 }} 
                  style={{...styles.mainBtn, backgroundColor: '#f97316'}}
                >
                  Sign Up Now
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

const styles = {
  pageWrapper: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0f172a 0%, #1d4ed8 100%)',
    // Prevent the fixed Navbar from overlapping the top of the container
    paddingTop: '80px',
  },
  container: {
    flex: 1,
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    padding: '40px 20px', 
    position: 'relative', 
    fontFamily: "'Inter', sans-serif"
  },
  backBtn: {
    position: 'absolute', 
    top: '20px', 
    left: '30px', 
    color: '#fff',
    textDecoration: 'none', 
    fontWeight: '600', 
    fontSize: '14px', 
    opacity: 0.8,
    // Ensure it stays above the gradient but below the Navbar if they overlap
    zIndex: 5, 
  },
  card: {
    backgroundColor: '#fff', 
    padding: '50px 40px', 
    borderRadius: '30px',
    width: '100%', 
    maxWidth: '450px', 
    textAlign: 'center', 
    boxShadow: '0 25px 50px rgba(0,0,0,0.4)',
  },
  tabContainer: {
    display: 'flex', 
    justifyContent: 'center', 
    gap: '40px', 
    marginBottom: '30px', 
    borderBottom: '1px solid #e2e8f0'
  },
  tab: {
    padding: '10px 10px', 
    cursor: 'pointer', 
    fontWeight: '800', 
    fontSize: '18px', 
    transition: 'all 0.3s ease'
  },
  title: { fontSize: '28px', fontWeight: '900', color: '#1e293b', marginBottom: '8px' },
  subtitle: { color: '#64748b', marginBottom: '30px', fontSize: '15px' },
  inputGroup: {
    display: 'flex', 
    alignItems: 'center', 
    backgroundColor: '#f1f5f9',
    padding: '14px 20px', 
    borderRadius: '15px', 
    marginBottom: '15px', 
    border: '1px solid #e2e8f0'
  },
  icon: { color: '#1d4ed8', marginRight: '12px', fontSize: '16px' },
  input: { background: 'none', border: 'none', outline: 'none', width: '100%', fontSize: '16px', color: '#1e293b' },
  mainBtn: {
    width: '100%', 
    padding: '16px', 
    backgroundColor: '#1d4ed8', 
    color: '#fff',
    border: 'none', 
    borderRadius: '150px', 
    fontWeight: '800', 
    fontSize: '16px',
    cursor: 'pointer', 
    marginTop: '10px', 
    boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
  }
};

export default Login;