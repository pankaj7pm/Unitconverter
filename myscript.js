var feet = document.getElementById('feet');
var inch = document.getElementById('inch');
var cm = document.getElementById('cm');

feet.addEventListener('input', function(){
    let f = this.value;
    let i = f*12;
    let p = this.value;
    let m = p*30;
    inch.value = i;
    cm.value = m;
})

inch.addEventListener('input', function(){
    let i = this.value;
    let f = i/12;
    if(!Number.isInteger(f)){
        f = f.toFixed(2);
    }
feet.value = f;

let m = this.value;
let p = m*2.5;
if(!Number.isInteger(p)){
    p = p.toFixed(2);
}
cm.value = p;
})


cm.addEventListener('input', function(){
    let m = this.value;
    let p = m/30;
    if(!Number.isInteger(p)){
        p = p.toFixed(2);
    }
feet.value = p;

let i = this.value;
let f = i/2.5;
if(!Number.isInteger(f)){
    f = f.toFixed(2);
}
inch.value = f;
})