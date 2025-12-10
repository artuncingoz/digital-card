import { ProfileConfig } from "@/data/cardConfig";

export const generateVCard = (data: ProfileConfig) => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:${data.name}
N:${data.name.split(' ').reverse().join(';')}
TITLE:${data.title}
TEL;TYPE=CELL:${data.contact.phone}
EMAIL;TYPE=WORK:${data.contact.email}
URL:${data.socials[0]?.url || ''}
ADR;TYPE=WORK:;;${data.location};;;;
NOTE:${data.bio}
END:VCARD`;

    const blob = new Blob([vCardData], { type: "text/vcard;charset=utf-8" });
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `${data.name.replace(" ", "_")}.vcf`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};