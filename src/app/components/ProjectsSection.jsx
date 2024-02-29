"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Ticketing",
    description:
      "Ticketing is an online-based film ticket booking application. In this Ticketing application, customers can order tickets, see the schedule of films currently showing, and a list of films that will be shown. Users in this application are divided into two roles, namely customer and admin. For the admin role, it is possible to make changes, add and delete film details and film schedules, while for the custommer role, you can order more than one ticket in one transaction.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/AzizImastara/fe-tiketingapi",
    previewUrl: "https://ticketings.netlify.app/",
  },
  {
    id: 2,
    title: "Zwallet",
    description:
      "Zwallet is a transaction application that you can use to top up and transfer to fellow users of the zwallet application. Zwallet is built using NextJS.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/AzizImastara/zwallet-next",
    previewUrl: "https://zwallet-next.netlify.app/",
  },
  {
    id: 3,
    title: "Panda Coffe",
    description:
      "Public demands for convenience in every online activity, therefore the online coffee shop application was developed. With the availability of services via the internet, visitors can find out information about PandaCoffeShop's profile, products, customer service and place reservations. With this application, it is hoped that PandaCoffeShop's marketing program will be maximized",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/justrinoo/pandaCoffee-frontend",
    previewUrl: "https://panda-coffee-cip8cj9bf-riyaraa.vercel.app/",
  },
  {
    id: 4,
    title: "Jobrec",
    description:
      "JobRec is an online job application application that aims to make it easier for applicants to find work and make it easier for recruiters to find applicants. The way this application works is that applicants can share their CV, portfolio or work experience in this application so that recruiters can see the applicant's CV or portfolio as well as the applicant's personal data, making it easier for recruiters to contact applicants.",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/fajriputra/frontend-jobrec",
    previewUrl: "https://search-jobrect.netlify.app/",
  },
  {
    id: 5,
    title: "Ticketing Mobile",
    description:
      "Ticketing is an online-based film ticket booking application. In this Ticketing application, customers can order tickets, see the schedule of films currently showing, and a list of films that will be shown. Users in this application are divided into two roles, namely customer and admin. For the admin role, it is possible to make changes, add and delete film details and film schedules, while for the custommer role, you can order more than one ticket in one transaction.",
    image: "/images/projects/5.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/AzizImastara/tiketing-native",
    previewUrl:
      "https://drive.google.com/file/d/1Np1izsVjtyjnx_DxaXi5WbByyw0n1JLE/view",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
