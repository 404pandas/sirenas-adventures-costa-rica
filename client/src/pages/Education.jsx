import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const educationData = [
  {
    id: "open-water",
    title: "Open Water Diver",
    description:
      "The Open Water Diver course is your first certification level and unlocks the world beneath the waves. Through a combination of theory, confined water practice, and four open water dives, you'll master essential diving skills and safety procedures.",
    prerequisites: "Able to swim; medically fit for diving.",
    ageRequirement: "Minimum 10 years old",
    depthLimit: "18 meters / 60 feet",
    qualifiesYouFor: "Allows independent diving with a buddy to 18m.",
  },
  {
    id: "advanced",
    title: "Advanced Open Water Diver",
    description:
      "Enhance your dive knowledge and experience through five Adventure Dives. Deep and Navigation are required; choose three others like Night, Wreck, or Peak Performance Buoyancy.",
    prerequisites: "Open Water Diver certification",
    ageRequirement: "Minimum 12 years old",
    depthLimit: "30 meters / 100 feet",
    qualifiesYouFor: "Dive deeper and access many specialty courses.",
  },
  {
    id: "rescue",
    title: "Rescue Diver",
    description:
      "Become a more competent diver by learning how to prevent, recognize, and manage diving emergencies. This course builds confidence and readiness.",
    prerequisites: "Advanced Open Water Diver + CPR/First Aid within 24 months",
    ageRequirement: "Minimum 12 years old",
    depthLimit: "30 meters / 100 feet",
    qualifiesYouFor: "Prepares you for Divemaster training.",
  },
  {
    id: "dive-master",
    title: "Divemaster",
    description:
      "The first professional-level course. Learn to lead certified divers, assist instructors, and manage dive operations. Includes knowledge development, water skills, stamina tests, and practical applications.",
    prerequisites: "Rescue Diver + 40 logged dives to begin (60 to certify)",
    ageRequirement: "Minimum 18 years old",
    depthLimit: "30 meters / 100 feet",
    qualifiesYouFor: "Work as a pro diver and assist in training courses.",
  },
  {
    id: "assistant-instructor",
    title: "Assistant Instructor",
    description:
      "Begin your journey to becoming a PADI Instructor. Learn how to conduct classroom and confined water training. This is the first part of the PADI Instructor Development Course (IDC).",
    prerequisites: "PADI Divemaster, 60 logged dives",
    ageRequirement: "Minimum 18 years old",
    depthLimit: "30 meters / 100 feet",
    qualifiesYouFor: "Teach select PADI programs under supervision.",
  },
  {
    id: "specialties",
    title: "Specialty Courses",
    subOptions: [
      {
        id: "deep-diver",
        title: "Deep Diver",
        description:
          "Extend your limits and learn to dive up to 40 meters/130 feet safely. Covers planning, gas management, narcosis awareness, and deep dive safety procedures.",
        prerequisites: "Advanced Open Water Diver",
        ageRequirement: "Minimum 15 years old",
        depthLimit: "40 meters / 130 feet",
        qualifiesYouFor: "Safe deep dives for exploration or work.",
      },
      {
        id: "night-diver",
        title: "Night Diver",
        description:
          "Learn to dive in darkness with a focus on communication, navigation, and lighting techniques. Discover the marine life that comes out at night.",
        prerequisites: "Open Water Diver",
        ageRequirement: "Minimum 12 years old",
        depthLimit: "Varies by training site",
        qualifiesYouFor: "Confident night diving with proper lighting.",
      },
      {
        id: "wreck-diver",
        title: "Wreck Diver",
        description:
          "Explore sunken ships and aircraft. Learn mapping, penetration protocols, line use, and hazard awareness.",
        prerequisites: "Advanced Open Water Diver",
        ageRequirement: "Minimum 15 years old",
        depthLimit: "Within your certification level",
        qualifiesYouFor: "Dive safely around and into wrecks.",
      },
      {
        id: "enriched-air-diver",
        title: "Enriched Air (Nitrox) Diver",
        description:
          "Use oxygen-enriched air to extend bottom times and reduce nitrogen exposure. Great for repetitive dives.",
        prerequisites: "Open Water Diver (or concurrently)",
        ageRequirement: "Minimum 12 years old",
        depthLimit: "According to primary certification",
        qualifiesYouFor: "Use Nitrox blends up to 40% O2.",
      },
      {
        id: "drift-diver",
        title: "Drift Diver",
        description:
          "Learn to dive in strong currents using surface marker buoys (SMBs), floats, and current reading techniques.",
        prerequisites: "Open Water Diver",
        ageRequirement: "Minimum 12 years old",
        depthLimit: "As per primary certification",
        qualifiesYouFor: "Confident drift diving in rivers, walls, etc.",
      },
      {
        id: "underwater-photographer",
        title: "Underwater Photographer",
        description:
          "Master lighting, composition, and equipment techniques to take stunning photos underwater.",
        prerequisites: "Open Water Diver",
        ageRequirement: "Minimum 10 years old",
        depthLimit: "Based on your certification",
        qualifiesYouFor: "Capture high-quality underwater images.",
      },
      {
        id: "underwater-naturalist",
        title: "Underwater Naturalist",
        description:
          "Understand the behavior and ecology of aquatic life. Learn how different species interact.",
        prerequisites: "Open Water Diver",
        ageRequirement: "Minimum 10 years old",
        depthLimit: "As per primary certification",
        qualifiesYouFor: "Dive with a focus on marine biology.",
      },
      {
        id: "search-and-recovery",
        title: "Search and Recovery Diver",
        description:
          "Use patterns, lines, and lift bags to find and recover lost objects underwater.",
        prerequisites:
          "Advanced Open Water or Open Water + Navigation Adventure Dive",
        ageRequirement: "Minimum 12 years old",
        depthLimit: "Varies by training",
        qualifiesYouFor: "Recover objects safely and efficiently.",
      },
      {
        id: "peak-performance-buoyancy",
        title: "Peak Performance Buoyancy",
        description:
          "Master hovering, trim, and breathing techniques to improve air consumption and control.",
        prerequisites: "Open Water Diver",
        ageRequirement: "Minimum 10 years old",
        depthLimit: "As per certification",
        qualifiesYouFor: "Fine-tuned buoyancy for all diving.",
      },
      {
        id: "dry-suit-diver",
        title: "Dry Suit Diver",
        description:
          "Learn how to safely dive in cold water using a dry suit. Covers thermal protection and emergency procedures.",
        prerequisites: "Open Water Diver",
        ageRequirement: "Minimum 10 years old",
        depthLimit: "Based on primary certification",
        qualifiesYouFor: "Cold water diving with dry suits.",
      },
      {
        id: "boat-diver",
        title: "Boat Diver",
        description:
          "Learn techniques for diving from boats including large vessels, RIBs, and liveaboards.",
        prerequisites: "Open Water Diver",
        ageRequirement: "Minimum 10 years old",
        depthLimit: "As per certification",
        qualifiesYouFor: "Confident boat diving in varied conditions.",
      },
      {
        id: "ice-diver",
        title: "Ice Diver",
        description:
          "Specialize in extreme conditions. Learn tethered diving, safety drills, and emergency exits.",
        prerequisites: "Advanced Open Water Diver",
        ageRequirement: "Minimum 18 years old",
        depthLimit: "Within 30 meters",
        qualifiesYouFor: "Dive beneath ice sheets safely.",
      },
      {
        id: "altitude-diver",
        title: "Altitude Diver",
        description:
          "Learn how diving changes above 300 meters/1000 feet elevation. Includes adjusted tables and procedures.",
        prerequisites: "Open Water Diver",
        ageRequirement: "Minimum 10 years old",
        depthLimit: "As per certification",
        qualifiesYouFor: "Dive at high-altitude lakes and sites.",
      },
      {
        id: "multilevel-diver",
        title: "Multilevel Diver",
        description:
          "Plan and execute dives with multiple depth levels using computers or the eRDPML.",
        prerequisites: "Open Water Diver",
        ageRequirement: "Minimum 12 years old",
        depthLimit: "As per certification",
        qualifiesYouFor: "Dive longer and safer using depth strategies.",
      },
      {
        id: "sidemount-diver",
        title: "Sidemount Diver",
        description:
          "Dive with tanks mounted along your sides. Offers better trim, balance, and redundancy.",
        prerequisites: "Open Water Diver",
        ageRequirement: "Minimum 15 years old",
        depthLimit: "As per certification",
        qualifiesYouFor: "Sidemount configuration diving.",
      },
      {
        id: "fish-identification",
        title: "Fish Identification",
        description:
          "Identify common reef fish families and species while understanding their habitats and behaviors.",
        prerequisites: "Open Water Diver",
        ageRequirement: "Minimum 10 years old",
        depthLimit: "As per certification",
        qualifiesYouFor: "Dive with a focus on marine species awareness.",
      },
    ],
  },
];

