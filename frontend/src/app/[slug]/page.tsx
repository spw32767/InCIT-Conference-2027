import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SubmissionGuidelines } from '../../components/submission-guidelines';
import { PageHeader } from '../../components/page-header';
import { ReferencePage, referencePages } from '../../components/reference-page';
import '../submission.css';
import '../secondary-pages.css';
import { placeholderPages } from '../../lib/navigation';

export const dynamicParams = false;

export function generateStaticParams() {
  return placeholderPages.map((page) => ({ slug: page.href.slice(1) }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = placeholderPages.find((item) => item.href === `/${slug}`);
  return { title: `${page?.label ?? 'Page not found'} | InCIT 2027`, robots: { index: false, follow: true } };
}

export default async function ComingSoonPage({ params }: Props) {
  const { slug } = await params;
  const page = placeholderPages.find((item) => item.href === `/${slug}`);
  if (!page) notFound();
  if (slug === 'submission-guidelines') return <SubmissionGuidelines />;
  const reference = referencePages.find(item => item.slug === slug);
  if (reference) return <ReferencePage content={reference} />;
  return (
    <main id="main-content" tabIndex={-1}>
      <PageHeader title={page.label} pageKey={slug} />
      <div className="content-width secondary-placeholder">
      <h2 className="draft-note">Coming soon</h2>
      <p className="draft-note">This page is currently under development.</p>
      <Link className="text-link" href="/">Back to Home <span aria-hidden="true">→</span></Link>
      </div>
    </main>
  );
}
