console.log("hello");
function f() {
    let start = Date.now() ;
    
    while (Date.now() - start < 3000) {} ;
    console.log(Date.now() );
    console.log(start );
    console.log(Date.now() - start);

}
f()