class Phone{
    constructor(name, brand, phoneNumber){
        this.name = name;
        this.brand = brand;
        this.phoneNumber = phoneNumber;
    }
    call(number){
        alert(`Calling ${number} via ${this.phoneNumber}`);
    }
    sendSms(message){
        alert(`Sending message via ${message}`);
    }
}

class CellPhone extends Phone{
    constructor(name, brand, phoneNumber, hasRadio){
        super(name, brand, phoneNumber);
        this.hasRadio = hasRadio;
        this.dialpadLayout = "en-US";
    }

    listenRadio(){
        alert(this.hasRadio
            ?`Listening on Radio...`
            :`Sorry, your mobile phone doesn't support radio function`);
    }
}

class SmartPhone extends Phone{
    constructor(name, brand, phoneNumber, display, camSensorSize){
        super(name, brand, phoneNumber);
        this.display = display;
        this.camSensorSize = camSensorSize;
    }

    installApp(appName){
        alert(`Installing ${appName} on ${this.name}`)
    }
    takePicture(){
        alert(this.camSensorSize>7
            ?"Taking picture..."
            :"Camera quality is bad..");
    }
}

class AndroidPhone extends SmartPhone{
    constructor(name, brand, phoneNumber, display, camSensorSize, osVersion, hasNFC){
        super(name, brand, phoneNumber, display, camSensorSize);
        this.osVersion = osVersion;
        this.hasNFC = hasNFC;

    }
    useNFC(){
        alert(this.hasNFC
            ?"Using NFC..."
            :"This device doesn't support NFC");
    }
}

class iOSPhone extends SmartPhone{
    constructor(name, brand, phoneNumber, display, camSensorSize, iosVersion){
        super(name, brand, phoneNumber, display, camSensorSize);
        this.iosVersion = iosVersion;
    }

    useSiri(){
        alert(`Using Siri on ${this.name}`);
    }
}