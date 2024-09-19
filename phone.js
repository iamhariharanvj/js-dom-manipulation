const Phone = {
    call: function(number) {
        alert("Calling " + number);
    },
    sendMessage: function(message) {
        alert("Sending message : " + message);
    },
    browse: function(url) {
        alert("Browsing to " + url);
    }
};
 
const AndroidPhone = function(name, brand) {
    this.name = name;
    this.brand = brand;
    this.os = "android";
};
 
AndroidPhone.prototype = Phone;


const IOSPhone = function(name, brand) {
    this.name = name;
    this.brand = brand;
    this.os = "android";
};
 
IOSPhone.prototype = Phone;


const redmi = new AndroidPhone("Redmi Note 9", "Redmi");
const input = document.getElementById("input-box");
function call(){
    if(input.value.length<1){
        alert("Invalid input");
        return;
    }    
    redmi.call(input.value);
}

function message(){
    if(input.value.length<1){
        alert("Invalid input");
        return;
    }    
    redmi.sendMessage(input.value)
}

function browse(){
    if(input.value.length<1){
        alert("Invalid input");
        return;
    }    
    redmi.browse(input.value)
}
