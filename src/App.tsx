import { useState, useEffect } from "react";
import { ArrowRight, X, Play, ZoomIn, Menu } from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  year: string;
  medium: string;
  description: string;
  image: string;
  videoUrl?: string;
  isTextureVideo?: boolean;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "ute-osisi-i",
    title: "Ute-Osisi I",
    year: "2024",
    medium: "Wood Carving & Mixed Media",
    description:
      "An architectural exploration of the traditional Igbo wooden sleeping mat. Representing historical comfort juxtaposed with modern discomfort.",
    image: "/images/ute-osisi.jpg",
  },
  {
    id: "ute-osisi-ii",
    title: "Solitary Pursuit (Grain Loop)",
    year: "2024",
    medium: "Silent Video Loop",
    description:
      "A 5-second digital texture study of carved mahogany and wild palm leaf midribs.",
    image: "/images/whispers-collection-1.jpg",
    isTextureVideo: true,
    videoUrl: "https://youtu.be/sDGYyIxs6e8",
  },
  {
    id: "acrylic-jute",
    title: "Uli Patterns on Jute",
    year: "2025",
    medium: "Acrylic on Jute Canvas",
    description:
      "Deep textural macro-photograph of jute fibers layered with acrylic motifs symbolizing the collective whispers of ancestral women.",
    image: "/images/acrylic-jute-detail.jpg",
  },
  {
    id: "ilent-communication",
    title: "Silent Communication",
    year: "2023",
    medium: "Acrylic on Paper",
    description:
      "Reflecting the limitations and resilience of the Girl Child. Highlighting the broken glass ceilings and stitched wounds of contemporary heritage.",
    image: "/images/unfinished-business.jpg",
  },
  {
    id: "sacred-dialogue",
    title: "Sacred Dialogue",
    year: "2025",
    medium: "Carved Hardwood & Fabric",
    description:
      "Abstract vertical portrait embodying the quiet resilience of womanhood against systemic limitations.",
    image: "/images/echoes-portrait.jpg",
  },
  {
    id: "taking-out-time",
    title: "Taking Out Time",
    year: "2024",
    medium: "Carved Wild Palm & Mahogany",
    description:
      "A dynamic fusion of rhythmic patterns and golden radiance, where stylized silhouettes and concentric halos celebrate the elegance and kinetic energy of modern feminine grace..",
    image: "/images/whispers-collection-2.jpg",
  },
  {
    id: "herit-in-color",
    title: "Herit In Colour",
    year: "2024",
    medium: "Mixed Media Installation",
    description:
      "A striking, multi-paneled celebration of family and community, merging vibrant geometric patterns with rhythmic scrollwork to create a textured tapestry of cultural identity and shared strength.",
    image: "/images/ute-osisi-1.jpg",
  },
];

