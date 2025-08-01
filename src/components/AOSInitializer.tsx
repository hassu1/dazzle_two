"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSInitializer() {
  useEffect(() => {
    AOS.init({
      duration: 1300,
      once: false, // or true, based on your need
    });

    const timer = setTimeout(() => {
      AOS.refreshHard();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return null; // no UI
}
