import React from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container mx-auto px-4 lg:px-24 py-12 flex flex-col lg:flex-row justify-center lg:justify-between items-center">
        <div className="logo">
          <Image
            src="/images/LOGO-removebg.png"
            width={75}
            height={75}
            alt="logo"
          />
        </div>
        <div className="z-10">
          <h5 className="text-xl text-white">Let&apos;s Connect</h5>
          <div className="socials flex flex-row gap-2 py-4">
            <Link href="https://github.com/AzizImastara">
              <Image src={GithubIcon} alt="Github Icon" />
            </Link>
            <Link href="https://www.linkedin.com/in/azizimastara/">
              <Image src={LinkedinIcon} alt="Linkedin Icon" />
            </Link>
          </div>
        </div>
      </div>
      <div className="copyright container mx-auto px-4 lg:px-24 py-4 mb-4">
        <p className="text-white">© 2024 Aziz Imastara</p>
      </div>
    </footer>
  );
};

export default Footer;
