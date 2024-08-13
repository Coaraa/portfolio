import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './myCarousel.scss';

function MyCarousel() {
  const data = [
    {
      id: 1,
      title: 'Carte interactive de la couverture réseau française',
      description: 'Ce projet vise à fournir une visualisation interactive de la couverture réseau en France sous forme de carte et de tableau. Cette application est destinée aussi bien aux professionnels, qui peuvent déterminer les lieux où l’accès au réseau est le plus restreint, ainsi qu’aux particuliers qui peuvent l’utiliser afin de savoir quel réseau est disponible dans leur logement.',
      image: '/carousel/telecom.png',
      year: '2023',
      gitLink: <a href="https://github.com/Coaraa/telecom" title="GitHub" target="_blank" rel="noopener noreferrer">Lien GitHub du projet</a>
    },
    {
      id: 2,
      title: 'Site fictif de boutique en ligne',
      description: "Ce site fictif de boutique en ligne propose une sélection de produits de différentes catégories. Vous pourrez réaliser l'ensemble des actions d'un site e-commerce classique : consulter les produits, les ajouter au panier, vous connecter, passer commande, etc. Il existe également une interface d'administration pour gérer les produits et les commandes.",
      image: "/carousel/boutique.png",
      year: '2023',
      gitLink: <a href="https://github.com/Coaraa/shopping-bag" title="GitHub" target="_blank" rel="noopener noreferrer">Lien GitHub du projet</a>
    },
    {
      id: 3,
      title: 'It takes IO',
      description: "It takes IO est un jeu de plateforme à deux joueurs. Ceux-ci doivent évoluer à travers les différents niveaux pour ouvrir la porte principale et accéder au niveau suivant. Ce jeu est basé sur un ensemble d'énigmes à résoudre pour activer des portes logiques. Les deux personnages incarnés sont ainsi complémentaires en représentant un 0 et un 1. Le but est ainsi de coopérer pour terminer tous les niveaux en trouvant la bonne combinaison pour déverrouiller la porte et en évitant les obstacles.",
      image: "/carousel/it-takes-io.png",
      year: '2024',
      gitLink: <a href='https://github.com/Coaraa/It-takes-IO' title='GitHub' target='_blank' rel='noopener noreferrer'>Lien GitHub du projet</a>
    },
    {
      id: 4,
      title: 'SokIOban',
      description: "SokIOban est un jeu en deux dimensions où le joueur doit placer des caisses sur des cases cibles. Il peut se déplacer dans les quatre directions et pousser une seule caisse à la fois. Une fois toutes les caisses sur les boutons, le niveau est réussi et le joueur passe au niveau suivant. L'objectif est de réussir avec le moins de coups possibles.",
      image: "/carousel/sokioban.png",
      year: '2024',
      gitLink: <a href="https://github.com/Coaraa/Sokoban" title="GitHub" target="_blank" rel="noopener noreferrer">Lien GitHub du projet</a>
    },
    {
      id: 5,
      title: 'Chat de discussion UDP',
      description: "Ce projet est un chat de discussion local utilisant le protocole UDP. Il permet à plusieurs clients connectés au même réseau de discuter en temps réel. Les messages envoyés par un client sont reçus par les clients dans la même salle de discussion. Chaque client dispose de son propre pseudo et peut utiliser différentes commandes pour interagir avec le chat.",
      image: "/carousel/chat-udp.png",
      year: '2024',
      gitLink: <a href="https://github.com/Coaraa/ChatUDP" title="GitHub" target="_blank" rel="noopener noreferrer">Lien GitHub du projet</a>
    }
  ];

  return (
    <Carousel
      autoPlay interval={10000} infiniteLoop
      showThumbs={false}
      showStatus={false}
    >
      {data.map((slide) => (
        <div key={slide.id} className="carouselItem">

          <div className="imageBox">
            <img src={slide.image} alt={slide.title} />
          </div>

          <div className="title">
            <h1>{slide.title}</h1>
            <p className="year">{slide.year}</p>
          </div>

          <div className="overlay">
            <h1 className='overlayTitle'>{slide.title}</h1>
            <p className='overlayDescription'>{slide.description}</p>
            <div className="gitLink">{slide.gitLink}</div>
          </div>

        </div>
      ))}
    </ Carousel>
  )
}

export default MyCarousel
