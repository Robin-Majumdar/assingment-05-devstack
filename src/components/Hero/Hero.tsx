import banner from "../../assets/banner-stack.png";

export default function Hero() {
    return (
        <section className="w-full bg-white px-6 py-6 md:px-12 lg:px-24">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

                    <div className="flex flex-col items-start space-y-6">
                        <h1 className="text-4xl font-extrabold text-[#0F172A] sm:text-5xl lg:text-6xl">
                            Build Your Ideal <br />
                            <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
                                Development Stack
                            </span>
                        </h1>
                        <p className="max-w-lg text-base text-slate-500 sm:text-lg leading-relaxed">
                            Discover, compare, and choose the best modern technologies. Assemble the
                            ultimate tech stack tailored perfectly for your next big build.
                        </p>

                        <div className="flex flex-wrap items-center gap-4 py-2">
                            <button
                                type="button"
                                className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] rounded-lg px-6 py-3 text-sm font-medium text-white shadow-md"
                            >Explore Technologies
                            </button>
                            <button
                                className="btn btn-neutral btn-outline rounded-lg text-sm font-medium shadow-md">
                                Learn More
                            </button>
                        </div>

                    </div>

                    <div className="flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-lg">
                            <img
                                src={banner}
                                alt="3D Development Stack Illustration"
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}