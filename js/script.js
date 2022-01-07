function newLike(elemento){
    counter = elemento.innerText;
    console.log(counter);
    counter++;
    console.log(counter);
    elemento.innerText = counter;
}