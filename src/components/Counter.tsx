'use client';
import { useEffect, useRef, useState } from 'react';
import './Counter.css';

const useCountUp = (targetNumber: number, duration: number) => {
  const [count, setCount] = useState(0);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const increment = targetNumber / (duration / 16); // ~60fps
    const step = () => {
      start += increment;
      if (start < targetNumber) {
        setCount(Math.ceil(start));
        requestAnimationFrame(step);
      } else {
        setCount(targetNumber);
      }
    };
    requestAnimationFrame(step);
  }, [inView, targetNumber, duration]);

  return { count, ref };
};

export default function Counter() {
  const coffee = useCountUp(5000, 1000);
  const code = useCountUp(60, 1000);
  const experience = useCountUp(10, 1000);
  const projects = useCountUp(8, 1000);

  return (
    <section id="statistic" className="statistic-section one-page-section">
      <div className="container">
        <div className="row text-center">
          <div className="col-xs-12 col-md-3">
            <div className="counter">
              <i className="fa fa-user fa-2x stats-icon"></i>
              <h2 ref={coffee.ref} className="count-title count-number">{coffee.count}+</h2>
              <div className="stats-line-black"></div>
              <p className="stats-text">Satisfied Customers</p>
            </div>
          </div>
          <div className="col-xs-12 col-md-3">
            <div className="counter">
              <i className="fa fa-car fa-2x stats-icon"></i>
              <h2 ref={code.ref} className="count-title count-number">{code.count}+</h2>
              <div className="stats-line-black"></div>
              <p className="stats-text">Cars In Fleet</p>
            </div>
          </div>
          <div className="col-xs-12 col-md-3">
            <div className="counter">
              <i className="fa fa-id-badge fa-2x stats-icon"></i>
              <h2 ref={experience.ref} className="count-title count-number">{experience.count}+</h2>
              <div className="stats-line-black"></div>
              <p className="stats-text">Drivers We Have</p>
            </div>
          </div>
          <div className="col-xs-12 col-md-3">
            <div className="counter">
              <i className="fa fa-briefcase fa-2x stats-icon"></i>
              <h2 ref={projects.ref} className="count-title count-number">{projects.count}+</h2>
              <div className="stats-line-black"></div>
              <p className="stats-text">Years In Business</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
