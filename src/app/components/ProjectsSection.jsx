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
      "Ticketing is an online-based film ticket booking application. Users can order tickets, see the schedule of films currently showing, and a list of films that will be shown. There are two user roles in this application, namely customer and admin. Admins can make changes, additions and deletions to film details and film schedules, while customers can order more than one ticket in one transaction.",
    image: "/images/projects/11.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/AzizImastara/fe-tiketingapi",
    previewUrl: "https://ticketings.netlify.app/",
  },
  {
    id: 2,
    title: "Zwallet",
    description:
      "Zwallet is a transaction application that makes it easy for users to top up and transfer to fellow Zwallet application users. By using the NextJS platform, Zwallet offers a responsive and fast user experience in carrying out financial transactions online. Strong security features and an intuitive interface make Zwallet an ideal choice for those who want to make transactions easily and securely..",
    image: "/images/projects/22.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/AzizImastara/zwallet-next",
    previewUrl: "https://zwallet-next.netlify.app/",
  },
  {
    id: 3,
    title: "Panda Coffe",
    description:
      "PandaCoffeShop is an online coffee application that allows visitors to get information about profiles, products, customer service, and make reservations. This application is designed to improve PandaCoffeShop's marketing program by providing easy access to users via the internet.",
    image: "/images/projects/33.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/justrinoo/pandaCoffee-frontend",
    previewUrl: "https://panda-coffee-cip8cj9bf-riyaraa.vercel.app/",
  },
  {
    id: 4,
    title: "Jobrec",
    description:
      "JobRec is an online recruiting application that makes it easier for job seekers to find jobs and makes it easier for recruiters to find potential applicants. This application allows applicants to share their CV, portfolio or work experience so that recruiters can view it along with the applicant's personal data, facilitating contact between recruiters and applicants.",
    image: "/images/projects/44.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/fajriputra/frontend-jobrec",
    previewUrl: "https://search-jobrect.netlify.app/",
  },
  {
    id: 5,
    title: "Ticketing Mobile",
    description:
      "Ticketing is an online-based film ticket booking application. Users can order tickets, see the schedule of films currently showing, and a list of films that will be shown. There are two user roles in this application, namely customer and admin. Admins can make changes, additions and deletions to film details and film schedules, while customers can order more than one ticket in one transaction.",
    image: "/images/projects/55.png",
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
