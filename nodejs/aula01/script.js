let calc = require('./calc.js');

let args = process.argv.slice(2);

let a = Number(args[1]);
let b = Number(args[2]);

let c = "";

if(args[0]=='s'){
    c = calc.soma(a,b);
}else if (args[0]=='m'){
    c = calc.multi(a,b);
}else if (args[0]=='d'){
    c = calc.dimi(a,b);
}else if (args[0]=='di'){
    c = calc.div(a,b);
}


console.log(c);