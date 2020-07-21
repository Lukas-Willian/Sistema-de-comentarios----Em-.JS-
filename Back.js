function Public(){

let Text = document.getElementById('Menssage').value;
let Name = document.getElementById('Name').value;
let arrayT = [];


if(Text == '' || Name == ''){
    window.alert('Por favor preencha os campos corretamente!');
    }
else{
    
    arrayT.push(Text);
    console.log(Name);
    console.log(arrayT);

    //Criar um novo nome*/
    let Nome = document.createElement('P');
    let Nomec = document.createTextNode(Name);
    Nome.appendChild(Nomec);
    let Atuan = document.getElementById('Coment').value;
    document.body.insertBefore(Nome , Atuan);
    Nome.style.backgroundColor = '#FF5A5A';
    Nome.style.fontFamily = 'Decker, bold';
    Nome.style.fontSize = "30px";
    Nome.style.width = "300px";
    

    //Criar um novo comentario*/
    let comentario = document.createElement('P');
    let Texto = document.createTextNode(arrayT[arrayT.length-1]);
    comentario.appendChild(Texto);
    let Atual = document.getElementById('Coment').value;
    document.body.insertBefore(comentario ,Atual);
    comentario.style.fontFamily = 'Decker';
    comentario.style.fontSize = '20px';
    
 
    }

}