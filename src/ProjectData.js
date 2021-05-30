import ProjCovid from './images/ProjectCovid.png';
import TodoList from './images/TodoList.png';
import IGBot from './images/IGBot.png';

export const ProjectData = [
    {
        name:'Covid-19 India Resources',
        shortName:'Covid-19 Resources',
        image:ProjCovid,
        description:'An attempt to provide all covid19 related resources link at one single place.',
        details:{
            why:["<div className='why'><p>It all started with an attempt to make all covid19 related resource easily searchable under one domain.<p><br/><p> When the 2nd wave started lot of information were available regarding medicines, beds, food etc. but on different different platforms.<p><br/><p><b>This small web app let user search for verified leads from twitter, filterout through helpful instagram post, and user can browse through filtered google sheets provided by volunteer and government organisations.</b></p></div>"]
            ,
            challenges:["<p>This was my first app that i built in reat and i learn a lot of stuff along the way.<p><br/><p>1. Implementing typeahead search functionality</p><br/><p>2. Styling an iframe for instagram post was bit of a challenge.</p>"]
            ,
            tech:["<a href='https://reactjs.org/'>React JS</a> <a href='https://www.netlify.com/'>Netlify</a>"]
        },
        showWhatsNext:false,
        id:1
    },
    {
        name:'Positive News Application',
        shortName:'Positive News',
        image:ProjCovid,
        description:'An app that provide positive news happening around the world as a form of instagram stories',
        details:{
            why:[]
            ,
            challenges:[]
            ,
            whatsnext:[]
        },
        showWhatsNext:false,
        id:2
    },
    {
        name:'MEMORIES - PhotoBlog',
        shortName:'Photoblog',
        image:ProjCovid,
        description:'Collect and share memories !',
        details:{
            why:[]
            ,
            challenges:[]
            ,
            images:[],
            whatsnext:[]
        },
        showWhatsNext:false,
        id:3
    },
    {
        name:'Blockchain Application',
        shortName:'Blockchain',
        image:ProjCovid,
        description:'Attempt to create simple blockchain application',
        details:{
            why:[]
            ,
            challenges:[]
            ,
            whatsnext:[]
        },
        showWhatsNext:false,
        id:4
    },
    {
        name:'Instagram Bot',
        shortName:'Instagram Bot',
        image:IGBot,
        description:'Instagram Bot to like, comment post and searched hashtag',
        details:{
            why:["At first the only reason i started working on this was to reduce my engagement time on the post that i'm interested in. But soon i realised this issue is not only with me , after talking with one of my friend who just started with socialmedia management and was handling 3 accounts at that time told me about the same issue and i realised small script like this could save a lot of time."]
            ,
            challenges:["I struggled a lot at start for finding xpath of some specific actions. For Example. Finding 'like' icon and click on svg, Find comment box then type your comment in it etc."]
            ,
            whatsnext:["Right now script only comments specific message passed while running the program. now the next step i'm working on is to collect data set of comments based on post, train it and it should come up with a relevant comment based on all the comments in comment box."]
        },
        showWhatsNext:true,
        id:5
    },
    {
        name:'Todo List',
        shortName:'Todo List',
        image:TodoList,
        description:'Simple todo list application',
        details:{
            why:["Started working on this while learning about react js."]
        },
        showWhatsNext:false,
        id:6
    }
];



    

