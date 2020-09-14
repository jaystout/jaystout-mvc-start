var MODEL = (function(){
    var _showAlert = function (buttonName){
        alert("My button is " + buttonName);
    };

    var _getText = function (callback) {
        let text = "lorem";
    return callback(text);
    };

    return{
        showAlert: _showAlert,
        getText:_getText
    }
})();
//created a self executing function, because of () at the end makes FUNCTION FIRE IMMEDIATELY.
// _ means private to this class