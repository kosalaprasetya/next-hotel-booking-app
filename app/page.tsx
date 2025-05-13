import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen w-full flex-col items-center justify-center gap-4">
        <h1 className="text-3xl font-bold">Hello world!</h1>
        <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <p className="text-lg">Welcome to our Next.js application!</p>
        <p className="text-lg">
          This is a simple example of using Tailwind CSS.
        </p>
      </div>
    </>
  );
}
