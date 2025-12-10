"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
    images: string[];
}

export const ImageCarousel = ({ images }: Props) => {
    if (!images || images.length === 0) return null;

    return (
        <div className="w-full mb-6 space-y-2">
            <h3 className="text-sm font-bold text-white/40 uppercase tracking-wider ml-1">
                Galeri
            </h3>

            {/* Scroll Container */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex overflow-x-auto pb-4 gap-4 snap-x snap-mandatory scrollbar-hide -mx-6 px-6"
            >
                {images.map((img, index) => (
                    <div
                        key={index}
                        className="snap-center shrink-0 first:pl-0 last:pr-0"
                    >
                        <div className="relative w-64 h-40 rounded-2xl overflow-hidden border border-white/10 shadow-lg group">
                            <Image
                                src={img}
                                alt={`Gallery item ${index + 1}`}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            {/* Parlama Efekti */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};