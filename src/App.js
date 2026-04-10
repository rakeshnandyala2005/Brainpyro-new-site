import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  FaSearch, FaCode, FaPalette, FaShieldAlt, FaLayerGroup,
  FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn,
  FaPhoneAlt, FaRegEnvelope, FaUsers, FaTrophy, FaGraduationCap,
  FaChevronLeft, FaChevronRight, FaWhatsapp, FaMapMarkerAlt, FaChevronDown,
  FaVideo, FaBook, FaLaptopCode, FaChartLine, FaDatabase, FaBrain, FaFire
} from 'react-icons/fa';

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [courseIndex, setCourseIndex] = useState(0);
  const [tutorialIndex, setTutorialIndex] = useState(0);
  const [isTutorialOpen, setIsTutorialOpen] = useState(false);
  const [hoveredCourse, setHoveredCourse] = useState(null);
  const [hoveredTestimonial, setHoveredTestimonial] = useState(null);
  const [hoveredTutorial, setHoveredTutorial] = useState(null);

  // Scroll animation states
  const [visibleSections, setVisibleSections] = useState({});
  const sectionRefs = useRef({});

  // Logo animation state
  const [logoPulse, setLogoPulse] = useState(false);

  // --- Content Data ---
  const slides = [
    {
      url: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260",
      title: "Hello, What Do You Want To Learn?",
      sub: "Explore thousands of free & premium tutorials designed by experts."
    },
    {
      url: "https://images.pexels.com/photos/3182792/pexels-photo-3182792.jpeg?auto=compress&cs=tinysrgb&w=1260",
      title: "Master In-Demand Skills",
      sub: "Which courses do you want to learn? From UI/UX to Backend."
    },
    {
      url: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260",
      title: "Your Future Starts Here",
      sub: "Welcome to BRAIN PYRO. We empower your tech journey."
    }
  ];

  const courses = [
    { id: 1, title: 'Python Fundamentals', image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'Programming', icon: <FaCode /> },
    { id: 2, title: 'UI/UX Masterclass', image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'Design', icon: <FaPalette /> },
    { id: 3, title: 'Cybersecurity Essentials', image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'Tech', icon: <FaShieldAlt /> },
    { id: 4, title: 'Full Stack Development', image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'Web', icon: <FaLayerGroup /> },
    { id: 5, title: 'Data Science Bootcamp', image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'Data', icon: <FaChartLine /> },
    { id: 6, title: 'Cloud Computing (AWS)', image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'DevOps', icon: <FaDatabase /> },
  ];

  const tutorials = [
    {
      id: 1,
      title: 'React Hooks Masterclass',
      image: 'https://images.pexels.com/photos/163036/men-laptop-working-collaboration-163036.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Web Dev',
      duration: '2h 45m',
      icon: <FaLaptopCode />,
      level: 'Intermediate'
    },
    {
      id: 2,
      title: 'Advanced CSS Animations',
      image: 'https://images.pexels.com/photos/5916322/pexels-photo-5916322.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Frontend',
      duration: '1h 30m',
      icon: <FaPalette />,
      level: 'Advanced'
    },
    {
      id: 3,
      title: 'Node.js API Development',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Backend',
      duration: '3h 20m',
      icon: <FaCode />,
      level: 'Intermediate'
    },
    {
      id: 4,
      title: 'Docker & Kubernetes',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'DevOps',
      duration: '4h 10m',
      icon: <FaDatabase />,
      level: 'Advanced'
    },
    {
      id: 5,
      title: 'Python Data Visualization',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Data Science',
      duration: '2h 15m',
      icon: <FaChartLine />,
      level: 'Beginner'
    },
    {
      id: 6,
      title: 'Figma to React Workflow',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'UI/UX',
      duration: '1h 50m',
      icon: <FaVideo />,
      level: 'Intermediate'
    },
  ];

  const testimonials = [
    { name: "Sarah Lee", role: "UI/UX Development", text: "The UI/UX Development program exceeded my expectations. From wireframing to creating intuitive user flows, every module was practical." },
    { name: "Michael Smith", role: "Cybersecurity", text: "Cybersecurity was always a passion of mine. This program broke down complex concepts into simple, practical lessons." },
    { name: "John Doe", role: "Full-Stack Development", text: "The course completely changed my life. The expert guidance helped me transition into a high-paying role in tech." }
  ];

  // --- Logo Pulse Animation ---
  useEffect(() => {
    const pulseInterval = setInterval(() => {
      setLogoPulse(true);
      setTimeout(() => setLogoPulse(false), 500);
    }, 4000);
    return () => clearInterval(pulseInterval);
  }, []);

  // --- Carousel Logics ---
  const nextHeroSlide = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevHeroSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const nextCourseSlide = () => {
    setCourseIndex((prev) => {
      if (prev >= courses.length - 3) {
        return 0;
      }
      return prev + 1;
    });
  };

  const prevCourseSlide = () => {
    setCourseIndex((prev) => {
      if (prev === 0) {
        return courses.length - 3;
      }
      return prev - 1;
    });
  };

  const nextTutorialSlide = () => {
    setTutorialIndex((prev) => {
      if (prev >= tutorials.length - 4) {
        return 0;
      }
      return prev + 1;
    });
  };

  const prevTutorialSlide = () => {
    setTutorialIndex((prev) => {
      if (prev === 0) {
        return tutorials.length - 4;
      }
      return prev - 1;
    });
  };

  // Scroll Animation Logic
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    Object.entries(sectionRefs.current).forEach(([key, ref]) => {
      if (ref) {
        const rect = ref.getBoundingClientRect();
        const isVisible = rect.top < windowHeight * 0.8 && rect.bottom > 0;

        setVisibleSections(prev => ({
          ...prev,
          [key]: isVisible
        }));
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const heroTimer = setInterval(nextHeroSlide, 7000);
    const courseTimer = setInterval(nextCourseSlide, 4000);
    const tutorialTimer = setInterval(nextTutorialSlide, 5000);
    return () => {
      clearInterval(heroTimer);
      clearInterval(courseTimer);
      clearInterval(tutorialTimer);
    };
  }, []);

  return (
    <div style={styles.container}>
      {/* --- Navigation with Enhanced Logo --- */}
      <nav style={styles.navbar}>
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
        <div style={styles.navLinks}>
          <span style={styles.link}>Home</span>
          <span style={styles.link}>About</span>
          <span style={styles.link}>Courses</span>
          <div
            style={{ position: 'relative', cursor: 'pointer' }}
            onMouseEnter={() => setIsTutorialOpen(true)}
            onMouseLeave={() => setIsTutorialOpen(false)}
          >
            <span style={styles.link}>Tutorials <FaChevronDown size={10} /></span>
            {isTutorialOpen && (
              <div style={styles.dropdown}>
                <div style={styles.dropdownItem}>Web Development</div>
                <div style={styles.dropdownItem}>Data Science</div>
                <div style={styles.dropdownItem}>Graphic Design</div>
              </div>
            )}
          </div>
        </div>
        <button style={styles.loginBtn}>Login / Sign Up</button>
      </nav>

      {/* --- Hero Carousel --- */}
      <header style={styles.heroWrapper}>
        {slides.map((slide, index) => (
          <div key={index} style={{
            ...styles.heroSlide,
            backgroundImage: `url(${slide.url})`,
            opacity: currentSlide === index ? 1 : 0,
            transform: currentSlide === index ? 'scale(1) translateX(0)' : 'scale(1.05) translateX(50px)',
            zIndex: currentSlide === index ? 1 : 0,
            transition: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
          }}>
            <div style={styles.heroOverlay}>
              <div style={{
                ...styles.heroContent,
                transform: currentSlide === index ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.95)',
                opacity: currentSlide === index ? 1 : 0,
                transition: 'all 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s'
              }}>
                <h1 style={styles.heroH1}>{slide.title}</h1>
                <p style={styles.heroP}>{slide.sub}</p>
                <div style={styles.searchContainer}>
                  <FaSearch style={{ marginLeft: '20px', color: '#64748b' }} />
                  <input type="text" placeholder="What do you want to learn?" style={styles.searchInput} />
                  <button style={styles.searchBtn}>Search</button>
                </div>
              </div>
            </div>
          </div>
        ))}
        <button
          onClick={prevHeroSlide}
          style={styles.heroNavBtnLeft}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-50%) scale(1.1)';
            e.target.style.backgroundColor = 'rgba(255,255,255,0.3)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(-50%) scale(1)';
            e.target.style.backgroundColor = 'rgba(255,255,255,0.2)';
          }}
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={nextHeroSlide}
          style={styles.heroNavBtnRight}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-50%) scale(1.1)';
            e.target.style.backgroundColor = 'rgba(255,255,255,0.3)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(-50%) scale(1)';
            e.target.style.backgroundColor = 'rgba(255,255,255,0.2)';
          }}
        >
          <FaChevronRight />
        </button>
      </header>

      {/* --- About Section --- */}
      <section ref={el => (sectionRefs.current.about = el)} style={styles.section}>
        <div style={styles.aboutFlex}>
          <div style={{
            ...styles.aboutText,
            opacity: visibleSections.about ? 1 : 0,
            transform: visibleSections.about ? 'translateX(0)' : 'translateX(-50px)',
            transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
          }}>
            <p style={styles.subtitle}>Who We Are</p>
            <h2 style={styles.sectionH2}>Welcome to BRAIN PYRO</h2>
            <p style={styles.description}>
              Brain Pyro is an innovative online learning platform dedicated to empowering learners through high-quality courses in technology, business, and creative skills.
            </p>
            <button style={styles.outlineBtn}>Learn More About Us</button>
          </div>
          <div style={{
            ...styles.aboutImageContainer,
            opacity: visibleSections.about ? 1 : 0,
            transform: visibleSections.about ? 'translateX(0)' : 'translateX(50px)',
            transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s'
          }}>
            <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600" alt="About" style={styles.aboutImage} />
          </div>
        </div>
      </section>

      {/* --- Popular Courses (Infinite Loop - 3 cards) --- */}
      <section ref={el => (sectionRefs.current.courses = el)} style={styles.courseSection}>
        <div style={{
          ...{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' },
          opacity: visibleSections.courses ? 1 : 0,
          transform: visibleSections.courses ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }}>
          <h2 style={{ fontSize: '32px', fontWeight: '800' }}>🔥 Popular Courses</h2>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              onClick={prevCourseSlide}
              style={styles.courseNavBtn}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.1)';
                e.target.style.backgroundColor = '#f97316';
                e.target.style.color = '#fff';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.backgroundColor = '#fff';
                e.target.style.color = '#64748b';
              }}
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={nextCourseSlide}
              style={styles.courseNavBtn}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.1)';
                e.target.style.backgroundColor = '#f97316';
                e.target.style.color = '#fff';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.backgroundColor = '#fff';
                e.target.style.color = '#64748b';
              }}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        <div style={styles.courseSliderViewport}>
          <div style={{
            ...styles.courseSliderTrack,
            transform: `translateX(-${courseIndex * (100 / 3)}%)`
          }}>
            {courses.map((course, index) => (
              <div
                key={course.id}
                style={{
                  ...styles.courseSlideCard,
                  '--delay': `${index * 0.1}s`,
                  opacity: visibleSections.courses ? 1 : 0,
                  transform: visibleSections.courses
                    ? (hoveredCourse === course.id ? 'translateY(0px) scale(1)' : 'translateY(0) scale(0.9)')
                    : 'translateY(50px) scale(0.9)',
                  transition: hoveredCourse === course.id
                    ? 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                    : `all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.1}s`,
                  // boxShadow: hoveredCourse === course.id ? '0 25px 50px rgba(0,0,0,0.2)' : '0 5px 15px rgba(0,0,0,0.05)'
                }}
                onMouseEnter={() => setHoveredCourse(course.id)}
                onMouseLeave={() => setHoveredCourse(null)}
              >
                <div style={styles.courseImageWrapper}>
                  <img
                    src={course.image}
                    alt={course.title}
                    style={{
                      ...styles.courseImg,
                      transform: hoveredCourse === course.id ? 'scale(1.1)' : 'scale(1)',
                      transition: 'transform 0.6s ease'
                    }}
                  />
                  <div style={styles.tag}>{course.icon} <span style={{ marginLeft: '8px' }}>{course.category}</span></div>
                </div>
                <div style={styles.cardContent}>
                  <h4 style={{
                    ...styles.courseTitle,
                    transform: hoveredCourse === course.id ? 'translateY(-5px)' : 'translateY(0)',
                    transition: 'all 0.3s ease'
                  }}>{course.title}</h4>
                  <button style={{
                    ...styles.viewBtn,
                    backgroundColor: hoveredCourse === course.id ? '#1d4ed8' : 'transparent',
                    color: hoveredCourse === course.id ? '#fff' : '#1d4ed8',
                    transform: hoveredCourse === course.id ? 'scale(1.05)' : 'scale(1)'
                  }}>
                    View Course
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rest of the sections remain the same as before... (keeping it concise) */}
      <section ref={el => (sectionRefs.current.tutorials = el)} style={styles.tutorialSection}>
        <div style={{
          ...{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' },
          opacity: visibleSections.tutorials ? 1 : 0,
          transform: visibleSections.tutorials ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }}>
          <h2 style={{ fontSize: '32px', fontWeight: '800' }}>🎥 Free Tutorials</h2>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              onClick={prevTutorialSlide}
              style={styles.tutorialNavBtn}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.1)';
                e.target.style.boxShadow = '0 6px 20px rgba(249, 115, 22, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = '0 4px 15px rgba(249, 115, 22, 0.3)';
              }}
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={nextTutorialSlide}
              style={styles.tutorialNavBtn}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.1)';
                e.target.style.boxShadow = '0 6px 20px rgba(249, 115, 22, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = '0 4px 15px rgba(249, 115, 22, 0.3)';
              }}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        <div style={styles.tutorialSliderViewport}>
          <div style={{
            ...styles.tutorialSliderTrack,
            transform: `translateX(-${tutorialIndex * (100 / 4)}%)`
          }}>
            {tutorials.map((tutorial, index) => (
              <div
                key={tutorial.id}
                style={{
                  ...styles.tutorialSlideCard,
                  '--delay': `${index * 0.08}s`,
                  opacity: visibleSections.tutorials ? 1 : 0,
                  transform: visibleSections.tutorials
                    ? ('translateY(0)')
                    : 'translateY(40px) scale(0.95)',
                  transition: hoveredTutorial === tutorial.id
                    ? 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                    : `all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.08}s`,

                }}
                onMouseEnter={() => setHoveredTutorial(tutorial.id)}
                onMouseLeave={() => setHoveredTutorial(null)}
              >
                <div style={styles.tutorialImageWrapper}>
                  <img
                    src={tutorial.image}
                    alt={tutorial.title}
                    style={{
                      ...styles.tutorialImg,
                      transform: hoveredTutorial === tutorial.id ? 'scale(1.08)' : 'scale(1)',
                      transition: 'transform 0.5s ease'
                    }}
                  />
                  <div style={styles.playButton}>▶</div>
                  <div style={styles.tutorialTag}>{tutorial.icon} <span style={{ marginLeft: '6px' }}>{tutorial.category}</span></div>
                </div>
                <div>
                  <div style={styles.tutorialHeader}>
                    <h4 style={{
                      ...styles.tutorialTitle,
                      transform: hoveredTutorial === tutorial.id ? 'translateY(-3px)' : 'translateY(0)'
                    }}>{tutorial.title}</h4>
                    <span style={styles.levelBadge}>{tutorial.level}</span>
                  </div>
                  <div style={styles.tutorialMeta}>
                    <span style={styles.duration}>{tutorial.duration}</span>
                    <button style={{
                      ...styles.watchBtn,
                      backgroundColor: hoveredTutorial === tutorial.id ? '#f97316' : 'transparent',
                      color: hoveredTutorial === tutorial.id ? '#fff' : '#f97316'
                    }}>
                      Watch Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={el => (sectionRefs.current.testimonials = el)} style={styles.section}>
        <h2 style={{
          ...styles.centerH2,
          opacity: visibleSections.testimonials ? 1 : 0,
          transform: visibleSections.testimonials ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }}>What Our Students Say</h2>
        <div style={styles.courseGrid}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              style={{
                ...styles.testimonialCard,
                '--delay': `${i * 0.15}s`,
                opacity: visibleSections.testimonials ? 1 : 0,
                transform: visibleSections.testimonials
                  ? (hoveredTestimonial === i ? 'translateY(-10px) scale(1.02)' : 'translateY(0)')
                  : 'translateY(50px) scale(0.9)',
                transition: hoveredTestimonial === i
                  ? 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                  : `all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${i * 0.15}s`,
                boxShadow: hoveredTestimonial === i ? '0 20px 40px rgba(0,0,0,0.15)' : '0 10px 30px rgba(0,0,0,0.05)'
              }}
              onMouseEnter={() => setHoveredTestimonial(i)}
              onMouseLeave={() => setHoveredTestimonial(null)}
            >
              <p style={styles.testimonialText}>"{t.text}"</p>
              <h4 style={{
                marginBottom: '5px',
                transform: hoveredTestimonial === i ? 'translateX(10px)' : 'translateX(0)',
                transition: 'all 0.3s ease',
                color: hoveredTestimonial === i ? '#f97316' : '#1e293b'
              }}>
                — {t.name}
              </h4>
              <span style={{
                color: '#f97316',
                fontSize: '14px',
                fontWeight: 'bold',
                transform: hoveredTestimonial === i ? 'scale(1.1)' : 'scale(1)',
                transition: 'all 0.3s ease'
              }}>
                {t.role}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section ref={el => (sectionRefs.current.stats = el)} style={styles.statsBar}>
        <div style={{
          ...styles.statItem,
          opacity: visibleSections.stats ? 1 : 0,
          transform: visibleSections.stats ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.9)',
          transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }}>
          <FaUsers size={32} style={styles.statIcon} />
          <span style={styles.statNum}>1,000+</span>
          <p style={styles.statLabel}>Students Admitted</p>
        </div>
        <div style={{
          ...styles.statItem,
          opacity: visibleSections.stats ? 1 : 0,
          transform: visibleSections.stats ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.9)',
          transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.1s'
        }}>
          <FaTrophy size={32} style={styles.statIcon} />
          <span style={styles.statNum}>95%</span>
          <p style={styles.statLabel}>Placement Rate</p>
        </div>
        <div style={{
          ...styles.statItem,
          opacity: visibleSections.stats ? 1 : 0,
          transform: visibleSections.stats ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.9)',
          transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s'
        }}>
          <FaGraduationCap size={32} style={styles.statIcon} />
          <span style={styles.statNum}>98%</span>
          <p style={styles.statLabel}>Success Rate</p>
        </div>
      </section>

      <section ref={el => (sectionRefs.current.cta = el)} style={styles.ctaBanner}>
        <h2 style={{
          opacity: visibleSections.cta ? 1 : 0,
          transform: visibleSections.cta ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }}>Start Your Journey Today!</h2>
        <p style={{
          marginBottom: '30px',
          opacity: visibleSections.cta ? 0.9 : 0,
          transform: visibleSections.cta ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s'
        }}>Join thousands of students mastering in-demand skills.</p>
        <button
          style={{
            ...styles.ctaBtn,
            opacity: visibleSections.cta ? 1 : 0,
            transform: visibleSections.cta ? 'scale(1)' : 'scale(0.9)',
            transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.05) translateY(-2px)';
            e.target.style.boxShadow = '0 15px 35px rgba(0,0,0,0.3)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = visibleSections.cta ? 'scale(1)' : 'scale(0.9)';
            e.target.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)';
          }}
        >
          Get Started →
        </button>
      </section>

      <footer ref={el => (sectionRefs.current.footer = el)} style={styles.footer}>
        <div style={{
          ...styles.footerContent,
          opacity: visibleSections.footer ? 1 : 0,
          transform: visibleSections.footer ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }}>
          <div style={styles.footerBrand}>
            <div style={styles.footerLogo}>
              <FaBrain style={styles.footerBrainIcon} />
              <FaFire style={styles.footerFireIcon} />
              <span>BRAINPYRO</span>
            </div>
            <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Building your future through quality education.</p>
          </div>
          <div style={styles.footerLinks}>
            <h4 style={styles.footerHead}>Contact</h4>
            <p style={styles.footerText}><FaPhoneAlt size={14} style={styles.inlineIcon} /> +91 12345 67890</p>
            <p style={styles.footerText}><FaWhatsapp size={14} style={styles.inlineIcon} /> Chat on WhatsApp</p>
          </div>
          <div style={styles.footerLinks}>
            <h4 style={styles.footerHead}>Location</h4>
            <p style={styles.footerText}><FaMapMarkerAlt size={14} style={styles.inlineIcon} /> Bangalore, India</p>
            <div style={styles.socialGrid}>
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                <div key={i} style={styles.socialCircle}><Icon /></div>
              ))}
            </div>
          </div>
        </div>
        <div style={styles.copyright}>© 2026 BrainPyro. All Rights Reserved.</div>
      </footer>
    </div>
  );
};

