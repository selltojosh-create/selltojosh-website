export interface Reel {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
}

// Placeholder reels - these will be replaced when real videos are added via Sanity CMS
// When youtubeId is empty, a "Coming Soon" placeholder will display
export const reels: Reel[] = [
  {
    id: "1",
    title: "Why Sell Your House for Cash?",
    description: "Learn the benefits of selling your home directly to a cash buyer without the hassle of traditional listings.",
    youtubeId: "" // Coming Soon - add real video ID via Sanity CMS
  },
  {
    id: "2",
    title: "Our Simple 3-Step Process",
    description: "See how easy it is to sell your Central Texas home in just three simple steps.",
    youtubeId: "" // Coming Soon - add real video ID via Sanity CMS
  },
  {
    id: "3",
    title: "Selling an Inherited Property",
    description: "Dealing with an inherited home? Here's how we can help you sell quickly and stress-free.",
    youtubeId: "" // Coming Soon - add real video ID via Sanity CMS
  },
  {
    id: "4",
    title: "Avoiding Foreclosure in Texas",
    description: "If you're facing foreclosure, learn how selling for cash can help you protect your credit.",
    youtubeId: "" // Coming Soon - add real video ID via Sanity CMS
  }
];
