// const person = {
//     name: 'kon',
//     age: 26,
//     location:{
//         city: 'Kingston',
//         temp: 92
//     }
// }
// const {name:fname="Anon",age}= person
// const {temp:temperature, city} = person.location

// console.log(`${fname} is ${age}`);

// console.log(`It is ${temperature} in ${city}`);

// const book = {
//     title: 'Ego is the enemy',
//     author : 'Ryan ',
//     publisher:{
//         name:'Penquin'
//     }
// }


// const {name:publisherName = "SelfPublish"} = book.publisher
// console.log(publisherName);
//------------------------------
// array destructing



// const address = ['1299 s Juniper Street', 'Kingston', 'Jamaica', 'King5']

// const[, , country='america', area]=address

// console.log(`You are in ${area} ${country}`);

// const item =['coffee (hot)', '2', '$2.5', '2.67']
// const[coffee,,medium]=item

// console.log(`A ${coffee} costs ${medium}`);


const add= ({a,b}, c)=>{
    return (a+b-c)
}

console.log(add({a:1, b:12},100) );
