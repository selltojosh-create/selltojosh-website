import type { FAQ } from "@/data/faqs";

export interface Situation {
  slug: string;
  title: string;
  headline: string;
  metaTitle: string;
  metaDescription: string;
  description: string;
  keywords: string[];
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

export interface SituationData {
  content: string[];
  scenarios: string[];
  processSteps: ProcessStep[];
  faqs: FAQ[];
  disclaimer: string;
}

export const situations: Situation[] = [
  {
    slug: "foreclosure",
    title: "Foreclosure",
    headline: "Facing Foreclosure in Central Texas? Sell Your House Fast for Cash",
    metaTitle: "Sell Your House Before Foreclosure in Central Texas | Sell to Josh",
    metaDescription: "Facing foreclosure near Fort Hood or Central Texas? Learn how selling your home for cash may help you avoid foreclosure, protect your equity, and move forward. Get a fair offer within 24 hours.",
    description: "If you've received a foreclosure notice or are behind on payments, you may have more options than you think. A cash sale can help you move forward on your terms.",
    keywords: [
      "stop foreclosure Central Texas",
      "sell house before foreclosure Killeen",
      "avoid foreclosure Temple TX",
      "pre-foreclosure home sale",
      "foreclosure help Fort Hood",
    ],
  },
  {
    slug: "inherited-property",
    title: "Inherited Property",
    headline: "Inherited a House in Central Texas? We Can Help You Sell It",
    metaTitle: "Sell an Inherited House in Central Texas | No Repairs Needed | Sell to Josh",
    metaDescription: "Inherited a property near Fort Hood or Central Texas? Sell it as-is for cash — no repairs, no cleanout, no lengthy listing. We handle the complexities so you don't have to.",
    description: "Inheriting a home comes with emotions, responsibilities, and tough decisions. Whether the property needs work, you live out of state, or multiple heirs are involved, we can help simplify the process.",
    keywords: [
      "sell inherited house Killeen",
      "probate property sale Texas",
      "sell parents house Central Texas",
      "inherited home buyer",
      "sell inherited property Fort Hood",
    ],
  },
  {
    slug: "military-pcs",
    title: "Military PCS",
    headline: "PCS Orders? Sell Your Fort Hood Area Home Fast for Cash",
    metaTitle: "Sell Your Home Fast for Military PCS Near Fort Hood | Sell to Josh",
    metaDescription: "Received PCS orders from Fort Hood (formerly Fort Cavazos)? Sell your home fast for cash. We work with military timelines and can close before your report date.",
    description: "When PCS orders come, your timeline is set. Traditional home sales can take months — but a cash sale can close in days. We work with military families every day and understand the urgency of relocation.",
    keywords: [
      "PCS orders sell house fast",
      "military home sale Fort Hood",
      "PCS relocation Killeen",
      "military family sell home fast",
      "sell house Fort Hood PCS",
    ],
  },
  {
    slug: "divorce",
    title: "Divorce",
    headline: "Going Through a Divorce? Sell Your Central Texas Home for Cash",
    metaTitle: "Sell Your House During Divorce in Central Texas | Sell to Josh",
    metaDescription: "Need to sell your home during a divorce in Central Texas? Get a fair cash offer and close quickly so both parties can move forward. No showings, no stress.",
    description: "Divorce is already difficult. Selling the house doesn't have to make it harder. Whether both parties agree to sell or a court has ordered the sale, we can make a fair cash offer and close quickly.",
    keywords: [
      "sell house during divorce Texas",
      "divorce home sale Central Texas",
      "sell marital home fast",
      "divorce property sale Killeen",
      "sell house divorce Fort Hood",
    ],
  },
];

export const situationData: Record<string, SituationData> = {
  foreclosure: {
    content: [
      "If you're behind on mortgage payments or have received a notice of default, I want you to know — you're not alone, and you have options. Texas is a non-judicial foreclosure state, which means the process can move quickly, sometimes in as few as 21 days after the notice is posted. That doesn't leave much time if you're trying to sell through a traditional listing.",
      "I've worked with many Central Texas homeowners in pre-foreclosure situations, and selling for cash is often one of the most practical ways to protect your equity and your credit. When you sell to me, we can close before the auction date in most cases. You walk away with the equity in your home rather than losing it to foreclosure, and we handle the paperwork and coordination with your lender.",
      "Every situation is different, and I'll be straightforward with you about your options. If a cash sale makes sense for your situation, I'll make a fair offer. If it doesn't, I'll tell you that too and point you toward resources that may help, including HUD-approved housing counselors in the Central Texas area.",
    ],
    scenarios: [
      "Behind on mortgage payments",
      "Received a notice of default or notice of sale",
      "Facing an upcoming auction date",
      "Owe more than expected on your mortgage",
      "Unable to refinance or modify your loan",
      "Dealing with an adjustable-rate mortgage increase",
      "Property tax liens adding to financial pressure",
      "Seeking to preserve your credit score",
    ],
    processSteps: [
      {
        number: 1,
        title: "Share Your Situation",
        description: "Call or fill out the form. Tell us about your property and timeline. Everything is confidential, and there's no obligation.",
      },
      {
        number: 2,
        title: "Get a Cash Offer",
        description: "We'll evaluate your property and present a fair cash offer within 24-48 hours. No repairs needed, no fees, no commissions.",
      },
      {
        number: 3,
        title: "Close Before the Auction",
        description: "Choose your closing date — we can often close in 7-14 days, well before most foreclosure auction dates. You walk away with your equity.",
      },
    ],
    faqs: [
      {
        question: "Can I sell my house if I'm in pre-foreclosure?",
        answer: "Yes. As long as you still hold title to the property, you have the right to sell it. In fact, selling during pre-foreclosure is one of the most common ways homeowners avoid losing their home at auction. We can work with your lender and timeline to close before the sale date.",
      },
      {
        question: "How does the Texas foreclosure timeline work?",
        answer: "Texas uses a non-judicial foreclosure process. After you miss payments, your lender files a notice of default and gives you at least 20 days to cure. If the default isn't cured, they can post a notice of sale, and the property can be sold at auction on the first Tuesday of the following month. The entire process can move in as few as 60 days from the first missed payment.",
      },
      {
        question: "Will selling my house stop the foreclosure?",
        answer: "Selling your house before the auction date pays off the existing mortgage and stops the foreclosure process. This can help preserve your credit compared to a completed foreclosure, which can remain on your credit report for up to seven years.",
      },
      {
        question: "What if I owe more than the house is worth?",
        answer: "If you owe more than the property's current market value, that's called being 'underwater.' In some cases, your lender may agree to a short sale, where they accept less than the full balance owed. We have experience navigating short sale negotiations and can help you explore this option.",
      },
      {
        question: "Do I need to pay anything to sell my house to you?",
        answer: "No. There are no fees, commissions, or closing costs when you sell to us. We cover all standard closing costs. You receive the net proceeds from the sale after your mortgage balance is paid off.",
      },
      {
        question: "What happens to my credit if I sell before foreclosure?",
        answer: "Selling before foreclosure is generally much better for your credit than a completed foreclosure. While missed payments will still appear on your credit report, a completed sale shows the mortgage was satisfied. This can make it easier to qualify for a new mortgage in the future.",
      },
    ],
    disclaimer: "The information on this page is for general informational purposes only and does not constitute legal or financial advice. If you are facing foreclosure, consult a licensed attorney or HUD-approved housing counselor for guidance specific to your situation.",
  },
  "inherited-property": {
    content: [
      "Inheriting a property is rarely simple. Along with the emotional weight of losing a loved one, you're suddenly responsible for property taxes, maintenance, insurance, and potentially a mortgage — sometimes on a house that's hundreds of miles away. I've helped many families in Central Texas navigate this process, and I understand how overwhelming it can be.",
      "Whether the house needs significant repairs, is full of decades of belongings, or has multiple heirs who need to agree on what to do, I can work with your situation. I buy inherited properties as-is — no need to clean out the house, make repairs, or go through a lengthy listing process. If the property is in probate, I can often work within that timeline too.",
      "My goal is to make this as simple as possible for you and your family. I'll give you a fair cash offer based on the property's condition and the local market, and we can close on whatever timeline works for your situation. There's no pressure and no obligation — just a straightforward option when you need one.",
    ],
    scenarios: [
      "Property inherited from parents or family members",
      "Estate going through the probate process",
      "Multiple heirs who need to agree on a sale",
      "Inherited home that needs major repairs",
      "Out-of-state owner managing a distant property",
      "House full of belongings that need to be dealt with",
      "Property with unpaid taxes or liens",
      "Inherited rental property with existing tenants",
    ],
    processSteps: [
      {
        number: 1,
        title: "Tell Us About the Property",
        description: "Share the basics — location, condition, and your situation. We'll walk you through the process and answer any questions about selling an inherited home.",
      },
      {
        number: 2,
        title: "Receive a Cash Offer",
        description: "We'll evaluate the property as-is and present a fair cash offer within 24-48 hours. No need to clean, repair, or prepare the home.",
      },
      {
        number: 3,
        title: "Close on Your Timeline",
        description: "Whether you need to close quickly or wait for probate to complete, we work with your schedule. We handle the paperwork and cover closing costs.",
      },
    ],
    faqs: [
      {
        question: "Do I need to go through probate before I can sell?",
        answer: "It depends on how the property was titled. If the property was held in a trust or had a transfer-on-death deed, probate may not be necessary. If probate is required, you'll typically need to be appointed as executor or administrator before you can sell. We can work within your probate timeline and have experience closing on properties in various stages of the process.",
      },
      {
        question: "Can I sell if there are multiple heirs?",
        answer: "Yes, but all heirs with ownership interest generally need to agree to the sale. If you're the executor of the estate, you may have authority to sell on behalf of the estate. We've worked with families where multiple siblings or relatives were involved, and we can help simplify the communication and paperwork.",
      },
      {
        question: "What if the house needs major repairs?",
        answer: "We buy properties in any condition — foundation issues, roof damage, water damage, outdated systems, you name it. There's no need to make any repairs before selling. We factor the property's current condition into our offer so you don't have to spend money fixing it up.",
      },
      {
        question: "Do I need to clean out the house before selling?",
        answer: "No. If you want to keep personal items or family heirlooms, you're welcome to. But anything you leave behind, we'll take care of. Many families find this is one of the biggest reliefs — not having to sort through and dispose of an entire household of belongings.",
      },
      {
        question: "What about property taxes or liens on the inherited home?",
        answer: "Outstanding property taxes and liens are typically paid from the sale proceeds at closing. We'll work with the title company to identify any obligations and ensure they're resolved as part of the transaction.",
      },
      {
        question: "What if there's still a mortgage on the property?",
        answer: "If the deceased had a mortgage, it doesn't disappear with inheritance. The remaining balance is paid off from the sale proceeds at closing. If the mortgage balance exceeds the property value, we can discuss options including working with the lender on the remaining balance.",
      },
    ],
    disclaimer: "The information on this page is for general informational purposes only and does not constitute legal or financial advice. If you have inherited a property, consult a licensed attorney or estate planning professional for guidance specific to your situation.",
  },
  "military-pcs": {
    content: [
      "Fort Hood (formerly Fort Cavazos) is home to thousands of military families, and I've had the privilege of working with hundreds of them over the years. When PCS orders come, the timeline is often measured in weeks, not months. Traditional home sales — with listings, showings, inspections, and buyer financing contingencies — simply don't fit that schedule.",
      "I understand the realities of military life. You might be dealing with a short reporting window, a spouse already at the new duty station, or the stress of coordinating a move across the country or overseas. A cash sale eliminates the uncertainty. There's no waiting for a buyer's financing to come through, no back-and-forth negotiations, and no risk of a deal falling through at the last minute.",
      "Whether your home is near Fort Hood in Killeen, Harker Heights, or Copperas Cove, I can make a fair cash offer and close on your schedule — even if that means closing in a week. I've worked with active duty, reserve, and veteran families, and I'll treat you and your service with the respect you deserve.",
    ],
    scenarios: [
      "PCS orders with a short reporting timeline",
      "Already relocated and need to sell remotely",
      "Dual-military family managing two relocations",
      "Home purchased with a VA loan",
      "Property has tenants and you need to sell",
      "Deploying and need the house handled before you leave",
      "Underwater on your mortgage after market changes",
      "Tired of managing a rental property from your new station",
    ],
    processSteps: [
      {
        number: 1,
        title: "Tell Us Your Timeline",
        description: "Share your PCS details and when you need to close. We work around military schedules and can accommodate tight reporting deadlines.",
      },
      {
        number: 2,
        title: "Get a Fast Cash Offer",
        description: "We'll evaluate your property and present a fair cash offer within 24-48 hours. No repairs, no staging, no open houses.",
      },
      {
        number: 3,
        title: "Close Before Your Report Date",
        description: "We can close in as few as 7 days. If you've already PCS'd, we can handle everything remotely — including a mobile notary at your new location.",
      },
    ],
    faqs: [
      {
        question: "Can you close before my PCS report date?",
        answer: "In most cases, yes. We can close in as few as 7 days once we have a signed agreement. If your timeline is tight, let us know your report date and we'll work backward from there to make sure everything is handled before you leave.",
      },
      {
        question: "What if I have a VA loan on the property?",
        answer: "Having a VA loan doesn't prevent you from selling. The loan is paid off from the sale proceeds at closing, just like any other mortgage. Once the VA loan is paid off, your VA entitlement is restored, allowing you to use it again at your next duty station.",
      },
      {
        question: "Do I need to be present at closing?",
        answer: "No. If you've already PCS'd, we can arrange for a mobile notary at your new location or handle the closing through a power of attorney, depending on what the title company requires. We've closed many transactions with sellers who were already at their new duty station.",
      },
      {
        question: "What if I owe more than the house is worth?",
        answer: "If you're underwater on your mortgage, you may still have options. In some cases, your lender may agree to a short sale. We can help you explore this option and navigate the process. It's worth having a conversation to understand what's possible.",
      },
      {
        question: "Can you help if I'm already at my new duty station?",
        answer: "Absolutely. Many of the military families we work with have already relocated by the time they contact us. We handle everything — from evaluating the property to coordinating with the title company — so you don't have to travel back.",
      },
      {
        question: "What about my BAH — will selling affect it?",
        answer: "Your BAH (Basic Allowance for Housing) is determined by your duty station and dependency status, not property ownership. Selling your home at your previous station should not affect your BAH at your new location. For specific questions about your benefits, your installation's housing office can provide guidance.",
      },
    ],
    disclaimer: "The information on this page is for general informational purposes only and does not constitute legal or financial advice. If you are navigating a PCS move, consult your installation's legal assistance office or a licensed financial advisor for guidance specific to your situation.",
  },
  divorce: {
    content: [
      "Divorce is one of the most stressful experiences a person can go through, and the family home is often at the center of it. Whether you and your spouse have agreed to sell, one of you needs to buy out the other, or a court has ordered the sale, the process of selling a home during a divorce adds complexity to an already difficult time.",
      "Texas is a community property state, which means assets acquired during the marriage — including real estate — are generally considered jointly owned. Selling the home for cash can simplify the division of assets by converting the property into liquid funds that can be split according to your agreement or court order. There are no showings, no strangers walking through your home, and no months of waiting.",
      "I've worked with many families going through divorce, and I approach every situation with discretion and respect. My goal is to make the home sale the easiest part of a difficult process. I'll make a fair offer, close on your timeline, and work with both parties and their attorneys to ensure everything is handled properly.",
    ],
    scenarios: [
      "Both spouses agree to sell the home",
      "One spouse needs to buy out the other",
      "Court-ordered sale of the marital home",
      "Need to sell before the divorce is finalized",
      "Maintaining two households is financially difficult",
      "Property has deferred maintenance or damage",
      "One spouse has already moved out",
      "Complex title situations with both names on the deed",
    ],
    processSteps: [
      {
        number: 1,
        title: "Contact Us Confidentially",
        description: "Reach out by phone or form. Everything is confidential. Let us know your situation and we'll explain how the process works.",
      },
      {
        number: 2,
        title: "Receive a Fair Cash Offer",
        description: "We'll evaluate the property and present an offer within 24-48 hours. Both parties can review the offer with their attorneys.",
      },
      {
        number: 3,
        title: "Close and Move Forward",
        description: "Once both parties agree, we close on your schedule. Proceeds are distributed according to your agreement or court order.",
      },
    ],
    faqs: [
      {
        question: "Do both spouses need to agree to sell?",
        answer: "Generally, yes. In Texas, both spouses typically need to sign off on the sale of community property. However, if a court has ordered the sale as part of the divorce proceedings, that order provides the legal authority to proceed. We recommend working with your attorney to determine the appropriate process for your situation.",
      },
      {
        question: "What if one spouse won't agree to sell?",
        answer: "If one spouse is unwilling to sell, the other spouse can petition the court to order a sale as part of the divorce proceedings. Once a court order is in place, the sale can move forward. We can work within the legal framework your attorneys establish.",
      },
      {
        question: "Can you close before the divorce is final?",
        answer: "In many cases, yes. Selling the home before the divorce is finalized can simplify the process. The proceeds can be held in escrow or distributed according to a temporary agreement. Your attorney can advise on the best approach for your specific situation.",
      },
      {
        question: "How are the proceeds divided?",
        answer: "The division of sale proceeds is determined by your divorce agreement or court order, not by us. At closing, the title company distributes the funds according to the instructions provided by both parties and their attorneys.",
      },
      {
        question: "What if there's a lien or second mortgage on the property?",
        answer: "All liens and mortgages are paid from the sale proceeds at closing. The title company will identify any outstanding obligations during the title search and ensure they're resolved before distributing the remaining proceeds.",
      },
      {
        question: "Can we sell if the house needs repairs?",
        answer: "Yes. We buy homes in any condition. During a divorce, the last thing you want to deal with is coordinating repairs on a property both parties want to move on from. We'll make an offer based on the home's current condition — no repairs needed.",
      },
    ],
    disclaimer: "The information on this page is for general informational purposes only and does not constitute legal or financial advice. If you are going through a divorce, consult a licensed family law attorney for guidance specific to your situation.",
  },
};
