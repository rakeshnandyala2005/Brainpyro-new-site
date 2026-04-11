import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaGraduationCap, 
  FaGlobe, 
  FaHandshake, 
  FaBullseye, 
  FaEye, 
  FaArrowRight,
  FaLightbulb,
  FaShieldAlt,
  FaUsers
} from 'react-icons/fa';
// Fixed the path to jump out of 'Pages' to find 'Components'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

/**
 * Assets - High quality images
 */
const IMG_TEAM = "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800";
const IMG_STUDENT = "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=800";
const IMG_CAMPUS = "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1200";

const About = () => {
  // --- Animation Variants ---
  const scrollFadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const scrollSlideLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: "easeOut" } }
  };

  const scrollSlideRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: "easeOut" } }
  };

  return (
    <div style={styles.container}>
      {/* 1. Integrated Navbar */}
      <Navbar />
      
      {/* --- Section 1: Who We Are --- */}
      <section style={styles.sectionSplit}>
        <motion.div 
          style={styles.imageWrapper}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={scrollSlideLeft}
        >
          <img src={IMG_TEAM} alt="Our Team" style={styles.mainImage} />
        </motion.div>

        <motion.div 
          style={styles.textContent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={scrollFadeUp}
        >
          <span style={styles.tag}>ABOUT US</span>
          <h2 style={styles.heading}>Helping Students Achieve Their Dreams</h2>
          <p style={styles.description}>
            We are a leading educational consultancy dedicated to helping students achieve 
            their dreams of studying abroad. With years of experience, we provide expert 
            guidance, personalized solutions, and the best opportunities for higher education.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: '#1e40af' }} 
            whileTap={{ scale: 0.95 }} 
            style={styles.ctaBtn}
          >
            Our Mission <FaArrowRight style={{ marginLeft: '10px' }} />
          </motion.button>
        </motion.div>
      </section>

      {/* --- Section 2: Why Choose Us --- */}
      <section style={styles.sectionSplitAlt}>
        <motion.div 
          style={styles.textContent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={scrollSlideLeft}
        >
          <h2 style={styles.heading}>Why Choose BrainPyro?</h2>
          
          <div style={styles.featureItem}>
            <div style={styles.iconCircle}><FaGlobe style={styles.icon} /></div>
            <div>
              <h4 style={styles.featureTitle}>Global Network</h4>
              <p style={styles.featureText}>Strong partnerships with leading universities worldwide.</p>
            </div>
          </div>

          <div style={styles.featureItem}>
            <div style={styles.iconCircle}><FaGraduationCap style={styles.icon} /></div>
            <div>
              <h4 style={styles.featureTitle}>Expert Counselors</h4>
              <p style={styles.featureText}>Ensuring a hassle-free experience from application to admission.</p>
            </div>
          </div>

          <div style={styles.featureItem}>
            <div style={styles.iconCircle}><FaHandshake style={styles.icon} /></div>
            <div>
              <h4 style={styles.featureTitle}>Proven Success</h4>
              <p style={styles.featureText}>A solid track record of successful student placements abroad.</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          style={styles.imageWrapper}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={scrollSlideRight}
        >
          <img src={IMG_STUDENT} alt="Student" style={styles.secondaryImage} />
        </motion.div>
      </section>

      {/* --- Section 3: Vision & Mission --- */}
      <motion.section 
        style={{...styles.visionSection, backgroundImage: `url(${IMG_CAMPUS})`}}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div style={styles.overlay}>
          <div style={styles.visionGrid}>
            <motion.div 
              style={styles.missionCard}
              initial="hidden"
              whileInView="visible"
              variants={scrollFadeUp}
            >
              <FaBullseye size={50} color="#f97316" />
              <h3 style={styles.cardHeading}>Our Mission</h3>
              <p style={styles.cardDesc}>
                To provide students with world-class educational guidance and enable them to 
                achieve their career goals through global learning opportunities.
              </p>
            </motion.div>

            <motion.div 
              style={styles.missionCard}
              initial="hidden"
              whileInView="visible"
              variants={scrollFadeUp}
              transition={{ delay: 0.2 }}
            >
              <FaEye size={50} color="#1d4ed8" />
              <h3 style={styles.cardHeading}>Our Vision</h3>
              <p style={styles.cardDesc}>
                To become a trusted global education partner that transforms lives through 
                knowledge and opportunities.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* --- Section 4: Core Values --- */}
      <section style={styles.valuesSection}>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={scrollFadeUp}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <h2 style={styles.heading}>Our Core Values</h2>
          <p style={styles.description}>The principles that drive our consultancy forward.</p>
        </motion.div>

        <div style={styles.valuesGrid}>
          {[
            { icon: <FaLightbulb />, title: "Innovation", desc: "Constantly improving our methods to offer the best tech-driven education paths." },
            { icon: <FaShieldAlt />, title: "Integrity", desc: "Honest and transparent guidance at every step of your application process." },
            { icon: <FaUsers />, title: "Student-First", desc: "Every student's journey is unique; we tailor our solutions to your specific goals." }
          ].map((value, i) => (
            <motion.div 
              key={i}
              style={styles.valueCard}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <div style={styles.valueIcon}>{value.icon}</div>
              <h4 style={styles.valueTitle}>{value.title}</h4>
              <p style={styles.valueDesc}>{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 2. Integrated Reusable Footer */}
      <Footer />
    </div>
  );
};

// --- Styles ---
const styles = {
  container: { 
    fontFamily: "'Inter', sans-serif", 
    overflowX: 'hidden', 
    backgroundColor: '#fff',
    paddingTop: '80px' // Added to prevent Navbar overlap
  },
  sectionSplit: { display: 'flex', alignItems: 'center', gap: '60px', padding: '120px 10%', flexWrap: 'wrap' },
  sectionSplitAlt: { display: 'flex', alignItems: 'center', gap: '60px', padding: '120px 10%', flexWrap: 'wrap-reverse', backgroundColor: '#f8fafc' },
  imageWrapper: { flex: 1, minWidth: '350px' },
  mainImage: { width: '100%', borderRadius: '24px', boxShadow: '0 30px 60px rgba(0,0,0,0.12)' },
  secondaryImage: { width: '100%', borderRadius: '100px 24px 100px 24px', boxShadow: '0 30px 60px rgba(29, 78, 216, 0.2)' },
  textContent: { flex: 1, minWidth: '350px' },
  tag: { color: '#f97316', fontWeight: '800', letterSpacing: '2px', fontSize: '14px' },
  heading: { fontSize: '48px', fontWeight: '900', color: '#1d4ed8', margin: '10px 0', lineHeight: '1.2' },
  description: { fontSize: '18px', color: '#475569', lineHeight: '1.8', marginBottom: '20px' },
  ctaBtn: { padding: '18px 40px', backgroundColor: '#1d4ed8', color: '#fff', border: 'none', borderRadius: '50px', fontWeight: '700', cursor: 'pointer', display: 'flex', alignItems: 'center' },
  featureItem: { display: 'flex', gap: '20px', marginBottom: '30px', alignItems: 'flex-start' },
  iconCircle: { backgroundColor: '#eff6ff', padding: '12px', borderRadius: '12px' },
  icon: { fontSize: '28px', color: '#f97316' },
  featureTitle: { fontSize: '22px', fontWeight: '800', margin: 0, color: '#1e293b' },
  featureText: { color: '#64748b', margin: '8px 0 0', fontSize: '16px' },
  
  visionSection: { height: 'auto', minHeight: '600px', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed', position: 'relative', display: 'flex', alignItems: 'center' },
  overlay: { inset: 0, backgroundColor: 'rgba(15, 23, 42, 0.8)', padding: '100px 10%', width: '100%' },
  visionGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' },
  missionCard: { backgroundColor: '#fff', padding: '60px 40px', borderRadius: '32px', textAlign: 'center', boxShadow: '0 25px 50px rgba(0,0,0,0.4)' },
  cardHeading: { fontSize: '32px', fontWeight: '900', margin: '25px 0', color: '#1e293b' },
  cardDesc: { color: '#475569', fontSize: '18px', lineHeight: '1.7' },

  valuesSection: { padding: '100px 10%', backgroundColor: '#fff' },
  valuesGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' },
  valueCard: { padding: '40px', borderRadius: '24px', border: '1px solid #e2e8f0', textAlign: 'center', transition: 'all 0.3s ease' },
  valueIcon: { fontSize: '40px', color: '#f97316', marginBottom: '20px' },
  valueTitle: { fontSize: '22px', fontWeight: '800', marginBottom: '15px' },
  valueDesc: { color: '#64748b', lineHeight: '1.6' }
};

export default About;