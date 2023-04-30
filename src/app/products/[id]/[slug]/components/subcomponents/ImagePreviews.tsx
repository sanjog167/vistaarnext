"use client";

import Image from "next/image";
import { useState } from "react";

function ImageSmallPreview(props: {
  selectedImage: string;
  setSelectedImage: (image: string) => void;
  thisImage: string | undefined;
}) {
  if (!props.thisImage) {
    return null;
  }

  return (
    <div
      className={`relative h-full w-[115px] cursor-pointer ${
        props.selectedImage == props.thisImage && "border border-primary"
      }`}
      onClick={() => props.setSelectedImage(props.thisImage!)}
    >
      <Image
        src={props.thisImage}
        alt="Preview image 1"
        fill
        className="object-contain"
      />
    </div>
  );
}

export default function ImagePreviews(props: {
  image1: string;
  image2: string | undefined;
  image3: string | undefined;
}) {
  const [selectedImage, setSelectedImage] = useState(props.image1);

  function setSelectedImageClickHandler(image: string) {
    setSelectedImage(image);
  }

  return (
    <div className="flex h-[600px] basis-[50%] flex-col gap-4">
      <div className="relative basis-[80%]">
        <Image
          src={selectedImage}
          alt={selectedImage}
          fill
          className="object-contain"
        />
      </div>
      <div className="mx-4 flex basis-[20%] gap-4">
        <ImageSmallPreview
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImageClickHandler}
          thisImage={props.image1}
          key={props.image1}
        />
        <ImageSmallPreview
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImageClickHandler}
          thisImage={props.image2}
          key={props.image1}
        />
        <ImageSmallPreview
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImageClickHandler}
          thisImage={props.image3}
          key={props.image1}
        />
      </div>
    </div>
  );
}
