import type { FC } from "react";

const BrandStory: FC = () => {
  return (
    <section aria-labelledby="brand-story-heading" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Left: Brand Image Placeholder */}
          <div className="w-full md:w-1/2 flex-shrink-0">
            <div
              className="bg-gray-200 rounded-[12px] w-full aspect-[4/3] flex items-center justify-center"
              aria-label="Brand image placeholder"
              role="img"
            >
              <span className="text-gray-500 text-sm font-medium tracking-wide">
                Brand Image
              </span>
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="w-full md:w-1/2 flex flex-col gap-5">
            <h2
              id="brand-story-heading"
              className="font-heading text-3xl md:text-4xl font-bold text-secondary leading-tight"
            >
              Our Story
            </h2>

            <p className="text-text-light text-sm font-medium uppercase tracking-widest">
              Founded 2021 · Southeast Asia
            </p>

            <p className="text-text text-base md:text-lg leading-relaxed">
              The name <strong>Simplus</strong> is rooted in a simple idea:{" "}
              <strong>Simple + Plus</strong>. We believe everyday products
              should be beautifully simple in design, while delivering plus
              value — more quality, more thoughtfulness, more life for your
              money.
            </p>

            <p className="text-text text-base md:text-lg leading-relaxed">
              Born in Southeast Asia and built for modern living, Simplus
              started with a conviction that a good life should not come at
              a premium price. Every product we bring to you is chosen with
              that promise in mind.
            </p>

            <div className="flex flex-col gap-1">
              <p
                className="font-heading text-xl md:text-2xl font-semibold text-secondary"
                lang="zh"
              >
                美好生活，好用不贵
              </p>
              <p className="text-text-light text-base italic">
                &ldquo;Good Life, Great Value&rdquo;
              </p>
            </div>

            <div className="pt-2">
              <a
                href="/about"
                className="inline-block bg-accent hover:bg-accent-dark text-white font-semibold text-sm px-6 py-3 rounded-[8px] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
