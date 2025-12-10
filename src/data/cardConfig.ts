import { LucideIcon, Instagram, Linkedin, Globe, Mail, Phone, CreditCard, MapPin, Briefcase, Camera, PenTool, Star } from 'lucide-react';
export type SocialLink = {
    platform: string;
    url: string;
    icon: LucideIcon;
};

export type ActionLink = {
    id: string;
    label: string;
    value: string; // URL veya Kopyalanacak değer (IBAN)
    type: 'url' | 'copy' | 'email' | 'tel';
    icon: LucideIcon;
    color?: string; // Özel vurgu rengi
};

export interface ServiceItem {
    id: string;
    title: string;
    description: string;
    price?: string; // Opsiyonel fiyat
    icon: any; // Lucide icon
}
export interface ProfileConfig {
    name: string;
    title: string;
    bio: string;
    avatarUrl: string; // public klasörüne atacağın resim yolu
    location: string;
    contact: {
        email: string;
        phone: string;
    };
    socials: SocialLink[];
    links: ActionLink[];
    theme: {
        gradient: string; // Butonların parlaması vs. için
        background: string; // YENİ: Arka plan rengi (Hex kodu veya Tailwind class)
    };
    gallery?: string[]; // Resim URL'leri dizisi
    videoUrl?: string; // YouTube veya Vimeo embed linki
    services: ServiceItem[];
}

// ÖRNEK MÜŞTERİ VERİSİ
export const profileData: ProfileConfig = {
    name: "Burcu Yılmaz",
    title: "Senior UI/UX Designer",
    bio: "Dijital deneyimler tasarlıyorum. Minimalist & Fonksiyonel.",
    avatarUrl: "/avatar-placeholder.jpg", // public klasörüne bir resim koymalısın
    location: "İstanbul, TR",
    contact: {
        email: "burcu@example.com",
        phone: "+900000000",
    },
    theme: {
        gradient: "from-indigo-500 via-purple-500 to-pink-500",
        background: "bg-white/5", // Örnek: Simsiyah değil, çok koyu gri (Hex Code)
        // Alternatifler: 
        // "bg-slate-900" (Laciverte kaçan gri)
        // "bg-zinc-950" (Metalik koyu gri)
        // "bg-black" (Tam siyah)
    },
    socials: [
        { platform: "Instagram", url: "https://instagram.com", icon: Instagram },
        { platform: "LinkedIn", url: "https://linkedin.com", icon: Linkedin },
        { platform: "Web", url: "https://emreyilmaz.com", icon: Globe },
    ],
    links: [
        {
            id: "1",
            label: "Portfolyomu İncele",
            value: "https://artydigital.com.tr",
            type: "url",
            icon: Globe
        },
        {
            id: "2",
            label: "WhatsApp'tan Ulaş",
            value: "https://wa.me/",
            type: "url",
            icon: Phone,
            color: "bg-green-500/20 text-green-100" // Özel renk örneği
        },
        {
            id: "3",
            label: "İş Bankası IBAN (Kopyala)",
            value: "TR12 0000 0000 0000 0000 0000 0000",
            type: "copy",
            icon: CreditCard
        },
    ],
    gallery: [
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80", // Örnek Ev/Ofis fotosu
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80"
    ],
    // Youtube embed linki olmalı (watch?v= değil, embed/)
    videoUrl: "https://www.youtube.com/embed/nzuKaVPS-us",

    services: [
        {
            id: "1",
            title: "UI/UX Tasarım",
            description: "Mobil odaklı, modern arayüz tasarımları.",
            price: "₺15.000'den başlar",
            icon: PenTool
        },
        {
            id: "2",
            title: "Frontend Geliştirme",
            description: "Next.js ve React ile yüksek performanslı kodlama.",
            icon: Briefcase
        },
        {
            id: "3",
            title: "Danışmanlık",
            description: "Projeniz için teknik mimari analizi.",
            price: "Saatlik ₺2.000",
            icon: Star
        }
    ],

};