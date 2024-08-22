function generarFizzBuzz(numero) {
    if(numero % 3 === 0){
        return "Fizz";    
    } 
    return numero.toString()
};

export default generarFizzBuzz;