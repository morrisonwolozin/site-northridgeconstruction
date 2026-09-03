'use strict';
const sortParam = process.argv[2] || 'priority';  // default sort by priority

const { projects } = require('./projects.js');

const util = require('util');

const theProjects = [...projects].sort((a, b) => a[sortParam] - b[sortParam]);

function dumpProjectData() {
    
    for (let i=0; i < theProjects.length ; i++) {   
       
        console.log(`id ${theProjects[i].id} priority ${theProjects[i].priority} ${theProjects[i].name} ${theProjects[i].location}` );
        }
    }


dumpProjectData()
