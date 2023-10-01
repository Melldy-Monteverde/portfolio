import Image from 'next/image'
import Link from 'next/link';

import {
  BsLinkedin,
  BsFillFileEarmarkPersonFill,
  BsWhatsapp
} from "react-icons/bs"

export const Header = () => {
  return (
    <header className="text-center p-10 py-10">
      <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
        Melldy Monteverde
      </h2>
      <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
        Developer and QA software tester.
      </h3>
      <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
        Freelancer providing services for programming content
        needs. Join me down below and let&apos;s get cracking!
      </p>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
        <Link href="#" target="_blank" rel="noopener noreferrer"        >
          <BsLinkedin />
        </Link>
        <Link href="/pdf/cv_Melldy_Monteverde.pdf" target="_blank" rel="noopener noreferrer">
          <BsFillFileEarmarkPersonFill />
        </Link>
        <Link href={`https://wa.me/${process.env.WPP_CONTACT}?text=Hi, i would like more info!`} target="_blank" rel="noopener noreferrer">
          <BsWhatsapp />
        </Link>
      </div>
      <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
        <Image src='/biopic.jpg' layout="fill" objectFit="cover" alt='biopic' />
      </div>
    </header>
  )
}
