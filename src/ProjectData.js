import ProjCovid from './images/ProjectCovid.png';
// import TodoList from './images/TodoList.png';
import IGBot from './images/IGBot.png';
import Photolog1 from './images/photolog1.png';
import CryptoTracker from './images/cryptotracker.png';

export const ProjectData = [
    {
        name: 'Covid-19 India Resources',
        shortName: 'Covid-19 Resources',
        image: ProjCovid,
        description: 'An attempt to provide all covid19 related resources link at one single place.',
        details: {
            why: ["<div className='why'><p>It all started with an attempt to make all covid19 related resource easily searchable under one domain.<p><br/><p> When the 2nd wave started lot of information were available regarding medicines, beds, food etc. but on different different platforms.<p><br/><p><b>This small web app let user search for verified leads from twitter, filterout through helpful instagram post, and user can browse through filtered google sheets provided by volunteer and government organisations.</b></p></div>"]
            ,
            challenges: ["<p>This was the first app that i built in react and i learned a lot of stuff along the way.<p><br/><p>1. Implementing typeahead search functionality.</p><br/><p>2. Collecting links with authentic and verified data.</p>"]
            ,
            tech: ["<a href='https://reactjs.org/'>React JS</a> <a href='https://www.netlify.com/'>Netlify</a>"]
        },
        showWhatsNext: false,
        showChallenges: true,
        website: 'https://covid19indiaresources.netlify.app/',
        id: 1
    },
    {
        name: 'Crypto Tracker',
        shortName: 'Crypto Tracker',
        image: CryptoTracker,
        description: 'Get real time updates of cryptocurrencies using coingecko API. ',
        details: {
            why: ["<div className='why'><p>Started working on this while learning about react js.</p></div>"],
            tech: ["<a href='https://reactjs.org/'>React JS</a>"]
        },
        showWhatsNext: false,
        showChallenges: false,
        website: 'https://cryptotracker02.netlify.app/'
        id: 5
    },
    {
        name: 'Instagram Bot',
        shortName: 'Instagram Bot',
        image: IGBot,
        description: 'Instagram Bot to like a post, comment on post, on searched hashtags.',
        details: {
            why: ["<div className='why'><p>At first the only reason I started working on this was to reduce my engagement time on the post that I'm interested in.</p><br/><p> But soon I realized this issue is not only with me, after talking with one of my friend who just started with social media management and was handling 3 accounts at that time told me about the same issue and I realized small script like this could save a lot of time.</p></div>"]
            ,
            challenges: ["<p>I struggled at the start for finding XPath for some specific actions. For Example. Finding 'like' icon and click on SVG, Find comment box then type your comment in it, etc.</p>"]
            ,
            whatsnext: ["<p>Right now script only comments specific message passed while running the program.</p> <br/><p>Now the next step I'm working on is to collect data set of comments from each post, train it and it should come up with a relevant comment based on all the comments in the comment box.</p>"],
            tech: ["<a href='https://www.python.org/'>Python</a> <a href='https://pypi.org/project/selenium/'>Selenium</a>"]
        },
        showWhatsNext: true,
        showChallenges: false,
        id: 4
    },
    {
        name: 'Photolog',
        shortName: 'Photolog',
        image: Photolog1,
        description: 'Blogging platform only for photographers. where photographers can create their own photo journals.',
        details: {
            why: ["<div className='why'><p>Initially I started it as a fun way to learn about the MERN tech stack but now I realized I could turn it into a whole web application. Keeping only photographers in focus there are very few applications available where photographers can connect and share their interests and knowledge about their work.</p></div>"]
            ,
            challenges: ["<p>Setting up Express JS application and make it communicate with MongoDB was challenging for me as I've never done it before.</p>"]
            ,
            tech: ["<a href='https://reactjs.org/'>React JS</a> <a href='https://www.mongodb.com/cloud/atlas'>MongoDB Atlas</a> <a href='https://expressjs.com/'>Express JS</a> <a href='https://react-redux.js.org/'>React Redux</a> <a href='https://www.netlify.com/'>Netlify</a>"],
            images: [],
            whatsnext: ["<p>As of now application shows only list of photologs. Next step is to<br/><p>1. Create a login module so each user can create and like posts.<br/>2. Create a user profile module where user can edit their profile preferences.</p>"],
        },
        showWhatsNext: true,
        showChallenges: true,
        id: 3
    }
];




// {
//     name:'Positive News Application',
//     shortName:'Positive News',
//     image:ProjCovid,
//     description:'An app that provide positive news happening around the world as a form of instagram stories',
//     details:{
//         why:[]
//         ,
//         challenges:[]
//         ,
//         whatsnext:[]
//     },
//     showWhatsNext:false,
//     showChallenges:true,
//     id:2
// }

// {
//     name: 'Todo List',
//     shortName: 'Todo List',
//     image: TodoList,
//     description: 'Simple todo list application',
//     details: {
//         why: ["<div className='why'><p>Started working on this while learning about react js.</p></div>"],
//         tech: ["<a href='https://reactjs.org/'>React JS</a> <a href='https://www.netlify.com/'>Netlify</a>"]
//     },
//     showWhatsNext: false,
//     showChallenges: false,
//     id: 5
// },



