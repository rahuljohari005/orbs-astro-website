import React from 'react';

export default function Booking() {
    return (
        <section className="py-16 bg-blue-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Book Your Session with Orbs Astro</h2>
                <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Name</label>
                            <input type="text" id="name" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
                            <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                            <label htmlFor="service" className="block text-gray-700 font-medium mb-1">Select Service</label>
                            <select id="service" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option>Birth Chart Reading</option>
                                <option>Relationship Compatibility</option>
                                <option>Career Guidance</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="date" className="block text-gray-700 font-medium mb-1">Preferred Date</label>
                            <input type="date" id="date" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                            Book Now
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
} 