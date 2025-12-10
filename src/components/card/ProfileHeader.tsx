"use client";
import { motion } from "framer-motion";
import { CheckCircle2, MapPin } from "lucide-react";
import Image from "next/image";

interface Props {
    name: string;
    title: string;
    avatarUrl: string;
    location: string;
}

export const ProfileHeader = ({ name, title, avatarUrl, location }: Props) => {
    return (
        <div className="flex flex-col items-center text-center space-y-4 mb-8 relative z-10">
            <motion.div
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="relative group"
            >
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <div className="relative w-32 h-32 rounded-full border-4 border-white/10 overflow-hidden shadow-2xl">
                    {/* Next.js Image kullanırken width/height belirtmek önemli */}
                    <Image src={avatarUrl} alt={name} fill className="object-cover" />
                </div>
            </motion.div>

            <div className="space-y-1">
                <div className="flex items-center justify-center gap-2">
                    <h1 className="text-2xl font-bold text-white tracking-tight">{name}</h1>
                    <CheckCircle2 className="w-5 h-5 text-blue-400 fill-blue-400/10" />
                </div>
                <p className="text-white/80 font-medium">{title}</p>
                <div className="flex items-center justify-center gap-1 text-sm text-white/50">
                    <MapPin className="w-3 h-3" />
                    <span>{location}</span>
                </div>
            </div>
        </div>
    );
};