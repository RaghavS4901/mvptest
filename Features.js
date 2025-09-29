javascript
import React from 'react';
import { CheckCircle, Clock, Users } from 'lucide-react';

const Features = () => {
    const features = [
        {
            icon: <CheckCircle className="h-6 w-6 text-green-500" />,
            title: 'Seamless Integration',
            description: 'Easily integrate Uproot with your existing tools and workflows.'
        },
        {
            icon: <Clock className="h-6 w-6 text-blue-500" />,
            title: 'Time Efficient',
            description: 'Save time with automated processes and real-time insights.'
        },
        {
            icon: <Users className="h-6 w-6 text-purple-500" />,
            title: 'Collaborative Experience',
            description: 'Work together with your team effortlessly, no matter where you are.'
        }
    ];

    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Key Features of Uproot</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="p-6 bg-white rounded-lg shadow-md">
                            {feature.icon}
                            <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
                            <p className="mt-2 text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
