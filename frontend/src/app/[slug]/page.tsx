import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
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
  return (
    <main id="main-content" tabIndex={-1} className="content-width coming-soon">
      <p className="eyebrow">InCIT 2027</p>
      <h1>{page.label}</h1>
      <h2>Coming soon</h2>
      <p>This page is currently under development.</p>
      <Link className="text-link" href="/">Back to Home <span aria-hidden="true">→</span></Link>
    </main>
  );
}
