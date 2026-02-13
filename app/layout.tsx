import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Ghulam Sarwar Khan - Secretary General & AI Developer",
    description: "Secretary General of Pakistan Tea Association with expertise in AI development, full-stack development, and executive leadership. Leading national trade administration while pioneering AI integration.",
    keywords: ["Secretary General", "Pakistan Tea Association", "AI Developer", "Executive Leadership", "Full Stack Developer", "Prompt Engineering", "Business Administration", "React", "Next.js", "TypeScript", "Python"],
    authors: [{ name: "Ghulam Sarwar Khan" }],
    openGraph: {
        title: "Ghulam Sarwar Khan - Secretary General & AI Developer",
        description: "Secretary General of Pakistan Tea Association with expertise in AI development and executive leadership.",
        type: "website",
        url: "https://portfolio-ghulam-sarwar-khan-j5hc.vercel.app/",
        images: [
            {
                url: "/images/Profile.png",
                width: 1200,
                height: 630,
                alt: "Ghulam Sarwar Khan",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Ghulam Sarwar Khan - Secretary General & AI Developer",
        description: "Secretary General of Pakistan Tea Association with expertise in AI development and executive leadership.",
        images: ["/images/Profile.png"],
    },
    icons: {
        icon: "/images/Profile.png",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Person",
                            name: "Ghulam Sarwar Khan",
                            jobTitle: "Secretary General & AI Developer",
                            description: "Secretary General of Pakistan Tea Association with expertise in AI development and executive leadership",
                            email: "sarwaronline@gmail.com",
                            telephone: "+92 3232777272",
                            url: "https://portfolio-ghulam-sarwar-khan-j5hc.vercel.app/",
                            sameAs: [
                                "https://www.linkedin.com/in/ghulam-sarwar-khan-b989b48a/",
                                "https://www.facebook.com/sarwaronline",
                                "https://www.youtube.com/channel/UC1cipUgPINuc-XFgtJCb30g",
                                "https://github.com/gsarwarkhan",
                            ],
                        }),
                    }}
                />
            </head>
            <body className="font-sans">{children}</body>
        </html>
    );
}
