'use client';

import Image from 'next/image';
import { X } from 'lucide-react';
import { Button } from './ui/button';
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogClose } from './ui/dialog';

export function FloorPlanPreview({ src, width, height, index }: { src: string; width: number; height: number; index: number }) {
  const title = `Floor plan ${index + 1}`;
  const alt = `Floor plan placeholder ${index + 1}`;
  return <Dialog>
    <DialogTrigger asChild>
      <button type="button" className="floor-plan-image" aria-label={`View ${title.toLowerCase()}`}>
        <Image src={src} width={width} height={height} alt={alt} unoptimized />
      </button>
    </DialogTrigger>
    <DialogContent variant="poster" showCloseButton={false} aria-describedby={undefined}>
      <DialogTitle className="sr-only">{title}</DialogTitle>
      <div className="cfp-viewer-toolbar">
        <DialogClose asChild><Button variant="secondary" size="hero" aria-label="Close floor plan"><X aria-hidden="true" /><span className="sr-only">Close</span></Button></DialogClose>
      </div>
      <Image className="cfp-viewer-image" src={src} width={width} height={height} alt={alt} unoptimized />
    </DialogContent>
  </Dialog>;
}
