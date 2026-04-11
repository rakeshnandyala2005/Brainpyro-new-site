import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock, FaUserPlus, FaArrowLeft } from 'react-icons/fa';

const Signup = () => {
  return (
    <div style={authStyles.container}>
      {/* Back to Home Button */}
      <Link to="/" style={authStyles.backBtn}>
        <FaArrowLeft /> <span>Back to Home</span>
      </Link>

      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={authStyles.card}
      >
        <div style={authStyles.iconHeader}>
          <FaUserPlus size={40} color="#1d4ed8" />
        </div>
        
        <h2 style={authStyles.title}>Create Account</h2>
        <p style={authStyles.subtitle}>Join EduPlatform and start learning today.</p>

        {/* Input Fields */}
        <div style={authStyles.inputGroup}>
          <FaUser style={authStyles.icon} />
          <input type="text" placeholder="Full Name" style={authStyles.input} />
        </div>

        <div style={authStyles.inputGroup}>
          <FaEnvelope style={authStyles.icon} />
          <input type="email" placeholder="Email Address" style={authStyles.input} />
        </div>

        <div style={authStyles.inputGroup}>
          <FaLock style={authStyles.icon} />
          <input type="password" placeholder="Create Password" style={authStyles.input} />
        </div>

        <div style={authStyles.inputGroup}>
          <FaLock style={authStyles.icon} />
          <input type="password" placeholder="Confirm Password" style={authStyles.input} />
        </div>

        {/* Action Button */}
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          style={authStyles.mainBtn}
        >
          Create My Account
        </motion.button>

        <p style={authStyles.footerText}>
          Already have an account? <Link to="/login" style={authStyles.link}>Login</Link>
        </p>
      </motion.div>
    </div>
  );
};

const authStyles = {
  container: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #0f172a 0%, #1d4ed8 100%)', // Reversed gradient for Signup
    padding: '20px',
    position: 'relative',
    fontFamily: "'Inter', sans-serif"
  },
  backBtn: {
    position: 'absolute',
    top: '30px',
    left: '30px',
    color: '#fff',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontWeight: '600',
    fontSize: '14px',
    opacity: 0.8
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
  iconHeader: {
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'center'
  },
  title: { fontSize: '32px', fontWeight: '900', color: '#1e293b', marginBottom: '10px' },
  subtitle: { color: '#64748b', marginBottom: '35px', lineHeight: '1.5' },
  inputGroup: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#f1f5f9',
    padding: '14px 18px',
    borderRadius: '16px',
    marginBottom: '15px',
    border: '1px solid #e2e8f0',
    transition: 'all 0.3s ease'
  },
  icon: { color: '#1d4ed8', marginRight: '12px', fontSize: '18px' },
  input: { background: 'none', border: 'none', outline: 'none', width: '100%', fontSize: '16px', color: '#1e293b' },
  mainBtn: {
    width: '100%',
    padding: '16px',
    backgroundColor: '#1d4ed8',
    color: '#fff',
    border: 'none',
    borderRadius: '16px',
    fontWeight: '800',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '20px',
    boxShadow: '0 10px 20px rgba(29, 78, 216, 0.3)'
  },
  footerText: { marginTop: '25px', color: '#64748b', fontSize: '15px' },
  link: { color: '#1d4ed8', fontWeight: '800', textDecoration: 'none' }
};

export default Signup;