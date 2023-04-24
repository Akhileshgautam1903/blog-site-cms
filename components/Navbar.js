import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="navbar text-4xl font-bold my-6 pb-6 border-b-2 text-blue-500">
            <Link href={"/blogs"} className="">The Blogs.</Link>
        </nav>
    );
}
 
export default Navbar;