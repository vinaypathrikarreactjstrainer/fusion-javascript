console.log("Javascript : CRUD operation");




/* VARIABLES */
let URL_students,
  URL_faculty,
  URL_admin,
  tbl_student,
  dt_students,
  tbl_faculty,
  dt_faculty,
  tbl_admin,
  tbl_staff,
  dt_staff,
  dialogTitle,
  btn_update,
  dt_admin;

let stdName, stdEmail, stdPhone, stdCourse, btn_save;
stdName = document.querySelector("#std_name");
stdEmail = document.querySelector("#std_email");
stdPhone = document.querySelector("#std_phone");
stdCourse = document.querySelector("#std_course");
btn_save = document.querySelector("#btn_save");
dialogTitle = document.querySelector("#dialog-title");
btn_update = document.querySelector("#btn_update");

tbl_student = document.querySelector("#table-student");
dt_students = document.querySelector("#data-students");
tbl_faculty = document.querySelector("#table-faculty");
dt_faculty = document.querySelector("#data-faculty");
tbl_admin = document.querySelector("#table-admin");
dt_admin = document.querySelector("#data-admin");
tbl_staff = document.querySelector("#table-staff");
dt_staff = document.querySelector("#data-staff");

// GET - Students
URL_students = `http://localhost:3000/students`;

const getStudents = async () => {
  console.log("inside the get student");
  const resp = await fetch(URL_students);
  const data = await resp.json();
  console.log("student data = ", data);
  let ui_student = ``;
  data.forEach((items, index) => {
    ui_student += `<tr>
                        <td align="center">${index + 1}</td>
                        <td>${items.name}</td>
                        <td>${items.email}</td>
                        <td align="right">${items.phone}</td>
                        <td>${items.course}</td>
                        <td align="center">
                          <button type="button" id="btn_edit" onclick = "editStudent(${
                            items.id
                          })">
                            <i class="fa-solid fa-pen-to-square"></i>
                          </button>
                          <button type="button" id="btn_delete" onclick = "deleteStudent(${
                            items.id
                          })">
                            <i class="fa-solid fa-xmark"></i>
                          </button>
                        </td>
                      </tr>`;
  });
  dt_students.innerHTML = ui_student;
};

getStudents();

// GET - Faculty
URL_faculty = `http://localhost:3000/faculty`;

const getFaculty = async () => {
  console.log("inside the get faculty");
  const resp = await fetch(URL_faculty);
  const data = await resp.json();
  console.log("faculty data = ", data);
  let ui_faculty = ``;
  data.forEach((items, index) => {
    ui_faculty += `<tr>
                        <td align="center">${index + 1}</td>
                        <td>${items.name}</td>
                        <td>${items.email}</td>
                        <td align="right">${items.phone}</td>
                        <td>${items.subject}</td>
                      </tr>`;
  });
  dt_faculty.innerHTML = ui_faculty;
};

// GET - Faculty
URL_admin = `http://localhost:3000/admin`;

const getAdmin = async () => {
  console.log("inside the get faculty");
  const resp = await fetch(URL_admin);
  const data = await resp.json();
  console.log("admin data = ", data);
  let ui_admin = ``;
  data.forEach((items, index) => {
    ui_admin += `<tr>
                        <td align="center">${index + 1}</td>
                        <td>${items.name}</td>
                        <td>${items.role}</td>
                        <td align="right">${items.phone}</td>
                        <td align="right">${items.email}</td>
                        
                      </tr>`;
  });
  dt_admin.innerHTML = ui_admin;
};

// Events
let btn_student, btn_faculty, btn_admin, btn_staff;
btn_student = document.querySelector("#student");
btn_faculty = document.querySelector("#faculty");
btn_admin = document.querySelector("#admin");
btn_staff = document.querySelector("#staff");

// button Student
const getData = (user) => {
  switch (user) {
    case "students":
      getStudents();
      tbl_student.classList.remove("hide");
      tbl_admin.classList.add("hide");
      tbl_faculty.classList.add("hide");
      tbl_staff.classList.add("hide");
      break;
    case "faculty":
      getFaculty();
      tbl_faculty.classList.remove("hide");
      tbl_admin.classList.add("hide");
      tbl_student.classList.add("hide");
      tbl_staff.classList.add("hide");
      break;
    case "admin":
      getAdmin();
      tbl_admin.classList.remove("hide");
      tbl_faculty.classList.add("hide");
      tbl_student.classList.add("hide");
      tbl_staff.classList.add("hide");
      break;
    case "staff":
      // getAdmin();
      tbl_staff.classList.remove("hide");
      tbl_admin.classList.add("hide");
      tbl_faculty.classList.add("hide");
      tbl_student.classList.add("hide");
      break;
  }
};

