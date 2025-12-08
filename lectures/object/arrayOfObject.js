console.log("javascript: array of objects");

// variables
let user = {},
  employee = {},
  company = {};
const data = [];

// getData function
const getData = () => {
  // user object
  user = {
    name: "Vinay",
    phone: 233434,
    city: "Pune",
    employee: {
      name: "Muskan",
      employeeId: 2321,
      accessKey: "D343HF434WKJSD33F",
    },
    company: {
      name: "Fusion",
      address: {
        city: "Pune",
        location: "Kharadi",
      },
      officeNo: 68734687,
    },
  };
  // insert user obj into the data array
  data.push(user);
  // employee object
  employee = {
    name: "Muskan",
    employeeId: 2321,
    accessKey: "D343HF434WKJSD33F",
  };
  // insert employee obj into the data array
  data.push(employee);
  // company object
  company = {
    name: "Fusion",
    address: {
      city: "Pune",
      location: "Kharadi",
    },
    officeNo: 68734687,
  };
  // insert company obj into the data array
  data.push(company);

  console.log("data array => ", data);
};
getData();
