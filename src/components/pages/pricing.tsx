"use client";

export default () => {
    const plans = [
        {
            name: "Starter Plan",
            desc: "Ideal for small teams, startups, or pilot projects",
            price: "BWP 1,500 / month",
            isMostPop: false,
            features: [
                "1 AI Agent (basic NLP & responses)",
                "Basic Knowledge Management Module",
                "Up to 2,000 Monthly Interactions",
                "Email Support"
            ],
        },
        {
            name: "Growth Plan",
            desc: "Ideal for growing businesses, schools, and organizations",
            price: "BWP 5,000 / month",
            isMostPop: true,
            features: [
                "Up to 3 AI Agents (custom-trained)",
                "Full Knowledge Management Suite",
                "Linguistic Add-ons (local language support)",
                "Up to 10,000 Monthly Interactions",
                "Priority Support"
            ],
        },
        {
            name: "Enterprise AI+ Plan",
            desc: "Ideal for large enterprises or government institutions",
            price: "Custom Pricing (Contact us for a quote)",
            isMostPop: false,
            features: [
                "Unlimited AI Agents (custom workflows)",
                "Advanced Knowledge Graph & Analytics",
                "Gaming Module Integration",
                "Custom Language Model Integration",
                "24/7 Dedicated Support"
            ],
        },
    ];

    return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="relative max-w-xl mx-auto sm:text-center">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Our Pricing Plans
                    </h3>
                    <div className="mt-3 max-w-xl">
                        <p>
                            We offer flexible packages tailored to startups, enterprises, and institutions. Whether you're looking to deploy a single AI agent or scale a full knowledge system — we’ve got you covered.
                        </p>
                    </div>
                </div>
                <div className="mt-16 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3">
                    {
                        plans.map((item, idx) => (
                            <div key={idx} className={`relative flex-1 flex items-stretch flex-col rounded-xl border-2 mt-6 sm:mt-0 ${item.isMostPop ? "mt-10" : ""}`}>
                                {item.isMostPop ? (
                                    <span className="w-32 absolute -top-5 left-0 right-0 mx-auto px-3 py-2 rounded-full border shadow-md bg-white text-center text-gray-700 text-sm font-semibold">
                                        Most popular
                                    </span>
                                ) : ""}
                                <div className="p-8 space-y-4 border-b">
                                    <span className="text-indigo-600 font-medium">
                                        {item.name}
                                    </span>
                                    <div className="text-gray-800 text-3xl font-semibold">
                                        {item.price} 
                                    </div>
                                    <p>
                                        {item.desc}
                                    </p>
                                    <button className="px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700">
                                        Get Started
                                    </button>
                                </div>
                                <ul className="p-8 space-y-3">
                                    <li className="pb-2 text-gray-800 font-medium">
                                        <p>Features</p>
                                    </li>
                                    {item.features.map((featureItem, idx) => (
                                        <li key={idx} className="flex items-center gap-5">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5 text-indigo-600"
                                                viewBox="0 0 20 20"
                                                fill="currentColor">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd" />
                                            </svg>
                                            {featureItem}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};
