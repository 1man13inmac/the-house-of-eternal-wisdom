import React from 'react';

/**
 * Canonical Topic/Philosophy/Concept Page Template
 *
 * Follows encyclopaedic, academic, and SEO best practices.
 * All sections are present as placeholders for rich content.
 * Use this as the base for all topic/philosophy/concept pages.
 */
export default function TopicCanonicalTemplate({
  metadata,
  children,
}: {
  metadata: {
    title: string;
    alternativeNames?: string[];
    domain?: string;
    tradition?: string;
    relatedFigures?: string[];
    relatedCivilizations?: string[];
    [key: string]: any;
  };
  children?: React.ReactNode;
}) {
  return (
    <article className="canonical-topic-page">
      {/* I. Metadata Panel */}
      <section className="metadata-panel border p-4 mb-6">
        <h1 className="text-4xl font-serif mb-2">{metadata.title}</h1>
        {metadata.alternativeNames && (
          <p className="text-xs mb-1">Also known as: {metadata.alternativeNames.join(', ')}</p>
        )}
        <ul className="text-xs text-muted-foreground">
          {metadata.domain && <li>Domain: {metadata.domain}</li>}
          {metadata.tradition && <li>Tradition: {metadata.tradition}</li>}
          {metadata.relatedFigures && <li>Related Figures: {metadata.relatedFigures.join(', ')}</li>}
          {metadata.relatedCivilizations && <li>Related Civilizations: {metadata.relatedCivilizations.join(', ')}</li>}
        </ul>
      </section>

      {/* II. Executive Overview */}
      <section className="overview mb-8">
        <h2 className="text-2xl font-serif mb-2">Overview</h2>
        <p className="text-base text-muted-foreground">{/* TODO: Add summary/abstract */}</p>
      </section>

      {/* III. Historical Context */}
      <section className="historical-context mb-8">
        <h2 className="text-2xl font-serif mb-2">Historical Context</h2>
        <p className="text-base text-muted-foreground">{/* TODO: Add origins, development, key periods */}</p>
      </section>

      {/* IV. Main Subject Sections */}
      <section className="main-subject mb-8">
        <h2 className="text-2xl font-serif mb-2">Main Subject Sections</h2>
        <p className="text-base text-muted-foreground">{/* TODO: Add beliefs, practices, schools, etc. */}</p>
      </section>

      {/* V. Interpretations / Variations / Schools */}
      <section className="interpretations mb-8">
        <h2 className="text-2xl font-serif mb-2">Interpretations / Variations / Schools</h2>
        <p className="text-base text-muted-foreground">{/* TODO: Add interpretations, schools, variations */}</p>
      </section>

      {/* VI. Impact / Legacy / Influence */}
      <section className="impact-legacy mb-8">
        <h2 className="text-2xl font-serif mb-2">Impact / Legacy / Influence</h2>
        <p className="text-base text-muted-foreground">{/* TODO: Add influence, descendants, modern relevance */}</p>
      </section>

      {/* VII. Evidence / Scholarship */}
      <section className="evidence-scholarship mb-8">
        <h2 className="text-2xl font-serif mb-2">Evidence / Scholarship</h2>
        <p className="text-base text-muted-foreground">{/* TODO: Add primary/secondary sources, debates */}</p>
      </section>

      {/* VIII. Related Topics (Accordion/Tab) */}
      <section className="related-topics mb-8">
        <h2 className="text-2xl font-serif mb-2">Related Topics</h2>
        <p className="text-base text-muted-foreground">{/* TODO: Add internal links, further reading, timelines */}</p>
      </section>

      {/* IX. References */}
      <section className="references mb-8">
        <h2 className="text-2xl font-serif mb-2">References</h2>
        <ul className="text-sm text-muted-foreground list-disc ml-6">
          {/* TODO: Add formal citations */}
        </ul>
      </section>

      {/* X. Further Reading (Accordion/Tab) */}
      <section className="further-reading mb-8">
        <h2 className="text-2xl font-serif mb-2">Further Reading</h2>
        <ul className="text-sm text-muted-foreground list-disc ml-6">
          {/* TODO: Add exploratory resources */}
        </ul>
      </section>

      {/* XI. Revision / Version History */}
      <section className="revision-history mb-8">
        <h2 className="text-2xl font-serif mb-2">Revision / Version History</h2>
        <p className="text-xs text-muted-foreground">{/* TODO: Add created, updated, contributors, review status, version */}</p>
      </section>

      {/* Custom content or children */}
      {children}
    </article>
  );
}
