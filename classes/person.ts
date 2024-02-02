 class Child {
    name: string;
    age: string;
    food: boolean;
    showDetails: boolean;

    constructor() {
        this.name = "";
        this.age = "";
        this.food = false;
        this.showDetails = false;
    }
}

 class Adult {
    name: string;
    age: string;
    contact_mandatory: string;
    contact_optional: string;
    email: string;
    children: Child[];
    bus: boolean;
    food: boolean;
    showDetails: boolean;

    constructor() {
        this.name = "";
        this.age = "";
        this.contact_mandatory = "";
        this.contact_optional = "";
        this.email = "";
        this.children = [];
        this.bus = false;
        this.food = false;
        this.showDetails = false;
    }
}
export {
    Adult
}