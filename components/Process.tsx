import React, { useState, useEffect } from "react";
import { useLanguage } from '../contexts/LanguageContext';

// Simple cn utility to combine class names
const cn = (...classes: (string | boolean | undefined)[]) => classes.filter(Boolean).join(' ');

const Process: React.FC = () => {
    const { t } = useLanguage();
    const features = t.process.steps;
    const autoPlayInterval = 5000; // 5 seconds

    const [currentFeature, setCurrentFeature] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentFeature((prev) => (prev + 1) % features.length);
        }, autoPlayInterval);

        return () => clearInterval(timer);
    }, [features.length, autoPlayInterval]);

    return (
        <section id="process" className="py-20 md:py-28 bg-white">
            <div className="container mx-auto max-w-5xl px-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 md:mb-16 text-center text-green-900 tracking-tight">
                    {t.process.title}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
                    {/* Left side: Steps */}
                    <div className="space-y-8 order-2 md:order-1">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className={cn(
                                    "flex items-start gap-4 transition-opacity duration-500",
                                    index === currentFeature ? "opacity-100" : "opacity-40",
                                    "cursor-pointer"
                                )}
                                onClick={() => setCurrentFeature(index)}
                            >
                                <div
                                    className={cn(
                                        "flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300",
                                        index === currentFeature
                                            ? "bg-green-700 border-green-700 text-white scale-110"
                                            : "bg-white border-slate-300"
                                    )}
                                >
                                    {index <= currentFeature ? (
                                        <span className="text-xl font-bold">✓</span>
                                    ) : (
                                        <span className="text-lg font-semibold text-slate-500">{index + 1}</span>
                                    )}
                                </div>

                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-green-900">
                                        {feature.title}
                                    </h3>
                                    <p className="text-slate-600">
                                        {feature.content}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right side: Image */}
                    <div className="order-1 md:order-2 relative h-[250px] md:h-[400px] overflow-hidden">
                        {features.map((feature, index) => (
                                <img
                                    key={index}
                                    src={feature.image}
                                    alt={feature.title}
                                    className={cn(
                                        "w-full h-full object-cover rounded-lg shadow-xl absolute inset-0 transition-opacity duration-700 ease-in-out",
                                        index === currentFeature ? "opacity-100" : "opacity-0"
                                    )}
                                />
                            )
                        )}
                        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-white via-white/80 to-transparent" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
