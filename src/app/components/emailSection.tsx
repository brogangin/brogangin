"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import InstagramIcon from "../../../public/instagram-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
    return (
        <section
            id="contact"
            className="flex flex-col items-center justify-center min-h-[60vh] pt-16 pb-8 gap-8 relative"
        >
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute -top-1/4 left-1/2 -translate-x-1/2"></div>
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-60 w-60 z-0 blur-lg absolute -bottom-[30%] left-1/2 -translate-x-1/2"></div>
            <div className="z-10 flex flex-col items-center w-full max-w-xl pl-4">
                <h5 className="text-2xl font-bold text-white my-2 text-center">
                    Let&apos;s Connect
                </h5>
                <p className="text-[#ADB7BE] mb-4 max-w-lg text-center text-lg">
                    I&apos;m currently looking for new opportunities, my inbox is always open.
                    Whether you have a question or just want to say hi, I&apos;ll try my best to get
                    back to you!
                </p>
                <div className="socials flex flex-row gap-6 mb-6 justify-center w-full">
                    <Link href="//github.com/brogangin" target="_blank">
                        <Image src={GithubIcon} alt="Github Icon" className="w-10 h-10" />
                    </Link>
                    <Link href="//linkedin.com" target="_blank">
                        <Image src={LinkedinIcon} alt="Linkedin Icon" className="w-10 h-10" />
                    </Link>
                    <Link href="//instagram.com/bimaulanah" target="_blank">
                        <Image src={InstagramIcon} alt="Instagram Icon" className="w-10 h-10" />
                    </Link>
                </div>
                <div className="flex flex-col items-center gap-2 w-full">
                    <span className="text-white text-xl font-medium">
                        bimamaulanahariady@gmail.com
                    </span>
                    <a
                        href="mailto:bimamaulanahariady@gmail.com"
                        className="mt-2 bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 px-10 rounded-full transition-colors text-lg"
                    >
                        Email Me
                    </a>
                </div>
            </div>
        </section>
    );
};

export default EmailSection;
