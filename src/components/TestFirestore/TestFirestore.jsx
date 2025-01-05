import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebaseConfig"; // Votre configuration Firebase
import "./testFirestore.scss";

const ProjectsList = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Projets"));
        const projectsArray = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProjects(projectsArray);
        setLoading(false);
      } catch (error) {
        console.error("Erreur lors de la récupération des projets :", error);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <p>Chargement des projets...</p>;
  }

  return (
    <div>
      <h1>Mes Projets</h1>
      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h2>{project.title}</h2>
            <p><strong>Année :</strong> {project.year}</p>
            <p><strong>Description :</strong> {project.description}</p>
            {project.imageLink1 && (
              <img
                src={project.imageLink1}
                alt={project.title}
                style={{ width: "100%", maxWidth: "400px", borderRadius: "8px" }}
              />
            )}
            <p>
              <strong>Technologies utilisées :</strong>{" "}
              {project.technologies.join(", ")}
            </p>
            <p>
              <strong>Outils :</strong> {project.tools.join(", ")}
            </p>
            <p>
              <strong>Code source :</strong>{" "}
              <a
                href={project.gitLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir sur GitHub
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsList;