export default function App() {
  const [activeTab, setActiveTab] = useState<
    "works" | "biography" | "exhibitions" | "gallery"
  >("works");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);
  const [filmModalOpen, setFilmModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Smooth scroll to top on tab change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-white text-[#1A1A1A] font-sans antialiased overflow-x-hidden selection:bg-[#1A1A1A] selection:text-white">
      {/* 
        II. NAVIGATION & HEADER 
        Fixed/Sticky, transparent bg, Logo with wide letter spacing, thin underlines on hover.
      */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-transparent soft-fade">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center h-20">
          <button
            onClick={() => setActiveTab("works")}
            className="font-serif uppercase tracking-[0.3em] text-[15px] font-medium"
          >
            CHINZE ARTS
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-12 tracking-[0.1em] text-[12px] font-light">
            {(["works", "biography", "exhibitions", "gallery"] as const).map(
              (tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative pb-1 uppercase transition-all duration-300 hover:text-black/60 ${
                    activeTab === tab
                      ? "border-b border-[#1A1A1A]"
                      : "border-b border-transparent hover:border-black/30"
                  }`}
                >
                  {tab}
                </button>
              ),
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-100 py-6 px-6 flex flex-col space-y-4 soft-fade">
            {(["works", "biography", "exhibitions", "gallery"] as const).map(
              (tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left uppercase text-xs tracking-widest py-2 border-b ${
                    activeTab === tab
                      ? "border-[#1A1A1A] font-medium"
                      : "border-transparent"
                  }`}
                >
                  {tab}
                </button>
              ),
            )}
          </div>
        )}
      </header>

      {/* Main Content Sections */}
      <main className="pt-20">
        {/* WORKS VIEW (HOME / MAIN EXHIBIT) */}
        {activeTab === "works" && (
          <div className="soft-fade">
            {/* 
              III. SECTION ONE: WHISPERS FROM ANCIENT TREES
              Full-bleed hero, thin serif header, single thin link triggering video lightbox
            */}
            <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden bg-[#1A1A1A]">
              <div className="absolute inset-0 z-0">
                <img
                  src="/images/ute-osisi.jpg"
                  alt="Ute-Osisi installation view"
                  className="w-full h-full object-cover opacity-70 scale-105 transition-transform duration-[10s] hover:scale-100"
                />
              </div>
              <div className="relative z-10 text-center px-4">
                <h1 className="font-serif text-white text-4xl md:text-6xl tracking-[0.2em] font-light uppercase leading-tight mb-8">
                  Whispers from <br /> Ancient Trees
                </h1>
                <button
                  onClick={() => setFilmModalOpen(true)}
                  className="group inline-flex items-center space-x-3 text-white text-xs uppercase tracking-[0.2em] pb-1 border-b border-white/40 hover:border-white transition-all duration-300"
                >
                  <Play size={10} className="fill-white" />
                  <span>View Film</span>
                </button>
              </div>
            </section>

            {/* 
              IV. SECTION TWO: THE 'WHISPERS' COLLECTION
              Staggered Masonry Grid, interspersed stills & silent loop extracts, tiny captions.
              Expansive negative space: 200px+ vertical padding.
            */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 py-[200px]">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-y-24 md:gap-x-12 items-center">
                {/* Text Context - Left Column */}
                <div className="md:col-span-4 md:sticky md:top-32 self-start pr-8">
                  <h2 className="font-serif text-2xl md:text-3xl tracking-[0.2em] mb-6">
                    THE WHISPERS
                    <br />
                    COLLECTION
                  </h2>
                  <p className="text-[13px] leading-relaxed text-gray-500 font-light mb-8 max-w-sm">
                    An architectural and organic documentation of the
                    traditional Igbo wooden sleeping mat. Representing forgotten
                    comfort, ancestral memories, and the sacred space between
                    labor and rest.
                  </p>
                  <div className="w-12 h-[1px] bg-gray-200"></div>
                </div>

                {/* Staggered Masonry Layout - Right Column */}
                <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
                  {GALLERY_ITEMS.slice(0, 5).map((item, index) => (
                    <div
                      key={item.id}
                      className={`group cursor-pointer ${index === 1 ? "md:mt-32" : index === 3 ? "md:mt-24" : ""}`}
                      onClick={() => {
                        setActiveItem(item);
                        setLightboxOpen(true);
                      }}
                    >
                      <div className="relative overflow-hidden bg-gray-50 aspect-[3/4]">
                        {item.isTextureVideo ? (
                          <video
                            src={item.videoUrl}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                          />
                        ) : (
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                          />
                        )}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 flex items-center justify-center">
                          <ZoomIn
                            className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            size={24}
                          />
                        </div>
                      </div>
                      {/* Captions - Tiny (12px), italicized light-grey */}
                      <div className="mt-4 flex justify-between items-baseline">
                        <span className="text-[12px] italic text-gray-400">
                          {item.title}, {item.year}
                        </span>
                        <span className="text-[10px] text-gray-300 uppercase tracking-wider">
                          {item.medium}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 
              V. SECTION THREE: THE TRANSITION
              300px white space gap, 0.5px horizontal line spanning 60% of screen width.
            */}
            <div className="w-full py-[150px] flex justify-center">
              <div className="w-[60%] h-[1px] bg-gray-100"></div>
            </div>

            {/* 
              VI. SECTION FOUR: 'ECHOES OF SOLITUDE' (THE ADVOCACY)
              Split-screen 50/50. Overlay Play icon. 
            */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 pb-[200px]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
                <div className="relative group overflow-hidden aspect-[4/5] bg-gray-50">
                  <img
                    src="/images/echoes-portrait2.jpg"
                    alt="Echoes of Solitude portrait piece"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  {/* Subtle translucent Play icon */}
                  <div
                    onClick={() => setFilmModalOpen(true)}
                    className="absolute inset-0 bg-black/10 hover:bg-black/20 transition-all flex items-center justify-center cursor-pointer"
                  >
                    <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                      <Play className="fill-white text-white ml-1" size={20} />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-center space-y-6 max-w-md">
                  <h2 className="font-serif text-3xl md:text-5xl leading-tight">
                    Echoes of Solitude
                  </h2>
                  <p className="text-[14px] text-gray-600 font-light italic leading-relaxed">
                    "Reflecting the limitations and resilience of the Girl
                    Child."
                  </p>
                  <p className="text-[12px] text-gray-400 font-light leading-relaxed">
                    The 'Unfinished Business' and 'Glass Ceiling Shattered'
                    collections expose the layered, institutional wounds of
                    female silencing. Using stitched jute, raw acrylic textures,
                    and deep symbolic markings, each canvas acts as an emotional
                    documentation of resilience.
                  </p>
                  <div>
                    <button
                      onClick={() => setActiveTab("gallery")}
                      className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] border-b border-black/20 pb-1 hover:border-black transition-all"
                    >
                      <span>Explore Series</span>
                      <ArrowRight size={12} />
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* 
              VII. SECTION FIVE: THE 'ECHOES' COLLECTION
              Strict Two-Column Grid. Extreme detail macro shots.
            */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 pb-[200px]">
              <div className="text-center mb-24">
                <h3 className="font-serif text-2xl tracking-[0.2em] mb-4">
                  TEXTURES & MOTIFS
                </h3>
                <p className="text-xs text-gray-400 tracking-[0.05em]">
                  EXTREME MACRO-VIEWS OF ACRYLIC-ON-JUTE
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                {[
                  {
                    id: "macro-1",
                    title: "Jute & Silence (Detail I)",
                    year: "2025",
                    image: "/images/acrylic-jute-details.jpg",
                    desc: "Focus on raw fiber bindings, exploring the intersection of domestic labor and high art.",
                  },
                  {
                    id: "macro-2",
                    title: "Glass Ceiling Fractures (Detail II)",
                    year: "2023",
                    image: "/images/unfinished-business.jpg",
                    desc: "Micro-scratches and white pigment on charcoal jute, representing the invisible structures of systemic barriers.",
                  },
                  {
                    id: "macro-3",
                    title: "Stitched Memories (Detail III)",
                    year: "2024",
                    image: "/images/echoes-portrait1.jpg",
                    desc: "Intimate view of hand-stitched thread on jute canvas, symbolizing the mending of collective wounds.",
                  },
                  {
                    id: "macro-4",
                    title: "Wood Grain Whispers (Detail IV)",
                    year: "2024",
                    image: "/images/whispers-collection-3.jpg",
                    desc: "Extreme close-up of carved mahogany grain patterns, revealing the silent history within the wood.",
                  },
                ].map((item) => (
                  <div
                    key={item.id}
                    className="group cursor-pointer"
                    onClick={() => {
                      setActiveItem({
                        id: item.id,
                        title: item.title,
                        year: item.year,
                        medium: "Acrylic & Mixed Media on Jute",
                        description: item.desc,
                        image: item.image,
                      });
                      setLightboxOpen(true);
                    }}
                  >
                    <div className="overflow-hidden aspect-square bg-gray-50 mb-6">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg tracking-[0.1em] mb-2">
                        {item.title}
                      </h4>
                      <p className="text-[12px] text-gray-400 font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 
              FEATURED ARTS SECTION
              Dark background with white cards showcasing upcoming events and exhibitions
              Moved to end of homepage before footer
            */}
            <section className="bg-[#1A1A1A] py-[150px]">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                {/* Section Header */}
                <div className="text-center mb-16">
                  <h2 className="font-serif text-white text-3xl md:text-4xl tracking-[0.2em] uppercase mb-6">
                    Featured Arts
                  </h2>
                  <p className="text-white/60 text-[13px] leading-relaxed font-light max-w-2xl mx-auto">
                    We hold regular art exhibitions, cultural performances,
                    tours, art classes & workshops. Keep a date with us by
                    subscribing to our newsletter and stay updated on our next
                    events.
                  </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Card 1 */}
                  <div className="bg-white group hover:transform hover:-translate-y-2 transition-all duration-500">
                    <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                      <img
                        src="/images/whispers/ute-osisi.jpg"
                        alt="Workshop in Abuja"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-8 text-center">
                      <p className="text-[11px] uppercase tracking-[0.2em] text-gray-400 mb-3">
                        Started April 2025
                      </p>
                      <h3 className="font-serif text-lg tracking-[0.1em] mb-3 text-[#1A1A1A]">
                        Workshop in Abuja
                      </h3>
                      <p className="text-[11px] text-gray-500 leading-relaxed mb-6 uppercase tracking-wider">
                        Painting, Tie-Dye & Batik Workshop Every Weekend
                      </p>
                      <button className="w-full bg-gray-400 hover:bg-[#1A1A1A] text-white text-[10px] uppercase tracking-[0.2em] py-4 transition-colors duration-300">
                        Register Here
                      </button>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-white group hover:transform hover:-translate-y-2 transition-all duration-500">
                    <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                      <img
                        src="/images/whispers/ute-osisi.jpg"
                        alt="Osun Osogbo Cultural Festival"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-8 text-center">
                      <p className="text-[11px] uppercase tracking-[0.2em] text-gray-400 mb-3">
                        15 June 2024
                      </p>
                      <h3 className="font-serif text-lg tracking-[0.1em] mb-3 text-[#1A1A1A]">
                        Osun Osogbo Cultural Festival
                      </h3>
                      <p className="text-[11px] text-gray-500 leading-relaxed mb-6 uppercase tracking-wider">
                        At Mama Art Village, Osun Osogbo
                      </p>
                      <button className="w-full bg-gray-400 hover:bg-[#1A1A1A] text-white text-[10px] uppercase tracking-[0.2em] py-4 transition-colors duration-300">
                        Attend Event
                      </button>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-white group hover:transform hover:-translate-y-2 transition-all duration-500">
                    <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                      <img
                        src="/images/whispers/ute-osisi.jpg"
                        alt="Orun Festival"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-8 text-center">
                      <p className="text-[11px] uppercase tracking-[0.2em] text-gray-400 mb-3">
                        2 August 2024
                      </p>
                      <h3 className="font-serif text-lg tracking-[0.1em] mb-3 text-[#1A1A1A]">
                        Orun Festival
                      </h3>
                      <p className="text-[11px] text-gray-500 leading-relaxed mb-6 uppercase tracking-wider">
                        Explore the Sacred Osun Osogbo Groves
                      </p>
                      <button className="w-full bg-gray-400 hover:bg-[#1A1A1A] text-white text-[10px] uppercase tracking-[0.2em] py-4 transition-colors duration-300">
                        Attend Event
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* 
          VIII. BIOGRAPHY INTEGRATION
          Dual-column layout: Nsukka 1985 heritage on left, African Achievers Award on right.
        */}
        {activeTab === "biography" && (
          <section className="max-w-7xl mx-auto px-6 md:px-12 py-[100px] soft-fade">
            <h1 className="font-serif text-4xl md:text-5xl tracking-[0.2em] mb-20">
              BIOGRAPHY
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
              {/* Column 1: The Nsukka 1985 Heritage */}
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 block mb-4">
                  1985 — Nsukka Heritage
                </span>
                <h2 className="font-serif text-2xl tracking-[0.1em] mb-6 leading-relaxed">
                  The Roots of Uli & Academic Tradition
                </h2>
                <div className="space-y-6 text-[13px] leading-relaxed font-light text-gray-600">
                  <p>
                    Chinze is a prolific, award-winning Nigerian artist who
                    studied Fine and Applied Arts at the University of Nigeria
                    Nsukka, from where she graduated in 1985 specializing in
                    Painting. Chinze also studied Interior designing in the USA
                    and has two post graduate diplomas (PGD) in Public Relations
                    and Advertising and Business administration. The African
                    Achievers Award Committee recognized her strides in art and
                    awarded her the winner of the African Achievers Award in Art
                    in 2018 at the House of Commons, London, UK.
                  </p>
                  <p>
                    Chinze specializes in painting with acrylic on jute. She
                    uses pieces of jute or burlap to add texture to canvas,
                    paper or velour. Her paintings are usually detailed, highly
                    textured and rich in symbolism. Her colours are vibrant and
                    full of energy. Chinze creates water colour paintings and
                    expresses herself on metal and wood and making two- and
                    three-dimensional sculptures. She also explores other ideas
                    like making wrought iron and wooden furniture pieces.
                  </p>
                  <p>
                    She is also an Interior Designer, Movie Makeup Artist and a
                    Set Designer. She is multitalented. Chinze is known for her
                    eclectic works that are well put together.The awardwinning
                    artist has participated in over 76 local and international
                    art exhibitions, including New York Art Expo, European
                    School of Economics, London, Plovdiv Bulgaria, Johannesburg,
                    Hollywood, California, Paris, Lagos, Abuja, Enugu. Most
                    recently, she exhibited her works at the 26th Edition of the
                    Parallax Art Fair in Kensington, London in July 2023. Prior
                    to that, Chinze had a sole exhibition at the European School
                    of Economics, London titled ‘Glass Ceiling Shattered’
                    stressing the limitations and restriction placed on the path
                    of the ‘Girl Child’ to achieve her goals. She was
                    acclaimedfor her unique and stimulating Exhibition,
                    ‘Unfinished Business’ at the National Museum, Lagos which
                    she highlighted the plight of the ‘Girl child’ in Nigeria.
                  </p>
                </div>
              </div>

              {/* Column 2: 2018 African Achievers Award at the House of Commons */}
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 block mb-4">
                  2018 — Westminster Honours
                </span>
                <h2 className="font-serif text-2xl tracking-[0.1em] mb-6 leading-relaxed">
                  Global Recognition & House of Commons
                </h2>
                <div className="space-y-6 text-[13px] leading-relaxed font-light text-gray-600">
                  <p>
                    In 2018, Chinze was honored with the prestigious African
                    Achievers Award at the House of Commons, Palace of
                    Westminster, London. This recognition highlighted not only
                    her masterful command of space, texture, and heritage but
                    also her tireless advocacy for female artists.
                  </p>
                  <p>
                    Bridging continents, her work engages in rigorous dialogue
                    with international audiences, challenging the traditional
                    paradigms of African female representation and bringing the
                    profound narratives of female resilience into the grand
                    halls of policy and power.
                  </p>
                  <p>
                    As a female Artist in Nigeria, she has also taken part in
                    three exhibitions organized by the Association of female
                    Artists, FEAAN. Chinze is the current President of FEAAN.
                    Chinze is a seasoned Artist that continues to renew her
                    creativity and is not afraid of exploring new techniques and
                    materials. Chinze's recent creations include
                    transformingwood into a thin, lighter material which she
                    called ‘Ute-Osisi’ which translates to ‘Wooden Mat’ for her
                    wood carving art pieces. The material defines Chinze’s
                    current works which are unusual wood works
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 
          EXHIBITIONS ARCHIVE
          Minimalist list of global shows using 14px Sans-Serif, organized by year, separated by thin lines.
        */}
        {activeTab === "exhibitions" && (
          <section className="max-w-5xl mx-auto px-6 md:px-12 py-[150px] soft-fade">
            <h1 className="font-serif text-4xl md:text-5xl tracking-[0.2em] mb-24">
              EXHIBITIONS ARCHIVE
            </h1>

            <div className="border-t border-gray-100">
              {[
                {
                  year: "2025",
                  title:
                    "Whispers from Ancient Trees: The Ute-Osisi Installation",
                  location: "Palais de Tokyo, Paris",
                  type: "Solo Exhibition",
                },
                {
                  year: "2024",
                  title: "Echoes of Solitude: Unfinished Business",
                  location: "Tate Modern, London",
                  type: "Group & Intervention",
                },
                {
                  year: "2023",
                  title: "Stitches & Wounds: Female Realities",
                  location: "The Armory Show, New York",
                  type: "Solo Showcase",
                },
                {
                  year: "2021",
                  title: "Resilience: Nsukka 1985 Reimagined",
                  location: "Lagos Biennial, Nigeria",
                  type: "Installation",
                },
                {
                  year: "2019",
                  title: "Uli in the Modern Sphere",
                  location: "Royal Academy of Arts, London",
                  type: "Exhibition",
                },
                {
                  year: "2018",
                  title: "House of Commons: African Achievers Exhibition",
                  location: "Westminster, London",
                  type: "Solo Display & Honour",
                },
                {
                  year: "2015",
                  title: "Silent Expressions of the Mat",
                  location: "National Museum, Lagos",
                  type: "Retrospective",
                },
              ].map((exhibit, index) => (
                <div
                  key={index}
                  className="py-8 flex flex-col md:flex-row md:items-center justify-between border-b border-gray-100 group transition-colors duration-300 hover:bg-gray-50/50 px-4 -mx-4"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:space-x-12">
                    <span className="text-[14px] font-medium tracking-[0.1em] text-gray-400 mb-2 md:mb-0 w-20">
                      {exhibit.year}
                    </span>
                    <span className="text-[14px] font-light tracking-[0.05em]">
                      {exhibit.title}
                    </span>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center md:space-x-8 mt-2 md:mt-0 text-[12px] text-gray-400">
                    <span className="italic">{exhibit.type}</span>
                    <span className="tracking-[0.1em]">{exhibit.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 
          GALLERY VIEW 
          Full grid of all works & extreme details
        */}
        {activeTab === "gallery" && (
          <section className="max-w-7xl mx-auto px-6 md:px-12 py-[150px] soft-fade">
            <h1 className="font-serif text-4xl md:text-5xl tracking-[0.2em] mb-12">
              GALLERY & ARCHIVE
            </h1>
            <p className="text-[13px] text-gray-500 font-light mb-24 max-w-lg">
              A comprehensive museum-grade digital index of the Whispers from
              Ancient Trees and Echoes of Solitude installations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 md:gap-16">
              {GALLERY_ITEMS.map((item) => (
                <div
                  key={item.id}
                  className="group cursor-pointer"
                  onClick={() => {
                    setActiveItem(item);
                    setLightboxOpen(true);
                  }}
                >
                  <div className="relative overflow-hidden aspect-[4/5] bg-gray-50 mb-4">
                    {item.isTextureVideo ? (
                      <video
                        src={item.videoUrl}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                      />
                    )}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-300" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg tracking-[0.05em]">
                      {item.title}
                    </h3>
                    <p className="text-[12px] text-gray-400 mt-1">
                      {item.medium}, {item.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* 
        IX. FOOTER
        Centered, tiny 10px Sans-Serif. © 2026 CHINZE ARTS. ALL RIGHTS RESERVED. PRESIDENT, FEAAN.
      */}
      <footer className="py-8 flex items-center justify-center">
        <p className="text-[10px] tracking-[0.2em] uppercase text-gray-400 font-sans">
          © 2026 CHINZE ARTS. ALL RIGHTS RESERVED. PRESIDENT, FEAAN.
        </p>
      </footer>

      {/* 
        BORDERLESS LIGHTBOX OVERLAY
        Minimalist, extreme high-end UI for extreme detailed viewing.
      */}
      {lightboxOpen && activeItem && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col soft-fade overflow-y-auto">
          {/* Lightbox Header */}
          <div className="flex justify-between items-center p-6 md:p-12">
            <span className="text-xs uppercase tracking-[0.3em] font-light">
              Artwork Detail
            </span>
            <button
              onClick={() => setLightboxOpen(false)}
              className="text-gray-400 hover:text-black transition-colors"
            >
              <X size={28} />
            </button>
          </div>

          {/* Lightbox Content */}
          <div className="flex-1 flex flex-col md:flex-row items-center max-w-7xl mx-auto w-full px-6 md:px-12 gap-12 md:gap-24 py-12">
            <div className="w-full md:w-3/5">
              {activeItem.isTextureVideo ? (
                <video
                  src={activeItem.videoUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto max-h-[75vh] object-contain bg-gray-50"
                />
              ) : (
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="w-full h-auto max-h-[75vh] object-contain"
                />
              )}
            </div>

            {/* Technical Metadeta Panel */}
            <div className="w-full md:w-2/5 flex flex-col justify-center space-y-6">
              <div>
                <span className="text-[10px] text-gray-400 uppercase tracking-widest block mb-2">
                  {activeItem.year}
                </span>
                <h2 className="font-serif text-3xl md:text-4xl tracking-[0.1em] mb-4">
                  {activeItem.title}
                </h2>
                <div className="w-8 h-[1px] bg-black/20 mb-6"></div>
              </div>

              <div className="space-y-4 text-[13px] leading-relaxed text-gray-600 font-light">
                <div>
                  <span className="block text-[10px] text-gray-400 uppercase tracking-widest mb-1">
                    Medium
                  </span>
                  <p>{activeItem.medium}</p>
                </div>
                <div>
                  <span className="block text-[10px] text-gray-400 uppercase tracking-widest mb-1">
                    Catalogue Note
                  </span>
                  <p>{activeItem.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 
        FILM / VIDEO LIGHTBOX
        Borderless, seamless silent playback of the wood carving / textures.
      */}
      {filmModalOpen && (
        <div className="fixed inset-0 z-50 bg-[#1A1A1A] flex flex-col justify-center items-center soft-fade">
          <button
            onClick={() => setFilmModalOpen(false)}
            className="absolute top-12 right-12 text-white/60 hover:text-white transition-colors z-20"
          >
            <X size={32} />
          </button>

          {/* Film Content */}
          <div className="relative w-full max-w-4xl aspect-video bg-black overflow-hidden shadow-2xl">
            <video
              src="https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-sculptor-carving-wood-with-a-chisel-42754-large.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

          <p className="text-white/60 text-[11px] font-sans tracking-[0.2em] mt-8 uppercase">
            Whispers from Ancient Trees — Process Documentation
          </p>
        </div>
      )}
    </div>
  );
}
