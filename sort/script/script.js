(function (logger) {
    console.old = console.log;
    console.log = function () {
        var output = "", arg, i;

        for (i = 0; i < arguments.length; i++) {
            arg = arguments[i];
            output += "<span class=\"log-" + (typeof arg) + "\">";

            if (
                typeof arg === "object" &&
                typeof JSON === "object" &&
                typeof JSON.stringify === "function"
            ) {
                output += JSON.stringify(arg);   
            } else {
                output += arg;   
            }

            output += "</span>&nbsp;";
        }

        logger.innerHTML += output + "<br>";
        console.old.apply(undefined, arguments);
    };
})(document.getElementById("logger"));
var n = prompt("Enter You Array Size")
var arr = [];
for(var i=1;i<=n;i++){
var str = prompt("Enter Array Element no."+i);
arr.push(str);

}
console.log("Your Array is:" ,arr , "\n");
arr.sort(function(a, b) {
  return a - b;
});

console.log("Sorted_Array is:" ,arr);