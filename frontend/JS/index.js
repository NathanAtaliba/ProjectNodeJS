function reset(){
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    email.value = "";
    password.value = "";
}

async function login(){
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    try{
    const retorno = await fetch('http://localhost:3000/client');
    const clients = await retorno.json();
    var flag = 0; 
    if(email == "" || password == ""){
        alert('Preencha os campos de dados!');
        location.reload();
    }
    else{ 
    for(var i=0; i<=(clients.length)-1; i++){
        if((email == clients[i].email) && (password == clients[i].password)){
            flag = 1;
        }
    }   
    if(flag == 0){
        console.log('Client not found in database!');
        alert('Email or password incorrects!');
        location.reload();
    }
    else{
        flag = 0;      
        console.log('Client found in database!');
        alert('Logado com sucesso!');   
        window.location.href = "client.html";
    }
    }
    }catch(error){
        console.log("Erro ao buscar client no servidor:"+ error);
        alert("Erro ao buscar client no servidor:"+ error);
}    
}

async function createClient() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (email === '' || password === '') {
        alert('Preencha todos os campos!');
        location.reload();
        return;
    }

    try {
        const retorno = await fetch('http://localhost:3000/client');
        const clients = await retorno.json();

        // Verificar se o email já existe
        const emailExists = clients.some(client => client.email === email);

        if (emailExists) {
            alert('Um usuário já está usando este e-mail. Por favor, insira outro e-mail.');
            location.reload();
            return;
        }

        const myRequest = new Request('http://localhost:3000/client', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
            body: JSON.stringify({
                name: ' ',
                email: email,
                password: password,
                number: ' ',
                hora_marcada: ' '
            }),
        });

        const response = await fetch(myRequest);

        if (!response.ok) {
            throw new Error('Erro na solicitação.');
        }

        const data = await response.json();
        console.log(data);
        alert('Cliente criado com sucesso!');
        location.reload();
    } catch (error) {
        console.error(error);
        alert('Ocorreu um erro ao criar o cliente.');
    }
}

