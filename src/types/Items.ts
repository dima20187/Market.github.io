export interface IItems {
    id: string;
    image: HTMLImageElement | any;
    name: string;
    about?: string;
    href?: string;
    quantity: number;
    price: number;
};

export interface IUser {
    id: string;
    number: number;
};