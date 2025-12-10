"use client";
import { ServiceItem } from "@/data/cardConfig";
import { motion } from "framer-motion";

export const ServicesList = ({ services }: { services: ServiceItem[] }) => {
    return (
        <div className="w-full mb-6">
            <h3 className="text-sm font-bold text-white/40 uppercase tracking-wider ml-1 mb-3">
                Hizmetler
            </h3>
            <div className="grid gap-3">
                {services.map((service, index) => (
                    <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors"
                    >
                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg text-white">
                                <service.icon size={18} />
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <h4 className="font-semibold text-white text-sm">{service.title}</h4>
                                    {service.price && (
                                        <span className="text-xs bg-white/10 px-2 py-1 rounded text-white/80 whitespace-nowrap">
                                            {service.price}
                                        </span>
                                    )}
                                </div>
                                <p className="text-xs text-white/60 mt-1 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};