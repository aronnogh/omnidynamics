import React, { useEffect, useState, useRef } from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import Section from './Section';
import MinusSection from './MinusSection';

const Team = () => {
  const [faculty, setFaculty] = useState([]);
  const [error, setError] = useState(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    fetch('/json/team.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setFaculty(data))
      .catch((err) => {
        console.error('Error loading faculty data:', err);
        setError('Failed to load faculty data. Please try again later.');
      });
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: [0, 0.1],
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        const index = cardsRef.current.findIndex((card) => card === entry.target);
        if (entry.isIntersecting && entry.intersectionRatio > 0) {
          setActiveCardIndex(index);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, [faculty]);

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  return (
    <Section crosses id="team" className="min-h-screen relative pt-40 bg-[#0A0B0F]" ref={containerRef}>
      <div className="flex flex-col gap-10 relative max-w-7xl mx-auto px-4">
        {faculty.map((member, index) => (
          <MinusSection
            key={member.id}
            ref={(el) => (cardsRef.current[index] = el)}
            className="sticky top-20 transition-all duration-700"
            style={{
              transform: `translateY(${index < activeCardIndex ? `-${(activeCardIndex - index) * 20}px` : '0px'}) 
                         rotate(${index < activeCardIndex ? (activeCardIndex - index) * 2 : 0}deg)`,
              zIndex: faculty.length + index,
            }}
          >
            <div className="relative">
              {/* Top-left corner */}
              <div className="absolute top-0 left-0 w-[100px] h-[2px] bg-gradient-to-r from-pink-600 to-transparent"></div>
              <div className="absolute top-0 left-0 w-[2px] h-[100px] bg-gradient-to-b from-pink-600 to-transparent"></div>

              {/* Bottom-left corner */}
              <div className="absolute -bottom-1 left-0 w-[100px] h-[2px] bg-gradient-to-r from-blue-600 to-transparent"></div>
              <div className="absolute -bottom-1 left-0 w-[2px] h-[100px] bg-gradient-to-b from-blue-600 to-transparent"></div>
              
              {/* Top-right corner */}
              <div className="absolute top-0 right-0 w-[100px] h-[2px] bg-gradient-to-l from-blue-600 to-transparent"></div>
              <div className="absolute top-0 right-0 w-[2px] h-[100px] bg-gradient-to-b from-blue-600 to-transparent"></div>

              
              
              {/* Main content */}
              <div className="relative rounded-[2.5rem] bg-[#0A0B0F] p-8 lg:p-12">
                <div className="flex flex-col lg:flex-row items-start gap-12">
                  {/* Text content */}
                  <div className="flex-1 space-y-8">
                    <header>
                      <h2 className="text-4xl font-bold text-pink-500">
                        {member.name}
                      </h2>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {member.designation.split(',').map((role, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-1.5 text-sm text-gray-300 bg-[#1A1B1F] rounded-full"
                          >
                            {role.trim()}
                          </span>
                        ))}
                      </div>
                      <p className="mt-3 text-gray-400">{member.desigInBranch}</p>
                      <p className="text-sm text-gray-500 italic">{member.of}</p>
                    </header>

                    <main>
                      <p className="text-gray-300 leading-relaxed">
                        {member.desc}
                      </p>
                    </main>

                    <footer>
                      <div className="flex gap-4">
                        <a
                          href={`https://www.instagram.com/${member.insta}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-slate-100 hover:bg-pink-500 transition-colors duration-300"
                        >
                          <FaInstagram size={24} className="text-slate-800" />
                        </a>
                        <a
                          href={`https://www.linkedin.com/in/${member.linkedIn}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-slate-100 hover:bg-blue-500 transition-colors duration-300"
                        >
                          <FaLinkedin size={24} className="text-slate-800" />
                        </a>
                      </div>
                    </footer>
                  </div>

                  {/* Image */}
                  <div className="lg:w-1/3">
                    <div className="relative">
                      {/* Image border gradient */}
                      <div className="absolute -inset-[2px] rounded-3xl">
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-75"></div>
                      </div>
                      <img
                        src={member.img}
                        alt={`${member.name} - ${member.designation}`}
                        className="relative rounded-3xl w-full h-[400px] object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </MinusSection>
        ))}
      </div>
    </Section>
  );
};

export default Team;