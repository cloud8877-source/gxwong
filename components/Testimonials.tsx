import React, { useState, useEffect, useCallback, useRef, CSSProperties } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import type { Testimonial as TestimonialType } from '../types';

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
          ? 'bg-green-100 text-green-800 border border-green-200' 
          : 'bg-slate-100 text-slate-700';
          
        return (
          <div
            ref={el => { cardRefs.current[index] = el; }}
            key={testimonial.id}
            className="testimonial-card glass-effect"
            style={style}
            onMouseDown={(e) => handleDragStart(e, index)}
            onTouchStart={(e) => handleDragStart(e, index)}
          >
            <div className="p-6 md:p-8 text-slate-800">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-white font-semibold text-lg" style={{ background: testimonial.avatarGradient }}>
                    {testimonial.initials}
                  </div>
                  <div>
                    <h3 className="text-green-900 font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-slate-500 mt-1">{testimonial.role}</p>
                  </div>
                </div>
              </div>
              
              <blockquote className="text-slate-700 leading-relaxed text-base mb-6">"{testimonial.quote}"</blockquote>
              
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-t border-slate-200/80 pt-4 gap-4">
                <div className="flex flex-wrap gap-2">
                  {testimonial.tags.map((tag, i) => (
                    <span key={i} className={['text-xs', 'px-2.5', 'py-1', 'rounded-full', 'font-medium', tagClasses(tag.type)].join(' ')}>
                      {tag.text}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 text-xs text-slate-500">
                  {testimonial.stats.map((stat, i) => {
                    const IconComponent = stat.icon;
                    return (
                      <span key={i} className="flex items-center">
                        <IconComponent className="mr-1.5 h-4 w-4 text-green-600" />
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
        <section id="testimonials" className="py-20 md:py-28 bg-green-50/30 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-green-900 tracking-tight">{t.testimonials.title}</h2>
                    <p className="text-slate-600 mt-3 text-lg">{t.testimonials.subtitle}</p>
                </div>
                <TestimonialStack testimonials={t.testimonials.items} />
            </div>
        </section>
    );
};

export default Testimonials;