import React from 'react';
import { 
  FaBrain, FaFire, FaPhoneAlt, FaWhatsapp, FaEnvelope, 
  FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn 
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContent}>
        
        {/* Brand Section */}
        <div style={styles.footerBrand}>
          
          {/* ✅ Navbar Style Logo */}
          <div style={styles.logoContainer}>
            <div style={styles.logoIcon}>
              <FaBrain style={styles.brainIcon} />
              <FaFire style={styles.fireIcon} />
            </div>
            <span style={styles.logoText}>BRAINPYRO</span>
          </div>

          <p style={styles.description}>
            Building your future through quality education and expert mentorship. 
            Empowering students to achieve global tech excellence.
          </p>
        </div>
        
        {/* Contact Section */}
        <div style={styles.footerLinks}>
          <h4 style={styles.footerHead}>Contact Us</h4>
          <p style={styles.footerText}>
            <FaPhoneAlt size={14} style={styles.inlineIcon} /> +91 12345 67890
          </p>
          <p style={styles.footerText}>
            <FaWhatsapp size={14} style={styles.inlineIcon} /> Chat on WhatsApp
          </p>
          <p style={styles.footerText}>
            <FaEnvelope size={14} style={styles.inlineIcon} /> info@brainpyro.com
          </p>
        </div>

        {/* Location & Social Section */}
        <div style={styles.footerLinks}>
          <h4 style={styles.footerHead}>Our Location</h4>
          <p style={styles.footerText}>
            <FaMapMarkerAlt size={14} style={styles.inlineIcon} /> 
            123 Edu Street, Bangalore, India
          </p>

          <div style={styles.socialGrid}>
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
              <div key={i} style={styles.socialCircle}>
                <Icon />
              </div>
            ))}
          </div>
        </div>

      </div>

      <div style={styles.copyright}>
        © {new Date().getFullYear()} BrainPyro. All Rights Reserved.
      </div>
    </footer>
  );
};

// --- Styles ---
const styles = {
  footer: { 
    backgroundColor: '#0f172a', 
    color: '#fff', 
    padding: '80px 10% 40px',
    fontFamily: "'Inter', sans-serif"
  },

  footerContent: { 
    display: 'flex', 
    justifyContent: 'space-between', 
    flexWrap: 'wrap', 
    gap: '40px', 
    marginBottom: '60px' 
  },

  footerBrand: { 
    flex: 1.5, 
    minWidth: '250px' 
  },

  footerLinks: { 
    flex: 1, 
    minWidth: '200px' 
  },

  /* 🔥 Navbar Logo Styles */
  logoContainer: { 
    display: 'flex', 
    alignItems: 'center', 
    gap: '12px', 
    cursor: 'pointer',
    marginBottom: '20px'
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

  description: {
    color: '#94a3b8',
    lineHeight: '1.6',
    fontSize: '15px'
  },

  footerHead: { 
    marginBottom: '25px', 
    fontSize: '18px', 
    fontWeight: '700',
    color: '#fff' 
  },

  footerText: { 
    color: '#94a3b8', 
    marginBottom: '15px', 
    display: 'flex', 
    alignItems: 'center',
    fontSize: '14px'
  },

  inlineIcon: { 
    marginRight: '12px', 
    color: '#f97316' 
  },

  socialGrid: { 
    display: 'flex', 
    gap: '15px', 
    marginTop: '25px' 
  },

  socialCircle: { 
    width: '38px', 
    height: '38px', 
    backgroundColor: '#1e293b', 
    borderRadius: '50%', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    cursor: 'pointer',
    transition: '0.3s',
    color: '#94a3b8'
  },

  copyright: { 
    textAlign: 'center', 
    paddingTop: '30px', 
    borderTop: '1px solid #1e293b', 
    color: '#64748b',
    fontSize: '13px'
  }
};

export default Footer;