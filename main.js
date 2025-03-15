const input = document.querySelector('#input');
const buttons = document.querySelectorAll('button');
let string = '';


buttons.forEach(element => {
    element.addEventListener('click', (b)=>{
        // console.log(btn.innerText);
        if(b.target.innerText == '=')
        {
            string = String(eval(string));
            input.value = string;
        }else if(b.target.innerText == 'CLEAR')
        {
            string = '';
            input.value = string;
        }else if(b.target.innerText == 'BACK')
        {
            string = string.substring(0,string.length-1);
            input.value = string;
        }else if(b.target.innerText == 'ON')
        {
             string = '';
             input.value = string;
        }
        else{
            string += b.target.innerText;
            input.value = string;
        }
    });
})

