document.onreadystatechange = function() {
    if (document.readyState == "loading") {
        console.log(document.readyState + ": Html5 up!");
    }
    if (document.readyState == "interactive") {
        var values = ['CSS3 Up! ', 'Jquery Up! ', 'Boostrap Up! '];
        for (var i = 0; i < values.length; i++) {
            console.log(values[i]);
        }
    } else if (document.readyState === "complete") {
        console.log(document.readyState);



    }
}
import * as selectizeCustomConfig from "./selectizeCustomConfig.js";
import * as toggle from "./toggle.js";