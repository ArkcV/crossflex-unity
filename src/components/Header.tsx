import Image from "next/image"

const Header = () => {
  return (
    <div className='flex px-10 mb-2'>
      <Image
          src="/crossflex-logo-page.png"
          alt="crossflex-logo-page"
          width={130}
          height={50}
          priority
        />
    </div>
  )
}

export default Header
