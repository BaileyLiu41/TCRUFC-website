import { motion } from 'motion/react'
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection'
import { PeopleIcon } from '../components/Icons'

// ============================================================================
// ALUMNI PROFILES — ADD YOUR ALUMNI HERE
// ============================================================================
// For each alumnus:
//   1. Put their photo in:  public/alumni/
//   2. Copy the template below and fill in the fields
//
// TEMPLATE (copy this block, paste it at the end of the array, and fill in):
//
//   {
//     id:       __,                          // <-- unique number (increment from last)
//     name:     "First Last",               // <-- full name
//     photo:    "filename.jpg",             // <-- filename in public/alumni/
//     years:    "2018-2021",                // <-- years at TCRUFC
//     role:     "Captain / Player / etc.",  // <-- role at the club
//     bio:      "Short bio here.",          // <-- 1-2 sentence bio about what they're doing now
//     email:    "email@example.com",        // <-- contact email
//   },
//
// ============================================================================

const alumni = [
  // --- Example Alumni (replace with real data) ---
  {
    id:    1,
    name:  "John Smith",
    photo: "",
    years: "2016-2019",
    role:  "Captain",
    bio:   "Now working in finance at Goldman Sachs. Previously captained the Blues side and led TCRUFC to a Cuppers victory in 2018.",
    email: "john.smith@example.com",
  },
  {
    id:    2,
    name:  "James Wilson",
    photo: "",
    years: "2017-2020",
    role:  "Vice-Captain",
    bio:   "Currently a management consultant at McKinsey. Scored the winning try in the 2019 Boot Final.",
    email: "james.wilson@example.com",
  },
  {
    id:    3,
    name:  "Tom Davies",
    photo: "",
    years: "2018-2021",
    role:  "Fly-Half",
    bio:   "Training as a barrister at Lincoln's Inn. Represented Cambridge in the Varsity Match 2020.",
    email: "tom.davies@example.com",
  },
  {
    id:    4,
    name:  "Will Roberts",
    photo: "",
    years: "2019-2022",
    role:  "Prop",
    bio:   "Working as a software engineer at a London startup. Key member of the 2021-2022 League Two winning squad.",
    email: "will.roberts@example.com",
  },
  {
    id:    5,
    name:  "Harry Thompson",
    photo: "",
    years: "2020-2023",
    role:  "Flanker",
    bio:   "Pursuing a Masters in Engineering at Imperial College London. Known for his tireless work at the breakdown.",
    email: "harry.thompson@example.com",
  },
  {
    id:    6,
    name:  "Oliver Brown",
    photo: "",
    years: "2019-2022",
    role:  "Scrum-Half",
    bio:   "Now a junior doctor at Addenbrooke's Hospital. Christchurch winner in 2022.",
    email: "oliver.brown@example.com",
  },
]

function AlumniCard({ alumnus, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}
      className="bg-white rounded-2xl overflow-hidden shadow-md transition-all duration-300 flex flex-col"
    >
      {/* Photo */}
      <div className="aspect-[4/5] bg-gradient-to-br from-tcrufc-blue to-purple-900 relative overflow-hidden">
        {alumnus.photo ? (
          <img
            src={`/alumni/${alumnus.photo}`}
            alt={alumnus.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <PeopleIcon className="w-20 h-20 text-white opacity-30" />
            <span className="mt-2 text-sm text-white text-opacity-50">Photo coming soon</span>
          </div>
        )}
        {/* Name overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 pt-12">
          <h3 className="text-xl font-bold text-white">{alumnus.name}</h3>
          <p className="text-tcrufc-gold text-sm font-semibold">{alumnus.role} &middot; {alumnus.years}</p>
        </div>
      </div>

      {/* Bio & Email */}
      <div className="p-5 flex flex-col flex-1">
        <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">
          {alumnus.bio}
        </p>
        <a
          href={`mailto:${alumnus.email}`}
          className="inline-flex items-center gap-2 text-tcrufc-blue font-semibold text-sm hover:text-tcrufc-red transition-colors group"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
          <span className="group-hover:underline">{alumnus.email}</span>
        </a>
      </div>
    </motion.div>
  )
}

export default function Alumni() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-tcrufc-blue via-purple-900 to-tcrufc-red py-32 md:py-40">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-tcrufc-blue bg-opacity-80 text-white px-6 py-3 rounded-full mb-6 backdrop-blur-sm border border-white border-opacity-20"
          >
            <PeopleIcon className="w-6 h-6 text-tcrufc-gold" />
            <span className="font-semibold">Alumni Network</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Our <span className="text-tcrufc-gold">Alumni</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-white max-w-4xl"
          >
            Connecting past and present TCRUFC players. See where our alumni have ended up
            and reach out to build your network.
          </motion.p>
        </div>
      </section>

      {/* Alumni Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <AnimatedSection direction="up" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-tcrufc-blue mb-4">
              Meet Our Alumni
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              TCRUFC alumni are making their mark across a wide range of industries and professions.
              Get in touch for networking, mentorship, or just to reminisce about the good old days.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {alumni.map((alumnus, index) => (
              <AlumniCard key={alumnus.id} alumnus={alumnus} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-tcrufc-red to-red-700 py-16">
        <div className="container mx-auto px-6 text-center">
          <AnimatedSection direction="up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Want to be featured?
            </h2>
            <p className="text-xl text-white max-w-2xl mx-auto mb-8">
              If you're a TCRUFC alumnus and would like to be added to our network,
              send us your details and a photo.
            </p>
            <a
              href="mailto:tcrufc@example.com"
              className="inline-block bg-white text-tcrufc-red px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all"
            >
              Get In Touch
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
