   
    // In definition 
    //  object can store colllection of  of various  data and complexed entities
    // An object is created with a storage containe5r told datas and properties which can be used to save properties which has values or keys
    // key:is a string and also called a property name
    // value: can be anything
    // youu call a property by "." or "[]"
    // user.pene
    // user[pen]

    //  computated properties 
    // let pet= prompt("what is the name of your pet");
    // let bag=prompt("what fruit do you have in your bag");
    // alert("apple");
    // alert("mango");
    // alert("orange");

    // let pairsOfShoe=prompt("what pair do you prefer","brooks");
    // let pairs={
    //     [pairsOfShoe]:9

    // };
    // alert(pairs.brooks);

    // let fruit ='apple';
    // // let bag = {
    // //     [fruit + "computer"]:5
    // // };
    // alert(fruit)

    // function makeUse(name,age){
    //         return{
    //            name:name,
    //            age:age,
               

    //         };
    // }
    //      let user=makeUse("peter","40");
    //      alert(user.age)
    //      do

    //      function makeUse(name,age){
    //         return{
    //            name:name,
    //            age:age,
               
            // key
    //         };
    // }
    //      let user=makeUse("peter","40");
    //      delete(user.age)

        // let user = {};
        // user["like bird"]= true;
        // alert(user["like bird"]);
        // delete user["like bird"];

        // let key = "likes bread";
        // user[key]= true;
            
    // let user = {name:"john",age:30  };
    // let key=prompt("what will you like to know about me?","name");
    // alert (user[key]);

    // for in loop() in object
    // let user ={
    //     name:"john",
    //     age:30,
    //     isAdamin:true
    // };
    // for(let key in user){
    //     alert(key);
    //     alert(user[key]);
    // }


    // ordered like  an obect
// let codes  = {
//     "49": "Germany",
//     "41": "switzerland",
//     "44": "britain",
//     "1": "USA"
// };(
// for  (let code in codes){
//     alert(code);
// }

// interger properties are are properties that cam be converted to and fro without chqnging
// Math,trunc it remove decimal from numbers
// alert(String(Math.trunc(Number("49"))));
// alert(String(Math.trunc(Number("+49"))));
// alert(String(Math.trunc(Number("4.9"))));
// alert(String(Math.trunc(Number("49.08"))));

// let user ={
//     name: "oluwatosin",
//     sex :"female"
// }
//     user.age=30;
//     for(let prop  in user ){
//         alert(prop);
//     }

// let obect = {};
// obj.__proto__ = 5;
// alert(obj.__proto__);

// in operator in Object
// let user = {name:"alana",age: 25} 
// alert("age" in user);


// let user ={};
//   user.name = "john";
//   user.surname = "smith";
//   user.name = "peter";
//   delete user.name;


// let schedule = {};
// alert(isEmpty(schedule));
// schedule["8:30"]="get up";
// alert(isEmpty(schedule));

//  function isEmpty(obj){
//     for(let key  in obj){
//         return false;
//     }
//     return true;
//  }


// let salaries ={
//     john:100,
//     Ann:160,
//     pete:130
// }

// let sum =0;
// for (let key in salaries){
//     sum +=salaries[key];
// }

// alert(sum);







// OBJECT REFERENCE AND COPYIING

// let message="whats up";
// let phrase=message;

// let user ={
//     name:"john"
// };  
// let name= user;
//    name.name="racheal";
// alert(name.name);

// comparison by Referene|()


// let fifteen = Promise.resolve(71);  
// fifteen.then(value => console.log(`Got ${value}`));