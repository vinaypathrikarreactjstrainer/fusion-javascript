console.log('javascript - test - 05/01/2026');

let a = 10, b = '10', c, d, e;

c = a * b;
d = {
    name: 'Shruti',
    phone: 1242424,
    city: 'Pune26'
};

e = [];

console.log('c => ', c);

for (let key in d){
    console.log('key => ', key, d[key]);
}

class Students {
	constructors(name, phone, city){
	//	super();
		this.name = name,
		this.phone = phone,
		this.city = city;
}
/*
  function getCity = () => {
	console.log("city => ", this.city);
}
*/
    getCity() {
	console.log("city => ", this.city);
}
}

const Shweta = new Students('shweta', 221434, 'Mumbai');
Shweta.getCity();