// --- Updated Styles with Logo Magic ---
const styles = {
  container: {
    fontFamily: "'Inter', sans-serif",
    margin: 0,
    backgroundColor: '#fff',
    color: '#1e293b',
    overflowX: 'hidden'
  },

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
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
    backdropFilter: 'blur(10px)'
  },

  logo: {
    fontSize: '24px',
    fontWeight: '900',
    color: '#f97316',
    letterSpacing: '-1px',
    transition: 'all 0.3s ease'
  },

  navLinks: {
    display: 'flex',
    gap: '35px',
    fontWeight: '600',
    color: '#334155'
  },

  link: {
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    position: 'relative'
  },

  dropdown: {
    position: 'absolute',
    top: '100%',
    left: 0,
    backgroundColor: '#fff',
    boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
    borderRadius: '8px',
    padding: '10px 0',
    width: '200px',
    opacity: 0,
    transform: 'translateY(-10px)',
    transition: 'all 0.3s ease',
    pointerEvents: 'none'
  },

  dropdownItem: {
    padding: '10px 20px',
    fontSize: '14px',
    cursor: 'pointer',
    transition: 'all 0.2s ease'
  },

  loginBtn: {
    backgroundColor: '#1d4ed8',
    color: '#fff',
    border: 'none',
    padding: '10px 24px',
    borderRadius: '6px',
    fontWeight: '700',
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    transform: 'translateY(0)',
    boxShadow: '0 4px 15px rgba(29, 78, 216, 0.4)'
  },

  heroWrapper: {
    position: 'relative',
    height: '100vh',
    width: '100%',
    overflow: 'hidden',
    backgroundColor: '#000'
  },

  heroSlide: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
  },

  heroOverlay: {
    width: '100%',
    height: '100%',
    background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.4))',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  heroContent: {
    textAlign: 'center',
    maxWidth: '800px',
    color: '#fff',
    padding: '0 20px'
  },

  heroH1: {
    fontSize: '56px',
    fontWeight: '900',
    marginBottom: '20px',
    lineHeight: '1.2',
    textShadow: '0 4px 20px rgba(0,0,0,0.5)'
  },

  heroP: {
    fontSize: '20px',
    marginBottom: '40px',
    color: '#e2e8f0'
  },

  searchContainer: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: '50px',
    padding: '6px',
    width: '100%',
    maxWidth: '600px',
    margin: '0 auto',
    boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
    transition: 'all 0.3s ease'
  },

  searchInput: {
    flex: 1,
    border: 'none',
    outline: 'none',
    padding: '12px 20px',
    fontSize: '16px'
  },

  searchBtn: {
    backgroundColor: '#f97316',
    color: '#fff',
    border: 'none',
    padding: '12px 35px',
    borderRadius: '50px',
    fontWeight: '700',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },

  heroNavBtnLeft: {
    position: 'absolute',
    top: '50%',
    left: '30px',
    backgroundColor: 'rgba(255,255,255,0.2)',
    border: 'none',
    color: '#fff',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    cursor: 'pointer',
    zIndex: 10,
    backdropFilter: 'blur(10px)',
    transform: 'translateY(-50%) scale(1)',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
  },

  heroNavBtnRight: {
    position: 'absolute',
    top: '50%',
    right: '30px',
    backgroundColor: 'rgba(255,255,255,0.2)',
    border: 'none',
    color: '#fff',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    cursor: 'pointer',
    zIndex: 10,
    backdropFilter: 'blur(10px)',
    transform: 'translateY(-50%) scale(1)',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
  },

  section: {
    padding: '100px 10%'
  },

  aboutFlex: {
    display: 'flex',
    alignItems: 'center',
    gap: '60px',
    flexWrap: 'wrap'
  },

  aboutText: {
    flex: 1.2,
    minWidth: '320px'
  },

  aboutImageContainer: {
    flex: 1,
    minWidth: '320px'
  },

  aboutImage: {
    width: '100%',
    borderRadius: '20px',
    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
    transition: 'all 0.5s ease'
  },

  subtitle: {
    color: '#f97316',
    fontWeight: '800',
    textTransform: 'uppercase',
    fontSize: '14px',
    marginBottom: '10px'
  },

  sectionH2: {
    fontSize: '36px',
    fontWeight: '800',
    marginBottom: '20px'
  },

  description: {
    lineHeight: '1.8',
    color: '#475569',
    fontSize: '16px',
    marginBottom: '30px'
  },

  outlineBtn: {
    border: '2px solid #1d4ed8',
    background: 'none',
    color: '#1d4ed8',
    padding: '12px 28px',
    borderRadius: '6px',
    fontWeight: '700',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },

  courseSection: {
    padding: '100px 10%',
    backgroundColor: '#f8fafc',
    overflow: 'hidden'
  },

  courseNavBtn: {
    width: '40px',
    height: '40px',
    border: '1px solid #e2e8f0',
    borderRadius: '50%',
    backgroundColor: '#fff',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
    color: '#64748b'
  },

  courseSliderViewport: {
    width: '100%',
    overflow: 'hidden'
  },

  courseSliderTrack: {
    display: 'flex',
    transition: 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
  },

  courseSlideCard: {
    flex: '0 0 33.333%',
    padding: '0 15px',
    boxSizing: 'border-box'
  },

  courseImageWrapper: {
    position: 'relative',
    height: '200px',
    borderRadius: '15px 15px 0 0',
    overflow: 'hidden',
    transition: 'all 0.4s ease'
  },

  courseImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.6s ease'
  },

  tag: {
    position: 'absolute',
    top: '15px',
    left: '15px',
    backgroundColor: '#f97316',
    color: '#fff',
    padding: '6px 14px',
    borderRadius: '50px',
    fontSize: '12px',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center'
  },

  cardContent: {
    padding: '25px',
    textAlign: 'center',
    backgroundColor: '#fff',
    borderRadius: '0 0 15px 15px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
  },

  courseTitle: {
    fontSize: '18px',
    fontWeight: '700',
    marginBottom: '20px'
  },

  viewBtn: {
    color: '#1d4ed8',
    border: '1px solid #1d4ed8',
    padding: '8px 20px',
    borderRadius: '6px',
    background: 'none',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },

  tutorialSection: {
    padding: '100px 10%',
    background: 'linear-gradient(135deg, #fff7ed 0%, #fef3c7 100%)',
    overflow: 'hidden'
  },

  tutorialNavBtn: {
    width: '44px',
    height: '44px',
    border: '2px solid #f97316',
    borderRadius: '50%',
    backgroundColor: '#fff',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
    color: '#f97316',
    fontSize: '16px',
    boxShadow: '0 4px 15px rgba(249, 115, 22, 0.3)'
  },

  tutorialSliderViewport: {
    width: '100%',
    overflow: 'hidden'
  },

  tutorialSliderTrack: {
    display: 'flex',
    transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
  },

  tutorialSlideCard: {
    flex: '0 0 25%',
    padding: '0 12px',
    boxSizing: 'border-box',
    marginBottom: '20px',
    backgroundColor: '#ffffff',
    padding: '15px',
    margin: '0 10px',
    height: 'fit-content',
    borderRadius: '12px',
  },

  tutorialImageWrapper: {
    position: 'relative',
    height: '180px',
    borderRadius: '16px',
    overflow: 'hidden',
    background: 'linear-gradient(45deg, #f97316, #fb923c)',
    marginBottom: '16px'
  },

  tutorialImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease',
    filter: 'brightness(0.9) contrast(1.1)'
  },

  playButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60px',
    height: '60px',
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#f97316',
    boxShadow: '0 8px 25px rgba(0,0,0,0.3)',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  },

  tutorialTag: {
    position: 'absolute',
    top: '12px',
    left: '12px',
    backgroundColor: 'rgba(255,255,255,0.9)',
    color: '#1e293b',
    padding: '4px 12px',
    borderRadius: '20px',
    fontSize: '11px',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    backdropFilter: 'blur(10px)'
  },

  tutorialCardContent: {
    backgroundColor: '#fff',
    borderRadius: '0 0 16px 16px',
    padding: '20px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
  },

  tutorialHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '12px'
  },

  tutorialTitle: {
    fontSize: '16px',
    fontWeight: '700',
    lineHeight: '1.4',
    margin: 0,
    flex: 1,
    marginRight: '12px'
  },

  levelBadge: {
    backgroundColor: '#f97316',
    color: '#fff',
    padding: '4px 10px',
    borderRadius: '12px',
    fontSize: '11px',
    fontWeight: '600',
    whiteSpace: 'nowrap'
  },

  tutorialMeta: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  duration: {
    color: '#64748b',
    fontSize: '14px',
    fontWeight: '500'
  },

  watchBtn: {
    border: '1px solid #f97316',
    color: '#f97316',
    padding: '6px 16px',
    borderRadius: '8px',
    background: 'transparent',
    fontWeight: '600',
    cursor: 'pointer',
    fontSize: '13px',
    transition: 'all 0.3s ease'
  },

  centerH2: {
    textAlign: 'center',
    fontSize: '32px',
    fontWeight: '800',
    marginBottom: '60px'
  },

  courseGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '30px'
  },

  testimonialCard: {
    padding: '40px',
    backgroundColor: '#f8fafc',
    borderRadius: '20px',
    border: '1px solid #e2e8f0',
    transition: 'all 0.4s ease'
  },

  testimonialText: {
    fontStyle: 'italic',
    marginBottom: '20px',
    color: '#475569',
    lineHeight: '1.6'
  },

  statsBar: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '60px 10%',
    flexWrap: 'wrap',
    borderTop: '1px solid #e2e8f0'
  },

  statItem: {
    textAlign: 'center'
  },

  statIcon: {
    color: '#f97316',
    marginBottom: '15px'
  },

  statNum: {
    fontSize: '36px',
    fontWeight: '900',
    color: '#1d4ed8',
    display: 'block'
  },

  statLabel: {
    color: '#64748b',
    fontWeight: '500'
  },

  ctaBanner: {
    margin: '0 10% 100px',
    padding: '60px',
    borderRadius: '20px',
    background: 'linear-gradient(135deg, #1d4ed8, #1e40af)',
    color: '#fff',
    textAlign: 'center',
    boxShadow: '0 20px 60px rgba(29, 78, 216, 0.4)'
  },

  ctaBtn: {
    backgroundColor: '#fff',
    color: '#1d4ed8',
    border: 'none',
    padding: '15px 40px',
    borderRadius: '50px',
    fontWeight: '800',
    cursor: 'pointer',
    transition: 'all 0.4s ease',
    boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
  },

  footer: {
    backgroundColor: '#0f172a',
    color: '#fff',
    padding: '80px 10% 40px'
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

  logoWhite: {
    fontSize: '28px',
    color: '#f97316',
    fontWeight: '900',
    marginBottom: '20px'
  },

  footerHead: {
    marginBottom: '25px',
    fontSize: '18px',
    fontWeight: '700'
  },

  footerText: {
    color: '#94a3b8',
    marginBottom: '12px',
    display: 'flex',
    alignItems: 'center'
  },

  inlineIcon: {
    marginRight: '10px',
    color: '#f97316'
  },

  socialGrid: {
    display: 'flex',
    gap: '15px',
    marginTop: '20px'
  },

  socialCircle: {
    width: '40px',
    height: '40px',
    backgroundColor: '#1e293b',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer'
  },

  copyright: {
    textAlign: 'center',
    paddingTop: '30px',
    borderTop: '1px solid #1e293b',
    color: '#64748b'
  },

  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
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
    boxShadow: '0 8px 25px rgba(249, 115, 22, 0.4)'
  },

  brainIcon: {
    fontSize: '20px',
    color: '#fff',
    zIndex: 2,
    position: 'relative'
  },

  fireIcon: {
    fontSize: '16px',
    color: '#fef3c7',
    position: 'absolute',
    top: '2px',
    right: '2px',
    animation: 'fireFlicker 2s infinite'
  },

  logoText: {
    fontSize: '24px',
    fontWeight: '900',
    background: 'linear-gradient(135deg, #f97316, #fb923c)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    letterSpacing: '-1px'
  },

  footerLogo: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '20px'
  },

  footerBrainIcon: {
    fontSize: '24px',
    color: '#f97316'
  },

  footerFireIcon: {
    fontSize: '18px',
    color: '#fb923c',
    animation: 'fireFlicker 2.5s infinite'
  }
};

const globalStyles = `
@keyframes logoPulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.15); box-shadow: 0 0 30px rgba(249, 115, 22, 0.6); }
  100% { transform: scale(1); }
}

@keyframes fireFlicker {
  0%, 100% { opacity: 1; transform: scale(1) rotate(0deg); }
  25% { opacity: 0.7; transform: scale(1.1) rotate(5deg); }
  50% { opacity: 0.9; transform: scale(0.95) rotate(-3deg); }
  75% { opacity: 0.8; transform: scale(1.05) rotate(2deg); }
}
`;

export default App;