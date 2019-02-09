![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Lab 35 CMS

### Author: Becca Lee
Paired on bug fixes and UMLs with Brent Woodward and Heather Cherewaty

### Links and Resources
![Build Status](https://travis-ci.com/beccalee123/35-project-cms.svg?branch=master)
* [repo](https://github.com/beccalee123/35-project-cms)
* [travis](https://travis-ci.com/beccalee123/35-project-cms/builds/100336397)
* [front-end](http://xyz.com)

### Modules
- `index.js` renders the main app
- `store/index.js` sets the store
- `components/if/index.js` creates conditional statement components
- `components/cms/actions.js` contains all actions for the app
- `components/cms/cms.js` contains the CMS class to render the CMS components (Models, Records, Record)
- `components/cms/models.js` contains the models class and corresponding functionality
- `components/cms/record.js` contains the record class and corresponding functionality for an individual record
- `components/cms/records.js` contains the records class and corresponding functionality for all records
- `components/cms/reducers.js` contains the reducers in a switch case

### Setup
#### `.env` requirements
* `PORT` - Defined by environment

#### Running the app
- to run locally, run `npm start`
- Otherwise, visit the link listed above

#### Tests
* How do you run tests?
* What assertions were made?
* What assertions need to be / should be made?

#### UML
UML
![UML](lab_35_uml.jpg)

Data Flow
![Data Flow](lab_35_data_flow.jpg)
