import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import AnimatedSection, { StaggerContainer, StaggerItem, ScaleOnView } from '../components/AnimatedSection'
import { CameraIcon } from '../components/Icons'

// ============================================================================
// GALLERY PHOTOS — ADD YOUR PHOTOS HERE
// ============================================================================
// For each photo:
//   1. Put the .png file in:  public/gallery/
//   2. Copy the template below and fill in the fields
//
// TEMPLATE (copy this block, paste it at the end of the array, and fill in):
//
//   {
//     id:          __,                    // <-- unique number (increment from last)
//     file:        "YOUR_FILENAME.png",   // <-- exact filename in public/gallery/
//     title:       "Your Title Here",     // <-- short title shown on the card
//     description: "Your description.",   // <-- longer description shown below title
//     year:        2000,                  // <-- year as a number
//     era:         "1980s-2000s",         // <-- must match one of the eras below
//   },
//
// ============================================================================

const galleryPhotos = [
  // --- Photo 1 ---
  {
    id:          1,
    file:        "Team1888.png",
    title:       "Team Photo 1888",
    description: <><strong>First XV in front of Nevile's Court.</strong></>,
    year:        1888,
    era:         "1880s-1970s",
  },
  // --- Photo 2 ---
  {
    id:          2,
    file:        "Team1956-1957.png",
    title:       "Team Photo 1956-1957",
    description: "Captain: J.G.R. Harding.",
    year:        1956,
    era:         "1880s-1970s",
  },
  // --- Photo 3 ---
  {
    id:          3,
    file:        "Team1967-1968.png",
    title:       "Team Photo 1967-1968",
    description: <>Captain: T. Simpson. <strong>Played 21 games.</strong></>,
    year:        1967,
    era:         "1880s-1970s",
  },
  // --- Photo 4 ---
  {
    id:          4,
    file:        "Team1969-1970.png",
    title:       "Team Photo 1969-1970",
    description: "Supplied by Tim Curry.",
    year:        1969,
    era:         "1880s-1970s",
  },
  // --- Photo 5 ---
  {
    id:          5,
    file:        "Team1971-1972.png",
    title:       "Team Photo 1971-1972",
    description: "Captain: J.C. Hoddinott.",
    year:        1971,
    era:         "1880s-1970s",
  },
  // --- Photo 6 ---
  {
    id:          6,
    file:        "Team1972-1973.png",
    title:       "Team Photo 1972-1973",
    description: "1972-1973 season.",
    year:        1972,
    era:         "1880s-1970s",
  },
  // --- Photo 7 ---
  {
    id:          7,
    file:        "Team1974-1975.png",
    title:       "Team Photo 1974-1975",
    description: "Captain: P. McMahon.",
    year:        1974,
    era:         "1880s-1970s",
  },
  // --- Photo 8 ---
  {
    id:          8,
    file:        "Team1975-1976.png",
    title:       "Team Photo 1975-1976",
    description: "Captain: J.G. Burridge.",
    year:        1975,
    era:         "1880s-1970s",
  },
  // --- Photo 9 ---
  {
    id:          9,
    file:        "Team1976-1977.png",
    title:       "Team Photo 1976-1977",
    description: "Captain: John Durkin.",
    year:        1976,
    era:         "1880s-1970s",
  },
  // --- Photo 10 ---
  {
    id:          10,
    file:        "Team1977-1978.png",
    title:       "Team Photo 1977-1978",
    description: <>Captain: R.N. Wrack. <strong>League Runners Up.</strong></>,
    year:        1977,
    era:         "1880s-1970s",
  },
  // --- Photo 11 ---
  {
    id:          11,
    file:        "Team1978-1979.png",
    title:       "Team Photo 1978-1979",
    description: "Captain: Pete Cottrell.",
    year:        1978,
    era:         "1880s-1970s",
  },
  // --- Photo 12 ---
  {
    id:          12,
    file:        "Team1979-1980.png",
    title:       "Team Photo 1979-1980",
    description: <>Captain: J.D.C. Miller. <strong>League Runners Up.</strong></>,
    year:        1979,
    era:         "1880s-1970s",
  },
  // --- Photo 13 ---
  {
    id:          13,
    file:        "Team1981-1982.png",
    title:       "Team Photo 1981-1982",
    description: "Captain: Paul Cunningham.",
    year:        1981,
    era:         "1980s-2000s",
  },
  // --- Photo 14 ---
  {
    id:          14,
    file:        "Team1982-1983.png",
    title:       "Team Photo 1982-1983",
    description: "Captain: Iain Wilkinson.",
    year:        1982,
    era:         "1980s-2000s",
  },
  // --- Photo 15 ---
  {
    id:          15,
    file:        "Team1983-1984.png",
    title:       "Team Photo 1983-1984",
    description: <>Captain: Rob Murray. <strong>Division Champions.</strong></>,
    year:        1983,
    era:         "1980s-2000s",
  },
  // --- Photo 16 ---
  {
    id:          16,
    file:        "Team1984-1985.png",
    title:       "Team Photo 1984-1985",
    description: "Captain: Mick Brewis.",
    year:        1984,
    era:         "1980s-2000s",
  },
  // --- Photo 17 ---
  {
    id:          17,
    file:        "Team1985-1986.png",
    title:       "Team Photo 1985-1986",
    description: "Captain: Tom Adam.",
    year:        1985,
    era:         "1980s-2000s",
  },
  // --- Photo 18 ---
  {
    id:          18,
    file:        "Team1986-1987.png",
    title:       "Team Photo 1986-1987",
    description: "Captain: Timothy McDowall.",
    year:        1986,
    era:         "1980s-2000s",
  },
  // --- Photo 19 ---
  {
    id:          19,
    file:        "Team1987-1988.png",
    title:       "Team Photo 1987-1988",
    description: "Captain: Robert Brewis.",
    year:        1987,
    era:         "1980s-2000s",
  },
  // --- Photo 20 ---
  {
    id:          20,
    file:        "Team1988-1989.png",
    title:       "Team Photo 1988-1989",
    description: "Captain: Edward Saunders.",
    year:        1988,
    era:         "1980s-2000s",
  },
  // --- Photo 21 ---
  {
    id:          21,
    file:        "Team1989-1990.png",
    title:       "Team Photo 1989-1990",
    description: <>Captain: Graeme McCormack. <strong>Promoted to 1st Division.</strong></>,
    year:        1989,
    era:         "1980s-2000s",
  },
  // --- Photo 22 ---
  {
    id:          22,
    file:        "Team1990-1991.png",
    title:       "Team Photo 1990-1991",
    description: <>Captain: Andy Gueterbock. <strong>League Division One Runners Up.</strong></>,
    year:        1990,
    era:         "1980s-2000s",
  },
  // --- Photo 23 ---
  {
    id:          23,
    file:        "Team1991-1992.png",
    title:       "Team Photo 1991-1992",
    description: <>Captain: Richard Waller. <strong>Champions.</strong></>,
    year:        1991,
    era:         "1980s-2000s",
  },
  // --- Photo 24 ---
  {
    id:          24,
    file:        "Team1992-1993.png",
    title:       "Team Photo 1992-1993",
    description: "Captain: Alun Thomas.",
    year:        1992,
    era:         "1980s-2000s",
  },
  // --- Photo 25 ---
  {
    id:          25,
    file:        "Team1993-1994.png",
    title:       "Team Photo 1993-1994",
    description: "Captain: Simon Skinner.",
    year:        1993,
    era:         "1980s-2000s",
  },
  // --- Photo 26 ---
  {
    id:          26,
    file:        "Team1997-1998.png",
    title:       "Team Photo 1997-1998",
    description: "Captain: Euan Murray.",
    year:        1997,
    era:         "1980s-2000s",
  },
  // --- Photo 27 ---
  {
    id:          27,
    file:        "Team2000-2001.png",
    title:       "Team Photo 2000-2001",
    description: "Captain: Luke Halliwell.",
    year:        2000,
    era:         "1980s-2000s",
  },
  // --- Photo 28 ---
  {
    id:          28,
    file:        "Team2009-2010.png",
    title:       "Team Photo 2009-2010",
    description: "Captain: Matthew Libling.",
    year:        2009,
    era:         "1980s-2000s",
  },
  // --- Photo 29 ---
  {
    id:          29,
    file:        "Team2012-2013.png",
    title:       "Team Photo 2012-2013",
    description: <>Captain: Jack Harris. <strong>Cuppers Shield.</strong></>,
    year:        2012,
    era:         "2010s-Today",
  },
  // --- Photo 30 ---
  {
    id:          30,
    file:        "Team2013-2014.png",
    title:       "Team Photo 2013-2014",
    description: "Captain: Wilf Bagnall.",
    year:        2013,
    era:         "2010s-Today",
  },
  // --- Photo 31 ---
  {
    id:          31,
    file:        "Team2014-2015.png",
    title:       "Team Photo 2014-2015",
    description: "Captain: Will Dunger.",
    year:        2014,
    era:         "2010s-Today",
  },
  // --- Photo 32 ---
  {
    id:          32,
    file:        "Team2015-2016.png",
    title:       "Team Photo 2015-2016",
    description: "Captain: Humphrey Galbraith.",
    year:        2015,
    era:         "2010s-Today",
  },
  // --- Photo 33 ---
  {
    id:          33,
    file:        "Team2016-2017.png",
    title:       "Team Photo 2016-2017",
    description: "Captain: David Morris.",
    year:        2016,
    era:         "2010s-Today",
  },
  // --- Photo 34 ---
  {
    id:          34,
    file:        "Team2019-2020.png",
    title:       "Team Photo 2019-2020",
    description: <>Captain: James Hughes. <strong>Boot Final Winners.</strong></>,
    year:        2019,
    era:         "2010s-Today",
  },
  // --- Photo 35 ---
  {
    id:          35,
    file:        "Team2020-2021.png",
    title:       "Team Photo 2020-2021",
    description: <>Captain: Owain Cooke. <strong>Pandemic season.</strong></>,
    year:        2020,
    era:         "2010s-Today",
  },
  // --- Photo 36 ---
  {
    id:          36,
    file:        "Team2021-2022.png",
    title:       "Team Photo 2021-2022",
    description: <>Captain: Owain Cooke. <strong>Christchurch &amp; League Two Winners.</strong></>,
    year:        2021,
    era:         "2010s-Today",
  },
  // --- Photo 37 ---
  {
    id:          37,
    file:        "Team2022-2023.png",
    title:       "Team Photo 2022-2023",
    description: <>Captain: Henry King. <strong>Christchurch Winners.</strong></>,
    year:        2022,
    era:         "2010s-Today",
  },
  // --- Photo 38 ---
  {
    id:          38,
    file:        "Team2023-2024.png",
    title:       "Team Photo 2023-2024",
    description: "Captain: Henry Wayt.",
    year:        2023,
    era:         "2010s-Today",
  },
  // --- Photo 39 ---
  {
    id:          39,
    file:        "Team2024-2025.png",
    title:       "Team Photo 2024-2025",
    description: <>Captain: Senan Bottomley. <strong>Cuppers &amp; Christchurch Winners.</strong></>,
    year:        2024,
    era:         "2010s-Today",
  },
]

