export interface signUpData {
    name : string,
    email : string,
    password : string
}

export interface signInData {
    email : string,
    password : string
}

export interface product {
    name:string,
    price:number,
    category:string,
    image:string,
    color:string,
    description:string,
    id:number
}