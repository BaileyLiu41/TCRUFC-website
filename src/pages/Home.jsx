import { motion } from 'motion/react'
import Button from '../components/Button'
import StatCard from '../components/StatCard'
import AnimatedSection, { StaggerContainer, StaggerItem, ScaleOnView } from '../components/AnimatedSection'
import { ChevronRightIcon, TrophyIcon, PeopleIcon, CalendarIcon } from '../components/Icons'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-tcrufc-blue via-purple-900 to-tcrufc-red overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-tcrufc-blue bg-opacity-80 text-white px-6 py-3 rounded-full mb-8 backdrop-blur-sm border border-white border-opacity-20"
          >
            <TrophyIcon className="w-6 h-6 text-tcrufc-gold" />
            <span className="font-semibold">Est. 1872 • Cambridge University</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl md:text-8xl font-black text-white mb-6"
          >
            <span className="text-tcrufc-gold">TCRUFC</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Trinity Christs Rugby Union Football Club
          </motion.h2>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="primary" to="/fixtures">
              Fixtures
            </Button>
            <Button variant="gold" to="/gallery">
              View Gallery
            </Button>
            <Button variant="blue" to="/alumni">
              Alumni
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-tcrufc-blue py-20">
      </section>

      {/* Heritage Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <AnimatedSection direction="left">
              <span className="text-tcrufc-gold font-bold text-sm uppercase tracking-wider mb-4 block">
                OUR HERITAGE
              </span>

              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                A Legacy Built on <span className="text-tcrufc-gold">Tradition</span>
              </h2>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Founded in 1872, TCRUFC has been at the heart of Cambridge rugby for over 150 years.
                Our club has produced countless Blues players, international representatives, and lifelong friendships.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                From the hallowed grounds of Trinity and Christ's Colleges to pitches across the country,
                our red, blue, and gold colours have represented excellence, camaraderie, and the enduring
                spirit of rugby union.
              </p>

              <Button variant="primary" to="/about">
                Learn More
                <ChevronRightIcon />
              </Button>
            </AnimatedSection>

            {/* Image */}
            <AnimatedSection direction="right" delay={0.2}>
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="/Homepagephoto.jpeg"
                  alt="TCRUFC Team"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Join Our Legacy Section */}
      <section className="bg-gradient-to-r from-tcrufc-red to-red-700 py-24">
        <div className="container mx-auto px-6 text-center">
          <AnimatedSection direction="up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join Our <span className="text-tcrufc-gold">Legacy</span>
            </h2>

            <p className="text-xl text-white max-w-3xl mx-auto mb-12">
              Whether you're a current student, prospective player, or proud alumni,
              there's always a place for you in the TCRUFC family.
            </p>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                as="a"
                href="mailto:baileyliu41@gmail.com"
              >
                <PeopleIcon className="w-5 h-5" />
                Contact Us
              </Button>
              <Button variant="secondary" to="/events">
                <CalendarIcon className="w-5 h-5" />
                Upcoming Events
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <AnimatedSection direction="up" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-tcrufc-blue mb-4">
              Through The <span className="text-tcrufc-gold">Years</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A visual journey through 150+ years of TCRUFC history
            </p>
          </AnimatedSection>

          {/* Gallery Grid */}
          <StaggerContainer className="grid md:grid-cols-3 gap-6 mb-12" staggerDelay={0.15}>
            {[
              { file: 'Team2024-2025.png', title: 'Team Photo 2024-2025', year: 2024 },
              { file: 'Team1991-1992.png', title: 'Team Photo 1991-1992', year: 1991 },
              { file: 'Team1888.png', title: 'Team Photo 1888', year: 1888 },
            ].map((photo) => (
              <StaggerItem key={photo.year} direction="up">
                <ScaleOnView className="aspect-[200/133] bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl overflow-hidden relative group">
                  <img
                    src={`/gallery/${photo.file}`}
                    alt={photo.title}
                    className="absolute inset-0 w-full h-full object-cover object-[50%_0%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-semibold">{photo.title}</span>
                  </div>
                </ScaleOnView>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection direction="up" delay={0.4} className="text-center">
            <Button variant="gold" to="/gallery">
              View Full Gallery
              <ChevronRightIcon />
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
