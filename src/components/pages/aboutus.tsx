"use client";

export default function AboutUs() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                {/* Header */}
                <div className="text-center">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
                        About Us
                    </h1>
                    <p className="mt-4 text-lg text-indigo-600">
                        Empowering the Future with Smart Agent Solutions
                    </p>
                </div>

                {/* Company Overview */}
                <div className="mt-12 space-y-8 text-gray-700 text-lg leading-relaxed">
                    <p>
                        Wethembaplus is a dynamic tech innovation company co-founded by three visionaries: Kgosi Thembani (Business Strategist), Ogaufi Mokopakgosi (AI Specialist), and Sam Kabelo (Lead Developer - UI/UX). Together, we blend entrepreneurial drive, advanced artificial intelligence, and world-class design to build solutions that empower people, businesses, and institutions across Africa and beyond.
                    </p>
                    <p>
                        Our mission is to harness the power of AI, language, and design to solve real-world challenges — from education and business operations to linguistics and interactive gaming.
                    </p>
                    <p>
                        What sets Wethembaplus apart is our local understanding combined with global tech expertise. We’re not just building for the future — we’re making it inclusive, intelligent, and intuitive.
                    </p>
                </div>

                {/* What We Do */}
                <div className="mt-16">
                    <h2 className="text-3xl font-bold text-gray-900 text-center">What We Do</h2>
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
                            <div className="text-4xl">🧠</div>
                            <h3 className="mt-4 font-semibold text-xl text-indigo-600">
                                Knowledge Management Solutions
                            </h3>
                            <p className="mt-2 text-gray-700">
                                Organize, access, and evolve your institutional knowledge through intelligent systems.
                            </p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
                            <div className="text-4xl">🤖</div>
                            <h3 className="mt-4 font-semibold text-xl text-indigo-600">
                                AI Agents
                            </h3>
                            <p className="mt-2 text-gray-700">
                                Deploy bots that speak your language, understand your users, and work 24/7 across platforms.
                            </p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
                            <div className="text-4xl">🗣️</div>
                            <h3 className="mt-4 font-semibold text-xl text-indigo-600">
                                Linguistic AI
                            </h3>
                            <p className="mt-2 text-gray-700">
                                Train AI to understand and communicate in local languages like Setswana — preserving culture and improving accessibility.
                            </p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
                            <div className="text-4xl">🎮</div>
                            <h3 className="mt-4 font-semibold text-xl text-indigo-600">
                                Gamified Experiences
                            </h3>
                            <p className="mt-2 text-gray-700">
                                Transform education and training into fun, interactive journeys through custom-built games.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Our Vision */}
                <div className="mt-16 text-center">
                    <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                    <p className="mt-4 text-gray-700 text-lg max-w-2xl mx-auto">
                        To become a leading force in building culturally aware, human-first technology that transforms how Africa works, learns, and communicates.
                    </p>
                </div>
            </div>
        </section>
    );
}