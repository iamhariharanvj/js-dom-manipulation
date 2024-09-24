function Phone(name, brand, phoneNumber) {
    this.name = name;
    this.brand = brand;
    this.phoneNumber = phoneNumber;

    this.call = function(number) {
        alert("Calling " + number + " via " + this.phoneNumber);
    };
    this.sendSms = function(message) {
        alert("Sending message via " + this.phoneNumber + " : " + message);
    };
};

function BasicPhone(name, brand, phoneNumber, hasRadio) {
    Object.setPrototypeOf(this, new Phone(name, brand, phoneNumber));
    this.hasRadio = hasRadio;
    this.dialpadLayout = "en-US";

    this.listenRadio = function() {
        
        if(this.hasRadio) {
            alert("Listening to radio");
        }
        else {
            alert("Sorry, your mobile doesn't support radio");
        }
    };
};

function DualSimPhone(name, brand, phoneNumber, hasRadio, secondaryNumber) {
    Object.setPrototypeOf(this, new Phone(name, brand, phoneNumber));
    this.secondaryNumber = secondaryNumber
    this.hasRadio = hasRadio;
    this.dialpadLayout = "en-US";

    this.call = function(number, sim=1){
        if(sim===1){
            Object.getPrototypeOf(this).call(number);
        }
        else if(sim===2){
            alert("Calling " + number + " via " + this.secondaryNumber);
        }
    };

    this.sendSms = function(message, sim=2){
        if(sim===1){
            Object.getPrototypeOf(this).sendSms(message);
        }
        else if(sim===2){
            alert("Sending message via " + this.secondaryNumber + " : " + message);
        }
    };
};

function SmartPhone(name, brand, phoneNumber, camSensorSize, display) {
    Object.setPrototypeOf(this, new Phone(name, brand, phoneNumber));
    this.camSensorSize = camSensorSize;
    this.display = display;

    this.installApp = function(appName) {
        alert("Installing " + appName + " on " + this.name);
    };
    this.takePicture = function(){
        if(this.camSensorSize > 7){
            alert("Taking picture..")
        }
        else{
            alert("Camera quality is bad..")
        }
    };
};

function AndroidPhone (name, brand, phoneNumber, display, camSensorSize, osVersion, hasNFC) {
    Object.setPrototypeOf(this, new SmartPhone(name, brand, phoneNumber, camSensorSize, display));
    this.osVersion = osVersion;  
    this.hasNFC = hasNFC;  

    this.useNFC = function() {
        if (this.hasNFC) {
            alert("Using NFC feature");
        } else {
            alert("NFC not supported on this device");
        }
    };
};

AndroidPhone.prototype = new SmartPhone();

function iOSPhone(name, brand, phoneNumber, display, camSensorSize, iosVersion) {
    Object.setPrototypeOf(this, new SmartPhone(name, brand, phoneNumber, camSensorSize, display));
    this.iosVersion = iosVersion;  

    this.useSiri = function() {
        alert("Using Siri on " + this.name);
    };
};

