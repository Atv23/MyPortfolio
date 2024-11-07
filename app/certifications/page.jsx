"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const certifications = [
  {
    num: "01",
    title: "Technologies",
    description: "Certificates demonstrating my commitment to mastering diverse technologies, highlighting my continuous learning and dedication to professional growth.",
    href: "https://drive.google.com/drive/folders/1YceanzX1dfkEPWFGG7yRWbQ7hR8k4zqv?usp=sharing",
  },
  {
    num: "02",
    title: "Internship",
    description: "Internship certificate from Toshiba Software India, highlighting my contributions to product development and my hands-on experience in coding and quality assurance.",
    href: "https://drive.google.com/drive/folders/1HfCgGFEyqLbLrk2sygbixeh1tSP7kYDv?usp=sharing",
  },
  {
    num: "03",
    title: "Theatre",
    description: "As a proud member of the Theatre Club in college, I directed and performed in Street Play, Skit & Mime, clinching victories at various colleges across Karnataka.",
    href: "https://drive.google.com/drive/folders/1j_wCCuPGaA2R5NJN6r75CoJvtSGtMf3a?usp=sharing",
  },
  {
    num: "04",
    title: "Participations",
    description: "Certificates of participation from tech events, open-source contributions and hackathons, showcasing my commitment to continuous learning and problem-solving.",
    href: "https://drive.google.com/drive/folders/1KNkpE5dGIck_DG-1zrXI_13kQ2uWBh_V?usp=sharing",
  },
];

const Certifications = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {certifications.map((certification, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-3 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{certification.num}</div>
                  <Link href={certification.href} target="_blank"
                    className="w-[60px] h-[60px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-4xl"/>
                  </Link>
                </div>

                {/* title */}
                <h2 className="text-[40px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {certification.title}
                </h2>

                {/* description */}
                <p style={{ textAlign: 'justify' }}>{certification.description}</p>

                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
