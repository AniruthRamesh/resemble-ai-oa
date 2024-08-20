import React from "react";

const About = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">About Resemble AI</h1>
            
            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed">
                    At Resemble AI, our mission is to empower creators, developers, and businesses by providing them with state-of-the-art voice generation technology. We believe in pushing the boundaries of artificial intelligence to create lifelike and emotionally resonant voices that can be used in a variety of applications, from entertainment to customer service.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Who We Are</h2>
                <p className="text-gray-600 leading-relaxed">
                    Resemble AI is a leading innovator in the field of AI-driven voice technology. Founded by a team of passionate technologists and entrepreneurs, we are dedicated to revolutionizing the way people interact with machines by providing the most advanced and flexible voice solutions in the industry.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">What We Do</h2>
                <ul className="list-disc list-inside text-gray-600 leading-relaxed">
                    <li>Offer a powerful platform for creating custom AI voices that sound natural and human-like.</li>
                    <li>Provide API access for developers to integrate voice synthesis into their applications seamlessly.</li>
                    <li>Support a wide range of use cases, including voiceovers, virtual assistants, customer service bots, and more.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Core Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Innovation</h3>
                        <p className="text-gray-600 leading-relaxed">
                            We are committed to continuous innovation and staying ahead of the curve in voice technology.
                        </p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Quality</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Our products are built to the highest standards, ensuring that every voice generated is of the utmost quality.
                        </p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Customer Focus</h3>
                        <p className="text-gray-600 leading-relaxed">
                            We prioritize our customers' needs and strive to provide the best possible service and support.
                        </p>
                    </div>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Join Us</h2>
                <p className="text-gray-600 leading-relaxed">
                    Are you passionate about AI and voice technology? We're always looking for talented individuals to join our team. Check out our careers page to see current openings and learn more about working at Resemble AI.
                </p>
            </section>
        </div>
    );
};

export default About;
