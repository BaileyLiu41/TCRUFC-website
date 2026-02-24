import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import AnimatedSection from '../components/AnimatedSection'
import { TrophyIcon } from '../components/Icons'

// ============================================================================
// FIXTURES & RESULTS — ADD YOUR MATCHES HERE
// ============================================================================
// For each match:
//   Copy the template below and fill in the fields
//
// TEMPLATE:
//
//   {
//     id:         __,                       // <-- unique number
//     date:       "Saturday, 22 Feb 2026",  // <-- match date
//     competition:"College League",         // <-- competition name
//     homeTeam:   "TCRUFC",                 // <-- home team name
//     homeScore:  null,                     // <-- home score (null if upcoming)
//     awayTeam:   "St John's",              // <-- away team name
//     awayScore:  null,                     // <-- away score (null if upcoming)
//     venue:      "Grange Road",            // <-- venue name
//     status:     "upcoming",               // <-- "result" or "upcoming"
//   },
//
// ============================================================================

const fixtures = [
  // --- Upcoming Fixtures ---
  {
    id:          1,
    date:        "Saturday, 1 Mar 2026",
    competition: "College League",
    homeTeam:    "TCRUFC",
    homeScore:   null,
    awayTeam:    "St John's",
    awayScore:   null,
    venue:       "Grange Road",
    status:      "upcoming",
  },
  {
    id:          2,
    date:        "Saturday, 8 Mar 2026",
    competition: "College League",
    homeTeam:    "Magdalene",
    homeScore:   null,
    awayTeam:    "TCRUFC",
    awayScore:   null,
    venue:       "Barton Road",
    status:      "upcoming",
  },
  {
    id:          3,
    date:        "Wednesday, 12 Mar 2026",
    competition: "Cuppers",
    homeTeam:    "TCRUFC",
    homeScore:   null,
    awayTeam:    "Downing",
    awayScore:   null,
    venue:       "Grange Road",
    status:      "upcoming",
  },
  // --- Results ---
  {
    id:          4,
    date:        "Saturday, 22 Feb 2026",
    competition: "College League",
    homeTeam:    "TCRUFC",
    homeScore:   27,
    awayTeam:    "Pembroke",
    awayScore:   12,
    venue:       "Grange Road",
    status:      "result",
  },
  {
    id:          5,
    date:        "Saturday, 15 Feb 2026",
    competition: "College League",
    homeTeam:    "Jesus",
    homeScore:   10,
    awayTeam:    "TCRUFC",
    awayScore:   31,
    venue:       "Jesus Close",
    status:      "result",
  },
  {
    id:          6,
    date:        "Saturday, 8 Feb 2026",
    competition: "College League",
    homeTeam:    "TCRUFC",
    homeScore:   45,
    awayTeam:    "Fitzwilliam",
    awayScore:   7,
    venue:       "Grange Road",
    status:      "result",
  },
  {
    id:          7,
    date:        "Wednesday, 5 Feb 2026",
    competition: "Christchurch",
    homeTeam:    "Christ's",
    homeScore:   14,
    awayTeam:    "TCRUFC",
    awayScore:   22,
    venue:       "Christ's Pieces",
    status:      "result",
  },
  {
    id:          8,
    date:        "Saturday, 1 Feb 2026",
    competition: "College League",
    homeTeam:    "Homerton",
    homeScore:   5,
    awayTeam:    "TCRUFC",
    awayScore:   38,
    venue:       "Long Road",
    status:      "result",
  },
]

const tabs = [
  { id: 'upcoming', label: 'Fixtures' },
  { id: 'results',  label: 'Results' },
]

