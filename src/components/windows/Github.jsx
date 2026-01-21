import React from 'react'
import Macwindow from './Macwindow'
import "./git.scss"
const Github = () => {
    


  const projects = [
    {
      id: 1,
      image: "https://picsum.photos/id/1015/600/400",
      title: "Personal Portfolio",
      description:
        "A responsive personal portfolio website built to showcase projects and skills.",
      tags: ["React", "SCSS", "Framer Motion"],
      repoLink: "https://github.com/username/portfolio",
      demoLink: "https://portfolio-demo.vercel.app"
    },
    {
      id: 2,
      image: "https://picsum.photos/id/1040/600/400",
      title: "E-commerce App",
      description:
        "An e-commerce web app with cart, checkout, and product filtering features.",
      tags: ["React", "Redux", "Node.js"],
      repoLink: "https://github.com/username/ecommerce",
      demoLink: "https://ecommerce-demo.vercel.app"
    },
    {
      id: 3,
      image: "https://picsum.photos/id/1039/600/400",
      title: "Machine Learning Project",
      description:
        "A machine learning based application that predicts outcomes using trained models.",
      tags: ["Python", "Machine Learning", "Flask"],
      repoLink: "https://github.com/username/ml-project",
      demoLink: "https://ml-demo.vercel.app"
    }
  ];

  






  return (
    <Macwindow>
        <div id="git">
            {projects.map(project => (
                <div id="card">
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} />

            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="tags">
              {project.tags.map(tag => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>

            <div className="links">
              <a href={project.repoLink} target="_blank" rel="noreferrer">
                Code
              </a>
              
              <a href={project.demoLink} target="_blank" rel="noreferrer">
                Live Demo
              </a>
            </div>
          </div>
          </div>
        ))}
        </div>
    </Macwindow>
  )
}

export default Github
