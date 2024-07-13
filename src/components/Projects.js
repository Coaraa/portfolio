import React from 'react'
import '../App.css'
import '../styles/Projects.css'

function Projects() {
  return (
    <div className="section" id="projects">
      <div className="title-section">Mes projets</div>

      <div className="projects">
        <div className="project-card">
          <div className="project-title">Carte interactive de la couverture réseau française</div>
          <div className="project-year">2023</div>
          <div className="project-description">Ce projet vise à fournir une visualisation interactive de la couverture réseau en France sous forme de carte et de tableau. Cette application est destinée aussi bien aux professionnels, qui peuvent déterminer les lieux où l’accès au réseau est le plus restreint, ainsi qu’aux particuliers qui peuvent l’utiliser afin de savoir quel réseau est disponible dans leur logement.</div>
          <div className="project-technologies">Technologies : HTML, CSS, JavaScript, React, Node.js, SQL, Leaflet</div>
          <div className="project-tools">Outils : Visual Studio Code, Xampp</div>
          <div className="project-git-link">
            <a href="https://github.com/Coaraa/telecom" title="Lien GitHub">Lien GitHub</a>
          </div>
        </div>

        <div className="project-card">
          <div className="project-title">Site fictif de boutique en ligne</div>
          <div className="project-year">2023</div>
          <div className="project-description">Ce site fictif de boutique en ligne propose une sélection de produits de différentes catégories. Vous pourrez réaliser l'ensemble des actions d'un site e-commerce classique : consulter les produits, les ajouter au panier, vous connecter, passer commande, etc. Il existe également une interface d'administration pour gérer les produits et les commandes.</div>
          <div className="project-technologies">Technologies : HTML, CSS, JavaScript, PHP, MySQL, Twig, Bootstrap 5</div>
          <div className="project-tools">Outils : Visual Studio Code, Xampp</div>
          <div className="project-git-link">
            <a href="https://github.com/Coaraa/shopping-bag" title="Lien GitHub">Lien GitHub</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
