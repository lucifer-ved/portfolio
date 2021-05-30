import ProjCovid from './images/ProjectCovid.png';
import TodoList from './images/TodoList.png';
import IGBot from './images/IGBot.png';

export const ProjectData = [
    {
        title:'Covid-19 India Resources',
        image:ProjCovid,
        description:'An attempt to provide all covid19 related resources link at one single place.',
        details:{
            why:["It all started with an attempt to make all covid19 related resource easily searchable under one domain. When the 2nd wave started lot of information were available regarding medicines, beds, food etc. but on different different platforms.",
                 "This small web app let user search for verified leads from twitter, filterout through helpful instagram post, and user can browse through filtered google sheets provided by volunteer and government organisations."]
            ,
            challenges:["This was my first app that i built in reat and i learn a lot of stuff along the way.",
                        "Implementing typeahead search functionality",
                        "Styling an iframe for instagram post was bit of a challenge.",
                        ]
            ,
            images:[],
            whatsnext:[]
            ,
            currentStatus:'Done'
        },
        key:1
    },
    {
        title:'Positive News Application',
        image:ProjCovid,
        description:'An app that provide positive news happening around the world as a form of instagram stories',
        details:{
            why:[]
            ,
            challenges:[]
            ,
            images:[],
            whatsnext:[]
            ,
            currentStatus:'WIP'
        },
        key:2
    },
    {
        title:'MEMORIES - PhotoBlog',
        image:ProjCovid,
        description:'Collect and share memories !',
        details:{
            why:[]
            ,
            challenges:[]
            ,
            images:[],
            whatsnext:[]
            ,
            currentStatus:'WIP'
        },
        key:3
    },
    {
        title:'Blockchain Application',
        image:ProjCovid,
        description:'Attempt to create simple blockchain application',
        details:{
            why:[]
            ,
            challenges:[]
            ,
            images:[],
            whatsnext:[]
            ,
            currentStatus:'WIP'
        },
        key:4
    },
    {
        title:'Instagram Bot',
        image:IGBot,
        description:'Instagram Bot to like, comment post and searched hashtag',
        details:{
            why:["At first the only reason i started working on this was to reduce my engagement time on the post that i'm interested in. But soon i realised this issue is not only with me , after talking with one of my friend who just started with socialmedia management and was handling 3 accounts at that time told me about the same issue and i realised small script like this could save a lot of time."]
            ,
            challenges:["I struggled a lot at start for finding xpath of some specific actions. For Example. Finding 'like' icon and click on svg, Find comment box then type your comment in it etc."]
            ,
            images:[],
            whatsnext:["Right now script only comments specific message passed while running the program. now the next step i'm working on is to collect data set of comments based on post, train it and it should come up with a relevant comment based on all the comments in comment box."]
            ,
            currentStatus:'Done'
        },
        key:5
    },
    {
        title:'Todo List',
        image:TodoList,
        description:'Simple todo list application',
        details:{
            why:["Started working on this while learning about react js."]
            ,
            challenges:[]
            ,
            images:[],
            whatsnext:[]
            ,
            currentStatus:'Done'
        },
        key:6
    }
];



    

