import Link from "next/link";

const Footer = () => {
    return(
        <footer className="flex w-full flex-row flex-wrap items-center justify-center mb-8 px-8 gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">
            <p className="block leading-relaxed text-blue-gray-900 antialiased">
                © 2023 Layup Raise Yourself
            </p>
            <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                <li>
                    <Link className="text-blue-gray-900 transition-colors hover:text-indigo-500 focus:text-indigo-500" href="/">About us</Link>
                </li>
                <li>
                    <Link className="text-blue-gray-900 transition-colors hover:text-indigo-500 focus:text-indigo-500" href="/">Licence</Link>
                </li>
                <li>
                    <Link className="text-blue-gray-900 transition-colors hover:text-indigo-500 focus:text-indigo-500" href="/">Contribute</Link>
                </li>
                <li>
                    <Link className="text-blue-gray-900 transition-colors hover:text-indigo-500 focus:text-indigo-500" href="/">Contact us</Link>
                </li>
            </ul>
        </footer>
    )
}

export default Footer