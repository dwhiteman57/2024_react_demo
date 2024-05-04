// "use client";
import { SignInButton, SignedOut, SignedIn, UserButton } from "@clerk/nextjs";
// import { useRouter } from "next/navigation";
// import { UploadButton} from "~/utils/uploadthing";
import {SimpleUploadButton} from "~/app/_components/simple-upload-button";

export function TopNav() {
  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <div>Gallery</div>
      <div className="flex flex-row gap-4 items-center">
        <SignedOut>
          <SignInButton />
        </SignedOut>

        <SignedIn>
          <SimpleUploadButton />
          {/*<UploadButton*/}
          {/*  endpoint="imageUploader"*/}
          {/*  onClientUploadComplete={() => {*/}
          {/*    router.refresh();*/}
          {/*  }}*/}
          {/*/>*/}
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}