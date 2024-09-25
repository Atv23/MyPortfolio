"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Crowdfunding App - Blockchain Project",
    title: "Project 1",
    description: "A Crowdfunding App featuring campaign creation and donation functionalities. It ensures transparency and immutability in transactions, with Smart Contracts automating reliable fund disbursement to campaigns.",
    stack: [{ name: "Ethereum:Sepolia" }, { name: "Solidity" }, { name: "ThirdWeb" }, { name: "MetaMask" }],
    image: "/assets/project/project1.png",
    live: "no",
    github: "https://github.com/Atv23/Crowdfunding-App",
  },
  {
    num: "02",
    category: "Knowtify Tumkur - Full Stack Project",
    title: "Project 2",
    description: "A centralized information system for institutions across Tumkur District under the Tumkur Smart City Plan. Users can access detailed information on institutions and provide feedback to ensure authenticity and accuracy.",
    stack: [{ name: "HTML" }, { name: "CSS" }, { name: "JavaScript" }, { name: "React.js" }, { name: "MongoDB" }, { name: "Git" }],
    image: "/assets/project/project2.png",
    live: "no",
    github: "https://github.com/Atv23/HackOSmart11",
  },
  {
    num: "03",
    category: "City Travel Analysis - Python Project",
    title: "Project 3",
    description: "Analyzed real-time U.S. air traffic data to identify the most traveled city-market area. Used clustering technique to process the data and visualized results with graphs, and metagraph representations on a web application.",
    stack: [{ name: "Python" }, { name: "Metagraph library" }, { name: "Streamlit" }],
    image: "/assets/project/project3.png",
    live: "no",
    github: "https://github.com/Atv23/Metagraph-Based-City-Travel-Analysis",
  },
  {
    num: "04",
    category: "Art Gallery Management System - DBMS Project",
    title: "Project 4",
    description: "A database-driven Art Gallery platform with different interfaces for Artists and Customers. Artists can submit paintings for only-display or auction, while customers can view and purchase them.",
    stack: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "EJS" }, { name: "MongoDB" }],
    image: "/assets/project/project4.png",
    live: "no",
    github: "https://github.com/Atv23/ArtGalleryMgmt",
  },
  {
    num: "05",
    category: "Space Shooter Game",
    title: "Project 5",
    description: "A dynamic space shooter game where players control a spaceship to battle enemy ships. Enemy ships are destroyed by the player's bullets, while the player must dodge enemy fire to survive and destroy all enemies.",
    stack: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "JavaScript" }],
    image: "/assets/project/project5.png",
    live: "https://atv23.github.io/Space-Shooting-Game/",
    github: "https://github.com/Atv23/Space-Shooting-Game",
  },
  {
    num: "06",
    category: "Flying Balloon Game",
    title: "Project 6",
    description: "A thrilling balloon adventure game where players control a balloon, soaring higher by holding the mouse key. Fuel depletes faster at greater altitudes, and the game ends if the balloon collides with trees or runs out of fuel.",
    stack: [{ name: "HTML Canvas" }, { name: "CSS 3" }, { name: "JavaScript" }],
    image: "/assets/project/project6.png",
    live: "https://atv23.github.io/Flying-Balloon-Game/",
    github: "https://github.com/Atv23/Flying-Balloon-Game",
  },
  {
    num: "07",
    category: "Tic-Tac-Toe Game",
    title: "Project 7",
    description: "A classic two-player Tic-Tac-Toe game where players take turns marking Xs and Os on a grid. The goal is to be the first to align three marks in a row, column, or diagonal.",
    stack: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "JavaScript" }],
    image: "/assets/project/project7.png",
    live: "https://atv23.github.io/Tic-Tac-Toe/",
    github: "https://github.com/Atv23/Tic-Tac-Toe",
  },
  {
    num: "08",
    category: "Dice Game",
    title: "Project 8",
    description: "A fun, luck-based dice game where players choose to be Player 1 or Player 2, roll the dice, and let fate decide the winner. The game keeps track of each player's wins for added competition.",
    stack: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "JavaScript" }],
    image: "/assets/project/project8.png",
    live: "https://atv23.github.io/Dice_Game/",
    github: "https://github.com/Atv23/Dice_Game",
  },
  {
    num: "09",
    category: "Sorting Visualisation",
    title: "Project 9",
    description: "An interactive Sort visualization built during my learning to explore DSA. It features dynamic array generation, step-by-step sorting, and color-coded comparisons, providing an engaging way for beginners to understand the sorting process.",
    stack: [{ name: "HTML 5" }],
    image: "/assets/project/project9.png",
    live: "https://atv23.github.io/Bubble-Sort-Visualisation/",
    github: "https://github.com/Atv23/Bubble-Sort-Visualisation",
  },
  {
    num: "10",
    category: "ToDo List - Full Stack Project",
    title: "Project 10",
    description: "A dynamic to-do list application that enables users to create, manage, and delete tasks across multiple categories. It stores data in a database, providing seamless user interaction and organized task management.",
    stack: [{ name: "HTML" }, { name: "CSS" }, { name: "JavaScript" },{ name: "Node.js" },{ name: "EJS" },{ name: "MongoDB" }],
    image: "/assets/project/project10.png",
    live: "no",
    github: "https://github.com/Atv23/ToDo-List",
  },
  {
    num: "11",
    category: "Blog App - Full Stack Project",
    title: "Project 11",
    description: "A user-friendly blog application that allows users to create, edit, and delete posts. It efficiently stores data in a database, enabling seamless content management and a streamlined experience for readers.",
    stack: [{ name: "HTML" }, { name: "CSS" }, { name: "JavaScript" },{ name: "Node.js" },{ name: "EJS" },{ name: "MongoDB" }],
    image: "/assets/project/project11.png",
    live: "no",
    github: "https://github.com/Atv23/Blog-App",
  },
  {
    num: "12",
    category: "Keyboard Instruments",
    title: "Project 12",
    description: "An interactive JavaScipt project that plays instrument sounds when specific keys on the keyboard are pressed, displaying the key name along with a picture of the instrument.",
    stack: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "JavaScript" }],
    image: "/assets/project/project12.png",
    live: "https://atv23.github.io/Keyboard_Instruments/",
    github: "https://github.com/Atv23/Keyboard_Instruments",
  },
  {
    num: "13",
    category: "Student Management - Java Project",
    title: "Project 13",
    description: "A console-based Java application for managing student records using JDBC. It allows users to add, update, display and delete student information, providing a straightforward menu-driven interface.",
    stack: [{ name: "Java" }, { name: "JDBC" }, { name: "MySQL" }],
    image: "/assets/project/project13.png",
    live: "no",
    github: "https://github.com/Atv23/Student-Management-Java",
  },
  {
    num: "14",
    category: "Note Taker - Java Project",
    title: "Project 14",
    description: "An interactive Note-Taker app that allows users to add, update, and delete notes through a user-friendly interface. It stores data in a database and displays notes in a dedicated section, utilizing Hibernate.",
    stack: [{ name: "Java" }, { name: "Hibernate" },{ name: "MySQL" }, { name: "Maven" },{ name: "Bootstrap" }],
    image: "/assets/project/project14.png",
    live: "no",
    github: "https://github.com/Atv23/NoteTaker",
  },
  {
    num: "15",
    category: "Feedback Form - Java Project",
    title: "Project 15",
    description: "A web-based feedback form application built while learning Servlets, featuring a user-friendly interface to collect user input. It stores data in a database and displays submitted feedback.",
    stack: [{ name: "Java" }, { name: "Servlet" },{ name: "MySQL" }, { name: "Maven" },{ name: "Bootstrap" }],
    image: "/assets/project/project15.png",
    live: "no",
    github: "https://github.com/Atv23/Feedback-Form",
  },
  {
    num: "16",
    category: "Search Engine - Java Project",
    title: "Project 16",
    description: "A search engine project that mimics the functionality of Google, built using Spring MVC and the RedirectView class. It takes user input, transforms it into an HTTP URL, and redirects to display Google search results.",
    stack: [{ name: "Spring MVC" }, { name: "Java" }, { name: "Maven" }],
    image: "/assets/project/project16.png",
    live: "no",
    github: "no",
  },
  {
    num: "17",
    category: "Complex Form - Java Project",
    title: "Project 17",
    description: "A Spring MVC project using Hibernate to accept Student details in a complex form, and store the details in the database. It follows Standard Data Flow using Service Layer and also displays the Student data in Views Page.",
    stack: [{ name: "Spring MVC" }, { name: "Java" }, { name: "MySQL" }, { name: "Spring ORM" }, { name: "Maven" }],
    image: "/assets/project/project17.png",
    live: "no",
    github: "no",
  },
  {
    num: "18",
    category: "File Upload - Java Project",
    title: "Project 18",
    description: "A Spring MVC project to upload files using form. It stores the file on the deployed path of the project and fetches it to display the uploaded file in the view page.",
    stack: [{ name: "Spring MVC" }, { name: "Java" }, { name: "Maven" }],
    image: "/assets/project/project18.png",
    live: "no",
    github: "no",
  },
];

const Project = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 overflow-hidden"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* Outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              {/* project description */}
              <p className="text-white/60" style={{ textAlign: 'justify' }}>{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {project.live !== "no" ? (
                  // <Link href={project.live} target="_blank">
                  <Link
                    href={project.live}
                    target="_blank"
                  >
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                ) : (
                  <div className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group cursor-not-allowed">
                    <BsArrowUpRight className="text-gray-500 text-3xl" />
                  </div>
                )}
                {/* gitHub project button */}
                {project.github !== "no" ? (
                  <Link href={project.github} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>GitHub repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                ) : (
                  <div className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group cursor-not-allowed">
                    <BsGithub className="text-gray-500 text-3xl" />
                  </div>
                )}
                {/* <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link> */}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* Image */}
                      <div className="relative w-full h-[100%] flex justify-center items-center overflow-hidden">
                        <Image
                          src={project.image}
                          fill
                          className="object-fill"
                          alt="Project Cover"
                          priority
                        />
                      </div>

                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />

            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Project;