async function generation(){
    let prim = await eel.genericPrim()();
    document.getElementById('prim').innerHTML = prim;
}

async function answering(){
    answ = await eel.genericAnsw(document.getElementById('prim').textContent)();
    console.log(answ);
    let answ_1 = document.getElementById('answer').value;
    if(answ_1 == answ){
        document.getElementById('corr').innerHTML = "Молодец правильно 😸";
    } else {
        document.getElementById('corr').innerHTML = "Подумай ещё 😿";
    }
}

document.getElementById('gen').onclick = function(){
    generation();
}

document.getElementById('give_answ').onclick = function(){
    answering();
}