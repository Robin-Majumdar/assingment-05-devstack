import logo from "../../assets/logo-text.png";
export default function Navbar() {

    return (
        <nav className="sticky top-0 z-50 flex items-center justify-between px-10 py-5 bg-[#F1F5F9]">

            {/* Logo */}
            <div>
                <img
                    src={logo}
                    alt="Logo"
                    className="w-32"
                />
            </div>

            {/* Navigation Menu */}
            <ul className="flex items-center gap-8 text-[#475569]">
                <li>
                    <a href="#" className="text-[#DB2777]">Home</a>
                </li>

                <li>
                    <a href="#">Technologies</a>
                </li>

                <li>
                    <a href="#">Projects</a>
                </li>

                <li>
                    <a href="#">About</a>
                </li>

                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>

            {/* Buttons */}
            <div className="flex items-center gap-3">
                <button className="px-5 py-2 text-[#475569]">
                    Sign In
                </button>

                <button className="rounded-full bg-[#D91B7E] px-5 py-2 text-white">
                    Sign Up
                </button>
            </div>

        </nav>
    );
}