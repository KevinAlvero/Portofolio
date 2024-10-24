import { meta, shopify, starbucks, tesla, tfi, fiverr, dialogix, imaginate} from "../assets/images";
import {
    car,
    contact,
    css,
    github,
    html,
    javascript,
    linkedin,
    unreal,
    react,
    tailwindcss,
    aseprite,
    unity,
    figma,
    csharp,
    photoshop,
    three,
    premiere,
    python,

} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: unreal,
        name: "Unreal Engine",
        type: "Game",
    },
    {
        imageUrl: aseprite,
        name: "Aseprite",
        type: "Game",
    },
    {
        imageUrl: unity,
        name: "Unity",
        type: "Game",
    },
    {
        imageUrl: figma,
        name: "Figma",
        type: "Website",
    },
    {
        imageUrl: csharp,
        name: "C#",
        type: "Game",
    },
    {
        imageUrl: photoshop,
        name: "Photoshop",
        type: "Design",
    },
    {
        imageUrl: premiere,
        name: "Premiere",
        type: "Video Editing",
    },
    {
        imageUrl: three,
        name: "Three",
        type: "Website",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Programming language",
    },
    
];

export const experiences = [
    {
        title: "Freelance Logo Designer",
        company_name: "Self-Employed",
        icon: fiverr,
        iconBg: "#D3EE98",
        date: "March 2020 - August 2020",
        points: [
            "Explored freelance logo design by creating concepts and prototypes for small businesses and personal brands.",
            "Developed skills in graphic design tools and software, enhancing my ability to create visually appealing logos.",
            "Learned about client engagement and the importance of understanding brand identity, even without securing clients.",
            "Gained valuable insights into marketing and self-promotion strategies in the creative field."
        ],
    },
    {
        title: "Volunteer English Teacher",
        company_name: "Teach For Indonesia",
        icon: tfi, 
        iconBg: "#E78F81", 
        date: "Novemember 2023 - December 2023",
        points: [
            "Taught English to elementary school students, focusing on vocabulary, reading, and conversational skills.",
            "Developed engaging lesson plans and activities to enhance student learning and participation.",
            "Collaborated with other volunteers to create a supportive learning environment and assess student progress.",
            "Utilized creative teaching methods to cater to diverse learning styles and encourage student confidence.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Kevin',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/KevinAlvero',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/kevin-alvero-surono/',
    }
];

export const projects = [
    {
        iconUrl: dialogix,
        theme: 'btn-back-blue',
        name: 'Dialogix',
        description: 'Dialogix is a conversational AI project built using Node.js and the Hugging Face GPT-2 API. Inspired by a JavaScript Mastery tutorial, it enables developers to easily integrate AI-driven dialogue into their web applications.',
        link: 'https://github.com/KevinAlvero/Dialogix.git',
        link1: 'https://dialogix-one.vercel.app/'
    },
    {
        iconUrl: imaginate,
        theme: 'btn-back-green',
        name: 'Imaginate',
        description: ' Imaginate is a creative project built using Vite, React, and MongoDB, leveraging the Hugging Face Flux-1 API. It allows users to generate images based on prompts, making it easy for developers to integrate AI-driven image generation into their web applications. Inspired by innovative web development techniques, Imaginate offers a user friendly interface for generating unique visuals.',
        link: 'https://github.com/KevinAlvero/Imaginate',
        link1: 'https://imaginate1.vercel.app/'
    },
    
];