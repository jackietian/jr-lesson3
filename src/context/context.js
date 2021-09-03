// ============== bind, apply, call ================
// they are used to change context

// this refers to the thing that calls f()
// function f() {
//   console.log(this);
// }
// f();

this.message = 'hello'

// arrow function: lexcial context
// this refers to where function is defined
// const f = () => {
//     console.log(this);
// }
// f();


// const dragon = {
//   weapon: 'fire',
//   attack: function() {
//     console.log(`attacking with ${this.weapon}`);
//   }
// }

// const dragon = {}
// dragon.attack = () => {
//   console.log(`attacking with ${JSON.stringify(this)}`);
// }
// dragon.attack();



const slowMotion = {
  action: 'jumping off the building...',
  play: function () {
    // async action, when callback get executed, this refers to global
    // setTimeout(function(){
    //   console.log(`${this.action} after 2 seconds`);
    // }, 2000);

    // bind is used to change context
    // use bind this to perserve context
    setTimeout(function(){

        console.log(`${this.action} after 2 seconds`);

    }, 2000);

    // use arrow function to preserve context
    // setTimeout(() => {
    //   console.log(`${this.action} after 2 seconds`);
    // }, 2000);
  }
}
slowMotion.play();

// const man = {
//   message: 'This is madness, This is Sparta!',
//   // speak: function (arg = '') {
//   //   console.log(this.message, arg);
//   // }
//   speak: () => {
//     console.log(JSON.stringify(this))
//   }
// }

// man.speak();


// const man = {}
// man.message = 'This is madness, This is Sparta!'
// man.speak = () => {
//   console.log(this)
// }
/**
 * From MDN
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 * 
 * The call, apply and bind methods are NOT suitable for Arrow functions 
 * -- as they were designed to allow methods to execute within different scopes 
 * -- because Arrow functions establish "this" based on the scope the Arrow function is defined within.
 * 
 */
// man.speak.bind({message: 'test'})

// const anotherSpeak = man.speak.bind(
//   { message: 'This is Javascript' }
// );
// anotherSpeak()

// apply and call is to change context as well, but execute the function immediately
/**
 * different between apply and call is
 * func.apply(this, [arg1, arg2])
 * func.call(this, arg1, arg2)
 */

const man = {
  message: 'This is madness, This is Sparta!',
  speak: function (arg = '') {
    console.log(this.message, arg);
  }
}
man.speak.apply({ message: 'This is Javascript' }, ['from apply']);
man.speak.call({ message: 'This is Javascript' }, 'from call');


// EVENT handling in DOM https://jsfiddle.net/jackiet/suk7ctne/4/