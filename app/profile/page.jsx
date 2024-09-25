"use client";
import { FaCss3, FaJava, FaJs, FaNodeJs, FaHtml5, FaSchool } from 'react-icons/fa';
import { SiMysql, SiMongodb, SiHibernate } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { BiLogoSpringBoot } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
//about data
const about = {
  icon: "/assets/profile/me-8.svg",
  title: "About me",
  description:
    "I’m a curious problem-solver with a knack for crafting seamless, efficient digital experiences. Challenges excite me—I love diving headfirst into them, pushing my limits, and unlocking new levels of growth. When I’m not coding up a storm, you can find me whipping up delicious meals or playing sports outdoors, fueling both my creativity and my spirit. It’s all about striking that perfect balance between professional prowess and personal passion!",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Atharva Shukla"
    },
    {
      fieldName: "Email",
      fieldValue: "atharva.1si20is007@gmail.com"
    },
    {
      fieldName: "Status",
      fieldValue: "Open For Work"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91)9199269893"
    },
    {
      fieldName: "Gender",
      fieldValue: "Male"
    },
    {
      fieldName: "Availability",
      fieldValue: "15 days or less"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian"
    },
    {
      fieldName: "Preference",
      fieldValue: "Backend Developer"
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi"
    },
    {
      fieldName: "Address",
      fieldValue: "Lucknow,Uttar Pradesh"
    },
  ],
};
//experience data
const experience = {
  icon: "/assets/profile/experience.svg",
  title: "My Experience",
  description: "I am a recent graduate excited to embark on my career in the tech industry. With hands-on experience gained during an internship, I am now seeking full-time opportunities to further enhance my skills, collaborate with talented teams and contribute to cutting-edge solutions.",
  items: [
    {
      company: "Toshiba Software (India) Pvt. Ltd.",
      position: "Technical Intern",
      duration: "April 2024 - July 2024",
      location: "Bangalore",
      workdone: [
        "Worked on the product development team for Toshiba’s Bar-code printers, handling activities in the Service Layer.",
        "Conducted code reviews, verified and resolved bugs, implemented new functions in the codebase as per requirements, performed weekly sanity tests on package releases, and learned TPCL to manage print commands for Toshiba printers.",
      ],
    },
  ],
};
//education data
const education = {
  icon: "/assets/profile/education.svg",
  title: "My Education",
  description: "'Education is not just about going to school and getting a degree. It's about widening your knowledge and absorbing the truth about life.'",
  items: [
    {
      institution: "Siddaganga Institute of Technology",
      areaOfStudy: "B.E. in Computer and Information Science",
      percentage: "9.21 CGPA",
      duration: "December 2020 - October 2024",
      location: "Tumkur, Karnataka",
    },
    {
      institution: "Sunbeam English School Bhagwanpur",
      areaOfStudy: "HSC(12th) in CBSE Board with PCM",
      percentage: "79%",
      duration: "May 2017 - May 2019",
      location: "Varanasi, Uttar Pradesh",
    },
    {
      institution: "St.Xavier's English School, Chaibasa",
      areaOfStudy: "SSC(10th) in ICSE with Science",
      percentage: "95.4%",
      duration: "September 2007 - April 2017",
      location: "Chaibasa, Jharkhand",
    },
  ],
};
//skills data
const skills = {
  icon: "/assets/profile/skills.svg",
  title: "My Skills",
  description: "Proficient in a diverse range of technologies, I am currently more aligned with Java backend development. I continuously seek to enhance my skills and stay updated with the latest tech trends. Below are the key skills I have developed, reflecting my commitment to personal and professional growth.",
  skillList: [
    {
      icon: <TbBrandCpp />,
      name: "C++ Programming",
    },
    {
      icon: <FaJava />,
      name: "Java Programming",
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
    },
    {
      icon: <SiHibernate />,
      name: "Hibernate Framework",
    },
    {
      icon: <BiLogoSpringBoot />,
      name: "Spring Framework",
    },
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
  ],
};

import {
  Tabs, TabsContent, TabsList, TabsTrigger
} from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";


const Profile = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="skills"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold flex items-center gap-2">
                    <img src={skills.icon} alt="Experience Icon" className="w-10 h-10" />
                    {skills.title}</h3>
                  <p className="max-w-full text-white/60 mx-auto xl:mx-0" style={{ textAlign: 'justify' }}>
                    {skills.description}
                  </p>
                </div>
                <ScrollArea className="h-[350px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-7xl transition-all duration-300 group-hover:text-accent">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold flex items-center gap-2">
                  <img src={experience.icon} alt="Experience Icon" className="w-10 h-10" />
                  {experience.title}
                </h3>
                <p className="max-w-full text-white/60 mx-auto xl:mx-0" style={{ textAlign: 'justify' }}>
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-1 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li key={index} className="w-full bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-full text-center lg:text-left">
                            {item.position}</h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[8px] h-[8px] mt-2 rounded-full bg-accent"></span>
                            <h3 className="text-xl max-w-full mt-2 text-center lg:text-left">
                              {item.company}
                            </h3>
                          </div>
                          {/* Work Done Section */}
                          <ul className="list-disc list-inside ml-5 mt-2 text-white/80 max-w-full" style={{ textAlign: 'justify' }}>
                            {item.workdone.map((task, taskIndex) => (
                              <li key={taskIndex} className="whitespace-normal pl-2 text-sm" style={{ textIndent: '-1em', paddingLeft: '1.5em' }}>
                                {task}
                              </li>
                            ))}
                          </ul>
                          <div className="flex items-center mt-2 gap-2">
                            {/* Location Icon */}
                            <GoLocation className="text-accent h-4 w-4" />
                            {/* Location Name */}
                            <p className="text-white/60">{item.location}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold flex items-center gap-2">
                  <img src={education.icon} alt="Experience Icon" className="w-10 h-10" />
                  {education.title}
                </h3>
                <p className="max-w-full text-white/60 mx-auto xl:mx-0" style={{ textAlign: 'justify' }}>
                  {education.description}
                  <p className="text-right"> - Shakuntala Devi</p>
                </p>

                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-1 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li key={index} className="w-full bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-full text-center lg:text-left">
                            {item.areaOfStudy}</h3>
                          <div className="flex items-center gap-3">
                            {/* FaSchool Icon */}
                            <FaSchool className="text-accent w-5 h-5" />
                            <h3 className="text-xl max-w-full mt-2 text-center lg:text-left">
                              {item.institution}
                            </h3>
                          </div>
                          {/* Result */}
                          <p className="text-accent font-bold text-center lg:text-left">
                            <span className="text-white/60">Result:</span> {item.percentage}
                          </p>
                          {/* Location */}
                          <div className="flex items-center gap-2">
                            <GoLocation className="text-accent h-4 w-4" />
                            <p className="text-white/60">{item.location}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold flex items-center gap-2">
                <img src={about.icon} alt="Experience Icon" className="w-10 h-10" />
                  {about.title}
                </h3>
                <p className="max-w-full text-white/60 mx-auto xl:mx-0" style={{ textAlign: 'justify' }}>
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-full mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>

  );
};

export default Profile