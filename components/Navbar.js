import Link from "next/link";
import { useRouter } from "next/router";
const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="flex sticky top-0 justify-between px-6 py-2 bg-gray-950 text-white z-[100]">
      <span className=" text-md self-center font-bold">
        <Link href="/">NEWSHUB</Link>
      </span>
      <ul className="flex space-x-5 text-sm self-center">
        <li
          className={`tracking-wide cursor-pointer  border-0  hover:border-b-2 hover:border-red-600 ${
            router.pathname === "/" ? "border-b-2 border-b-red-600" : ""
          }`}
        >
          <Link className="border-0" href="/">
            News
          </Link>
        </li>
        <li
          className={`tracking-wide cursor-pointer  border-0  hover:border-b-2 hover:border-red-600 ${
            router.pathname === "/business" ? "border-b-2 border-b-red-600" : ""
          }`}
        >
          <Link href="/business">Bussiness</Link>
        </li>
        <li
          className={`tracking-wide cursor-pointer  border-0  hover:border-b-2 hover:border-b-red-600 ${
            router.pathname === "/entertainment"
              ? "border-b-2 border-b-red-600"
              : ""
          }`}
        >
          <Link href="/entertainment">Entertainement</Link>
        </li>
        <li
          className={`tracking-wide cursor-pointer  border-0  hover:border-b-2 hover:border-red-600 ${
            router.pathname === "/health" ? "border-b-2 border-b-red-600" : ""
          }`}
        >
          <Link href="/health">Health</Link>
        </li>
        <li
          className={`tracking-wide cursor-pointer  border-0  hover:border-b-2 hover:border-red-600 ${
            router.pathname === "/science" ? "border-b-2 border-b-red-600" : ""
          }`}
        >
          <Link href="/science">Science</Link>
        </li>
        <li
          className={`tracking-wide cursor-pointer  border-0  hover:border-b-2 hover:border-red-600 ${
            router.pathname === "/sports" ? "border-b-2 border-b-red-600" : ""
          }`}
        >
          <Link href="/sports">Sports</Link>
        </li>
        <li
          className={`tracking-wide cursor-pointer  border-0  hover:border-b-2 hover:border-red-600 ${
            router.pathname === "/technology"
              ? "border-b-2 border-b-red-600"
              : ""
          }`}
        >
          <Link href="/technology">Technology</Link>
        </li>
      </ul>
      <span className="text-sm self-center border-2 cursor-pointer font-semibold px-3 py-1 rounded-3xl hover:text-black hover:bg-white hover:font-semibold">
        <Link href="/signup">Sign Up for Newshub</Link>
      </span>
    </nav>
  );
};

export default Navbar;
