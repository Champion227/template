
document.write("<h3>JavaScript Function</h3>");

function Message(){
    document.write("Jai Baba Ki" + "<br>");
}
Message();
Message();
Message();
Message();
Message();

document.write("<h3>JavaScript Function with Parameter and Argument</h3>");

function sum(a,b){
    let add = a+b;
    document.write("Sum is: " + add + "<br>");
}
sum(23,67);
sum(24,36);
sum(24,76);
sum(27,36);
sum(24,38);
sum(64,36);


document.write("<h3>JavaScript Function with Return value</h3>");

function square(n){
    return n * n;
}
let sq = square(5);
document.write("Square is " + sq);

document.write("<hr><hr>");

function sumMarks(s1,s2,s3,s4,s5){
    let totol_marks = s1+s2+s3+s4+s5;
    return totol_marks;
}
let t = sumMarks(67,45,56,81,91);

document.write("Total Marks are "+ t);

function percentage(tm){
    let per = (tm/500*100);
    return per;
}
let percen = percentage(t);

document.write("Percentage is " + percen+ "%");

document.write('<h3>javascript function expression</h3>');

function oddeven(n){
    if(n% 2===0){
        document.write('it is even number');
    }
    else{
        document.write('it is odd number');
    }

}
oddeven(23);

let maxnum=function(a,b){
    return (a>b) ? 'greater value a is:'+a :'greater value b is:'+b;
}
let mn=maxnum(25,45);

document.write(mn);

document.write("<hr><hr>");

document.write('<h3>javascript function callback expression</h3>');

let factval =function(n){
    if(n===0 || n===1){
        return 1;
    }
    else{
        return n*factval(n-1);
    }
}
 let  fac=factval(6);

document.write('factorial value is:'+fac);