const mongoose = require('mongoose');

class MongooseService {

    static instance;

    constructor() {
        if (!MongooseService.instance) {
            MongooseService.instance = this;
        }
        return MongooseService.instance;
    }

    async connect() {
        return new Promise((resolve, reject) => {
            mongoose.connect(
                process.env.MONGODB_URL,
                {
                    useNewUrlParser: true,
                    useUnifiedTopology: true
                },
                () => {
                    resolve();
                });
        });
    }

}

const instance = new MongooseService();
Object.freeze(instance);
module.exports = instance
