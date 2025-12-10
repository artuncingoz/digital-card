"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

// Rastgele sayı üretici
const random = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);

interface FloatingImage {
    id: number;
    url: string;
    x: number; // Ekranın yüzdelik konumu (0-100)
    y: number; // Y konumu
    size: number;
    duration: number;
    delay: number;
}

export const GhostGallery = ({ images }: { images: string[] }) => {
    const [floatingImages, setFloatingImages] = useState<FloatingImage[]>([]);

    // Sadece client tarafında çalışsın (Hydration hatasını önlemek için)
    useEffect(() => {
        // Mobilde (ekran dar ise) çok fazla resim gösterme, masaüstünde daha fazla göster
        const isMobile = window.innerWidth < 768;
        const count = isMobile ? 3 : 6;

        const items = Array.from({ length: count }).map((_, i) => {
            // Masaüstü için: Resimleri ya çok sola (0-20%) ya çok sağa (80-100%) at
            // Mobilde: Rastgele dağıt ama arkada fluk kalsın
            const side = Math.random() > 0.5 ? 'left' : 'right';
            let xPos;

            if (isMobile) {
                xPos = random(0, 80); // Mobilde her yerde olabilir
            } else {
                xPos = side === 'left' ? random(2, 25) : random(70, 90);
            }

            return {
                id: i,
                url: images[i % images.length], // Resimleri döngüye sok
                x: xPos,
                y: random(10, 80),
                size: random(150, 250),
                duration: random(4, 8), // Ekranda kalma ve süzülme süresi
                delay: random(0, 5) // Başlangıç gecikmesi
            };
        });
        setFloatingImages(items);
    }, [images]);

    if (!images || images.length === 0) return null;

    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            {floatingImages.map((img) => (
                <motion.div
                    key={img.id}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{
                        opacity: [0, 0.4, 0.4, 0], // Belir, bekle, kaybol
                        scale: [0.8, 1, 1, 0.9],
                        y: [0, -50] // Yukarı doğru yavaşça süzül
                    }}
                    transition={{
                        duration: img.duration,
                        repeat: Infinity,
                        delay: img.delay,
                        ease: "easeInOut"
                    }}
                    style={{
                        position: 'absolute',
                        left: `${img.x}%`,
                        top: `${img.y}%`,
                        width: img.size,
                        height: (img.size / 3) * 2, // Dikdörtgen oran
                    }}
                    className="rounded-xl overflow-hidden shadow-2xl rotate-3 opacity-30"
                >
                    {/* Resmin üzerine koyu bir filtre atıyoruz ki dikkat dağıtmasın */}
                    <div className="absolute inset-0 bg-indigo-900/40 z-10 mix-blend-multiply" />
                    <Image
                        src={img.url}
                        alt="Ambient"
                        fill
                        className="object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
                    />
                </motion.div>
            ))}

            {/* Kartın arkasının okunabilir kalması için bir vignette (karartma) katmanı */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-900/80 to-gray-900/90 z-0" />
        </div>
    );
};