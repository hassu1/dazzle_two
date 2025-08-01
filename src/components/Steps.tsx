"use client";
import { useRef, useState } from "react";
import styles from "./Steps.module.css";

export default function Steps() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const steps = [
    {
      number: "01",
      title: "Choose your car",
      description:
        "Browse our wide selection of vehicles, from compact city cars to spacious SUVs. Pick the perfect ride that suits your needs.",
    },
    {
      number: "02",
      title: "Book your rental",
      description:
        "Use our simple online booking system to select dates and submit your request. We’ll confirm your rental instantly.",
    },
    {
      number: "03",
      title: "Drive away",
      description:
        "Pick up your car or have it delivered. Enjoy your ride and drive with confidence, knowing we’ve got you covered.",
    },
  ];

  return (
    <section
    className="steps"
    >
      <div className="container-fluid">
        <div className="row">
          {/* Video Section */}
          <div className="col-md-7 col-12 p-0 position-relative" data-aos="fade-up">
            <video
              ref={videoRef}
              src="/img/video-transcode.mp4"
              autoPlay
              muted
              loop
              playsInline
              className={styles.video}
            />

            <button
              onClick={togglePlay}
              className={styles.playPauseButton}
              aria-label="Toggle Play/Pause"
            >
              <i className={`fa ${isPlaying ? "fa-pause" : "fa-play"}`}></i>
            </button>
          </div>

          {/* Steps Section */}
          <div
            className="col-md-5 col-12 p-0 stepColumn"
            data-aos="fade-down"
          >
            <div className="p-5">
              <h2 className="text-white" style={{ fontSize: "40px" }}>
                Rent your car in 3 easy steps
              </h2>
            </div>

            <div className="px-5 pb-5 d-flex flex-column gap-4">
              {steps.map((step, index) => (
                <div key={index} className="d-flex gap-5 align-items-start"
                 data-aos={index % 2 === 0 ? 'fade-up' : 'fade-down'}
                >
                  <div className={styles.stepNumber}>{step.number}</div>
                  <div className="d-flex flex-column gap-2">
                    <h4 className="text-white">{step.title}</h4>
                    <p className="text-white" style={{ fontSize: "17px" }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
