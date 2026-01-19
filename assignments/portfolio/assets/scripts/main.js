console.log("javascript : portfolio");
// variables
let review, offers, pageTitle;
const BASE_URL = `http://localhost:3000`;
review = document.querySelector("#sec_review");
offers = document.querySelector("#sec_offers");
pageTitle = document.querySelector("#pageTitle");

const fetchData = async (endPoint, errMsg, element, type) => {
  try {
    const response = await fetch(`${BASE_URL}/${endPoint}`);
    // console.log(response);
    // check error
    if (!response.ok) throw new Error(`${errMsg}`);
    const data = await response.json();
    // console.log(`${endPoint} => `, data);
    const isOffer = data[0].offers;
    const isReview = data[0].review;
    // console.log('isOffers => ', isOffer);
    type ? card(isOffer, element, "offers") : card(isReview, element, "review");
    pageLabel(data);
  } catch (error) {
    console.log(error);
  }
};

// card ui
const card = (resp, htmlNode, eleClass) => {
  // console.log('htmlNode ', htmlNode, resp);
  // console.log('eleClass ', eleClass);

  let ui = "";
  resp.forEach((items) => {
    ui += `<div class="cards ${eleClass} flexrow">
                 <div class="icon col-icon">
                     <i class = "${items.icon}"></i>
                 </div>
                 <div class="summary flexcol col-summary">
                     <h3>${items.title}</h3>
                     <p>${items.description}</p>
                     <a href="${items.url}">Read More</a>
                 </div>
                </div>`;
  });
  htmlNode.innerHTML = ui;
};

// pageTitel
const pageLabel = (respData) => {
  let pageUi = ``;
  let pageName = respData[0].page,
    title = respData[0].title;
  // console.log('page name ', pageName);
  // console.log('page title ', title);
  pageUi += `<p>${pageName}</p>
              <h1>${title}</h1>
             `;
  pageTitle.innerHTML = pageUi;
};

fetchData("services", "Opps! services data is not available", offers, true);
fetchData("services", "Opps! services data is not available", review, false);

class FUSION {
  constructor(BASE_URL, apiEndPoint) {
    this.url = BASE_URL;
    this.path = apiEndPoint;
  }
  async fetchApidata() {
    try {
      const resp = await fetch(`${this.url}/${this.path}`);
    //   console.log("cls resp => ", resp);
      if (!resp.ok) throw new Error("Error!");
      const customerData = await resp.json();
      console.log("cls data => ", customerData);
    } catch (error) {
      console.error(error);
    }
  }
}

const customer = new FUSION(BASE_URL, "customers");
const services = new FUSION(BASE_URL, "services");
// console.log(customer.fetchApidata());
