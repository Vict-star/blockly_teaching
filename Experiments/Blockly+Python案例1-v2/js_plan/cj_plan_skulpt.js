function outf(text) { 
    var mypre = document.getElementById("output"); 
    mypre.innerHTML = mypre.innerHTML + text; 
} 
function builtinRead(x) {
    if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
            throw "File not found: '" + x + "'";
    return Sk.builtinFiles["files"][x];
}
function run_python(python_code) { 
    var prog = document.getElementById(python_code).value; 
    console.log(prog);
    var mypre = document.getElementById("output"); 
    mypre.innerHTML = ''; 
    Sk.pre = "output";
    Sk.configure({output:outf, read:builtinRead, python3:true}); 
    //Sk.configure({
    //    inputfun: function () {
    //        // the function returns a promise to give a result back later...
    //        return new Promise(function(resolve,reject){
    //            $("#input").on("keyup",function(e){
    //                if (e.keyCode == 13){
    //                    // remove keyup handler from #output
    //                    $("#input").off("keyup");
    //                    // resolve the promise with the value of the input field
    //                    resolve($("#input").val());
    //                 }
    //             })
    //         })
    //     },
    //     output: outf,
    //     read: builtinRead
    // });
//
   (Sk.TurtleGraphics || (Sk.TurtleGraphics = {})).target = 'mycanvas';
   var myPromise = Sk.misceval.asyncToPromise(function() {
       return Sk.importMainWithBody("<stdin>", false, prog, true);
   });

   myPromise.then(function(mod) {
       console.log('success');
   },
       function(err) {
       console.log(err.toString());
   });

} 