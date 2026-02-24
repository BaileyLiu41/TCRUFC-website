import { motion } from 'motion/react'
import AnimatedSection from '../components/AnimatedSection'
import { CalendarIcon } from '../components/Icons'

// ============================================================================
// EVENTS — ADD YOUR EVENTS HERE
// ============================================================================
// TEMPLATE (copy this block, paste it at the end of the array, and fill in):
//
//   {
//     id:          __,
//     title:       "Event Name",
//     date:        "Saturday, 20 Dec 2025",
//     time:        "7:00 PM",
//     location:    "Trinity College Hall",
//     description: "Brief description of the event.",
//     type:        "social",  // "social", "fundraiser", "rugby", "agm"
//   },
//
// ============================================================================

const events = [
  {
    id:          1,
    title:       "TCRUFC Annual Dinner",
    date:        "Saturday, 14 Mar 2026",
    time:        "7:30 PM",
    location:    "Trinity College Great Hall",
    description: "End-of-season formal dinner celebrating the year's achievements. Black tie. All current and former players welcome.",
    type:        "social",
  },
  {
    id:          2,
    title:       "Alumni vs Current Squad Match",
    date:        "Sunday, 15 Mar 2026",
    time:        "2:00 PM",
    location:    "Grange Road",
    description: "The annual friendly between the alumni team and the current squad. Post-match drinks at the bar.",
    type:        "rugby",
  },
  {
    id:          3,
    title:       "TCRUFC AGM",
    date:        "Monday, 27 Apr 2026",
    time:        "6:00 PM",
    location:    "Trinity College, Room E3",
    description: "Annual General Meeting. Election of next year's captain, vice-captain, and committee. All members encouraged to attend.",
    type:        "agm",
  },
  {
    id:          4,
    title:       "Summer Tour Fundraiser",
    date:        "Friday, 8 May 2026",
    time:        "8:00 PM",
    location:    "The Eagle Pub",
    description: "Charity pub quiz night to raise funds for the 2026 summer rugby tour. Teams of 4-6.",
    type:        "fundraiser",
  },
]

const eventTypeColors = {
  social:     'bg-tcrufc-gold text-tcrufc-blue',
  rugby:      'bg-tcrufc-red text-white',
  agm:        'bg-tcrufc-blue text-white',
  fundraiser: 'bg-green-600 text-white',
}

function EventCard({ event, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -4 }}
      className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all"
    >
      {/* Colored accent top bar */}
      <div className={`h-2 ${eventTypeColors[event.type]?.split(' ')[0] || 'bg-tcrufc-blue'}`} />

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-tcrufc-blue">{event.title}</h3>
          <span className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap ${eventTypeColors[event.type] || 'bg-gray-200 text-gray-700'}`}>
            {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
          </span>
        </div>

        <p className="text-gray-600 text-sm mb-4">{event.description}</p>

        <div className="flex flex-col gap-2 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <CalendarIcon className="w-4 h-4 text-tcrufc-gold" />
            <span>{event.date} at {event.time}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-tcrufc-gold" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <span>{event.location}</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Events() {
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
            <CalendarIcon className="w-6 h-6 text-tcrufc-gold" />
            <span className="font-semibold">What's On</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Upcoming <span className="text-tcrufc-gold">Events</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-white max-w-4xl"
          >
            Don't miss out on the latest TCRUFC socials, fundraisers, and club gatherings
          </motion.p>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <AnimatedSection direction="up" className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-tcrufc-blue mb-4">
              What's Coming Up
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl">
              From dinners to fundraisers, here's everything happening at TCRUFC.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {events.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </div>

          {events.length === 0 && (
            <AnimatedSection direction="up" className="text-center py-20">
              <CalendarIcon className="w-24 h-24 text-gray-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-700 mb-2">
                No upcoming events
              </h3>
              <p className="text-gray-500">
                Check back soon for new events
              </p>
            </AnimatedSection>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-tcrufc-red to-red-700 py-16">
        <div className="container mx-auto px-6 text-center">
          <AnimatedSection direction="up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Have an event idea?
            </h2>
            <p className="text-xl text-white max-w-2xl mx-auto mb-8">
              Get in touch with the committee if you'd like to organise a TCRUFC event
            </p>
            <a
              href="mailto:baileyliu41@gmail.com"
              className="inline-block bg-white text-tcrufc-red px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all"
            >
              Contact Us
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
