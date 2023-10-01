import { Link, Button } from "react-scroll";

export const Navbar = () => {

  return (
    <nav className="py-10 mb-12 flex justify-between dark:text-white">
      <h1 className="font-burtons text-xl">lex monteverde</h1>
      <div className="flex items-center">
        <Link
          className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8 cursor-pointer"
          smooth={true} to='contact' delay={200}
        >
          Direct Email
        </Link>
      </div>
    </nav>
  )
}
