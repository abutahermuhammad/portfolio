import { memo } from "react";
import S from "./HomeProjects.module.sass";
import clsx from "clsx";
import Container from "../../components/Container";
import ProjectCard from "./../../card/ProjectCard";
import { imageBuilder } from "../../../utils/sanity";

const HomeProjects = ({ className, title, description, projects }) => {
  return (
    <section className={clsx(S.__section, className)}>
      <div className={S.__header}>
        <Container className={S.__container}>
          <h4 className={S.__subHeading}>{title}</h4>
          <h2 className={S.__heading}>{description}</h2>
        </Container>
      </div>

      <div className={S.__body}>
        {projects.map((project, i) => (
          <ProjectCard
            key={i}
            className=""
            category={project.category?.title}
            thumbnail={imageBuilder(project.thumbnail)
              .width(562)
              .height(323)
              .url()}
            title={project.title}
            excerpt={project.excerpt}
            technologies={project.technology}
            url={project.liveUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default memo(HomeProjects);
