console.log("javascript - json-server - staff");

// URL
const BASE_URL = `http://localhost:3000`;

export const getStudents = async () => {
  try {
    const resp = await fetch(`${BASE_URL}/students`);
    console.log("resp => ", resp);
    if (!resp.ok) throw new Error("Students data does not exist");
    const data = await resp.json();
    console.log("student data => ", data);
  } catch (error) {
    console.log("error => ", error);
  }
};

export const fetData = async (path, throwMsg, domEle) => {
  try {
    const resp = await fetch(`${BASE_URL}/${path}`);
    if(!resp.ok) throw new Error(`${throwMsg}`);
    const data = await resp.json();
    console.log(`${path} data => `, data);
    showData(data, domEle)
  } catch (error) {
    console.error(error);
  }
};

const showData = (response, htmlNode) => {

    console.log('response => ', response);
    console.log('htmlNode => ', htmlNode);
    

}