// ADD STUDENT
let addStudent, backdrop, userForm, dialogCancel, form_student;
addStudent = document.querySelector("#add_Student");
backdrop = document.querySelector("#backdrop");
userForm = document.querySelector("#user-form");
form_student = document.querySelector("#form_student");
dialogCancel = document.getElementsByClassName("cancel");

// show dialog
const showDialog = () => {
  userForm.classList.remove("hide");
  backdrop.classList.remove("hide");
};
// hide dialog
const hideDialog = () => {
  userForm.classList.add("hide");
  backdrop.classList.add("hide");
  stdName.value = "";
  stdEmail.value = "";
  stdPhone.value = "";
  stdCourse.value = "";
};

// add student : show the student form
addStudent.addEventListener("click", showDialog);

// Cancel button : hide the dialog box
Array.from(dialogCancel).forEach((btn, ind) => {
  btn.addEventListener("click", hideDialog);
});

// backdrop : whenever user clicks on backdrop form will be reset and dialog box will disappeared.
backdrop.addEventListener("click", () => {
  // alert();
  // reset the form
  hideDialog();
});

// add student

const validation = () => {
  let valid = false;
  if (
    stdName.value == "" &&
    stdCourse.value == "" &&
    stdEmail.value == "" &&
    stdPhone.value == "" &&
    stdName.value == undefined &&
    stdCourse.value == undefined &&
    stdEmail.value == undefined &&
    stdPhone.value == undefined
  ) {
    alert("Please fill the form");
    return valid;
  } else if (stdName.value == undefined || stdName.value == "") {
    alert("Enter student name");
    return valid;
  } else if (stdEmail.value == undefined || stdEmail.value == "") {
    alert("Enter student email");
    return valid;
  } else if (stdPhone.value == undefined || stdPhone.value == "") {
    alert("Enter student phone");
    return valid;
  } else if (stdCourse.value == undefined || stdCourse.value == "") {
    alert("Enter course name");
    return valid;
  } else {
    valid = true;
    return valid;
  }
};

const postStudent = async () => {
  if (validation() == true) {
    dialogTitle.textContent = "add student";
    btn_update.classList.add("hide");
    btn_save.classList.remove("hide");
    let student_data = {
      name: stdName.value,
      email: stdEmail.value,
      phone: stdPhone.value,
      course: stdCourse.value,
    };
    let resp = await fetch(URL_students, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(student_data),
    });
    let data = await resp.json();
    console.log("added student: ", data);
    window.location.reload();
  }
};

btn_save.addEventListener("click", postStudent);

const getStudentId = (id) => {};

// edit student
const editStudent = async (rollNum) => {
  
  showDialog();
  dialogTitle.textContent = "edit student";
  btn_update.classList.remove("hide");
  btn_save.classList.add("hide");
  // alert(rollNum);
  let getStudentById = `${URL_students}/${rollNum}`;
  console.log('id ', getStudentById);
  const std_data = await fetch(getStudentById);
  const data = await std_data.json();
  console.log("student data by id = ", data);
  // fill the form
  stdName.value = data.name;
  stdPhone.value = data.phone;
  stdEmail.value = data.email;
  stdCourse.value = data.course;

  
  // updated data
  btn_update.addEventListener("click", async () => {
    if(validation() == true){
    let updated_data = {
      name: stdName.value,
      email: stdEmail.value,
      phone: stdPhone.value,
      course: stdCourse.value,
    };
    let resp = await fetch(getStudentById, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updated_data),
    });
    let updatedStd_data = await resp.json();
    console.log("updated student: ", updatedStd_data);
    window.location.reload();
  }
  });
  
};

// delete student
const deleteStudent = async (removedId) => {
  alert('Do you really want to remove this entry?');
  console.log("delete id ", removedId);
  let deletedId = `${URL_students}/${removedId}`;
  console.log("deleted student by id", deletedId);

  const resp = await fetch(deletedId, {
    method: 'DELETE'
  });

  const data = await resp.json();
  console.log('deleted student data : ', data);
  window.location.reload();
};


/*
    npm uninstall -g json-server
    npm install -g json-server@^0.17.4
*/

// function Fusion () {
//   return (
//     <div>
//       <h1>Welcome to the Fusion</h1>
//     </div>
//   )
// }

// export default Fusion;