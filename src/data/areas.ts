export interface ServiceArea {
  slug: string;
  city: string;
  state: string;
  headline: string;
  description: string;
  scenarios: string[];
}

export interface CityData {
  content: string[];
  landmarks?: string[];
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export const serviceAreas: ServiceArea[] = [
  {
    slug: "killeen",
    city: "Killeen",
    state: "TX",
    headline: "Sell Your Killeen Home Fast for Cash",
    description: "We buy houses near Fort Hood (formerly Fort Cavazos) in Killeen, TX. As a military town, Killeen sees plenty of homeowners who need to sell quickly due to PCS orders, deployment, or life changes. Whether you're relocating, dealing with an inherited property, or simply need to sell your Killeen house fast, we're here to help with a fair cash offer.",
    scenarios: [
      "PCS orders requiring a quick sale",
      "Inherited properties from family members",
      "Homes needing major repairs",
      "Tired landlords ready to sell rental properties",
      "Divorce situations requiring fast resolution",
      "Pre-foreclosure or behind on payments"
    ]
  },
  {
    slug: "harker-heights",
    city: "Harker Heights",
    state: "TX",
    headline: "Cash Home Buyers in Harker Heights",
    description: "Harker Heights homeowners near Fort Hood (formerly Fort Cavazos) trust us for straightforward, hassle-free home sales. If your property needs work, you're dealing with a difficult situation, or you just want to skip the traditional listing process, we provide a simple solution. Get a cash offer for your Harker Heights home today.",
    scenarios: [
      "Homes with deferred maintenance",
      "Properties with foundation or roof issues",
      "Downsizing and need to sell quickly",
      "Job relocation out of the area",
      "Avoiding the hassle of showings and open houses",
      "Vacant properties costing you money"
    ]
  },
  {
    slug: "temple",
    city: "Temple",
    state: "TX",
    headline: "We Buy Houses in Temple, Texas",
    description: "Temple is a growing community with a strong healthcare presence. Whether you work at Baylor Scott & White and need to relocate, have inherited a family home, or own a property that's become more trouble than it's worth, we buy houses in Temple for cash. No repairs, no fees, no waiting.",
    scenarios: [
      "Healthcare workers relocating for opportunities",
      "Inherited homes in any condition",
      "Houses with code violations",
      "Properties damaged by weather",
      "Rentals with problem tenants",
      "Homes needing expensive repairs"
    ]
  },
  {
    slug: "belton",
    city: "Belton",
    state: "TX",
    headline: "Sell Your Belton House Fast",
    description: "Belton's historic charm makes it a wonderful place to live, but sometimes circumstances require a quick home sale. Whether it's an older home needing updates, a property you've inherited, or a situation where time is critical, we offer a fair cash price for Belton homes in any condition.",
    scenarios: [
      "Older homes needing extensive updates",
      "Properties going through probate",
      "Homes with title issues we can help resolve",
      "Sellers facing financial difficulties",
      "Vacant properties you want off your hands",
      "UMHB students' families needing quick sales"
    ]
  },
  {
    slug: "copperas-cove",
    city: "Copperas Cove",
    state: "TX",
    headline: "Cash Home Buyers in Copperas Cove",
    description: "Copperas Cove homeowners, especially those connected to Fort Hood (formerly Fort Cavazos), often need flexible, fast solutions when selling. We understand the unique needs of military families and local residents alike. Sell your Copperas Cove house for cash without the stress of a traditional sale.",
    scenarios: [
      "Military families with PCS orders",
      "Homes purchased with VA loans needing quick sales",
      "Properties with outdated systems or appliances",
      "Landlords tired of managing rentals",
      "Homeowners facing foreclosure",
      "Relocating for work or family"
    ]
  },
  {
    slug: "waco",
    city: "Waco",
    state: "TX",
    headline: "Sell Your Waco Home for Cash",
    description: "Waco has seen tremendous growth, but not every homeowner is ready to compete in a hot market. If your home needs work, you're dealing with a complex situation, or you simply want to sell without the hassle, we buy Waco houses for cash. Fair offers, fast closings, local expertise.",
    scenarios: [
      "Homes that can't compete with renovated listings",
      "Investment properties you're ready to exit",
      "Houses with major repair needs",
      "Probate and inherited property situations",
      "Tired of being a landlord in Waco",
      "Baylor-area properties needing updates"
    ]
  },
  {
    slug: "salado",
    city: "Salado",
    state: "TX",
    headline: "Sell Your Salado Home for Cash",
    description: "Salado is a charming historic village nestled between Killeen and Temple along I-35. Whether you own a historic property in the village, a home near Salado Creek, or a property in the surrounding Bell County area, we buy houses in Salado for cash. No need to wait for the perfect buyer — get a fair offer today.",
    scenarios: [
      "Historic homes needing preservation or updates",
      "Inherited properties from family members",
      "Downsizing from larger properties",
      "Vacation or second homes you no longer need",
      "Properties needing major repairs",
      "Relocating out of the area"
    ]
  },
  {
    slug: "georgetown",
    city: "Georgetown",
    state: "TX",
    headline: "Cash Home Buyers in Georgetown",
    description: "Georgetown is one of the fastest-growing cities in Texas, just north of Austin. Whether you're in Sun City, near the historic downtown square, or anywhere in Williamson County, we buy houses for cash in any condition. Skip the competitive Austin-area market and get a fair cash offer for your Georgetown home.",
    scenarios: [
      "Sun City residents ready to downsize",
      "Homes that can't compete in the hot Austin market",
      "Inherited properties in any condition",
      "Houses needing repairs or updates",
      "Relocating for work or retirement",
      "Investment properties you want to exit"
    ]
  }
];

// City-specific content for individual landing pages
export const cityData: Record<string, CityData> = {
  "killeen": {
    content: [
      "Killeen is the heart of the Fort Hood (formerly Fort Cavazos) military community, and we understand the unique challenges that come with military life. PCS orders can come at any time, and when you need to sell your house fast, waiting months for a traditional sale just isn't an option. That's where we come in.",
      "As a local cash home buyer, I've helped hundreds of Killeen families sell their homes quickly and fairly. Whether your house is near Rancier Avenue, in the Clear Creek area, or anywhere else in Killeen, we make cash offers on homes in any condition. No repairs needed, no agent commissions, no waiting.",
      "If you're a military family facing a PCS move, dealing with an inherited property, going through a divorce, or simply need to sell your Killeen home fast for any reason, I'm here to help. We can close in as little as 7 days, or work with your timeline."
    ],
    landmarks: [
      "Fort Hood (Fort Cavazos)",
      "Clear Creek",
      "Rancier Avenue",
      "Skylark Field",
      "Killeen Mall area",
      "Nolanville Road"
    ],
    coordinates: {
      lat: 31.1171,
      lng: -97.7278
    }
  },
  "harker-heights": {
    content: [
      "Harker Heights offers a quieter, family-friendly alternative to nearby Killeen while still being close to Fort Hood (formerly Fort Cavazos). Many military families and professionals choose Harker Heights for its excellent schools and peaceful neighborhoods. When life circumstances change, we're here to help you sell quickly.",
      "Whether you're in the established neighborhoods near Central Texas College or the newer developments, we buy houses in any condition throughout Harker Heights. Foundation issues, roof problems, outdated interiors — none of that stops us from making a fair cash offer.",
      "As a local buyer who knows the Harker Heights market, I can often make offers above what investors from out of town offer. We close quickly, handle all the paperwork, and make the process as simple as possible for you and your family."
    ],
    landmarks: [
      "Central Texas College",
      "Carl Levin Park",
      "Market Heights",
      "Dana Peak Park area",
      "Purser Family Park"
    ],
    coordinates: {
      lat: 31.0494,
      lng: -97.6597
    }
  },
  "temple": {
    content: [
      "Temple is known as the healthcare hub of Central Texas, anchored by the Baylor Scott & White Medical Center. Healthcare professionals often need to relocate on short notice, and homeowners throughout Temple may face situations where a quick cash sale makes the most sense.",
      "From the historic downtown district to newer neighborhoods, we buy houses across Temple in any condition. Whether your home is near the hospital, in the Midway Drive area, or out toward Belton, we can help you sell fast without the hassle of traditional listings.",
      "Temple's real estate market is competitive, but not every home is ready to compete. If your property needs repairs, has been sitting vacant, or you just need to sell quickly, I provide fair cash offers and can close on your timeline. No repairs, no showings, no waiting."
    ],
    landmarks: [
      "Baylor Scott & White Medical Center",
      "Temple College",
      "Downtown Temple",
      "Temple Mall area",
      "Wildflower Country Club area"
    ],
    coordinates: {
      lat: 31.0982,
      lng: -97.3428
    }
  },
  "belton": {
    content: [
      "Belton combines historic Texas charm with the energy of a growing college town, home to the University of Mary Hardin-Baylor. Whether you own a historic property downtown, a home near the university, or a house out by Belton Lake, we buy properties in any condition.",
      "Older homes in Belton often come with challenges — outdated electrical, aging plumbing, or foundation issues common in historic properties. We specialize in buying homes as-is, so you don't have to spend time or money on repairs before selling.",
      "If you've inherited a family home in Belton, are dealing with probate, or simply need to sell your house quickly, I can help. As a local buyer, I understand Belton's unique neighborhoods and property values, and I make fair offers based on real market conditions."
    ],
    landmarks: [
      "University of Mary Hardin-Baylor",
      "Downtown Belton",
      "Belton Lake",
      "Bell County Expo Center",
      "Nolan Creek"
    ],
    coordinates: {
      lat: 31.0560,
      lng: -97.4642
    }
  },
  "copperas-cove": {
    content: [
      "Copperas Cove is a welcoming community with strong ties to Fort Hood (formerly Fort Cavazos), making it home to many military families. When duty calls and you need to relocate quickly, selling your house traditionally often isn't fast enough. We offer a better solution.",
      "Whether your home is near the Copperas Cove Town Center, in established neighborhoods, or in newer developments, we buy houses for cash in any condition. Military families especially appreciate our ability to close quickly and work around deployment schedules or PCS timelines.",
      "I understand the unique needs of Copperas Cove homeowners. From properties purchased with VA loans to homes that have been rental properties, we can handle any situation. Get a fair cash offer and close on your schedule — often in as little as 7-14 days."
    ],
    landmarks: [
      "Fort Hood (Fort Cavazos) West Gate",
      "Copperas Cove Town Center",
      "City Park",
      "Ogletree Gap",
      "House Creek"
    ],
    coordinates: {
      lat: 31.1240,
      lng: -97.9031
    }
  },
  "waco": {
    content: [
      "Waco has experienced tremendous growth in recent years, driven by Baylor University, the Magnolia effect, and a thriving local economy. But not every homeowner is ready to compete in this hot market, and not every house is show-ready. That's where we come in.",
      "From the historic neighborhoods of East Waco to the homes near Baylor University, from Lake Waco properties to houses throughout McLennan County, we buy homes in any condition. If your house needs work, has been damaged, or you simply don't want to deal with the hassle of listing, we can help.",
      "Whether you're a Baylor family relocating after graduation, an investor ready to exit a rental property, or a homeowner dealing with an inherited house, I provide fair cash offers based on Waco's current market values. No repairs needed, no agent fees, no waiting months for closing."
    ],
    landmarks: [
      "Baylor University",
      "Magnolia Market at the Silos",
      "Downtown Waco",
      "Lake Waco",
      "McLennan Community College",
      "Waco Mammoth National Monument"
    ],
    coordinates: {
      lat: 31.5493,
      lng: -97.1467
    }
  },
  "salado": {
    content: [
      "Salado is a picturesque historic village in Bell County, perfectly situated between Killeen and Temple along I-35. Known for its antique shops, art galleries, and the beautiful Salado Creek, this charming community attracts both longtime residents and those seeking a quieter Texas lifestyle.",
      "Whether you own a historic property in the village center, a home along Salado Creek, or a property in the surrounding countryside, we buy houses in Salado for cash in any condition. The unique character of Salado homes — from historic structures to newer builds — doesn't change our approach: fair offers, fast closings.",
      "If you've inherited a family property in Salado, are relocating to be closer to Temple or Killeen, or simply need to sell your Salado home quickly, I'm here to help. With easy access to I-35 and proximity to both Temple and Killeen, Salado homeowners have options — and selling for cash is one of the fastest."
    ],
    landmarks: [
      "Salado Creek",
      "Historic Main Street",
      "Stagecoach Inn",
      "Tablerock Amphitheater",
      "Salado Sculpture Garden",
      "I-35 Corridor"
    ],
    coordinates: {
      lat: 30.9471,
      lng: -97.5386
    }
  },
  "georgetown": {
    content: [
      "Georgetown has become one of the fastest-growing cities in Texas, attracting families, retirees, and professionals who want to be close to Austin while enjoying a more relaxed pace of life. From the award-winning Sun City retirement community to the historic downtown square, Georgetown offers diverse neighborhoods and property types.",
      "The Austin-area real estate market is incredibly competitive, and not every home is ready to compete with fully renovated listings. If your Georgetown property needs work, you're dealing with an inherited home, or you simply want to avoid the stress of traditional selling, we offer a simpler solution with fair cash offers.",
      "Whether you're a Sun City resident ready to downsize, a homeowner relocating for work, or dealing with a property that's been sitting vacant, I can help you sell your Georgetown home quickly. We buy houses throughout Williamson County in any condition — no repairs needed, no agent commissions, no waiting for buyers."
    ],
    landmarks: [
      "Sun City Texas",
      "Georgetown Square",
      "Blue Hole Park",
      "Southwestern University",
      "San Gabriel River",
      "Wolf Ranch Town Center"
    ],
    coordinates: {
      lat: 30.6333,
      lng: -97.6780
    }
  }
};
