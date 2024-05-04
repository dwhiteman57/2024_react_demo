import Link from "next/link";
import {SignedOut, SignedIn} from "@clerk/nextjs";
import {getMyImages} from "~/server/queries";
import Image from "next/image";
export const dynamic = "force-dynamic";


async function Images() {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {images.map((image) => (
        <div key={image.id} className="w-48 h-48 flex flex-col">
          <Link href={`/img/${image.id}`}>
            <Image
              src={image.url}
              style={{ objectFit: "contain"}}
              width={480}
              height={480}
              alt="My image"
            />
          </Link>
          <div>{image.name}</div>
        </div>
      ))}
    </div>
  )
}


export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-2xl text-center">Please Sign In....</div>
      </SignedOut>

      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
