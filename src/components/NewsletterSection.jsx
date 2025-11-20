import React from 'react';
import news from "../assets/newsImg.png";

const NewsletterSection = () => {
    const handleSubscribe = (e) => {
        e.preventDefault();
        alert("Subscribed!");
    };

    return (
        <section className="w-full bg-gray-100 py-12 flex justify-center">
            <div className="relative w-11/12  bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">

               
                <div className="w-full md:w-1/2 relative h-64 md:h-auto p-5">
                    <img
                        src={news}
                        alt="Newsletter illustration"
                        className="w-full h-full object-cover rounded-3xl"
                    />
                </div>


             
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center md:text-left">
                        Subscribe to Our Newsletter
                    </h2>
                    <p className="text-gray-600 mb-6 text-center md:text-left">
                        Stay updated with the latest game releases, news, and exclusive offers!
                    </p>

                    <form
                        onSubmit={handleSubscribe}
                        className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start"
                    >
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                            required
                        />
                        <button
                            type="submit"
                            className="px-6 py-3 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default NewsletterSection;
