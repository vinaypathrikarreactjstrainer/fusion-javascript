console.log("javascript - fetch method");

// variable
let container,
  post,
  URL,
  ui = "";
container = document.querySelector("#container");
post = document.querySelector("#post");
URL = `https://jsonplaceholder.typicode.com/posts`;

// fetch method
fetch(URL)
  .then((resp) => resp.json())
  .then((data) => generateBlogs(data))
  .catch((err) => console.log(err));

// Dynamic UI using map looping
const generateBlogs = (list) => {
    let post20 = list.slice(0, 20);
    console.log(post20);
  // map looping
  post20.map(
    blog => {
      return (
        ui += `<li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">${blog.title}</div>
      ${blog.body}
    </div>
    <span class="badge text-bg-primary rounded-pill">${blog.userId}</span>
  </li>`
      )
    }
  );
  post.innerHTML = ui;
};
