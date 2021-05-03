// ----------Declaração de variaveis---------

const menus = []
let proximoId = 1
const inputTitulo = document.getElementById('titulo')
const inputPreco = document.getElementById('preco')
const inputCategoria = document.getElementById('categoria')
const inputUrlImagem = document.getElementById('urlImagem')
const textAreaDescricao = document.getElementById('descricao')
const btnSalvar = document.getElementById('btnSalvar')
const selectTipoBusca = document.getElementById('tipoBusca')
const inputBusca = document.getElementById('inputBusca')
const visualizacaoMenus = document.getElementById('container-cards')

const contadorMenus = document.getElementById('contadorTodos')
const contadorEntradas = document.getElementById('contadorEntradas')
const contadorPratos = document.getElementById('contadorPratos')
const contadoSobremesas = document.getElementById('contadorSobremesas')

// ----------Funções de busca---------

const buscaMenuPorId = id => menu => menu.id === id;

const buscaMenusPorDescricao = descricao => menu =>  
menu.descricao.toUpperCase().search(descricao.toUpperCase()) > -1;

const buscaMenusPorTitulo = titulo => menu =>  
menu.titulo.toUpperCase().search(titulo.toUpperCase()) > -1;

const retornaTipoBusca = () => selectTipoBusca.value;

inputBusca.addEventListener('keyup', (event) => {
  const valor = event.target.value;
  const tipoBusca = retornaTipoBusca();
  console.log(tipoBusca)
  const listaMenusFiltrada = menus.filter(
      tipoBusca === 'titulo' ? buscaMenusPorTitulo(valor) :  
      tipoBusca ==='descricao' ? buscaMenusPorDescricao(valor) :
      alert('Item não encontrado')
  );
  
  atualizaListaMenus(listaMenusFiltrada);
});

// ----------Manipulação de items da tela---------

const adicionaItem = () => {
  if(!inputTitulo.value ||
    !inputPreco.value ||
    !inputCategoria.value ||
    !inputUrlImagem.value ||
    !textAreaDescricao.value ){
    alert('Preencha todos os campos')
  } else {
  const menu = {
      id: proximoId,
      titulo: inputTitulo.value,
      preco: parseFloat(inputPreco.value),
      categoria: inputCategoria.value,
      urlImagem: inputUrlImagem.value,
      descricao: textAreaDescricao.value 
  }
  menus.push(menu);
  proximoId++;
  atualizaListaMenus();
  limpaCampos()
  fecharModal('modal')
  somatorios()
  console.log(menus)
}
}

btnSalvar.onclick = adicionaItem;

limpaCampos = () => {
  inputTitulo.value = ''
  inputCategoria.value = 'selecione'
  inputPreco.value = ''
  inputUrlImagem.value = ''
  textAreaDescricao.value = ''
}

const atualizaListaMenus = listaMenus => {
  let articles = ''
  const listaDeMenus = listaMenus && listaMenus.length > 0 ? listaMenus : menus;
  // listaMenus = menus
  for (menu of listaDeMenus){
    articles += `
    <article class="menu-item">
    <img src="${menu.urlImagem}" alt="Foto do prato" class="imagens" />
    <div class="item-info">
      <header>
        <h4>${menu.titulo}</h4>
        <h4 class="preco-item">R$ ${menu.preco}</h4>
      </header>
      <p class="item-descricao">${menu.descricao} </p>
      <div class="icons-item">
        <span class="material-icons acao" onclick="removeMenu(${menu.id})"> delete</span>
      </div>
    </div>
  </article>
    `;
  }
  visualizacaoMenus.innerHTML = articles;
}

const removeMenu = (id) => {
  const indiceMenu = menus.findIndex(buscaMenuPorId(id));
  menus.splice(indiceMenu, 1)
  atualizaListaMenus()
  somatorios()
}