import React from 'react';

/**
 * Canonical Civilisation Page Template
 *
 * Follows encyclopaedic, academic, and SEO best practices.
 * All sections are present as placeholders for rich content.
 * Use this as the base for all civilization pages.
 */
export default function CivilizationCanonicalTemplate({
  metadata,
  children,
}: {
  metadata: {
    name: string;
    alternativeNames?: string[];
    region?: string;
    era?: string;
    language?: string;
    classification?: string;
    knowledgeDomains?: string[];
    preservationStatus?: string;
    [key: string]: any;
  };
  children?: React.ReactNode;
}) {
  return (
    <article className="canonical-civilization-page">
      {/* I. Identity & Metadata */}
      <section className="metadata-panel border p-4 mb-6">
        <h1 className="text-4xl font-serif mb-2">{metadata.name}</h1>
        {metadata.alternativeNames && (
          <p className="text-xs mb-1">Also known as: {metadata.alternativeNames.join(', ')}</p>
        )}
        <ul className="text-xs text-muted-foreground">
          {metadata.region && <li>Region: {metadata.region}</li>}
          {metadata.era && <li>Era: {metadata.era}</li>}
          {metadata.language && <li>Language: {metadata.language}</li>}
          {metadata.classification && <li>Classification: {metadata.classification}</li>}
          {metadata.knowledgeDomains && <li>Knowledge Domains: {metadata.knowledgeDomains.join(', ')}</li>}
          {metadata.preservationStatus && <li>Preservation Status: {metadata.preservationStatus}</li>}
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
        <p className="text-base text-muted-foreground">{/* TODO: Add origins, timeline, major events */}</p>
      </section>

      {/* IV. Geography & Environment */}
      <section className="geography-environment mb-8">
        <h2 className="text-2xl font-serif mb-2">Geography & Environment</h2>
        <p className="text-base text-muted-foreground">{/* TODO: Add region, climate, ecology, resources */}</p>
      </section>

      {/* V. Society & Governance */}
      <section className="society-governance mb-8">
        <h2 className="text-2xl font-serif mb-2">Society & Governance</h2>
        <p className="text-base text-muted-foreground">{/* TODO: Add social structure, law, leadership */}</p>
      </section>

      {/* VI. Economy & Material Life */}
      <section className="economy-material mb-8">
        <h2 className="text-2xl font-serif mb-2">Economy & Material Life</h2>
        <p className="text-base text-muted-foreground">{/* TODO: Add agriculture, trade, technology */}</p>
      </section>

      {/* VII. Language & Communication */}
      <section className="language-communication mb-8">
        <h2 className="text-2xl font-serif mb-2">Language & Communication</h2>
        <p className="text-base text-muted-foreground">{/* TODO: Add spoken/written language, scripts */}</p>
      </section>

      {/* VIII. Belief, Philosophy & Cosmology */}
      <section className="belief-philosophy mb-8">
        <h2 className="text-2xl font-serif mb-2">Belief, Philosophy & Cosmology</h2>
        <p className="text-base text-muted-foreground">{/* TODO: Add worldview, ethics, cosmology */}</p>
      </section>

      {/* IX. Knowledge Systems & Science */}
      <section className="knowledge-systems mb-8">
        <h2 className="text-2xl font-serif mb-2">Knowledge Systems & Science</h2>
        <p className="text-base text-muted-foreground">{/* TODO: Add medicine, astronomy, mathematics, etc. */}</p>
      </section>

      {/* X. Arts & Cultural Expression */}
      <section className="arts-culture mb-8">
        <h2 className="text-2xl font-serif mb-2">Arts & Cultural Expression</h2>
        <p className="text-base text-muted-foreground">{/* TODO: Add music, dance, literature, symbolism */}</p>
      </section>

      {/* XI. Primary Sources & Evidence */}
      <section className="primary-sources mb-8">
        <h2 className="text-2xl font-serif mb-2">Primary Sources & Evidence</h2>
        <p className="text-base text-muted-foreground">{/* TODO: Add inscriptions, manuscripts, archaeology */}</p>
      </section>

      {/* XII. Scholarly Debates & Uncertainties */}
      <section className="scholarly-debates mb-8">
        <h2 className="text-2xl font-serif mb-2">Scholarly Debates & Uncertainties</h2>
        <p className="text-base text-muted-foreground">{/* TODO: Add consensus, competing theories, evidence gaps */}</p>
      </section>

      {/* XIII. Legacy & Influence */}
      <section className="legacy-influence mb-8">
        <h2 className="text-2xl font-serif mb-2">Legacy & Influence</h2>
        <p className="text-base text-muted-foreground">{/* TODO: Add descendants, influence, modern continuity */}</p>
      </section>

      {/* XIV. Related Topics (Accordion/Tab) */}
      <section className="related-topics mb-8">
        <h2 className="text-2xl font-serif mb-2">Related Topics</h2>
        <p className="text-base text-muted-foreground">{/* TODO: Add internal links, further reading, timelines */}</p>
      </section>

      {/* XV. Preservation & Contemporary Relevance */}
      <section className="preservation-relevance mb-8">
        <h2 className="text-2xl font-serif mb-2">Preservation & Contemporary Relevance</h2>
        <p className="text-base text-muted-foreground">{/* TODO: Add endangered knowledge, preservation efforts */}</p>
      </section>

      {/* XVI. References */}
      <section className="references mb-8">
        <h2 className="text-2xl font-serif mb-2">References</h2>
        <ul className="text-sm text-muted-foreground list-disc ml-6">
          {/* TODO: Add formal citations */}
        </ul>
      </section>

      {/* XVII. Further Reading (Accordion/Tab) */}
      <section className="further-reading mb-8">
        <h2 className="text-2xl font-serif mb-2">Further Reading</h2>
        <ul className="text-sm text-muted-foreground list-disc ml-6">
          {/* TODO: Add exploratory resources */}
        </ul>
      </section>

      {/* XVIII. Revision / Version History */}
      <section className="revision-history mb-8">
        <h2 className="text-2xl font-serif mb-2">Revision / Version History</h2>
        <p className="text-xs text-muted-foreground">{/* TODO: Add created, updated, contributors, review status, version */}</p>
      </section>

      {/* Custom content or children */}
      {children}
    </article>
  );
}
