function Phone(name, brand, phoneNumber) {
    this.name = name;
    this.brand = brand;
    this.phoneNumber = phoneNumber;
};

Phone.prototype.call = function(number) {
    alert("Calling " + number + " via " + this.phoneNumber);
};

Phone.prototype.sendSms = function(message) {
    alert("Sending message via " + this.phoneNumber + " : " + message);
};

function BasicPhone(name, brand, phoneNumber, hasRadio) {
    Phone.call(this, name, brand, phoneNumber);
    this.hasRadio = hasRadio;
    this.dialpadLayout = "en-US";
};

BasicPhone.prototype = Object.create(Phone.prototype);
BasicPhone.prototype.constructor = BasicPhone;

BasicPhone.prototype.listenRadio = function() {
    if(this.hasRadio) {
        alert("Listening to radio");
    }
    else {
        alert("Sorry, your mobile doesn't support radio");
    }
};

function DualSimPhone(name, brand, phoneNumber, hasRadio, secondaryNumber) {
    Phone.call(this, name, brand, phoneNumber);
    this.secondaryNumber = secondaryNumber
    this.hasRadio = hasRadio;
    this.dialpadLayout = "en-US";
};

DualSimPhone.prototype = Object.create(Phone.prototype);
DualSimPhone.prototype.constructor = DualSimPhone;

DualSimPhone.prototype.call = function(number, sim=1){
    if(sim===1){
        Phone.prototype.call.call(this, number);
    }
    else if(sim===2){
        alert("Calling " + number + " via " + this.secondaryNumber);
    }
};

DualSimPhone.prototype.sendSms = function(message, sim=2){
    if(sim===1){
        Phone.prototype.sendSms.call(this, message);
    }
    else if(sim===2){
        alert("Sending message via " + this.secondaryNumber + " : " + message);
    }
};

function SmartPhone(name, brand, phoneNumber, camSensorSize, display) {
    Phone.call(this, name, brand, phoneNumber);
    this.camSensorSize = camSensorSize;
    this.display = display;
};

SmartPhone.prototype = Object.create(Phone.prototype);
SmartPhone.prototype.constructor = SmartPhone;

SmartPhone.prototype.installApp = function(appName) {
    alert("Installing " + appName + " on " + this.name);
};

SmartPhone.prototype.takePicture = function(){
    if(this.camSensorSize > 7){
        alert("Taking picture..")
    }
    else{
        alert("Camera quality is bad..")
    }
};

function AndroidPhone (name, brand, phoneNumber, display, camSensorSize, osVersion, hasNFC) {
    SmartPhone.call(this, name, brand, phoneNumber, display, camSensorSize);
    this.osVersion = osVersion;  
    this.hasNFC = hasNFC;  

};

AndroidPhone.prototype = Object.create(SmartPhone.prototype);
AndroidPhone.prototype.constructor = AndroidPhone;

AndroidPhone.prototype.useNFC = function() {
    if (this.hasNFC) {
        alert("Using NFC feature");
    } else {
        alert("NFC not supported on this device");
    }
};

function iOSPhone(name, brand, phoneNumber, display, camSensorSize, iosVersion) {
    SmartPhone.call(this, name, brand, phoneNumber, display, camSensorSize);
    this.iosVersion = iosVersion;  

};

iOSPhone.prototype = Object.create(SmartPhone.prototype);
iOSPhone.prototype.constructor = iOSPhone;

iOSPhone.prototype.useSiri = function() {
    alert("Using Siri on " + this.name);
};