const lista = document.getElementById( 'lista');
const form = document.getElementById('form_add');

//array da nossa lista 
const listaDeClientes =['Kaian', 'Julia', 'Lucas'];

//função que exibirá nossa lista
const exibirLista = () => {
    lista.innerHTML = "";
    for(let i = 0; i < listaDeClientes.length; i++){
        lista.innerHTML += `<div class="lista">
        <h2>${listaDeClientes[i]} </h2>
        <button onclick="excluirItem(${i})"> 
        Excluir </button> </div `
    }
}   

//método para cadastrar um item na lista
const cadastrarItem = () => {
    lista.style.display = 'block';
    form.style.display = 'none';
    const input = document.getElementById('input').value
    listaDeClientes.push(input);
    exibirLista();
}

//função para exibir o formulario
const exibirFormulario = () =>{
    lista.style.display = 'none';
    form.style.display = 'block';
}

//função para excluir um item
const excluirItem = posicaoitemAserExcluido => {
    listaDeClientes.splice(posicaoitemAserExcluido,1);
    exibirLista();
}
exibirLista()