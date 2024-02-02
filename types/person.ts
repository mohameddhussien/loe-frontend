type Child = {
    name: string;
    age: string;
    food: boolean;
    showDetails: boolean;
};
export type Adult = {
    name: string;
    age: string;
    contact_mandatory: string;
    contact_optional: string;
    email:string;
    children: Child[];
    bus: boolean;
    food: boolean;
    showDetails: boolean;
};
