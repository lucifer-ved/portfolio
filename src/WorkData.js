import VA from './images/va1.png';
import Godcast from './images/godcast.png';
import Vistaar from './images/vistaar.png';

export const WorkData = [
    {
        shortname:'VA',
        fullName: 'Visible Alpha',
        workingyear:'(2017 - 2021)',
        image:VA,
        companyDetails:{
            basics:{
                name: 'Visible Alpha',
                timePeriod:'3 Years 9 months',
                role: 'Software Engineer 2',
                website:'https://app.visiblealpha.com'
            },
            thingsWorkedOn:'<p>1. <b>Designed and built a module used by hedge fund analysts</b> to understand the forecast and historical data of companies across different sectors and industries.<br/><br/>2. <b>Developed an automated service</b> that runs at a particular time, fetches files from the SFTP server , parses the file, and feeds required data to the database. <b>Earlier, this entire process used to be done manually.</b><br/><br/>3. <b>Co-Developed in-house web analytics tool</b> to keep track of user activities like how many features they are using, how many features they are interacting with, how much time they are spending on each feature etc.<br/><br/>4. <b>Laid out a foundation to migrate</b> the entire backend application from <b>MySQL 5.6 to MySQL 8.0</b><br/><br/>5. <b>Contributed in sharding activity</b> which improved the <b>data fetching performance by 20%</b><br/><br/>6. <b>Contributed in migrating</b> the entire frontend application from <b>Angular 2 to Angular 8.</b></p>'
            ,
            challenges:"<p>1. <b>Coming up with a solution</b> to fetch data of multiple companies effectively <b>to minimize the grid load time of the module.</b><br/><br/>2. Figuring out a way to <b>update all queries from MySQL 5.6 to MYSQL 8.0</b> in such a way that it requires <b>minimum code change and an effective rollback plan</b> in case if anything goes wrong in production.<br><br/>3.<b>Understanding Frontend Codebase</b> and helping in migrating it from <b>Angular 2 to Angular 8.</b></p>"
        },
        to:'/va',
        showChallenges:true
        
    },
    {
        shortname:'GC',
        fullName: 'Godcast',
        workingyear:'(2016 - 2017)',
        image:Godcast,
        companyDetails:{
            basics:{
                name: 'Godcast',
                timePeriod:'1 Year 3 months',
                role: 'Software Engineer',
                website:'https://m.apkpure.com/godcast/in.godcast.app'
            },
            thingsWorkedOn:"<p>1. <b>Single-handedly developed new features</b> for android application along with server-side requirements.<br/><br/>2.<b>Single-handedly migrated data from Facebook's Parse DB to Mongo DB, media files to AWS, and deployed application to Heroku.</b><br><br/>3. Wrote a script to scrape data from the company's Facebook page to learn about userbase and what type of content they are interested in.<br><br/>4. Built Python / Django based web application for one of the Healthcare Customer.</p>"
            ,
            challenges:"<p><b>Migrating data from parse server to our own servers</b> was a challenge<br/><br/>1. As we have to set up our own <b>MongoDB instance for data storage</b> and <br/><br/>2. Upload all <b>media file to AWS</b> <br/><br/>all this <b>while keeping URLs of all the media files being the same to support the older versions of the app.</b></p>"
        },
        to:'/gc',
        showChallenges:true
        
    },
    {
        shortname:'VT',
        fullName: 'Vistaar',
        workingyear:'(2015 - 2016)',
        image:Vistaar,
        companyDetails:{
            basics:{
                name: 'Vistaar Technologies',
                timePeriod:'9 months',
                role: 'Software Engineer Trainee',
                website:'https://www.vistaar.com/'
            },
            thingsWorkedOn:'<p>Contributed in developing one of the module for pricing management solution </p>'

        },
        to:'/vt',
        showChallenges:false
        
    }

];