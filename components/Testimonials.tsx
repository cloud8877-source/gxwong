import React, { useState, useEffect, useCallback, useRef, CSSProperties } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import type { Testimonial as TestimonialType } from '../types';

// --- Local Icon Definitions for Robustness ---
const BuildingOffice2Icon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636l1.5.545m-2.09-2.09l1.5.545M18.75 10.75h-4.5v-4.5h4.5v4.5z" />
    </svg>
);

const UserGroupIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.14-4.08a3 3 0 00-4.682-2.72-3 3 0 00-4.682 2.72m6.11-3.04a2.25 2.25 0 103.75 0 2.25 2.25 0 00-3.75 0zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

// --- Icon Mapper ---
const statIconMap: { [key: string]: React.ComponentType<React.SVGProps<SVGSVGElement>> } = {
    building: BuildingOffice2Icon,
    group: UserGroupIcon,
};


// --- TestimonialStack Component ---
const TestimonialStack = ({ testimonials }: { testimonials: TestimonialType[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // State to control autoplay
  const dragStartRef = useRef(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const totalCards = testimonials.length;
  const visibleBehind = 2;

  const navigate = useCallback((newIndex: number) => {
    setActiveIndex((newIndex + totalCards) % totalCards);
  }, [totalCards]);

  // --- Autoplay Logic ---
  useEffect(() => {
    if (isPaused) return;

    const autoPlayTimer = setInterval(() => {
      navigate(activeIndex + 1);
    }, 5000); // Rotate every 5 seconds

    return () => clearInterval(autoPlayTimer);
  }, [activeIndex, isPaused, navigate]);


  const handleDragStart = (e: React.MouseEvent | React.TouchEvent, index: number) => {
    if (index !== activeIndex) return;
    setIsPaused(true); // Pause on drag
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    dragStartRef.current = clientX;
    cardRefs.current[activeIndex]?.classList.add('is-dragging');
  };

  const handleDragMove = useCallback((e: MouseEvent | TouchEvent) => {
    if (!isDragging) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setDragOffset(clientX - dragStartRef.current);
  }, [isDragging]);

  const handleDragEnd = useCallback(() => {
    if (!isDragging) return;
    cardRefs.current[activeIndex]?.classList.remove('is-dragging');
    if (Math.abs(dragOffset) > 50) {
      navigate(activeIndex + (dragOffset < 0 ? 1 : -1));
    }
    setIsDragging(false);
    setDragOffset(0);
  }, [isDragging, dragOffset, activeIndex, navigate]);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleDragMove);
      window.addEventListener('touchmove', handleDragMove);
      window.addEventListener('mouseup', handleDragEnd);
      window.addEventListener('touchend', handleDragEnd);
    }
    return () => {
      window.removeEventListener('mousemove', handleDragMove);
      window.removeEventListener('touchmove', handleDragMove);
      window.removeEventListener('mouseup', handleDragEnd);
      window.removeEventListener('touchend', handleDragEnd);
    };
  }, [isDragging, handleDragMove, handleDragEnd]);

  const handlePaginationClick = (index: number) => {
    setIsPaused(true);
    navigate(index);
  };
  
  if (!testimonials?.length) return null;

  return (
    <div 
      className="testimonials-stack"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {testimonials.map((testimonial, index) => {
        const displayOrder = (index - activeIndex + totalCards) % totalCards;
        const style: CSSProperties = {};
        if (displayOrder === 0) {
          style.transform = `translateX(${dragOffset}px) rotate(${dragOffset / 20}deg)`;
          style.opacity = 1;
          style.zIndex = totalCards;
        } else if (displayOrder <= visibleBehind) {
          const scale = 1 - 0.05 * displayOrder;
          const translateY = -1.5 * displayOrder; // in rem
          style.transform = `scale(${scale}) translateY(${translateY}rem)`;
          style.opacity = 1;
          style.zIndex = totalCards - displayOrder;
        } else {
          style.transform = 'scale(0.8)';
          style.opacity = 0;
          style.zIndex = 0;
        }

        const tagClasses = (type: 'featured' | 'default') => type === 'featured' 
          ? 'bg-slate-700 text-stone-100 border border-slate-600' 
          : 'bg-slate-800 text-stone-300';
          
        return (
          <div
            ref={el => { cardRefs.current[index] = el; }}
            key={testimonial.id}
            className="testimonial-card"
            style={style}
            onMouseDown={(e) => handleDragStart(e, index)}
            onTouchStart={(e) => handleDragStart(e, index)}
          >
            <div className="p-6 md:p-8 text-stone-200 bg-slate-800/70 backdrop-blur-md border border-slate-700/50 rounded-2xl">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-white font-semibold text-lg" style={{ background: testimonial.avatarGradient }}>
                    {testimonial.initials}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-slate-400 mt-1">{testimonial.role}</p>
                  </div>
                </div>
              </div>
              
              <blockquote className="text-stone-300 leading-relaxed text-base mb-6">"{testimonial.quote}"</blockquote>
              
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-t border-slate-700/80 pt-4 gap-4">
                <div className="flex flex-wrap gap-2">
                  {testimonial.tags.map((tag, i) => (
                    <span key={i} className={['text-xs', 'px-2.5', 'py-1', 'rounded-full', 'font-medium', tagClasses(tag.type)].join(' ')}>
                      {tag.text}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 text-xs text-slate-400">
                  {testimonial.stats.map((stat, i) => {
                    const IconComponent = statIconMap[stat.icon];
                    if (!IconComponent) return null;
                    return (
                      <span key={i} className="flex items-center">
                        <IconComponent className="mr-1.5 h-4 w-4 text-slate-400" />
                        {stat.text}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
      
      <div className="pagination">
        {testimonials.map((_, index) => (
          <button key={index} aria-label={`Go to testimonial ${index + 1}`} onClick={() => handlePaginationClick(index)} className={`pagination-dot ${activeIndex === index ? 'active' : ''}`} />
        ))}
      </div>
    </div>
  );
};

// --- Main Section Component ---
const Testimonials: React.FC = () => {
    const { t } = useLanguage();
    return (
        <section id="testimonials" className="py-20 md:py-28 bg-slate-900 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{t.testimonials.title}</h2>
                    <p className="text-slate-400 mt-3 text-lg">{t.testimonials.subtitle}</p>
                </div>
                <TestimonialStack testimonials={t.testimonials.items} />
            </div>
        </section>
    );
};

export default Testimonials;