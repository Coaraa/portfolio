import React from 'react'
import './carousel.scss'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    id: 1,
    title: 'Carte interactive de la couverture réseau française',
    description: 'Ce projet propose une visualisation interactive de la couverture réseau en France sous forme de carte et de tableau.',
    image: '/carousel/telecom.png',
    year: '2023',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'SQL', 'Leaflet'],
    tools: ['Visual Studio Code', 'Xampp'],
    gitLink: <a href="https://github.com/Coaraa/telecom" title="GitHub" target="_blank" rel="noopener noreferrer">GitHub</a>
  },
  {
    id: 2,
    title: 'Site fictif de boutique en ligne',
    description: "Ce E-commerce fictif vous permet de réaliser l'ensemble des actions classiques : commander des produits ou vous connecter. Il fournit une interface d'administration simple.",
    image: "/carousel/boutique.png",
    year: '2023',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Twig', 'MySQL', 'Bootstrap'],
    tools: ['Visual Studio Code', 'Xampp'],
    gitLink: <a href="https://github.com/Coaraa/shopping-bag" title="GitHub" target="_blank" rel="noopener noreferrer">GitHub</a>
  },
  {
    id: 3,
    title: 'It takes IO',
    description: "It takes IO est un jeu de plateforme local à deux joueurs basé sur un ensemble d'énigmes à résoudre pour activer des portes logiques.",
    image: "/carousel/it-takes-io.png",
    year: '2024',
    technologies: ['C++', 'SFML'],
    tools: ['Visual Studio Code', 'Linux'],
    gitLink: <a href='https://github.com/Coaraa/It-takes-IO' title='GitHub' target='_blank' rel='noopener noreferrer'>GitHub</a>
  },
  {
    id: 4,
    title: 'SokIOban',
    description: "SokIOban est un jeu en deux dimensions où le joueur doit se déplacer dans les quatre directions afin placer des caisses sur des cases cibles.",
    image: "/carousel/sokioban.png",
    year: '2024',
    technologies: ['Java', 'Swing'],
    tools: ['IntelliJ IDEA'],
    gitLink: <a href="https://github.com/Coaraa/Sokoban" title="GitHub" target="_blank" rel="noopener noreferrer">GitHub</a>
  },
  {
    id: 5,
    title: 'Chat de discussion UDP',
    description: "Ce chat de discussion local utilise le protocole UDP pour permettre à des clients connectés au même réseau de discuter en temps réel.",
    image: "/carousel/chat-udp.png",
    year: '2024',
    technologies: ['Java', 'DatagramSocket'],
    tools: ['IntelliJ IDEA'],
    gitLink: <a href="https://github.com/Coaraa/ChatUDP" title="GitHub" target="_blank" rel="noopener noreferrer">GitHub</a>
  }
];


function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      },
    ]

  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        {data.map((slide) => (
          <div className="item">
            <div className="imageBox">
              <img src={slide.image} alt={slide.title} />
            </div>
            <div className="textBox">
              <h1>{slide.title}</h1>
              <p className='year'>{slide.year}</p>

              <p>{slide.description}</p>
              <p className='technologies'>{slide.technologies.join(' / ')}</p>
              <p className='tools'>
                {slide.tools.map((tool) => (
                  tool === 'Visual Studio Code' ? <img src='/carousel/tools/vscode.png' alt='Visual Studio Code' title='Visual Studio Code' /> :
                    tool === 'IntelliJ IDEA' ? <img src='/carousel/tools/intellij.png' alt='IntelliJ IDEA' title='IntelliJ IDEA' /> :
                      tool === 'Xampp' ? <img src='/carousel/tools/xampp.png' alt='Xampp' title='Xampp' /> :
                        tool === 'Linux' ? <img src='/carousel/tools/linux.png' alt='Linux' title='Linux' /> : null
                ))}</p>
              <p className='link'>{slide.gitLink}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Carousel
