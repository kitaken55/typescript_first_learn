"use strict";
var Address = /** @class */ (function () {
    function Address(_zip) {
        this._zip = _zip;
        this.addresses =
            {
                '079-1100': {
                    'prefecture': '北海道',
                    'city': '赤平市'
                },
                '038-0000': {
                    'prefecture': '青森県',
                    'city': '青森市'
                }
            };
    }
    Object.defineProperty(Address.prototype, "zip", {
        get: function () {
            return this._zip;
        },
        enumerable: true,
        configurable: true
    });
    // public getZip():string {
    //     return this.zip;
    // }
    Address.prototype.getAddress = function () {
        var here = this.addresses[this.zip];
        return here.prefecture + " " + here.city;
    };
    return Address;
}());
var myaddress = new Address('0380000');
console.log(myaddress.getAddress());
console.log(myaddress.zip);
