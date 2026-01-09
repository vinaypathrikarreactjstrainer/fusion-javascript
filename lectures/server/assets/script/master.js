import {getStudents, fetData} from './fetchData.js';

getStudents();
fetData('students', 'Student data is not available at the movment', "student html");
fetData('admin',  'Admin data is not available at the movment', "admin html");