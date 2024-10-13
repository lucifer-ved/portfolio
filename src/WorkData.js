import VA from './images/va1.png';
import Godcast from './images/godcast.png';
import Vistaar from './images/vistaar.png';
import Olx from './images/olx.png';
import smartq from './images/smartq.png';
import itilite from './images/itilite.png';

export const WorkData = [
    {
        shortname: 'SQ',
        fullName: 'SmartQ',
        workingyear: '(2023 - Present)',
        image: smartq,
        companyDetails: {
            basics: {
                name: 'SmartQ',
                timePeriod: '2023 - Present',
                role: 'Technical Solution Architect',
                website: 'https://www.thesmartq.com/'
            },
            thingsWorkedOn: '<p>1.<b> Led the development of a favorites feature</b>, enabling users to mark preferred items and providing personalized suggestions based on food preferences, time of day, and usage patterns, thereby setting a foundation for enhanced personalization.<br/><br/>2. <b>Led the architecture and integration development</b> with a Swedish company for their smart walk -in store and vending machine, significantly improving operational efficiency.<br/><br/>3.<b> Architected a cloud monitoring system</b> with region - specific alerting policies, improving operational reliability and response time to API, system, and service failures.<br/><br/>4. <b> Designed and implemented seamless integration</b> with a third - party system for ordering from vending machines through our app, enhancing user experience.<br/><br/></p>'
            ,
            challenges: "<p> 1. Managing complex configurations across regions and features was cumbersome and prone to errors; i addressed this <b>by developing an internal portal</b> using React and Google Sheets <b> to efficiently track and document all configurations</b>, improving overall system management.<br/><br/>2. Integrating with third-party systems caused frequent API timeouts due to external server limitations; we resolved this by <b>updating infra configuration of appengine servers</b>, ensuring stable and reliable system performance.<br/><br/>3. We encountered service disruptions due to Google's Secret Manager outage, affecting our system's ability to access sensitive credentials. To address this, we set up <b> region-specific cloud monitoring with tailored alert policies that triggered regular alerts during service outages</b>, critical API failures, or any infrastructure-level issues, ensuring timely detection and faster response to critical failures.<br/><br/></p>"
        },
        to: '/smartq',
        showChallenges: true
    },
    {
        shortname: 'ITL',
        fullName: 'Itilite',
        workingyear: '(2022 - 2023)',
        image: itilite,
        companyDetails: {
            basics: {
                name: 'Itilite Technologies',
                timePeriod: '2022 - 2023',
                role: 'Senior Software Engineer',
                website: 'https://www.itilite.com/in/'
            },
            thingsWorkedOn: '<p>1. <b>Led a team</b> to enhance corporate travel and expense management solutions, developing and optimizing backend features using Python, Django, GraphQL, and PostgreSQL.<br/><br/>2. <b>Optimized</b> Docker images by introducing multi-stage builds and volume management, reducing deployment time by<b>50%</b><br/></p>'
            ,
            challenges: ""
        },
        to: '/itilite',
        showChallenges: false
    },
    {
        shortname: 'OLX',
        fullName: 'Olx People',
        workingyear: '(2021 - 2022)',
        image: Olx,
        companyDetails: {
            basics: {
                name: 'Olx People (Acquired by Betterplace)',
                timePeriod: '2021 - 2022',
                role: 'Software Engineer 2',
                website: 'www.olxpeople.com/'
            },
            thingsWorkedOn: '<p>1. <b>Currently building e-bike service targeting blue-collar workers</b>.<br/><br/>2. Worked on attendance module used by blue-collar workers to mark attendance using mobile devices.<br/><br/>3. Built automated bot to generate ESIC card for blue-collar workers.<br/><br/></p>'
            ,
            challenges: "<p>1. <b>Coming up with a solution</b> to fetch data of multiple companies effectively <b>to minimize the grid load time of the module.</b><br/><br/>2. Figuring out a way to <b>update all queries from MySQL 5.6 to MYSQL 8.0</b> in such a way that it requires <b>minimum code change and an effective rollback plan</b> in case if anything goes wrong in production.<br><br/>3.<b>Understanding Frontend Codebase</b> and helping in migrating it from <b>Angular 2 to Angular 8.</b></p>"
        },
        to: '/olx',
        showChallenges: false
    },
    {
        shortname: 'VA',
        fullName: 'Visible Alpha',
        workingyear: '(2017 - 2021)',
        image: VA,
        companyDetails: {
            basics: {
                name: 'Visible Alpha',
                timePeriod: '3 Years 9 months',
                role: 'Software Engineer 2',
                website: 'https://app.visiblealpha.com'
            },
            thingsWorkedOn: '<p>1. <b>Designed and built a module used by hedge fund analysts</b> to understand the forecast and historical data of companies across different sectors and industries.<br/><br/>2. <b>Developed an automated service</b> that runs at a particular time, fetches files from the SFTP server , parses the file, and feeds required data to the database. <b>Earlier, this entire process used to be done manually.</b><br/><br/>3. <b>Co-Developed in-house web analytics tool</b> to keep track of user activities like how many features they are using, how many features they are interacting with, how much time they are spending on each feature etc.<br/><br/>4. <b>Laid out a foundation to migrate</b> the entire backend application from <b>MySQL 5.6 to MySQL 8.0</b><br/><br/>5. <b>Contributed in sharding activity</b> which improved the <b>data fetching performance by 20%</b><br/><br/>6. <b>Contributed in migrating</b> the entire frontend application from <b>Angular 2 to Angular 8.</b></p>'
            ,
            challenges: "<p>1. <b>Coming up with a solution</b> to fetch data of multiple companies effectively <b>to minimize the grid load time of the module.</b><br/><br/>2. Figuring out a way to <b>update all queries from MySQL 5.6 to MYSQL 8.0</b> in such a way that it requires <b>minimum code change and an effective rollback plan</b> in case if anything goes wrong in production.<br><br/>3.<b>Understanding Frontend Codebase</b> and helping in migrating it from <b>Angular 2 to Angular 8.</b></p>"
        },
        to: '/va',
        showChallenges: true

    },
    {
        shortname: 'GC',
        fullName: 'Godcast',
        workingyear: '(2016 - 2017)',
        image: Godcast,
        companyDetails: {
            basics: {
                name: 'Godcast',
                timePeriod: '1 Year 3 months',
                role: 'Software Engineer',
                website: 'https://m.apkpure.com/godcast/in.godcast.app'
            },
            thingsWorkedOn: "<p>1. <b>Single-handedly developed new features</b> for android application along with server-side requirements.<br/><br/>2.<b>Single-handedly migrated data from Facebook's Parse DB to Mongo DB, media files to AWS, and deployed application to Heroku.</b><br><br/>3. Wrote a script to scrape data from the company's Facebook page to learn about userbase and what type of content they are interested in.<br><br/>4. Built Python / Django based web application for one of the Healthcare Customer.</p>"
            ,
            challenges: "<p><b>Migrating data from parse server to our own servers</b> was a challenge<br/><br/>1. As we have to set up our own <b>MongoDB instance for data storage</b> and <br/><br/>2. Upload all <b>media file to AWS</b> <br/><br/>all this <b>while keeping URLs of all the media files being the same to support the older versions of the app.</b></p>"
        },
        to: '/gc',
        showChallenges: true

    },
    {
        shortname: 'VT',
        fullName: 'Vistaar',
        workingyear: '(2015 - 2016)',
        image: Vistaar,
        companyDetails: {
            basics: {
                name: 'Vistaar Technologies',
                timePeriod: '9 months',
                role: 'Software Engineer Trainee',
                website: 'https://www.vistaar.com/'
            },
            thingsWorkedOn: '<p>Contributed in developing one of the module for pricing management solution </p>'

        },
        to: '/vt',
        showChallenges: false

    }

];