'use client';

import Image from 'next/image';
import { Download, X } from 'lucide-react';
import { PageHeader } from './page-header';
import { Button } from './ui/button';
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogClose } from './ui/dialog';

// Replace both assets when the owner supplies the official poster and PDF.
const poster = {
  src: '/images/call-for-papers-placeholder.svg',
  pdf: '/downloads/call-for-papers-placeholder.pdf',
  filename: 'incit-2027-call-for-papers-placeholder.pdf',
};

export function CallForPapers() {
  return <main id="main-content" tabIndex={-1}>
    <PageHeader title="Call for Papers" pageKey="call-for-papers" />
    <div className="content-width cfp-layout">
      <p className="draft-note cfp-note">Placeholder image and PDF. Replace with the official Call for Papers files.</p>
      <Dialog>
        <DialogTrigger asChild>
          <button type="button" className="cfp-preview" aria-label="View Call for Papers poster">
            <Image src={poster.src} alt="Call for Papers image placeholder" width={1000} height={1414} unoptimized loading="eager" />
          </button>
        </DialogTrigger>
        <DialogContent variant="poster" showCloseButton={false} aria-describedby={undefined}>
          <DialogTitle className="sr-only">Call for Papers poster</DialogTitle>
          <div className="cfp-viewer-toolbar">
            <Button asChild variant="secondary" size="hero"><a href={poster.pdf} download={poster.filename}><Download aria-hidden="true" data-icon="inline-start" />Download PDF</a></Button>
            <DialogClose asChild><Button variant="secondary" size="hero" aria-label="Close poster"><X aria-hidden="true" /><span className="sr-only">Close</span></Button></DialogClose>
          </div>
          <Image className="cfp-viewer-image" src={poster.src} alt="Call for Papers image placeholder" width={1000} height={1414} unoptimized />
        </DialogContent>
      </Dialog>
      <div className="cfp-download">
        <Button asChild variant="conference" size="hero"><a href={poster.pdf} download={poster.filename}><Download aria-hidden="true" data-icon="inline-start" />Download PDF</a></Button>
      </div>
    </div>
  </main>;
}
