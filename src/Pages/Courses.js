import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaArrowRight, FaClock, FaStar } from 'react-icons/fa';
// Fixed the relative paths to correctly find the Components folder
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

/**
 * Course Data
 */
const courses = [
  { id: 1, title: 'Python for Data Science', img: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400", category: 'Backend', rating: 4.9, students: '1.2k' },
  { id: 2, title: 'Mastering C Programming', img: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400", category: 'Systems', rating: 4.7, students: '800' },
  { id: 3, title: 'Advanced C++', img: "https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=400", category: 'Game Dev', rating: 4.8, students: '950' },
  { id: 4, title: 'Java Enterprise Edition', img: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400", category: 'Backend', rating: 4.9, students: '2k' },
  { id: 5, title: 'Modern JavaScript', img: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400", category: 'Frontend', rating: 5.0, students: '3.1k' },
  { id: 6, title: 'HTML5 Semantic Web', img: "https://images.pexels.com/photos/1181373/pexels-photo-1181373.jpeg?auto=compress&cs=tinysrgb&w=400", category: 'Frontend', rating: 4.6, students: '5k' },
  { id: 7, title: 'CSS3 & Flexbox Masterclass', img: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400", category: 'Design', rating: 4.8, students: '4.2k' },
  { id: 8, title: 'C# and Unity Gaming', img: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=400", category: 'Gaming', rating: 4.7, students: '1.1k' },
  { id: 9, title: 'Node.js Backend Mastery', img: "https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=400", category: 'Full Stack', rating: 4.9, students: '1.8k' },
  { id: 10, title: 'TypeScript for Scale', img: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400", category: 'Frontend', rating: 4.8, students: '1.4k' },
];

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = courses.filter(c => c.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div style={styles.page}>
      <Navbar />
      
      {/* --- Page Header --- */}
      <section style={styles.header}>
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} style={styles.headerText}>
          <h1 style={styles.title}>All Technical Courses</h1>
          <div style={styles.searchContainer}>
            <FaSearch color="#64748b" />
            <input 
              style={styles.searchInput} 
              placeholder="What do you want to learn?" 
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </motion.div>
      </section>

      {/* --- Course Grid --- */}
      <section style={styles.gridContainer}>
        <div style={styles.grid}>
          {filtered.map((item, idx) => (
            <motion.div 
              key={item.id}
              style={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
            >
              <div style={styles.imageBox}>
                <img src={item.img} alt={item.title} style={styles.cardImg} />
                <span style={styles.badge}>{item.category}</span>
              </div>
              <div style={styles.cardBody}>
                <div style={styles.ratingRow}>
                  <span><FaStar color="#f59e0b" /> {item.rating}</span>
                  <span style={styles.students}>{item.students} Students</span>
                </div>
                <h3 style={styles.cardTitle}>{item.title}</h3>
                <div style={styles.cardFooter}>
                  <span style={styles.duration}><FaClock /> 12 Weeks</span>
                  <button style={styles.viewBtn}>View <FaArrowRight /></button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

// --- Styles ---
const styles = {
  page: { backgroundColor: '#f8fafc', minHeight: '100vh', fontFamily: "'Inter', sans-serif" },
  header: { 
    padding: '120px 10% 80px', 
    background: 'linear-gradient(135deg, #1d4ed8 0%, #0f172a 100%)', 
    textAlign: 'center' 
  },
  headerText: { color: '#fff' },
  title: { fontSize: '42px', fontWeight: '900', marginBottom: '30px' },
  searchContainer: { 
    display: 'flex', alignItems: 'center', backgroundColor: '#fff', padding: '12px 25px', 
    borderRadius: '50px', maxWidth: '500px', margin: '0 auto', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' 
  },
  searchInput: { border: 'none', outline: 'none', width: '100%', marginLeft: '15px', fontSize: '16px', color: '#334155' },
  
  gridContainer: { padding: '60px 10%' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '30px' },
  
  card: { backgroundColor: '#fff', borderRadius: '20px', overflow: 'hidden', border: '1px solid #e2e8f0', transition: 'all 0.3s' },
  imageBox: { position: 'relative', height: '180px' },
  cardImg: { width: '100%', height: '100%', objectFit: 'cover' },
  badge: { 
    position: 'absolute', top: '15px', left: '15px', backgroundColor: '#1d4ed8', color: '#fff', 
    padding: '4px 12px', borderRadius: '50px', fontSize: '11px', fontWeight: 'bold' 
  },
  
  cardBody: { padding: '20px' },
  ratingRow: { display: 'flex', justifyContent: 'space-between', fontSize: '13px', fontWeight: 'bold', marginBottom: '10px' },
  students: { color: '#64748b' },
  cardTitle: { fontSize: '20px', fontWeight: '800', color: '#1e293b', marginBottom: '20px', height: '50px' },
  
  cardFooter: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '15px', borderTop: '1px solid #f1f5f9' },
  duration: { fontSize: '13px', color: '#64748b', display: 'flex', alignItems: 'center', gap: '5px' },
  viewBtn: { background: 'none', border: 'none', color: '#1d4ed8', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' },
};

export default Courses;