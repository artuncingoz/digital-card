"use client";
import { profileData } from "@/data/cardConfig";
import { generateVCard } from "@/utils/generateVCard";
import { ProfileHeader } from "@/components/card/ProfileHeader";
import { LinkButton } from "@/components/card/LinkButton";
import { motion } from "framer-motion";
import { QrCode, UserPlus, Share2 } from "lucide-react";
import { useState } from "react";
import QRCode from "react-qr-code";
import { VideoPlayer } from "@/components/card/VideoPlayer";
import { ServicesList } from "@/components/card/ServicesList"; // YENİ
import { GhostGallery } from "@/components/background/GhostGallery"; // YENİ

export default function DigitalCard() {
  const [showQR, setShowQR] = useState(false);

  // Sayfa yüklenme animasyonu için container
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <main className={`min-h-screen relative overflow-hidden ${profileData.theme.background} text-white font-sans`}>
      {/* 1. YENİ GHOST GALLERY (En arkada) */}
      {/* Bu component ana karttan bağımsız, tüm ekranı kaplar */}
      {profileData.gallery && <GhostGallery images={profileData.gallery} />}



      {/* 2. Mobile Container (Masaüstünde telefon gibi durması için) */}
      <div className="relative z-10 max-w-md mx-auto min-h-screen flex flex-col p-6 backdrop-blur-[2px]">

        {/* Üst Toolbar */}
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={() => setShowQR(true)}
            className="p-2 bg-white/5 rounded-full hover:bg-white/20 transition-colors backdrop-blur-md border border-white/10"
          >
            <QrCode size={20} />
          </button>
          <button className="p-2 bg-white/5 rounded-full hover:bg-white/20 transition-colors backdrop-blur-md border border-white/10">
            <Share2 size={20} />
          </button>
        </div>

        {/* Ana İçerik */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex-1 flex flex-col"
        >
          <motion.div variants={item}>
            <ProfileHeader
              name={profileData.name}
              title={profileData.title}
              avatarUrl={profileData.avatarUrl}
              location={profileData.location}
            />
          </motion.div>

          {/* Link Listesi */}
          <div className="flex-1 space-y-4 mb-10">
            {profileData.links.map((link) => (
              <motion.div key={link.id} variants={item}>
                <LinkButton link={link} />
              </motion.div>
            ))}
          </div>
          {/* --- YENİ EKLENTİLER BAŞLANGIÇ --- */}

          {/* 2. Video */}
          {profileData.videoUrl && (
            <motion.div variants={item}>
              <VideoPlayer url={profileData.videoUrl} />
            </motion.div>
          )}
          {/* YENİ: Hizmetler Listesi */}
          <motion.div variants={item}>
            <ServicesList services={profileData.services} />
          </motion.div>
          {/* --- YENİ EKLENTİLER BİTİŞ --- */}
          {/* Sticky "Rehbere Ekle" Butonu */}
          <motion.div variants={item} className="sticky bottom-6 mt-auto">
            <button
              onClick={() => generateVCard(profileData)}
              className="w-full py-4 bg-white text-gray-900 rounded-2xl font-bold text-lg shadow-xl shadow-white/10 hover:scale-[1.02] active:scale-[0.98] transition-transform flex items-center justify-center gap-2"
            >
              <UserPlus size={20} />
              Rehbere Ekle
            </button>
          </motion.div>

          {/* Sosyal Medya İkonları (Footer) */}
          <motion.div variants={item} className="flex justify-center gap-6 py-8 mt-4">
            {profileData.socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                className="text-white/40 hover:text-white transition-colors hover:scale-110 transform"
              >
                <social.icon size={24} />
              </a>
            ))}
          </motion.div>

        </motion.div>
      </div>

      {/* QR Modal */}
      {showQR && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setShowQR(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white p-8 rounded-3xl max-w-sm w-full text-center relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-gray-900 font-bold text-xl mb-6">QR Kodunu Okut</h3>
            <div className="bg-white p-2 rounded-xl border-2 border-dashed border-gray-200 inline-block mb-4">
              <QRCode value="https://seninsiten.com" size={200} />
            </div>
            <p className="text-gray-500 text-sm">Paylaşmak için okutun</p>
            <button
              onClick={() => setShowQR(false)}
              className="mt-6 w-full py-3 bg-gray-100 text-gray-900 rounded-xl font-semibold hover:bg-gray-200"
            >
              Kapat
            </button>
          </motion.div>
        </div>
      )}
    </main>
  );
}