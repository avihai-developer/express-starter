class DeviceService {

    static instance;

    constructor() {
        if (!DeviceService.instance) {
            DeviceService.instance = this;
        }
        return DeviceService.instance;
    }

    charge(device) {
        device.charge();
    }

    open(device) {
        device.open();
    }

}

const instance = new DeviceService();
Object.freeze(instance);
module.exports = instance
