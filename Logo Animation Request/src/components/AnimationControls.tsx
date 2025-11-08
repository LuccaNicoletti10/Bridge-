import { motion } from 'motion/react';

interface AnimationControlsProps {
  currentAnimation: 'pulse' | 'spin' | 'bounce' | 'wave' | 'glitch';
  onAnimationChange: (animation: 'pulse' | 'spin' | 'bounce' | 'wave' | 'glitch') => void;
}

export function AnimationControls({ currentAnimation, onAnimationChange }: AnimationControlsProps) {
  const animations = [
    { id: 'pulse' as const, label: 'Pulso', icon: '💓' },
    { id: 'spin' as const, label: 'Rotação', icon: '🔄' },
    { id: 'bounce' as const, label: 'Salto', icon: '⬆️' },
    { id: 'wave' as const, label: 'Onda', icon: '🌊' },
    { id: 'glitch' as const, label: 'Glitch', icon: '⚡' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="flex flex-wrap gap-3 justify-center"
    >
      {animations.map((anim) => (
        <motion.button
          key={anim.id}
          onClick={() => onAnimationChange(anim.id)}
          className={`px-6 py-3 rounded-full transition-colors ${
            currentAnimation === anim.id
              ? 'bg-white text-black'
              : 'bg-white/10 text-white hover:bg-white/20'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="mr-2">{anim.icon}</span>
          {anim.label}
        </motion.button>
      ))}
    </motion.div>
  );
}
