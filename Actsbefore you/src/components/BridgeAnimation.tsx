import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Scene1Opening } from './Scene1Opening';
import { Scene2ContextCapture } from './Scene2ContextCapture';
import { Scene3Anticipation } from './Scene3Anticipation';
import { Scene4Action } from './Scene4Action';
import { Scene5Conclusion } from './Scene5Conclusion';

export function BridgeAnimation() {
  const [scene, setScene] = useState(1);

  useEffect(() => {
    const timings = [
      { scene: 1, duration: 5000 },   // 0-5s
      { scene: 2, duration: 7000 },   // 5-12s
      { scene: 3, duration: 6000 },   // 12-18s
      { scene: 4, duration: 7000 },   // 18-25s
      { scene: 5, duration: 5000 },   // 25-30s
    ];

    let currentIndex = 0;
    
    const scheduleNext = () => {
      if (currentIndex < timings.length - 1) {
        setTimeout(() => {
          currentIndex++;
          setScene(timings[currentIndex].scene);
          scheduleNext();
        }, timings[currentIndex].duration);
      } else {
        // Loop back to scene 1
        setTimeout(() => {
          currentIndex = 0;
          setScene(1);
          scheduleNext();
        }, timings[currentIndex].duration);
      }
    };

    scheduleNext();
  }, []);

  return (
    <div className="w-full h-full relative">
      <AnimatePresence mode="wait">
        {scene === 1 && <Scene1Opening key="scene1" />}
        {scene === 2 && <Scene2ContextCapture key="scene2" />}
        {scene === 3 && <Scene3Anticipation key="scene3" />}
        {scene === 4 && <Scene4Action key="scene4" />}
        {scene === 5 && <Scene5Conclusion key="scene5" />}
      </AnimatePresence>

      {/* Progress indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {[1, 2, 3, 4, 5].map((s) => (
          <div
            key={s}
            className={`h-1 rounded-full transition-all duration-500 ${
              s === scene ? 'w-8 bg-[#FE8E49]' : 'w-1 bg-[#E7D7BA] opacity-30'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
