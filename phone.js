function Phone() {
    this.call = function(number) {
        alert("Calling " + number + " via " + this.phoneNumber);
    };
    this.sendSms = function(message) {
        alert("Sending message via " + this.phoneNumber + " : " + message);
    };
};

function CellPhone(name, brand, phoneNumber, hasRadio) {
    this.name = name;
    this.brand = brand;
    this.phoneNumber = phoneNumber;
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

CellPhone.prototype = new Phone();

function SmartPhone() {
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
    }
};

SmartPhone.prototype = new Phone();

function AndroidPhone (name, brand, phoneNumber, display, camSensorSize, osVersion, hasNFC) {
    this.name=name;
    this.brand = brand;
    this.phoneNumber = phoneNumber;
    this.display = display;
    this.camSensorSize = camSensorSize;
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
    this.name = name;
    this.brand = brand;
    this.phoneNumber = phoneNumber;
    this.display = display;
    this.camSensorSize = camSensorSize;
    this.iosVersion = iosVersion;  

    this.useSiri = function() {
        alert("Using Siri on " + this.name);
    };
};

iOSPhone.prototype = new SmartPhone();
