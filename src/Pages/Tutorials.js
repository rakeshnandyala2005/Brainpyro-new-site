import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaClock, FaTag, FaLaptopCode, FaSearch } from 'react-icons/fa';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const tutorialsData = [
  { id: 1, title: 'React Hooks Deep Dive', category: 'Web Dev', duration: '45 mins', level: 'Intermediate', img: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { id: 2, title: 'Python for Beginners', category: 'Programming', duration: '30 mins', level: 'Beginner', img: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { id: 3, title: 'Advanced CSS Grid', category: 'Design', duration: '20 mins', level: 'Advanced', img: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { id: 4, title: 'Node.js Express API', category: 'Backend', duration: '55 mins', level: 'Intermediate', img: "https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { id: 5, title: 'Figma UI Essentials', category: 'Design', duration: '15 mins', level: 'Beginner', img: "https://images.pexels.com/photos/3182792/pexels-photo-3182792.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { id: 6, title: 'MongoDB Aggregations', category: 'Database', duration: '40 mins', level: 'Advanced', img: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { id: 7, title: 'GitHub Workflow', category: 'DevOps', duration: '12 mins', level: 'Beginner', img: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { id: 8, title: 'Docker Containers 101', category: 'DevOps', duration: '50 mins', level: 'Intermediate', img: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400" },
];

const Tutorials = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTutorials = tutorialsData.filter(t => 
    t.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.page}>
      <Navbar />

      {/* --- Tutorial Hero Section --- */}
      <section style={styles.hero}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          style={styles.heroContent}
        >
          <span style={styles.badge}>FREE LEARNING</span>
          <h1 style={styles.title}>Knowledge is <span style={{color: '#f97316'}}>Power</span></h1>
          <p style={styles.subtitle}>Explore our library of bite-sized technical tutorials.</p>
          
          <div style={styles.searchBar}>
            <FaSearch color="#94a3b8" />
            <input 
              type="text" 
              placeholder="Search tutorials..." 
              style={styles.input} 
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </motion.div>
      </section>

      {/* --- Tutorial Grid --- */}
      <section style={styles.gridSection}>
        <div style={styles.grid}>
          {filteredTutorials.map((tutorial, index) => (
            <motion.div 
              key={tutorial.id}
              style={styles.card}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -10 }}
            >
              <div style={styles.thumbnailWrapper}>
                <img src={tutorial.img} alt={tutorial.title} style={styles.thumbnail} />
                <div style={styles.playOverlay}>
                  <FaPlay size={20} color="#fff" />
                </div>
                <span style={styles.levelTag}>{tutorial.level}</span>
              </div>
              
              <div style={styles.cardBody}>
                <div style={styles.meta}>
                  <span style={styles.category}><FaTag size={10} /> {tutorial.category}</span>
                  <span style={styles.duration}><FaClock size={10} /> {tutorial.duration}</span>
                </div>
                <h3 style={styles.tutorialTitle}>{tutorial.title}</h3>
                <button style={styles.watchBtn}>Watch Tutorial</button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

const styles = {
  page: { backgroundColor: '#f8fafc', minHeight: '100vh', paddingTop: '80px' },
  hero: { 
    padding: '80px 10%', 
    background: 'linear-gradient(135deg, #0f172a 0%, #1e40af 100%)', 
    textAlign: 'center',
    color: '#fff'
  },
  badge: { backgroundColor: '#f97316', padding: '6px 15px', borderRadius: '50px', fontSize: '12px', fontWeight: '800', marginBottom: '20px', display: 'inline-block' },
  title: { fontSize: '48px', fontWeight: '900', marginBottom: '15px' },
  subtitle: { fontSize: '18px', opacity: 0.8, marginBottom: '35px' },
  searchBar: { 
    display: 'flex', alignItems: 'center', backgroundColor: '#fff', 
    padding: '12px 25px', borderRadius: '12px', maxWidth: '500px', 
    margin: '0 auto', boxShadow: '0 10px 25px rgba(0,0,0,0.2)' 
  },
  input: { border: 'none', outline: 'none', width: '100%', marginLeft: '15px', fontSize: '16px' },
  
  gridSection: { padding: '80px 10%' },
  grid: { 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
    gap: '30px' 
  },
  card: { backgroundColor: '#fff', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', transition: '0.3s' },
  thumbnailWrapper: { position: 'relative', height: '160px' },
  thumbnail: { width: '100%', height: '100%', objectFit: 'cover' },
  playOverlay: { 
    position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(29, 78, 216, 0.8)', width: '45px', height: '45px', 
    borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'
  },
  levelTag: { position: 'absolute', bottom: '10px', right: '10px', backgroundColor: '#0f172a', color: '#fff', padding: '4px 10px', borderRadius: '6px', fontSize: '10px', fontWeight: 'bold' },
  
  cardBody: { padding: '20px' },
  meta: { display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontSize: '12px', color: '#64748b', fontWeight: '600' },
  tutorialTitle: { fontSize: '18px', fontWeight: '800', color: '#1e293b', marginBottom: '20px', minHeight: '44px' },
  watchBtn: { width: '100%', padding: '10px', border: '2px solid #1d4ed8', borderRadius: '10px', backgroundColor: 'transparent', color: '#1d4ed8', fontWeight: '700', cursor: 'pointer', transition: '0.3s' }
};

export default Tutorials;