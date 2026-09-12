import logo from "../../assets/logo-text.png"

export default function Footer() {

    return (
        <footer className="w-full border-t border-slate-100 bg-white px-6 py-6 md:px-12 lg:px-24">
            <div className="mx-auto max-w-7xl">

                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">

                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-2">

                            <img
                                src={logo}
                                className="h-8 w-auto object-contain"
                            />
                        </div>
                        <p className="mt-4 max-w-sm text-xs leading-relaxed text-slate-500">
                            Compare, evaluate, and assemble the ultimate technology stack for your next big software project.
                        </p>

                        <div className="mt-6 flex items-center gap-4 text-xs font-medium text-slate-700">
                            <a href="https://github.com">GitHub</a>
                            <a href="https://twitter.com" >Twitter</a>
                            <a href="https://linkedin.com">LinkedIn</a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold uppercase text-slate-900">Product</h4>
                        <ul className="mt-4 space-y-2.5 text-xs text-slate-500">
                            <li><a href="#home" >Home</a></li>
                            <li><a href="#technologies" >Technologies</a></li>
                            <li><a href="#projects">Projects</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold uppercase  text-slate-900">Company</h4>
                        <ul className="mt-4 space-y-2.5 text-xs text-slate-500">
                            <li><a href="#about">About</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <li><a href="#careers">Careers</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold uppercase  text-slate-900">Legal</h4>
                        <ul className="mt-4 space-y-2.5 text-xs text-slate-500">
                            <li><a href="#privacy">Privacy Policy</a></li>
                            <li><a href="#terms">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-8 text-xs text-slate-400 sm:flex-row">
                    <p>© 2026 Dev Stack. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <a href="#privacy">Privacy</a>
                        <a href="#terms">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};