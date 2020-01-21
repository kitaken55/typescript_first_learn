class Address {
    private addresses: any;

    public constructor(private _zip: string) {
        this.addresses =
        {
            '079-1100': {
                'prefecture' : '北海道',
                'city' : '赤平市'
            },
            '038-0000': {
                'prefecture' : '青森県',
                'city' : '青森市'
            }
        };
    }

    get zip():string {
        return this._zip;
    }

    // public getZip():string {
    //     return this.zip;
    // }

    public getAddress():string {
        let here = this.addresses[this.zip];
        return `${here.prefecture} ${here.city}`
    }
}


let myaddress = new Address('0380000');
console.log(myaddress.getAddress());
console.log(myaddress.zip);
