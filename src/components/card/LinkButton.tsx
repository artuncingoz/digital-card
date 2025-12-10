"use client";
import { motion } from "framer-motion";
import { ActionLink } from "@/data/cardConfig";
import { cn } from "@/utils/cn";
import { Copy, ExternalLink } from "lucide-react";
import { useState } from "react";

export const LinkButton = ({ link }: { link: ActionLink }) => {
    const [copied, setCopied] = useState(false);

    const handleClick = () => {
        if (link.type === 'copy') {
            navigator.clipboard.writeText(link.value);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } else {
            // Normal link
            window.open(link.value, '_blank');
        }
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.15)" }}
            whileTap={{ scale: 0.98 }}
            onClick={handleClick}
            className={cn(
                "w-full p-4 mb-3 rounded-2xl flex items-center justify-between group",
                "backdrop-blur-md border border-white/10 shadow-lg transition-all",
                link.color || "bg-white/5 hover:bg-white/10 text-white"
            )}
        >
            <div className="flex items-center gap-4">
                <div className="p-2 bg-white/10 rounded-xl text-white">
                    <link.icon size={20} />
                </div>
                <div className="flex flex-col items-start">
                    <span className="font-semibold text-sm sm:text-base">{link.label}</span>
                    {link.type === 'copy' && <span className="text-xs text-white/50">{link.value}</span>}
                </div>
            </div>

            <div className="opacity-50 group-hover:opacity-100 transition-opacity">
                {link.type === 'copy' ? (
                    copied ? <span className="text-xs font-bold text-green-400">Kopyalandı!</span> : <Copy size={16} />
                ) : (
                    <ExternalLink size={16} />
                )}
            </div>
        </motion.button>
    );
};