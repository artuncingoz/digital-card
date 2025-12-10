"use client";
import { motion } from "framer-motion";

interface Props {
    url: string;
}

export const VideoPlayer = ({ url }: Props) => {
    if (!url) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full mb-6 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black/40 backdrop-blur-sm"
        >
            <div className="relative pt-[56.25%]"> {/* 16:9 Aspect Ratio Hack */}
                <iframe
                    src={url}
                    className="absolute top-0 left-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        </motion.div>
    );
};