const Education = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash) {
      // Delay to ensure DOM is rendered
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, [location]);

  return (
    <div className='p-6'>
      <h2 className='text-3xl font-bold text-white mb-6'>
        PADI Education & Certifications
      </h2>

      {educationData.map((option) =>
        option.subOptions ? (
          <div key={option.id} className='mb-10'>
            <h3 className='text-2xl font-semibold mb-4'>{option.title}</h3>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {option.subOptions.map((sub) => (
                <div
                  key={sub.id}
                  id={sub.id}
                  className='p-4 border border-gray-300 rounded-lg bg-white'
                >
                  <h4 className='text-xl font-semibold mb-2'>{sub.title}</h4>
                  <p>{sub.description}</p>
                  <img
                    src={`https://via.placeholder.com/300x180?text=${encodeURIComponent(
                      sub.title
                    )}`}
                    alt={sub.title}
                    className='mt-3 rounded'
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div
            key={option.id}
            id={option.id}
            className='mb-6 p-4 border border-gray-300 rounded-lg bg-white'
          >
            <h3 className='text-xl font-semibold mb-2'>{option.title}</h3>
            <p>{option.description}</p>
            <img
              src={`https://via.placeholder.com/300x180?text=${encodeURIComponent(
                option.title
              )}`}
              alt={option.title}
              className='mt-3 rounded'
            />
            <p>
              <strong>Prerequisites:</strong> {option.prerequisites}
            </p>
            <p>
              <strong>Minimum Age:</strong> {option.ageRequirement}
            </p>
            <p>
              <strong>Depth Limit:</strong> {option.depthLimit}
            </p>
            <p>
              <strong>Qualifies You For:</strong> {option.qualifiesYouFor}
            </p>
          </div>
        )
      )}
    </div>
  );
};

export default Education;
