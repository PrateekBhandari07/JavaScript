// installed node and run this file with `node first.js`
console.log('Hello, World!');

let a=5;
let b=23;
console.log(a*b);

if(a>b){
    console.log('a is greater than b');
    
}
else console.log('b is greater than a');

for(i=0;i<a;i++) console.log(i);

i=0;
 outputString="";
while(i<=a){
outputString+=i+" "
i++
}
console.log(outputString);


j=0;
do{
    console.log(j);
    j++;
}while(j<=a)


function div(a,b,division)    {
   return division(a,b)
}

division=(a,b)=>  a/b;



result=div(8,2,division);
console.log(result);


p=1;
q="sdf"
r=1.1;
s=false;
t='c'
console.log(typeof(p));
console.log(typeof(q));
console.log(typeof(r));
console.log(typeof(s));
console.log(typeof(t));
