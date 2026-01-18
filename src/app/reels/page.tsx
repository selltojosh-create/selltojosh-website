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

export default async function ReelsPage() {
  const sanityReels = await getAllReels();

  // Use Sanity reels or fall back to static
  const reels = sanityReels.length > 0
    ? sanityReels.map((r, index) => ({
        id: r._id || String(index + 1),
        title: r.title,
        description: r.description || '',
        youtubeId: r.youtubeId,
      }))
    : staticReels;

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy to-navy-dark text-white py-16 md:py-20">
        <div className="container-custom mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Watch & Learn
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Videos about selling your home for cash, dealing with inherited properties, avoiding foreclosure, and more.
          </p>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <ReelsCarousel reels={reels} />
        </div>
      </section>

      {/* All Videos Grid */}
      <section className="section-padding bg-gray-light">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              All Videos
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Browse our full video library below.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reels.map((reel) => (
              <article key={reel.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="aspect-video relative">
                  <iframe
                    src={`https://www.youtube.com/embed/${reel.youtubeId}`}
                    title={reel.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                    loading="lazy"
                  />
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
            Have Questions After Watching?
          </h2>
          <p className="text-xl mb-8 text-navy/80">
            Get in touch. We&apos;re happy to answer any questions about selling your home.
          </p>
          <Link href="/contact" className="bg-navy hover:bg-navy-dark text-white font-bold py-3 px-8 rounded-lg transition-colors text-lg inline-block">
            Get My Cash Offer
          </Link>
        </div>
      </section>
    </>
  );
}
