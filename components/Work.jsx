"use client";

import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { Button } from "./ui/button";
import ProjectCard from "./ProjectCard";

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
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
            debitis!
          </p>
          <Link href="/projects">
            <Button>All projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: "true" }}
          >
            {/* show only the first 4 projects for the slides */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
