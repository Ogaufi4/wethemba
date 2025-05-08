"use client";

export default function Team() {
    const teamMembers = [
        {
            avatar:
                "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            name: "Kgosi Thembani",
            title: "Co-Founder | Business Strategist",
            desc: "With a sharp eye for opportunity and a deep understanding of emerging markets, Kgosi leads Wethembaplus’ strategic vision. He bridges the gap between tech and business, ensuring every solution aligns with real-world needs and growth potential."
        },
        {
            avatar:
                "https://images.unsplash.com/photo-1589571894960-20bbe2828f33?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            name: "Ogaufi Mokopakgosi",
            title: "Co-Founder | AI Specialist",
            desc: "Ogaufi is the brain behind our intelligent systems. From training custom AI agents to architecting language models that speak Setswana and beyond, he ensures our tech is smart, ethical, and impactful. He’s passionate about building AI that understands people — not just data."
        },
        {
            avatar:
                "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            name: "Sam Kabelo",
            title: "Co-Founder | Lead Developer (UI/UX)",
            desc: "Sam crafts the experiences that users love. With a background in frontend development and user-centered design, he transforms complex systems into simple, elegant, and intuitive interfaces — whether it's for mobile apps, AI dashboards, or gamified learning tools."
        },
    ];

    return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-gray-800">
                        Our Team
                    </h2>
                    <p className="mt-3 text-gray-600">
                        At Wethembaplus, we're more than a tech company — we're a team of forward-thinkers using AI, language, and design to power real change.
                    </p>
                </div>
                <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {teamMembers.map((member, idx) => (
                        <div key={idx} className="bg-white p-6 border rounded-lg shadow-sm">
                            <img
                                src={member.avatar}
                                alt={member.name}
                                className="w-24 h-24 rounded-full mx-auto"
                            />
                            <h3 className="mt-4 text-xl font-semibold text-gray-800 text-center">
                                {member.name}
                            </h3>
                            <p className="mt-1 text-center text-sm text-indigo-600">
                                {member.title}
                            </p>
                            <p className="mt-4 text-gray-600 text-center">
                                {member.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}