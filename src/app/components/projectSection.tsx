"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./projectCard";
import ProjectTag from "./projectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
    {
        id: 1,
        title: "15Libels",
        description: "Situs web sederhana untuk menunjukkan selera desain saya",
        image: "/images/projects/pro-15libels.png",
        // tag: ["All", "Web"],
        gitUrl: "//github.com/brogangin/15libels",
        previewUrl: "//brogangin.github.io/15libels/",
    },
    {
        id: 2,
        title: "Soccer Score Website",
        description: "Menampilkan jadwal dan hasil sepak bola dari 5 liga teratas di Eropa",
        image: "/images/projects/pro-score.jpg",
        // tag: ["All", "Web"],
        gitUrl: "//github.com/brogangin/brogangin/tree/master/src/app/soccer",
        previewUrl: "/soccer",
    },
    {
        id: 3,
        title: "TimelessTales",
        description:
            "Sebuah situs web yang memberikan anda halaman pribadi untuk menampilkan momen berharga dalam hidup Anda",
        image: "/images/projects/pro-timelesstales.png",
        // tag: ["All", "Web"],
        gitUrl: "//github.com/brogangin/CilukBa_WebDesign",
        previewUrl: "//cilukba.vercel.app/",
    },
    // {
    //     id: 3,
    //     title: "SiPerpus",
    //     description: "Book Lending Information System built using CodeIgniter4",
    //     image: "/images/projects/pro-siperpus.jpg",
    //     // tag: ["All", "Web"],
    //     gitUrl: "//github.com/brogangin/SiPerpus-CodeIgniter4",
    //     previewUrl: "#",
    // },
    {
        id: 4,
        title: "Chatbot Informasi Desa Sawotratap",
        description:
            "Chatbot layanan informasi desa yang memiliki kemampuan untuk menjelaskan informasi tentang Desa Sawotratap",
        image: "/images/projects/pro-sawotratap.png",
        // tag: ["All", "Mobile"],
        gitUrl: "//github.com/brogangin/sawotratap.chat-bot",
        previewUrl: "//sawotratap-chat-bot.vercel.app/",
    },
    {
        id: 5,
        title: "SiGarda",
        description:
            "Sistem Gondang Arsip dan Data adalah sebuah Sistem Informasi kearsipan surat untuk Desa Gondangrejo",
        image: "/images/projects/pro-sigarda.png",
        // tag: ["All", "Web"],
        gitUrl: "#",
        previewUrl: "//sigarda.my.id",
    },
    {
        id: 6,
        title: "ArsipGo E-Larsip Pajangan",
        description: "Sistem Informasi kearsipan surat untuk Kelurahan Pajangan",
        image: "/images/projects/pro-arsipgo.png",
        // tag: ["All", "Web"],
        gitUrl: "#",
        previewUrl: "//arsipgo.my.id",
    },
    {
        id: 7,
        title: "React Portfolio Website",
        description: "Website Portofolio Saya Sendiri yang dibuat dengan NextJs",
        image: "/images/projects/pro-portfolio.jpg",
        // tag: ["All", "Web"],
        gitUrl: "//github.com/brogangin/brogangin",
        previewUrl: "/",
    },
];

const ProjectsSection = () => {
    // const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    // const handleTagChange = (newTag: string) => {
    //   setTag(newTag);
    // };

    // const filteredProjects = projectsData.filter((project) => project.tag.includes(tag));

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <section className="py-8" id="projects">
            <div className=" py-8 px-4 sm:py-16 xl:px-16">
                <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                    My Projects
                </h2>
                {/* <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
        <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
        <ProjectTag onClick={handleTagChange} name="Mobile" isSelected={tag === "Mobile"} />
      </div> */}
                <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
                    {projectsData.map((project, index) => (
                        <motion.li
                            key={index}
                            variants={cardVariants}
                            initial="initial"
                            animate={isInView ? "animate" : "initial"}
                            transition={{ duration: 0.6, delay: index * 0.4 }}
                        >
                            <ProjectCard project={project} />
                        </motion.li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default ProjectsSection;
