'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X, Expand } from 'lucide-react';
import { Button } from './ui/button';
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogClose } from './ui/dialog';

export type VenueImage = {src:string; width:number; height:number};

export function VenueGallery({title, images}: {title:string; images:VenueImage[]}) {
  const [selected, setSelected] = useState(0);
  const photo = images[selected];
  const move = (direction:number) => setSelected(index => (index + direction + images.length) % images.length);
  return <div className="venue-gallery">
    <Dialog>
      <DialogTrigger asChild>
        <button className="venue-photo" type="button" aria-label={`Enlarge ${title} photo ${selected + 1}`}>
          <Image src={photo.src} alt={`${title} — photo ${selected + 1}`} width={photo.width} height={photo.height} sizes="(max-width: 900px) 100vw, 420px" />
          <span className="venue-photo-expand" aria-hidden="true"><Expand size={18} /></span>
        </button>
      </DialogTrigger>
      <DialogContent variant="poster" className="venue-viewer" showCloseButton={false} aria-describedby={undefined} onKeyDown={event => {
        if(event.key === 'ArrowLeft') { event.preventDefault(); move(-1); }
        if(event.key === 'ArrowRight') { event.preventDefault(); move(1); }
      }}>
        <DialogTitle className="sr-only">{title} photo gallery</DialogTitle>
        <div className="venue-viewer-toolbar">
          <span className="venue-viewer-count" aria-live="polite">{selected + 1} / {images.length}</span>
          <Button variant="secondary" size="icon-lg" aria-label="Previous photo" onClick={()=>move(-1)}><ChevronLeft aria-hidden="true" /></Button>
          <Button variant="secondary" size="icon-lg" aria-label="Next photo" onClick={()=>move(1)}><ChevronRight aria-hidden="true" /></Button>
          <DialogClose asChild><Button variant="secondary" size="icon-lg" aria-label="Close photo gallery"><X aria-hidden="true" /></Button></DialogClose>
        </div>
        <Image className="cfp-viewer-image" src={photo.src} alt={`${title} — photo ${selected + 1}`} width={photo.width} height={photo.height} sizes="100vw" />
      </DialogContent>
    </Dialog>
    <div className="venue-thumbnails" role="group" aria-label={`${title} photos`}>
      {images.map((image,index)=><Button key={image.src} variant="ghost" className="venue-thumbnail" aria-label={`Show ${title} photo ${index+1}`} aria-pressed={selected===index} onClick={()=>setSelected(index)}>
        <Image src={image.src} alt="" width={image.width} height={image.height} sizes="80px" />
      </Button>)}
    </div>
    <p className="venue-gallery-count">{selected + 1} / {images.length}</p>
  </div>;
}
