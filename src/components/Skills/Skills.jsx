import React from 'react'
import './skills.scss'
import { m } from 'framer-motion';

const data = [
    {
        title: 'HTML',
        image: '/skills/html.png',
        color: '#ff4f4f',
        backgroundColor: '#ff4f4f28',
        category: 'front-end',
        mastery: 5
    },
    {
        title: 'CSS',
        image: '/skills/css.png',
        color: '#4fa0ff',
        backgroundColor: '#4fa0ff28',
        category: 'front-end',
        mastery: 4
    },
    {
        title: 'JavaScript',
        image: '/skills/javascript.png',
        color: '#ffcc4f',
        backgroundColor: '#ffcc4f28',
        category: 'front-end',
        mastery: 3
    },
    {
        title: 'Sass',
        image: '/skills/sass.png',
        color: '#ff4f9f',
        backgroundColor: '#ff4f9f28',
        category: 'front-end',
        mastery: 4
    },
    {
        title: 'React',
        image: '/skills/react.png',
        color: '#4fdfff',
        backgroundColor: '#4fdfff28',
        category: 'front-end',
        mastery: 4
    },
    {
        title: 'Bootstrap',
        image: '/skills/bootstrap.svg',
        color: '#7952b3',
        backgroundColor: '#7952b328',
        category: 'front-end',
        mastery: 4
    },
    {
        title: 'PHP',
        image: '/skills/php.png',
        color: '#8993be',
        backgroundColor: '#8993be28',
        category: 'back-end web',
        mastery: 3
    },
    {
        title: 'Node.js',
        image: '/skills/node.png',
        color: '#4fff4f',
        backgroundColor: '#4fff4f28',
        category: 'back-end web',
        mastery: 3
    },
    {
        title: 'C#',
        image: '/skills/csharp.png',
        color: '#280068',
        backgroundColor: '#28006828',
        category: 'back-end web',
        mastery: 2
    },
    {
        title: 'C++',
        image: '/skills/cpp.png',
        color: '#5E97D0',
        backgroundColor: '#5E97D028',
        category: 'back-end app',
        mastery: 3
    },
    {
        title: 'Java',
        image: '/skills/java.png',
        color: '#3a75b0',
        backgroundColor: '#3a75b028',
        category: 'back-end app',
        mastery: 3
    },
    {
        title: 'Python',
        image: '/skills/python.png',
        color: '#4f4fff',
        backgroundColor: '#4f4fff28',
        category: 'back-end app',
        mastery: 3
    },
    {
        title: 'Git',
        image: '/skills/git.png',
        color: '#f1502f',
        backgroundColor: '#f1502f28',
        category: 'outils',
        mastery: 4
    },
    {
        title: 'MySQL',
        image: '/skills/sql.png',
        color: '#00758f',
        backgroundColor: '#00758f28',
        category: 'outils',
        mastery: 4
    },
    {
        title: 'Adobe Creative Suite',
        image: '/skills/adobe.png',
        color: '#f5f5f5',
        backgroundColor: '#f5f5f528',
        category: 'outils',
        mastery: 3
    }
];

function Skills() {
    return (
        <div className='skills'>
            <div className="wrapper">


                <div className="title">
                    <h1>Mes compétences</h1>
                </div>
                <div>
                    <div className="titles">
                        <div>
                            Front-end
                        </div>
                        <div>
                            Back-end web
                        </div>
                        <div>
                            Back-end app
                        </div>
                        <div>
                            Outils
                        </div>
                    </div>

                    <div className="skillsContainer">
                        <div className="category">
                            {data.filter(skill => skill.category === 'front-end').map(skill => (
                                <div className="skill">
                                    <img src={skill.image} alt={skill.title} />
                                    <div className="mastery" style={{ color: skill.color, backgroundColor: skill.backgroundColor, border: `3px solid ${skill.color}` }}>
                                        {skill.mastery} ☆
                                    </div>
                                    <p style={{ color: skill.color }}>{skill.title}</p>
                                </div>
                            ))}
                        </div>
                        <div className="category">
                            {data.filter(skill => skill.category === 'back-end web').map(skill => (
                                <div className="skill">
                                    <img src={skill.image} alt={skill.title} style={{ color: skill.color }} />
                                    <div className="mastery" style={{ color: skill.color, backgroundColor: skill.backgroundColor, border: `3px solid ${skill.color}` }}>
                                        {skill.mastery} ☆
                                    </div>
                                    <p style={{ color: skill.color }}>{skill.title}</p>
                                </div>
                            ))}
                        </div>
                        <div className="category">
                            {data.filter(skill => skill.category === 'back-end app').map(skill => (
                                <div className="skill">
                                    <img src={skill.image} alt={skill.title} style={{ color: skill.color }} />
                                    <div className="mastery" style={{ color: skill.color, backgroundColor: skill.backgroundColor, border: `3px solid ${skill.color}` }}>
                                        {skill.mastery} ☆
                                    </div>
                                    <p style={{ color: skill.color }}>{skill.title}</p>
                                </div>
                            ))}
                        </div>
                        <div className="category">
                            {data.filter(skill => skill.category === 'outils').map(skill => (
                                <div className="skill">
                                    <img src={skill.image} alt={skill.title} style={{ color: skill.color }} />
                                    <div className="mastery" style={{ color: skill.color, backgroundColor: skill.backgroundColor, border: `3px solid ${skill.color}` }}>
                                        {skill.mastery} ☆
                                    </div>
                                    <p style={{ color: skill.color }}>{skill.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
