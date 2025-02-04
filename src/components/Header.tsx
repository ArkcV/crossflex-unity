import Image from "next/image";


export default function Header() {
  return (
    <section className="flex justify-between items-center ml-16">
      <div>
        <Image
          src="/crossflex-logo-page.png"
          alt="crossflex-logo-paga"
          width={160}
          height={100}
          priority
        />
      </div>
    </section>
  )
}