type Carz = {
    make: string;
    model: string;
    color: string;
    year: number;
};

let cara: Carz = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    color: "red"
};

cara.color = "blue"; 
cara.year = 2021; 

console.log(cara); 
