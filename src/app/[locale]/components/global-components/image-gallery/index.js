"use client";
import { useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function ImageGallery({ gallery }) {
  const [index, setIndex] = useState(-1);

  const images = gallery.map((image) => ({
    src: `https:${image.fields.file.url}`,
    width: image.fields.file.details.image.width,
    height: image.fields.file.details.image.height,
  }));

  return (
    <div className="my-10">
      <PhotoAlbum
        layout="rows"
        photos={images}
        onClick={({ index: current }) => setIndex(current)}
      />

      <Lightbox
        index={index}
        slides={images}
        open={index >= 0}
        close={() => setIndex(-1)}
      />
    </div>
  );
}
