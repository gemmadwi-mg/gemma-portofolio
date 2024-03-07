"use client";

import ProjectCard from "@/components/ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const projectData = [
  {
    image: "/work/5.png",
    category: "next js",
    name: "Angkringan Cak Meri Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, incidunt!",
    link: "https://angkringan-cakmeri.vercel.app/",
    github: "https://github.com/gemmadwi-mg/angkringan-cakmeri",
  },
  {
    image: "",
    category: "next js",
    name: "Trello Clone",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, incidunt!",
    link: "/projects",
    github: "https://github.com/gemmadwi-mg/trello-clone",
  },
  {
    image: "",
    category: "next js",
    name: "Airbnb Clone",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, incidunt!",
    link: "/projects",
    github: "https://github.com/gemmadwi-mg/Airbnb-clone",
  },
  {
    image: "",
    category: "next js",
    name: "LMS Platform",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, incidunt!",
    link: "https://lms-platform-pink-eta.vercel.app/",
    github: "https://github.com/gemmadwi-mg/lms-platform",
  },
  {
    image: "/work/6.png",
    category: "react js",
    name: "Frontend: Website Event",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, incidunt!",
    link: "/projects",
    github: "https://github.com/gemmadwi-mg/landing-semina",
  },
  {
    image: "/work/7.png",
    category: "Flutter",
    name: "Frontend E-Wallet Mobile Apps",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, incidunt!",
    link: "/",
    github: "/",
  },
  {
    image: "/work/9.png",
    category: "Flutter",
    name: "Frontend Ecommerce and Chat Apps",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, incidunt!",
    link: "/",
    github: "/",
  },
  {
    image: "/work/10.png",
    category: "Flutter",
    name: "Frontend Food Market",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, incidunt!",
    link: "/",
    github: "/",
  },
  {
    image: "/work/7.png",
    category: "Laravel",
    name: "Backend Laravel E-Wallet Mobile Apps",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, incidunt!",
    link: "/",
    github: "https://github.com/gemmadwi-mg/shamo-backend",
  },
  {
    image: "/work/9.png",
    category: "Laravel",
    name: "Backend Laravel Ecommerce and Chat Apps",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, incidunt!",
    link: "/",
    github: "/",
  },
  {
    image: "/work/10.png",
    category: "Laravel",
    name: "Backend Laravel Food Market",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, incidunt!",
    link: "/",
    github: "/",
  },
  {
    image: "/work/6.png",
    category: "Fullstack",
    name: "Full-Stack JavaScript Developer MERN: Website Event",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, incidunt!",
    link: "/",
    github: "/",
  },
  {
    image: "/work/7.png",
    category: "Fullstack",
    name: "Full-Stack Laravel Flutter: Build E-Wallet Mobile Apps",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, incidunt!",
    link: "/",
    github: "/",
  },

  {
    image: "/work/8.png",
    category: "Fullstack",
    name: "Full-Stack JavaScript Developer MERN: Website Top Up Voucher Game",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, incidunt!",
    link: "/",
    github: "https://github.com/gemmadwi-mg/storegema",
  },
  {
    image: "/work/9.png",
    category: "Fullstack",
    name: "Full-Stack Laravel Flutter: Building E-Commerce And Chat Apps",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, incidunt!",
    link: "/",
    github: "/",
  },
  {
    image: "/work/10.png",
    category: "Fullstack",
    name: "Full-Stack Laravel Flutter: FoodMarket Apps",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, incidunt!",
    link: "/",
    github: "/",
  },
  {
    image: "/work/11.png",
    category: "Fullstack",
    name: "Full-Stack JavaScript Developer MERN: Website Travel",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, incidunt!",
    link: "/",
    github: "/",
  },
];

const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  const filteredProjects = projectData.filter((project) => {
    return category === "all projects"
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-6 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
