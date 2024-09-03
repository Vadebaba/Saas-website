"use client";
import acmeLogo from '@/assets/logo-acme.png';
import quantumLogo from '@/assets/logo-quantum.png';
import echoLogo from '@/assets/logo-echo.png';
import celestialLogo from '@/assets/logo-celestial.png';
import pulseLogo from '@/assets/logo-pulse.png';
import apexLogo from '@/assets/logo-apex.png';
import Image from 'next/image';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';



export const LogoTicker = () => {
  return (
    <div className='py-8 bg-white md:py-8'>
      <div className='container'>
        <div className='flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]'>

          <motion.div
            className='flex gap-14 flex-none pr-14'
            animate={{
              translateX: '-50%',
            }}

            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
              repeatType: 'loop',
            }}
          >
            <Image
              src={acmeLogo}
              alt='Acme-Logo'
            />

            <Image
              src={quantumLogo}
              alt='Quantum-Logo'
            />

            <Image
              src={echoLogo}
              alt='Echo-Logo'
            />

            <Image
              src={celestialLogo}
              alt='Celestial-Logo'
            />

            <Image
              src={pulseLogo}
              alt='Pulse-Logo'
            />

            <Image
              src={apexLogo}
              alt='Apex-Logo'
            />

            {/*Second set of logos */}

            <Image
              src={acmeLogo}
              alt='Acme-Logo'
            />

            <Image
              src={quantumLogo}
              alt='Quantum-Logo'
            />

            <Image
              src={echoLogo}
              alt='Echo-Logo'
            />

            <Image
              src={celestialLogo}
              alt='Celestial-Logo'
            />

            <Image
              src={pulseLogo}
              alt='Pulse-Logo'
            />

            <Image
              src={apexLogo}
              alt='Apex-Logo'
            />


          </motion.div>
        </div>
      </div>
    </div >
  );
};