let identifier = document.getElementById('identifier');
let page = identifier.textContent;

if(page === 'Ejercicio 1'){
    for(let i = 0;i<50;i++){
        if((i+1) %2 == 0){
            console.log(`El número ${i+1} es impar`);
        } 
    }
} else if(page === 'Ejercicio 3'){
    const array = [4,'dos',8,'tres',5,9,1,'cero'];
    for(let i =0;i<array.length;i++){
        if(typeof array[i] === 'number'){
            console.log(array[i]);
        }
    }
}