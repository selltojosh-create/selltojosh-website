import { Metadata } from 'next';
import Link from 'next/link';
import ReelsCarousel from '@/components/ReelsCarousel';
import { reels as staticReels } from '@/data/reels';
import { getAllReels, getPageBySlug } from '../../../sanity/lib/fetch';

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getPageBySlug('reels');

  return {
    title: pageData?.metaTitle || 'Video Reels | Learn About Selling Your House for Cash',
    description: pageData?.metaDescription || 'Watch our videos to learn about selling your Central Texas home for cash. Tips on inherited properties, foreclosure, selling as-is, and more.',
    openGraph: {
      title: pageData?.metaTitle || 'Video Reels | Learn About Selling Your House for Cash',
      description: pageData?.metaDescription || 'Watch our videos to learn about selling your Central Texas home for cash.',
    },
  };
}

// Video placeholder component for Coming Soon state
function VideoPlaceholder({ title }: { title: string }) {
  return (
    <div className="aspect-video bg-gradient-to-br from-navy to-navy-dark flex flex-col items-center justify-center text-white">
      <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4">
        <svg className="w-8 h-8 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      </div>
      <p className="text-lg font-semibold mb-1">Video Coming Soon</p>
      <p className="text-gray-400 text-sm text-center px-4">{title}</p>
    </div>
  );
}

export default async function ReelsPage() {
  const sanityReels = await getAllReels();

  // Use Sanity reels or fall back to static
  const reels = sanityReels.length > 0
    ? sanityReels.map((r, index) => ({
        id: r._id || String(index + 1),
        title: r.title,
        description: r.description || '',
        youtubeId: r.youtubeId || '',
      }))
    : staticReels;

  // Check if we have any real videos (with actual YouTube IDs)
  const hasRealVideos = reels.some(reel => reel.youtubeId && reel.youtubeId.length > 0);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy to-navy-dark text-white py-16 md:py-20">
        <div className="container-custom mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Watch & Learn
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {hasRealVideos
              ? "Videos about selling your home for cash, dealing with inherited properties, avoiding foreclosure, and more."
              : "We're creating helpful videos about selling your home for cash. Check back soon!"}
          </p>
        </div>
      </section>

      {/* Carousel Section - only show if we have real videos */}
      {hasRealVideos && (
        <section className="section-padding">
          <div className="container-custom mx-auto">
            <ReelsCarousel reels={reels.filter(r => r.youtubeId)} />
          </div>
        </section>
      )}

      {/* All Videos Grid */}
      <section className="section-padding bg-gray-light">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              {hasRealVideos ? "All Videos" : "Videos Coming Soon"}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {hasRealVideos
                ? "Browse our full video library below."
                : "We're working on creating helpful videos for homeowners. Here's what's in the works:"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reels.map((reel) => (
              <article key={reel.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="relative">
                  {reel.youtubeId ? (
                    <div className="aspect-video">
                      <iframe
                        src={`https://www.youtube.com/embed/${reel.youtubeId}`}
                        title={reel.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <VideoPlaceholder title={reel.title} />
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy mb-2">
                    {reel.title}
                  </h3>
                  <p className="text-gray-600">
                    {reel.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-orange to-coral text-navy">
        <div className="container-custom mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {hasRealVideos ? "Have Questions After Watching?" : "Can't Wait for the Videos?"}
          </h2>
          <p className="text-xl mb-8 text-navy/80">
            {hasRealVideos
              ? "Get in touch. We're happy to answer any questions about selling your home."
              : "No need to wait — reach out now and we'll walk you through everything personally."}
          </p>
          <Link href="/contact" className="bg-navy hover:bg-navy-dark text-white font-bold py-3 px-8 rounded-lg transition-colors text-lg inline-block">
            Get My Cash Offer
          </Link>
        </div>
      </section>
    </>
  );
}
