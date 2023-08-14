async function login(){
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const retorno = await fetch('http://localhost:3000/client');
    const clients = await retorno.json();
    var flag = 0;  
    for(var i=0; i<=(clients.length)-1; i++){
        if((email === clients[i].email) && (password === clients[i].password)){
            flag = 1;
        }
    }   
    if(flag === 0){
        console.log('Client not found in database!')
        alert('Email or password incorrects!');
    }
    else{
        flag = 0;      
        console.log('Client found in database!');
        alert('Logado com sucesso!');   
        window.location.href = "client.html";
    }
}