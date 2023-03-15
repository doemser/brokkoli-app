import SomeComponent from "@/components/SomeComponent";
import Image from "next/image";
import Link from "next/link";
import deberon from "../../public/deberon.png";

export default function Home() {
  return (
    <>
      <SomeComponent />

      <a href="/favorites">favorites site</a>

      <Link href="/favorites">LINK favorites site</Link>

      <Image src={deberon} alt="deberon" />
      <Image src="/deberon.png" alt="deberon" width={500} height={500} />
      <Image
        src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba"
        alt="cinema"
        width={640}
        height={426}
      />
    </>
  );
}
