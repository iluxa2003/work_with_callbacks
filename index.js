function say_my_name(name){
    console.log(`Hello my name is ${name}`);
}
function say_what_i_like(hobby){
    console.log(`My hobby is ${hobby} ,i really like it`);
}
function say_what_i_good_in(good_side){
   console.log(`I'm really good at ${good_side}`);
}
function introducing(name,hobby,good_side,callback1,callback2,callback3){
    callback1(name);
    callback2(hobby);
    callback3(good_side);
}
console.log(introducing("bob","boxing","sport",say_my_name,say_what_i_like,say_what_i_good_in));