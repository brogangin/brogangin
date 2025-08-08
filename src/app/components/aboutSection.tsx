"use client";
import React, { useTransition, useState, useRef } from "react";
import Image from "next/image";
import TabButton from "./tabButton";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>PHP</li>
                <li>CodeIgniter</li>
                <li>JavaScript</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>PostgreSQL</li>
                <li>React</li>
                <li>Next</li>
                <li>Bootstrap</li>
                <li>Tailwind</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>Teknik Informatika | Universitas Dr. Soetomo</li>
                <li>Sistem Informasi | Universitas Negeri Surabaya</li>
            </ul>
        ),
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="list-disc pl-2">
                <li>-</li>
                <li>-</li>
            </ul>
        ),
    },
];

// Komponen gambar dengan efek tilt interaktif
function TiltImage() {
    const imgRef = useRef<HTMLDivElement>(null);
    const [style, setStyle] = useState<React.CSSProperties>({});

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const el = imgRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * 10;
        const rotateY = ((x - centerX) / centerX) * 10;
        setStyle({
            transform: `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`,
            transition: "transform 0.1s",
            willChange: "transform",
        });
    };

    const handleMouseLeave = () => {
        setStyle({
            transform: "rotateX(0deg) rotateY(0deg) scale(1)",
            transition: "transform 0.5s",
            willChange: "transform",
        });
    };

    return (
        <div
            ref={imgRef}
            className="[perspective:1000px] w-fit"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ display: "inline-block" }}
        >
            <Image
                src="/images/about-image.png"
                width={500}
                height={500}
                alt={""}
                className="rounded-xl shadow-xl"
                style={style}
            />
        </div>
    );
}

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id: string) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className="text-white min-h-screen content-center py-24" id="about">
            <div className="rounded-xl bg-primary-700/50 md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-12 xl:px-16">
                <TiltImage />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base lg:text-lg">
                        Saya adalah pengembang web full stack dengan minat dalam menciptakan
                        aplikasi web yang interaktif dan responsif. Saya memiliki pengalaman bekerja
                        dengan PHP, JavaScript, React, Next, Node.js, Express, PostgreSQL, HTML,
                        CSS, dan Git. Saya adalah pembelajar cepat dan selalu ingin memperluas
                        pengetahuan serta keterampilan saya. Saya juga senang bekerja dalam tim dan
                        antusias untuk berkolaborasi menciptakan aplikasi yang luar biasa.
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}
                        >
                            {" "}
                            Skills{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("education")}
                            active={tab === "education"}
                        >
                            {" "}
                            Education{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("certifications")}
                            active={tab === "certifications"}
                        >
                            {" "}
                            Certifications{" "}
                        </TabButton>
                    </div>
                    <div className="mt-8">{TAB_DATA.find((t) => t.id === tab)?.content}</div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