function MatchCard({ match, index }) {
  const isTcrufc = (team) => team === 'TCRUFC'
  const isResult = match.status === 'result'

  let resultLabel = null
  if (isResult) {
    const tcruHome = isTcrufc(match.homeTeam)
    const tcruScore = tcruHome ? match.homeScore : match.awayScore
    const oppScore = tcruHome ? match.awayScore : match.homeScore
    if (tcruScore > oppScore) resultLabel = 'W'
    else if (tcruScore < oppScore) resultLabel = 'L'
    else resultLabel = 'D'
  }

  const resultColors = {
    W: 'bg-green-100 text-green-700 border-green-300',
    L: 'bg-red-100 text-red-700 border-red-300',
    D: 'bg-gray-100 text-gray-700 border-gray-300',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true, amount: 0.1 }}
      className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow overflow-hidden"
    >
      {/* Date & Competition header */}
      <div className="flex items-center justify-between px-5 py-2 bg-gray-50 border-b border-gray-100">
        <span className="text-sm text-gray-500">{match.date}</span>
        <span className="text-sm font-semibold text-tcrufc-blue">{match.competition}</span>
      </div>

      {/* Match content */}
      <div className="px-5 py-4 flex items-center justify-between gap-4">
        {/* Home team */}
        <div className="flex-1 text-right">
          <span className={`text-lg font-bold ${isTcrufc(match.homeTeam) ? 'text-tcrufc-blue' : 'text-gray-800'}`}>
            {match.homeTeam}
          </span>
        </div>

        {/* Score / vs */}
        <div className="flex items-center gap-3 min-w-[120px] justify-center">
          {isResult ? (
            <>
              <span className="text-3xl font-black text-tcrufc-blue">{match.homeScore}</span>
              <span className="text-gray-300 text-sm">-</span>
              <span className="text-3xl font-black text-tcrufc-blue">{match.awayScore}</span>
            </>
          ) : (
            <span className="text-lg font-bold text-gray-400">vs</span>
          )}
        </div>

        {/* Away team */}
        <div className="flex-1">
          <span className={`text-lg font-bold ${isTcrufc(match.awayTeam) ? 'text-tcrufc-blue' : 'text-gray-800'}`}>
            {match.awayTeam}
          </span>
        </div>

        {/* Venue & Result */}
        <div className="hidden md:flex items-center gap-3 min-w-[180px]">
          <div className="flex items-center gap-1 text-gray-400 text-sm">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <span>{match.venue}</span>
          </div>
          {resultLabel && (
            <span className={`px-2 py-0.5 rounded text-xs font-bold border ${resultColors[resultLabel]}`}>
              {resultLabel}
            </span>
          )}
        </div>
      </div>

      {/* Mobile venue row */}
      <div className="md:hidden px-5 pb-3 flex items-center justify-between">
        <div className="flex items-center gap-1 text-gray-400 text-sm">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
          <span>{match.venue}</span>
        </div>
        {resultLabel && (
          <span className={`px-2 py-0.5 rounded text-xs font-bold border ${resultColors[resultLabel]}`}>
            {resultLabel}
          </span>
        )}
      </div>
    </motion.div>
  )
}

export default function Fixtures() {
  const [activeTab, setActiveTab] = useState('upcoming')

  const upcomingFixtures = fixtures.filter(f => f.status === 'upcoming')
  const results = fixtures.filter(f => f.status === 'result')
  const displayedMatches = activeTab === 'upcoming' ? upcomingFixtures : results

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
            <TrophyIcon className="w-6 h-6 text-tcrufc-gold" />
            <span className="font-semibold">2025-2026 Season</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Fixtures & <span className="text-tcrufc-gold">Results</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-white max-w-4xl"
          >
            Stay up to date with upcoming matches and recent results
          </motion.p>
        </div>
      </section>

      {/* Fixtures & Results Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <AnimatedSection direction="up" className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-tcrufc-blue mb-6">
              Matches
            </h2>

            {/* Tabs */}
            <div className="inline-flex bg-white rounded-full shadow-sm border border-gray-200 p-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                    activeTab === tab.id
                      ? 'bg-tcrufc-blue text-white'
                      : 'text-gray-500 hover:text-tcrufc-blue'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Match Cards */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-3"
            >
              {displayedMatches.length > 0 ? (
                displayedMatches.map((match, index) => (
                  <MatchCard key={match.id} match={match} index={index} />
                ))
              ) : (
                <div className="text-center py-12 text-gray-400">
                  <TrophyIcon className="w-16 h-16 mx-auto mb-4 opacity-30" />
                  <p className="text-lg">No {activeTab === 'upcoming' ? 'upcoming fixtures' : 'results'} to show</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-tcrufc-blue to-blue-800 py-16">
        <div className="container mx-auto px-6 text-center">
          <AnimatedSection direction="up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Come support the team
            </h2>
            <p className="text-xl text-white max-w-2xl mx-auto mb-8">
              All matches are free to attend. Bring your friends and cheer on TCRUFC!
            </p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
