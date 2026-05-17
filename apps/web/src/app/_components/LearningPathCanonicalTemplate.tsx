import React from 'react';

/**
 * Canonical Learning Path Page Template
 *
 * Follows encyclopaedic, academic, and SEO best practices.
 * All sections are present as placeholders for rich content.
 * Use this as the base for all learning path pages.
 */
export default function LearningPathCanonicalTemplate({
  metadata,
  children,
}: {
  metadata: {
    title: string;
    domain?: string;
    tradition?: string;
    difficulty?: string;
    prerequisites?: string[];
    [key: string]: any;
  };
  children?: React.ReactNode;
}) {
  return (
    <article className="canonical-learning-path-page">
      {/* I. Metadata Panel */}
      <section className="metadata-panel border p-4 mb-6">
        <h1 className="text-4xl font-serif mb-2">{metadata.title}</h1>
        <ul className="text-xs text-muted-foreground">
          {metadata.domain && <li>Domain: {metadata.domain}</li>}
          {metadata.tradition && <li>Tradition: {metadata.tradition}</li>}
          {metadata.difficulty && <li>Difficulty: {metadata.difficulty}</li>}
          {metadata.prerequisites && metadata.prerequisites.length > 0 && (
            <li>Prerequisites: {metadata.prerequisites.join(', ')}</li>
          )}
        </ul>
      </section>

      {/* II. Overview */}
      <section className="overview mb-8">
        <h2 className="text-2xl font-serif mb-2">Overview</h2>
        <p className="text-base text-muted-foreground">{/* TODO: Add summary/abstract */}</p>
      </section>

      {/* III. Learning Objectives */}
      <section className="learning-objectives mb-8">
        <h2 className="text-2xl font-serif mb-2">Learning Objectives</h2>
        <p className="text-base text-muted-foreground">{/* TODO: Add objectives, outcomes */}</p>
      </section>

      {/* IV. Path Structure / Milestones */}
      <section className="path-structure mb-8">
        <h2 className="text-2xl font-serif mb-2">Path Structure / Milestones</h2>
        <p className="text-base text-muted-foreground">{/* TODO: Add modules, steps, progression */}</p>
      </section>

      {/* V. Key Readings & Resources */}
      <section className="key-readings mb-8">
        <h2 className="text-2xl font-serif mb-2">Key Readings & Resources</h2>
        <p className="text-base text-muted-foreground">{/* TODO: Add books, articles, media */}</p>
      </section>

      {/* VI. Assessment & Self-Check */}
      <section className="assessment mb-8">
        <h2 className="text-2xl font-serif mb-2">Assessment & Self-Check</h2>
        <p className="text-base text-muted-foreground">{/* TODO: Add quizzes, self-checks, review prompts */}</p>
      </section>

      {/* VII. Related Paths / Topics (Accordion/Tab) */}
      <section className="related-topics mb-8">
        <h2 className="text-2xl font-serif mb-2">Related Paths / Topics</h2>
        <p className="text-base text-muted-foreground">{/* TODO: Add internal links, further reading, timelines */}</p>
      </section>

      {/* VIII. References */}
      <section className="references mb-8">
        <h2 className="text-2xl font-serif mb-2">References</h2>
        <ul className="text-sm text-muted-foreground list-disc ml-6">
          {/* TODO: Add formal citations */}
        </ul>
      </section>

      {/* IX. Further Reading (Accordion/Tab) */}
      <section className="further-reading mb-8">
        <h2 className="text-2xl font-serif mb-2">Further Reading</h2>
        <ul className="text-sm text-muted-foreground list-disc ml-6">
          {/* TODO: Add exploratory resources */}
        </ul>
      </section>

      {/* X. Revision / Version History */}
      <section className="revision-history mb-8">
        <h2 className="text-2xl font-serif mb-2">Revision / Version History</h2>
        <p className="text-xs text-muted-foreground">{/* TODO: Add created, updated, contributors, review status, version */}</p>
      </section>

      {/* Custom content or children */}
      {children}
    </article>
  );
}
