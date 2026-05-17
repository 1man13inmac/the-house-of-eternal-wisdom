import React from 'react';

/**
 * Canonical Historical Figure Page Template
 *
 * Follows encyclopaedic, academic, and SEO best practices.
 * All sections are present as placeholders for rich content.
 * Use this as the base for all historical figure pages.
 */
export default function FigureCanonicalTemplate({
  metadata,
  children,
}: {
  metadata: {
    name: string;
    alternativeNames?: string[];
    dates?: string;
    region?: string;
    field?: string;
    tradition?: string;
    knownFor?: string;
    [key: string]: any;
  };
  children?: React.ReactNode;
}) {
  return (
    <article className="canonical-figure-page">
      {/* I. Metadata Panel */}
      <section className="metadata-panel border p-4 mb-6">
        <h1 className="text-4xl font-serif mb-2">{metadata.name}</h1>
        {metadata.alternativeNames && (
          <p className="text-xs mb-1">Also known as: {metadata.alternativeNames.join(', ')}</p>
        )}
        <ul className="text-xs text-muted-foreground">
          {metadata.dates && <li>Lifespan: {metadata.dates}</li>}
          {metadata.region && <li>Region: {metadata.region}</li>}
          {metadata.field && <li>Field: {metadata.field}</li>}
          {metadata.tradition && <li>Tradition: {metadata.tradition}</li>}
          {metadata.knownFor && <li>Known for: {metadata.knownFor}</li>}
        </ul>
      </section>

      {/* II. Overview / Significance */}
      <section className="overview mb-8">
        <h2 className="text-2xl font-serif mb-2">Overview / Significance</h2>
        <p className="text-base text-muted-foreground">{/* TODO: Add summary/abstract */}</p>
      </section>

      {/* III. Biography / Timeline */}
      <section className="biography mb-8">
        <h2 className="text-2xl font-serif mb-2">Biography / Timeline</h2>
        <p className="text-base text-muted-foreground">{/* TODO: Add life events, chronology */}</p>
      </section>

      {/* IV. Major Works / Contributions */}
      <section className="major-works mb-8">
        <h2 className="text-2xl font-serif mb-2">Major Works / Contributions</h2>
        <p className="text-base text-muted-foreground">{/* TODO: Add works, inventions, texts, discoveries */}</p>
      </section>

      {/* V. Philosophy / Teachings */}
      <section className="philosophy-teachings mb-8">
        <h2 className="text-2xl font-serif mb-2">Philosophy / Teachings</h2>
        <p className="text-base text-muted-foreground">{/* TODO: Add core ideas, teachings, doctrines */}</p>
      </section>

      {/* VI. Historical Context */}
      <section className="historical-context mb-8">
        <h2 className="text-2xl font-serif mb-2">Historical Context</h2>
        <p className="text-base text-muted-foreground">{/* TODO: Add context, contemporaries, influences */}</p>
      </section>

      {/* VII. Legacy & Influence */}
      <section className="legacy-influence mb-8">
        <h2 className="text-2xl font-serif mb-2">Legacy & Influence</h2>
        <p className="text-base text-muted-foreground">{/* TODO: Add impact, followers, schools, modern relevance */}</p>
      </section>

      {/* VIII. Related Figures / Topics (Accordion/Tab) */}
      <section className="related-topics mb-8">
        <h2 className="text-2xl font-serif mb-2">Related Figures / Topics</h2>
        <p className="text-base text-muted-foreground">{/* TODO: Add internal links, further reading, timelines */}</p>
      </section>

      {/* IX. Primary Sources */}
      <section className="primary-sources mb-8">
        <h2 className="text-2xl font-serif mb-2">Primary Sources</h2>
        <p className="text-base text-muted-foreground">{/* TODO: Add texts, letters, archaeological evidence */}</p>
      </section>

      {/* X. Scholarly Debates */}
      <section className="scholarly-debates mb-8">
        <h2 className="text-2xl font-serif mb-2">Scholarly Debates</h2>
        <p className="text-base text-muted-foreground">{/* TODO: Add controversies, uncertainties, competing theories */}</p>
      </section>

      {/* XI. References */}
      <section className="references mb-8">
        <h2 className="text-2xl font-serif mb-2">References</h2>
        <ul className="text-sm text-muted-foreground list-disc ml-6">
          {/* TODO: Add formal citations */}
        </ul>
      </section>

      {/* XII. Further Reading (Accordion/Tab) */}
      <section className="further-reading mb-8">
        <h2 className="text-2xl font-serif mb-2">Further Reading</h2>
        <ul className="text-sm text-muted-foreground list-disc ml-6">
          {/* TODO: Add exploratory resources */}
        </ul>
      </section>

      {/* XIII. Revision / Version History */}
      <section className="revision-history mb-8">
        <h2 className="text-2xl font-serif mb-2">Revision / Version History</h2>
        <p className="text-xs text-muted-foreground">{/* TODO: Add created, updated, contributors, review status, version */}</p>
      </section>

      {/* Custom content or children */}
      {children}
    </article>
  );
}
