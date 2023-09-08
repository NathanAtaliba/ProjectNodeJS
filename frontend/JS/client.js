function reset(){
    let name = document.getElementById("name");
    let number = document.getElementById("number");
    let date = document.getElementById("date");
    let time = document.getElementById("time");
    name.value = "";
    number.value = "";
    date.value = "";
    time.value = "";
}
async function markHour(){
    let name = document.getElementById("name").value;
    let number = document.getElementById("number").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    hora_marcada = `data: ${date} e hora: ${time}`;
    if(name == "" ||number == "" || date == "" || time == ""){
        alert('Prencha todos os campos!')
        reset();
    }else{
        const myRequest = new Request('http://localhost:3000/client', {
            method: 'PUT',
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
                number: number,
                hora_marcada: hora_marcada
            }),
        });
    }
}