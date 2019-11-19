export class User {
    id: number;
    name: string;
    userName: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        }
    }
    phone: string;
    website: string;
    company: {
        Name: string;
        catchPhrase: string;
        bs: string;
    }
}