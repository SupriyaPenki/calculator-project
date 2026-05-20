let input=document.getElementById("input-box");
let buttons=document.querySelectorAll('button');
let string=localStorage.getItem('calculation')||"";
input.value=string;
let arr=Array.from(buttons);
arr.forEach(button =>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML === '='){
            try{
                if(string === ''){
                    string='0';
                    input.value=string;
                }else{
                   string=eval(string).toString();
                   input.value=string;
                }
            }catch(error){
                input.value='Error';
                string='';
            }  
        }
        else if(e.target.innerHTML==='AC'){
            string="";
            input.value=string;
        }
        else if(e.target.innerHTML === 'DEL'){
            string=string.substring(0,string.length-1);
            input.value=string;
        }
        else{
        string+=e.target.innerHTML;
        input.value=string;
        }
    localStorage.setItem('calculation',string);
    });
});
    document.addEventListener('keydown',(e)=>{
        const key=e.key;
        if((key>='0' && key<='9')||['+','-','*','/','%','.'].includes(key)){
            string+=key;
            input.value=string;
        }
        else if(key === 'Enter'){
           try{
            if(string === ''){
                string='0';
                input.value=string;
            }else{
                string =eval(string).toString();
                input.value=string;
            }
           } 
         catch(error){
            input.value='Error';
            string='';
        }
        }
        else if(key === 'Backspace'){
            string=string.substring(0,string.length-1);
            input.value=string;
        }
        else if(key==='Escape'){
            string='';
            input.value='';
        }
        localStorage.setItem('calculation',string);
    });

