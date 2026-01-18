export interface ServiceArea {
  slug: string;
  city: string;
  state: string;
  headline: string;
  description: string;
  scenarios: string[];
}

export const serviceAreas: ServiceArea[] = [
  {
    slug: "killeen",
    city: "Killeen",
    state: "TX",
    headline: "Sell Your Killeen Home Fast for Cash",
    description: "As a military town with Fort Hood nearby, Killeen sees plenty of homeowners who need to sell quickly due to PCS orders, deployment, or life changes. Whether you're relocating, dealing with an inherited property, or simply need to sell your Killeen house fast, we're here to help with a fair cash offer.",
    scenarios: [
      "PCS orders requiring a quick sale",
      "Inherited properties from family members",
      "Homes needing major repairs",
      "Tired landlords ready to sell rental properties",
      "Divorce situations requiring fast resolution"
    ]
  },
  {
    slug: "harker-heights",
    city: "Harker Heights",
    state: "TX",
    headline: "Cash Home Buyers in Harker Heights",
    description: "Harker Heights homeowners trust us for straightforward, hassle-free home sales. If your property needs work, you're dealing with a difficult situation, or you just want to skip the traditional listing process, we provide a simple solution. Get a cash offer for your Harker Heights home today.",
    scenarios: [
      "Homes with deferred maintenance",
      "Properties with foundation or roof issues",
      "Downsizing and need to sell quickly",
      "Job relocation out of the area",
      "Avoiding the hassle of showings and open houses"
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
      "Rentals with problem tenants"
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
      "Vacant properties you want off your hands"
    ]
  },
  {
    slug: "copperas-cove",
    city: "Copperas Cove",
    state: "TX",
    headline: "Cash Home Buyers in Copperas Cove",
    description: "Copperas Cove homeowners, especially those connected to Fort Hood, often need flexible, fast solutions when selling. We understand the unique needs of military families and local residents alike. Sell your Copperas Cove house for cash without the stress of a traditional sale.",
    scenarios: [
      "Military families with PCS orders",
      "Homes purchased with VA loans needing quick sales",
      "Properties with outdated systems or appliances",
      "Landlords tired of managing rentals",
      "Homeowners facing foreclosure"
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
      "Tired of being a landlord in Waco"
    ]
  }
];
