console.log('javascript : portfolio');

// variables
let review, offers;
const BASE_URL = `http://localhost:3000`
review = document.querySelector('#sec_review');
offers = document.querySelector('#sec_offers');

const fetData = async(endPoint, errMsg, element) => {
    try {
        const response = await fetch(`${BASE_URL}/${endPoint}`);
        console.log(response);
        // check error
        if(!response.ok) throw new Error(`${errMsg}`);
        const data = await response.json();
        console.log(`${endPoint} => `, data);
        card(data, element, 'offers');
    } catch (error) {
        console.log(error);
    }
}

fetData('services', 'Opps! services data is not available', offers);

// card ui
const card = (resp, htmlNode, eleClass) => {
    
    let ui = '';
    resp.forEach(items => {
        let offers = items.offers, review = items.review;

        if(eleClass == 'offers') {
            offers.forEach(offerItem => {
                console.log('offer items' , offerItem);
                ui += `<div class="cards ${eleClass} flexrow">
                <div class="icon col-icon">
                    <i class = "${offerItem.icon}"></i>
                </div>
                <div class="summary flexcol col-summary">
                    <h3>${offerItem.title}</h3>
                    <p>${offerItem.description}</p>
                    <a href="${offerItem.url}">Read More</a>
                </div>
               </div>`
            });
            htmlNode.innerHTML = ui;
        }
        

        console.log('s',items.offers[0].title);
        
    });
}