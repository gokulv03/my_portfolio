import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypeScript from 'eslint-config-next/typescript';

const eslintConfig = [
  ...nextCoreWebVitals,
  ...nextTypeScript,
  {
    // Unused atmospheric reference components (3D background, particles, cursor, etc.)
    ignores: [
      '.next/**',
      'dist/**',
      'src/components/CustomCursor.jsx',
      'src/components/Spotlight.jsx',
      'src/components/InteractiveParticles.jsx',
      'src/components/BackgroundMesh.jsx',
      'src/components/VantaBackground.jsx',
      'src/components/Hero3DObject.jsx',
      'src/components/MagneticButton.jsx',
    ],
  },
];

export default eslintConfig;
