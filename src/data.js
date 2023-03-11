import { ImImages } from 'react-icons/im'
import {SiOpenaigym} from 'react-icons/si'


export const links = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "About",
        path: '/about'
    },
    {
        name: "Gallery",
        path: '/gallery'
    },
    {
        name: "Plans",
        path: '/plans'
    },
    {
        name: "Trainers",
        path: '/trainers'
    },
    {
        name: "Contact",
        path: '/contact'
    },
    {
        name: "NotFound",
        path: '/notfound'
    }
]


export const programs = [
    {
        id: 1,
        icon: <SiOpenaigym />,
        title: "Program One",
        info: "This is the day that the Lord has made, we will rejoice",
        path: "/programs/111"
    },
    {
        id: 2,
        icon: <SiOpenaigym />,
        title: "Program Two",
        info: "This is the day that the Lord has made, we will rejoice",
        path: "/programs/222"
    },
    {
        id: 3,
        icon: <SiOpenaigym />,
        title: "Program Three",
        info: "This is the day that the Lord has made, we will rejoice",
        path: "/programs/333"
    },
    {
        id: 4,
        icon: <SiOpenaigym />,
        title: "Program Three",
        info: "This is the day that the Lord has made, we will rejoice",
        path: "/programs/444"
    }
]


export const values = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "Value One",
        desc: "Our organization is driven by customer-centric values to ensure smiles on the faces of our client"
    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        title: "Value Two",
        desc: "Our organization is driven by customer-centric values to ensure smiles on the faces of our client"
    },
    {
        id: 3,
        icon: <SiOpenaigym/>,
        title: "Value Three",
        desc: "Our organization is driven by customer-centric values to ensure smiles on the faces of our client"
    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        title: "Value Four",
        desc: "Our organization is driven by customer-centric values to ensure smiles on the faces of our client"
    }
]


export const faqs = [
    {
        id: 1,
        question: "How often should I exercise?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem praesentium odio impedit iusto reprehenderit? Doloremque eius cum incidunt."
    },
    {
        id: 2,
        question: "What time of the day is best to work out?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem praesentium odio impedit iusto reprehenderit? Doloremque eius cum incidunt."
    },
    {
        id: 3,
        question: "How long should my workouts be?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem praesentium odio impedit iusto reprehenderit? Doloremque eius cum incidunt."
    },
    {
        id: 4,
        question: "How long should my workouts be?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem praesentium odio impedit iusto reprehenderit? Doloremque eius cum incidunt."
    },
    {
        id: 5,
        question: "Should I do strenght training, cardio or both?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem praesentium odio impedit iusto reprehenderit? Doloremque eius cum incidunt."
    },
    {
        id: 6,
        question: "Should I lift weights for strenght training?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem praesentium odio impedit iusto reprehenderit? Doloremque eius cum incidunt."
    }
]


export const testimonials = [
    {
        id: 1,
        name: "Diana Ayi",
        quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Presatenti ipsam facere ea a laboriosam sed? quod vel voluptate a! maxime minima cumque aut? In expedita numqua consectetur non officia iusto.",
        job: "Student",
        avatar: require("./images/avatar1.jpg")
    },
    {
        id: 2,
        name: "Daniel Vinyo",
        quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Presatenti ipsam facere ea a laboriosam sed? quod vel voluptate a! maxime minima cumque aut? In expedita numqua consectetur non officia iusto.",
        job: "Software Engineer",
        avatar: require("./images/avatar2.jpg")
    },
    {
        id: 3,
        name: "Edem Quist",
        quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Presatenti ipsam facere ea a laboriosam sed? quod vel voluptate a! maxime minima cumque aut? In expedita numqua consectetur non officia iusto.",
        job: "University Lecturer",
        avatar: require("./images/avatar3.jpg")
    },
    {
        id: 4,
        name: "Edem Quist",
        quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Presatenti ipsam facere ea a laboriosam sed? quod vel voluptate a! maxime minima cumque aut? In expedita numqua consectetur non officia iusto.",
        job: "Student",
        avatar: require("./images/avatar4.jpg")
    },
    {
        id: 5,
        name: "Ekeoma Benjamin",
        quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Presatenti ipsam facere ea a laboriosam sed? quod vel voluptate a! maxime minima cumque aut? In expedita numqua consectetur non officia iusto.",
        job: "Student",
        avatar: require("./images/avatar5.jpg")
    }
]


export const plans = [
    {
        id: 1,
        name: 'Silver Package',
        desc: 'This package is perfect for beginners who need constant help',
        price: 29.99,
        features: [
            {feature: 'First Feature', available: true },
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: false},
            {feature: 'Sixth Feature', available: false},
            {feature: 'Seventh Feature Plus', available: false},
            {feature: 'Eight Feature', available: false},
            {feature: 'Ninth Feature', available: false},
            {feature: 'Tenth Feature', available: false},
            {feature: 'Eleventh Feature', available: false},
        ]
    },
    {
        id: 2,
        name: 'Gold Package',
        desc: 'This package is perfect for beginners who know what they are doing',
        price: 49.99,
        features: [
            {feature: 'First Feature', available: true },
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Sixth Feature', available: true},
            {feature: 'Seventh Feature Plus', available: true},
            {feature: 'Eight Feature', available: false},
            {feature: 'Ninth Feature', available: false},
            {feature: 'Tenth Feature', available: false},
            {feature: 'Eleventh Feature', available: false},
        ]
    },
    {
        id: 3,
        name: 'Platinum Package',
        desc: 'This package is perfect for busy people who need home service',
        price: 89.99,
        features: [
            {feature: 'First Feature', available: true },
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Sixth Feature', available: true},
            {feature: 'Seventh Feature Plus', available: true},
            {feature: 'Eight Feature', available: true},
            {feature: 'Ninth Feature', available: true},
            {feature: 'Tenth Feature', available: true},
            {feature: 'Eleventh Feature', available: true},
        ]
    },
]


const Trainer1 = require('./images/trainer1.jpg')
const Trainer2 = require('./images/trainer2.jpg')
const Trainer3 = require('./images/trainer3.jpg')
const Trainer4 = require('./images/trainer4.jpg')
const Trainer5 = require('./images/trainer5.jpg')
const Trainer6 = require('./images/trainer6.jpg')


export const trainers = [
    {
        id: 1,
        image: Trainer1,
        name: 'John Doe',
        job: 'Aerobic Trainer',
        socials: [
            'https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkein.com/'
        ]
    },
    {
        id: 2,
        image: Trainer2,
        name: 'Daniel Vinyo',
        job: 'Speed Trainer',
        socials: [
            'https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkein.com/'
        ]
    },
    {
        id: 3,
        image: Trainer3,
        name: 'Edem Quist',
        job: 'Flexibility Trainer',
        socials: [
            'https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkein.com/'
        ]
    },
    {
        id: 4,
        image: Trainer4,
        name: 'Diana Ayi',
        job: 'Circuit Trainer',
        socials: [
            'https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkein.com/'
        ]
    },
    {
        id: 5,
        image: Trainer5,
        name: 'Shata Wale',
        job: 'Body Composition Trainer',
        socials: [
            'https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkein.com/'
        ]
    },
    {
        id: 6,
        image: Trainer6,
        name: 'Wayne Carter',
        job: 'Physical Intelligence Trainer',
        socials: [
            'https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkein.com/'
        ]
    },
]