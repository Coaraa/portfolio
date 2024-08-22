import React from 'react'
import './carousel.scss'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    id: 1,
    title: 'Slot machine',
    description: "Ce projet est une machine à sous permettant de jouer avec de l'argent fictif. Il est possible de miser, de lancer la machine et de gagner des crédits.",
    image: "/carousel/slot-machine.png",
    year: 'Août 2024',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    tools: ['Visual Studio Code', 'Adobe Illustrator'],
    gitLink: <a href="https://github.com/Coaraa/Slot-machine" title="GitHub" target="_blank" rel="noopener noreferrer">GitHub</a>
  }, 
  {
    id: 2,
    title: 'Site de boutique en ligne',
    description: "Ce E-commerce fictif vous permet de réaliser l'ensemble des actions classiques : commander des produits ou vous connecter. Il fournit une interface d'administration simple.",
    image: "/carousel/boutique.png",
    year: 'Janvier 2024',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Twig', 'MySQL', 'Bootstrap'],
    tools: ['Visual Studio Code', 'Xampp'],
    gitLink: <a href="https://github.com/Coaraa/shopping-bag" title="GitHub" target="_blank" rel="noopener noreferrer">GitHub</a>
  },
  {
    id: 3,
    title: 'It takes IO',
    description: "It takes IO est un jeu de plateforme local à deux joueurs basé sur un ensemble d'énigmes à résoudre pour activer des portes logiques.",
    image: "/carousel/it-takes-io.png",
    year: 'Mars 2023',
    technologies: ['C++', 'SFML'],
    tools: ['Visual Studio Code', 'Linux'],
    gitLink: <a href='https://github.com/Coaraa/It-takes-IO' title='GitHub' target='_blank' rel='noopener noreferrer'>GitHub</a>
  },
  {
    id: 4,
    title: 'Carte interactive de la couverture réseau française',
    description: 'Ce projet propose une visualisation interactive de la couverture réseau en France sous forme de carte et de tableau.',
    image: '/carousel/telecom.png',
    year: 'Septembre 2023',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'SQL', 'Leaflet'],
    tools: ['Visual Studio Code', 'Xampp'],
    gitLink: <a href="https://github.com/Coaraa/telecom" title="GitHub" target="_blank" rel="noopener noreferrer">GitHub</a>
  },
  {
    id: 5,
    title: 'Chat de discussion UDP',
    description: "Ce chat de discussion local utilise le protocole UDP pour permettre à des clients connectés au même réseau de discuter en temps réel.",
    image: "/carousel/chat-udp.png",
    year: 'Mai 2024',
    technologies: ['Java', 'DatagramSocket'],
    tools: ['IntelliJ IDEA'],
    gitLink: <a href="https://github.com/Coaraa/ChatUDP" title="GitHub" target="_blank" rel="noopener noreferrer">GitHub</a>
  },
  {
    id: 6,
    title: 'SokIOban',
    description: "SokIOban est un jeu en deux dimensions où le joueur doit se déplacer dans les quatre directions afin placer des caisses sur des cases cibles.",
    image: "/carousel/sokioban.png",
    year: 'Mai 2024',
    technologies: ['Java', 'Swing'],
    tools: ['IntelliJ IDEA'],
    gitLink: <a href="https://github.com/Coaraa/Sokoban" title="GitHub" target="_blank" rel="noopener noreferrer">GitHub</a>
  },
  {
    id: 7,
    title: 'Portfolio',
    description: "Ce portfolio est un site web personnel permettant de présenter mes projets et mes compétences. Il est conçu avec React et Sass.",
    image: "/carousel/portfolio.png",
    year: 'Août 2024',
    technologies: ['HTML', 'CSS', 'Sass', 'JavaScript', 'Node.js', 'React'],
    tools: ['Visual Studio Code', 'Adobe Photoshop'],
    gitLink: <a href="https://github.com/Coaraa/portfolio" title="GitHub" target="_blank" rel="noopener noreferrer">GitHub</a>
  }, 
  {
    id: 8,
    title: 'Développement de sites et maintenance',
    description: "Développement de sites web et maintenance pour des clients. Création de sites vitrines à l'aide de Wordpress et Elementor.",
    image: "/carousel/restaurant.png",
    year: 'Août 2024',
    technologies: [],
    tools: ['Wordpress', 'Elementor'],
    gitLink: <a href="https://restaurant-la-thailande.fr/" title="Site" target="_blank" rel="noopener noreferrer">Accéder au site</a>
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
                        tool === 'Linux' ? <img src='/carousel/tools/linux.png' alt='Linux' title='Linux' /> : 
                          tool === 'Adobe Illustrator' ? <img src='/carousel/tools/illustrator.png' alt='Adobe Illustrator' title='Adobe Illustrator' /> :
                            tool === 'Adobe Photoshop' ? <img src='/carousel/tools/photoshop.png' alt='Adobe Photoshop' title='Adobe Photoshop' /> :
                              tool === 'Wordpress' ? <img src='/carousel/tools/wordpress.png' alt='Wordpress' title='Wordpress' /> :
                                tool === 'Elementor' ? <img src='/carousel/tools/elementor.png' alt='Elementor' title='Elementor' /> : null
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
