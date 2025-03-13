
const addition = document.querySelector("#addition");
const subtraction = document.querySelector("#subtraction");
const multiplication = document.querySelector("#multiplication");
const division = document.querySelector("#division");

addition.addEventListener('click', ()=>{
    const firstNumber = +document.querySelector("#firstNumber").value;
    const secondNumber = +document.querySelector("#secondNumber").value;
    alert(" Addition is : "+(firstNumber+secondNumber));
});

subtraction.addEventListener('click', ()=>{
    const firstNumber = +document.querySelector("#firstNumber").value;
    const secondNumber = +document.querySelector("#secondNumber").value;
    alert(" Subtraction is : "+(firstNumber-secondNumber));
});

multiplication.addEventListener('click', ()=>{
    const firstNumber = +document.querySelector("#firstNumber").value;
    const secondNumber = +document.querySelector("#secondNumber").value;
    alert(" Multiplication is : "+(firstNumber*secondNumber));
});

division.addEventListener('click', ()=>{
    const firstNumber = +document.querySelector("#firstNumber").value;
    const secondNumber = +document.querySelector("#secondNumber").value;
    alert(" Division is : "+(firstNumber/secondNumber));
    confirm("Thank you !!!");
});