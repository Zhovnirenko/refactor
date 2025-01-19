const Food = require('./Food');

class RareFood extends Food {
    constructor(server, owner, position, size) {
        super(server, owner, position, size);
        this.type = 4;
        this.isVirus = true;
        this.color = { r: 255, g: 215, b: 0 };
    }

}

module.exports = RareFood;