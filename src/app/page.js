"use client";

import Image from "next/image";
import img from "../../public/next.svg";

export default function Home() {
  return (
    <div>
      This is my practice next app.
      <Image src={img} alt="Next.js logo" width={500} height={500} />
      <figure>
      </figure>
    </div>
  );
}
