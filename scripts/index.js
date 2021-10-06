// Object 
const obj = {
    authorName: "Kishore",
    city: "Coimbatore",
    state: "Tamil Nadu"
}


console.log(obj); // op: {authorName: 'Kishore', city: 'Coimbatore', state: 'Tamil Nadu'}

// Can add, delete or modify
obj.authorName = "NandhaKumar";
obj.age = 21;
console.log(obj); //op: {authorName: 'NandhaKumar', city: 'Coimbatore', state: 'Tamil Nadu', age: 21}
const obj2 = {...obj};
const obj3 ={...obj};

// Freeze
// Not able to add, delete or modify
console.log("Freeze");
console.log(Object.isFrozen(obj)); // op: false
Object.freeze(obj);
console.log(Object.isFrozen(obj)); // op: true

obj.college = "KPR";
console.log("College: "+obj.college); // op: College: undefined

delete obj.age;
console.log("Age: "+obj.age); // op: Age: 21

obj.city = "Tiruppur";
console.log("City: "+obj.city); // op: City: Coimbatore

console.log("Object is immutable");
console.log(obj); // op: {authorName: 'NandhaKumar', city: 'Coimbatore', state: 'Tamil Nadu', age: 21}

// Seal
// Not able to add or delete, but able to modify

console.log("Object for testing seal: ");
console.log(obj2); // op: {authorName: 'NandhaKumar', city: 'Coimbatore', state: 'Tamil Nadu', age: 21}

console.log("Seal");
console.log(Object.isSealed(obj2)); // op: false
Object.seal(obj2);
console.log(Object.isSealed(obj2)); // op: true

obj2.college = "KPR";
console.log("College: "+obj2.college); // op: College: undefined

delete obj2.age;
console.log("Age: "+obj2.age); // op: Age: 21

obj2.city = "Tiruppur";
console.log("City: "+obj2.city); // op: City: Tiruppur

console.log("Object element can be modified, but can't be added or deleted");
console.log(obj2); // op: {authorName: 'NandhaKumar', city: 'Tiruppur', state: 'Tamil Nadu', age: 21}

// Prevent Extensions
// Not able to add, but able to modify or delete
console.log("Object for testing prevent extensions: ");
console.log(obj3); // op: {authorName: 'NandhaKumar', city: 'Coimbatore', state: 'Tamil Nadu', age: 21}

console.log("Prevent Extensions");
console.log(Object.isExtensible(obj3)); // op: true
Object.preventExtensions(obj3);
console.log(Object.isExtensible(obj3)); // op: false

obj3.college = "KPR";
console.log("College: "+obj3.college); // op: College: undefined

delete obj3.age;
console.log("Age: "+obj3.age); // op: Age: undefined

obj3.city = "Tiruppur";
console.log("City: "+obj3.city); // op: City: Tiruppur

console.log("Object element can be modified or deleted, but can't be added");
console.log(obj3); // op: {authorName: 'NandhaKumar', city: 'Tiruppur', state: 'Tamil Nadu'}



