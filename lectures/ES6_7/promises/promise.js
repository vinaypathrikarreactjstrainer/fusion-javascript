console.log("javascript: promises");
// A promise in javascript represents the eventual completion or failure of asynchronous operation and its resulting value.

// State in Promise
/*
    1] Pending => This is our initial state, not fullfilled or not rejected
    2] Fullfilled => The operation completed successfully.
    3] Rejected => The operation is failed

    Pending => (Success) => Fullfilled => .then()
    Pending => (Error) => Rejected => .catch()
*/

// let time = 1000;
// setTimeout(() => console.log('Shruti'), time);
// setTimeout(() => console.log('Shweta'), 500);
// setTimeout(() => console.log('Akshay'), 3000);
// setTimeout(() => console.log('Sakshi'), 5000);
// setTimeout(() => console.log('Sahil'), 200);
// console.log('Shweta');
// console.log('Vinay');
// console.log('Sahil');
// console.log('Sakshi');

const promise = new Promise((resolve, reject) => {
  // resolve('resolved...');
  reject("rejected...");
});

let isUser = false;
const user = new Promise(
    (resolve, reject) => {
        setTimeout(() => {
            if (isUser) {
                resolve("Yes its our User");
            } else {
                reject("No! they are not our User");
            }
        }, 3000);
    }
);

console.log("promise => ", promise);
promise
  // fullfilled - success
  .then((responce) => console.log(responce))
  // rejected - failed
  .catch((err) => console.log(err));

user.then(res => console.log(res)).catch(err => console.log(err));

// Methods
// handle multiple promises

const myPromise = new Promise(
    (resolve, reject) => {
        resolve('fullfilled');
        reject('Rejected');
    }
);

const anjali = Promise.resolve('1. Anjali');
const muskan = Promise.reject('2. Muskan');
const rohini = Promise.resolve('3. Rohini');
// hanlde multiple Promises, it will execute only when all the given promises returning their resulting value
Promise.all([anjali, muskan, rohini])
       .then(resp => console.log(resp))
       .catch(error => console.log(error));

const vinay = new Promise(
    (res, rej) => setTimeout(() => res('Vinay...'), 10000)
);

const amol = new Promise(
    (pass, fail) => setTimeout(() => pass('Amol..'), 5000)
);
// race: it will handle multiple Promises also, but it will return a Promise which is faster or returning the resulting value first
Promise.race([vinay, amol])
       .then(resp => console.log(resp))
       .catch(err => console.log(err));


