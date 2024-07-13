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
          <div className="project-technologies">HTML / CSS / JavaScript / React, Node.js / SQL / Leaflet</div>
          <div className="project-tools">Visual Studio Code / Xampp</div>
          <div className="project-git-link">
            <a href="https://github.com/Coaraa/telecom" title="GitHub" target="_blank" rel="noopener noreferrer">Lien GitHub du projet</a>
          </div>
        </div>

        <div className="project-card">
          <div className="project-title">Site fictif de boutique en ligne</div>
          <div className="project-year">2023</div>
          <div className="project-description">Ce site fictif de boutique en ligne propose une sélection de produits de différentes catégories. Vous pourrez réaliser l'ensemble des actions d'un site e-commerce classique : consulter les produits, les ajouter au panier, vous connecter, passer commande, etc. Il existe également une interface d'administration pour gérer les produits et les commandes.</div>
          <div className="project-technologies">HTML / CSS / JavaScript / PHP / MySQL / Twig / Bootstrap 5</div>
          <div className="project-tools">Visual Studio Code / Xampp</div>
          <div className="project-git-link">
            <a href="https://github.com/Coaraa/shopping-bag" title="GitHub" target="_blank" rel="noopener noreferrer">Lien GitHub du projet</a>
          </div>
        </div>

        <div className="project-card">
          <div className='project-title'>It takes IO</div>
          <div className='project-year'>2022</div>
          <div className='project-description'>It takes IO est un jeu de plateforme à deux joueurs. Ceux-ci doivent évoluer à travers les différents niveaux pour ouvrir la porte principale et accéder au niveau suivant. Ce jeu est basé sur un ensemble d'énigmes à résoudre pour activer des portes logiques. Les deux personnages incarnés sont ainsi complémentaires en représentant un 0 et un 1. Le but est ainsi de coopérer pour terminer tous les niveaux en trouvant la bonne combinaison pour déverrouiller la porte et en évitant les obstacles.</div>
          <div className='project-technologies'>C++ / SFML</div>
          <div className='project-tools'>Visual Studio Code / Linux</div>
          <div className='project-git-link'>
            <a href='https://github.com/Coaraa/It-takes-IO' title='GitHub' target='_blank' rel='noopener noreferrer'>Lien GitHub du projet</a>
          </div>
        </div>

        <div className="project-card">
          <div className="project-title">SokIOban</div>
          <div className="project-year">2024</div>
          <div className="project-description">SokIOban est un jeu en deux dimensions où le joueur doit placer des caisses sur des cases cibles. Il peut se déplacer dans les quatre directions et pousser une seule caisse à la fois. Une fois toutes les caisses sur les boutons, le niveau est réussi et le joueur passe au niveau suivant. L'objectif est de réussir avec le moins de coups possibles.</div>
          <div className="project-technologies">Java / Swing</div>
          <div className="project-tools">IntelliJ IDEA</div>
          <div className="project-git-link">
            <a href="https://github.com/Coaraa/Sokoban" title="GitHub" target="_blank" rel="noopener noreferrer">Lien GitHub du projet</a>
          </div>
        </div>

        <div className="project-card">
          <div className="project-title">Chat de discussion UDP</div>
          <div className="project-year">2024</div>
          <div className="project-description">Ce projet est un chat de discussion local utilisant le protocole UDP. Il permet à plusieurs clients connectés au même réseau de discuter en temps réel. Les messages envoyés par un client sont reçus par les clients dans la même salle de discussion. Chaque client dispose de son propre pseudo et peut utiliser différentes commandes pour interagir avec le chat.</div>
          <div className="project-technologies">Java / DatagramSocket</div>
          <div className="project-tools">IntelliJ IDEA</div>
          <div className="project-git-link">
            <a href="https://github.com/Coaraa/ChatUDP" title="GitHub" target="_blank" rel="noopener noreferrer">Lien GitHub du projet</a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Projects