// ============================================================================
// ERAS — Add or rename eras here. Each era's `id` must match what you use above.
// ============================================================================
const eras = [
  { id: 'all', label: 'All Photos' },
  { id: '1880s-1970s', label: '1880s-1970s' },
  { id: '1980s-2000s', label: '1980s-2000s' },
  { id: '2010s-Today', label: '2010s-Today' },
]

export default function Gallery() {
  const [selectedEra, setSelectedEra] = useState('all')

  const filteredPhotos = selectedEra === 'all'
    ? galleryPhotos
    : galleryPhotos.filter(photo => photo.era === selectedEra)

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
            <CameraIcon className="w-6 h-6 text-tcrufc-gold" />
            <span className="font-semibold">Photo Archive</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Through The <span className="text-tcrufc-gold">Years</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-white max-w-4xl"
          >
            A visual journey through 150+ years of TCRUFC history, capturing moments of triumph,
            camaraderie, and sporting excellence
          </motion.p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          {/* Filter Bar */}
          <AnimatedSection direction="up" className="mb-12">
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-2 text-gray-700">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                <span className="font-semibold">Filter by era:</span>
              </div>

              <div className="flex gap-3 flex-wrap">
                {eras.map((era, index) => (
                  <motion.button
                    key={era.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    onClick={() => setSelectedEra(era.id)}
                    className={`px-6 py-2 rounded-full font-medium transition-all ${
                      selectedEra === era.id
                        ? 'bg-tcrufc-blue text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                    }`}
                  >
                    {era.label}
                  </motion.button>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Photo Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredPhotos.map((photo, index) => (
                <motion.div
                  key={photo.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                >
                {/* Era Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-tcrufc-gold text-tcrufc-blue px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    {photo.era}
                  </span>
                </div>

                {/* Photo Container */}
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                  <img
                    src={`/gallery/${photo.file}`}
                    alt={photo.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-tcrufc-blue bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
                </div>

                {/* Photo Info */}
                <div className="p-4">
                  <h3 className="font-bold text-lg text-tcrufc-blue mb-1">
                    {photo.title}
                  </h3>
                  {photo.description && (
                    <p className="text-gray-600 text-sm mb-1">
                      {photo.description}
                    </p>
                  )}
                  <p className="text-gray-500 text-sm">
                    Year: {photo.year}
                  </p>
                </div>
              </motion.div>
            ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredPhotos.length === 0 && (
            <AnimatedSection direction="up" className="text-center py-20">
              <CameraIcon className="w-24 h-24 text-gray-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-700 mb-2">
                No photos found
              </h3>
              <p className="text-gray-500">
                Try selecting a different era
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
              Have photos to share?
            </h2>
            <p className="text-xl text-white max-w-2xl mx-auto mb-8">
              Help us preserve our history by sharing your TCRUFC photos with the alumni network
            </p>
            <button className="bg-white text-tcrufc-red px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all">
              Contact Us
            </button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
