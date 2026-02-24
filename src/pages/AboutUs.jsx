import { motion } from 'motion/react'
import ValueCard from '../components/ValueCard'
import StatCard from '../components/StatCard'
import AnimatedSection, { StaggerContainer, StaggerItem, ScaleOnView } from '../components/AnimatedSection'
import { TrophyIcon, PeopleIcon, HeartIcon, TargetIcon, AwardIcon } from '../components/Icons'

export default function AboutUs() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-tcrufc-blue via-blue-900 to-tcrufc-blue py-32 md:py-40">
        <div className="container mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            About <span className="text-tcrufc-gold">TCRUFC</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white max-w-4xl"
          >
            Over 150 years of excellence, tradition, and brotherhood at Trinity and Christ's Colleges,
            Cambridge University
          </motion.p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <AnimatedSection direction="left">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Who We <span className="text-tcrufc-gold">Are</span>
              </h2>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Trinity Christs Rugby Union Football Club (TCRUFC) is one of the oldest and most
                distinguished college rugby clubs in Cambridge. Founded in 1872, our club has been
                at the forefront of Cambridge rugby union for over a century and a half.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                We are a distinguished community of current students, former players, and passionate
                supporters united by our love for rugby and our connection to Trinity and Christ's Colleges.
                Our red, blue, and gold colours represent not just our team, but a legacy of excellence
                that spans generations.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                From producing Cambridge Blues to fostering lifelong friendships, TCRUFC continues to be
                a cornerstone of college life and sporting achievement at one of the world's most
                prestigious universities.
              </p>
            </AnimatedSection>

            {/* Image & Quote */}
            <div className="relative">
              <AnimatedSection direction="right" delay={0.2}>
                <div className="aspect-square bg-gradient-to-br from-tcrufc-blue to-tcrufc-red rounded-2xl overflow-hidden mb-8">
                  <div className="w-full h-full flex items-center justify-center text-white text-xl font-bold">
                    [Team Training Photo]
                  </div>
                </div>
              </AnimatedSection>

              {/* Quote Card */}
              <ScaleOnView delay={0.4}>
                <div className="bg-tcrufc-red text-white p-8 rounded-2xl shadow-lg">
                  <div className="text-6xl font-bold mb-4">"</div>
                  <p className="text-xl font-semibold italic mb-2">
                    Once a Trinity man, always a Trinity man
                  </p>
                </div>
              </ScaleOnView>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-tcrufc-blue py-20">
        <div className="container mx-auto px-6">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-12" staggerDelay={0.15}>
            <StaggerItem direction="up">
              <StatCard
                number="50+"
                label="Cuppers Titles"
                icon={<TrophyIcon className="w-12 h-12 text-tcrufc-gold" />}
              />
            </StaggerItem>
            <StaggerItem direction="up">
              <StatCard
                number="200+"
                label="Blues Players"
                icon={<AwardIcon className="w-12 h-12 text-tcrufc-gold" />}
              />
            </StaggerItem>
            <StaggerItem direction="up">
              <StatCard
                number="30+"
                label="International Caps"
                icon={<AwardIcon className="w-12 h-12 text-tcrufc-gold" />}
              />
            </StaggerItem>
            <StaggerItem direction="up">
              <StatCard
                number="1000+"
                label="Active Alumni"
                icon={<PeopleIcon className="w-12 h-12 text-tcrufc-gold" />}
              />
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

  

      {/* History Timeline Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <AnimatedSection direction="up" className="text-center mb-16">
            <span className="text-tcrufc-gold font-bold text-sm uppercase tracking-wider mb-4 block">
              150+ YEARS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-tcrufc-gold">History</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A journey through time, marking the milestones that shaped TCURUFC
            </p>
          </AnimatedSection>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-tcrufc-red hidden md:block"></div>

            {/* Timeline Items */}
            <div className="space-y-16">
              {/* 1872 */}
              <AnimatedSection direction="left" delay={0.1} className="relative">
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="text-right">
                    <div className="bg-white p-8 rounded-2xl shadow-lg inline-block">
                      <h3 className="text-3xl font-bold text-tcrufc-red mb-3">1872</h3>
                      <h4 className="text-2xl font-bold text-tcrufc-blue mb-4">The Beginning</h4>
                      <p className="text-gray-600">
                        TCRUFC was founded by students from Trinity and Christ's Colleges,
                        passionate about the emerging sport of rugby union.
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 w-4 h-4 bg-tcrufc-gold rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                </div>
              </AnimatedSection>

              {/* 1890s */}
              <AnimatedSection direction="right" delay={0.1} className="relative">
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="hidden md:block">
                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 w-4 h-4 bg-tcrufc-gold rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="md:col-start-2">
                    <div className="bg-white p-8 rounded-2xl shadow-lg">
                      <h3 className="text-3xl font-bold text-tcrufc-red mb-3">1890s</h3>
                      <h4 className="text-2xl font-bold text-tcrufc-blue mb-4">Early Glory</h4>
                      <p className="text-gray-600">
                        The club established itself as a dominant force in Cambridge college rugby,
                        winning numerous inter-college competitions.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* 1920s */}
              <AnimatedSection direction="left" delay={0.1} className="relative">
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="text-right">
                    <div className="bg-white p-8 rounded-2xl shadow-lg inline-block">
                      <h3 className="text-3xl font-bold text-tcrufc-red mb-3">1920s</h3>
                      <h4 className="text-2xl font-bold text-tcrufc-blue mb-4">Post-War Revival</h4>
                      <p className="text-gray-600">
                        After the Great War, TCRUFC rebuilt and produced some of its finest players,
                        including several who went on to represent England.
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 w-4 h-4 bg-tcrufc-gold rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Modern Era */}
              <AnimatedSection direction="right" delay={0.1} className="relative">
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="hidden md:block">
                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 w-4 h-4 bg-tcrufc-gold rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="md:col-start-2">
                    <div className="bg-white p-8 rounded-2xl shadow-lg">
                      <h3 className="text-3xl font-bold text-tcrufc-red mb-3">Modern Era</h3>
                      <h4 className="text-2xl font-bold text-tcrufc-blue mb-4">Continued Excellence</h4>
                      <p className="text-gray-600">
                        Today, TCRUFC continues to thrive with over 30 active players, maintaining
                        its reputation for sporting excellence and brotherhood.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
