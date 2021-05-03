const somar = (n1, n2) => n1 + n2; 

const somatorios = () => {
  somaMenus()
  somaEntradas()
  somaPratos()
  somaSobremesas()
}

const somaMenus = () => {
  return contadorMenus.innerHTML = menus.length
}

const somaEntradas = () => {
  const getEntrada = menu => menu.categoria === 'entrada' ? 1 : 0
  const somaEntradas = menus.map(getEntrada).reduce(somar,0)
  return contadorEntradas.innerHTML = somaEntradas
}

const somaPratos = () => {
  const getPrato = menu => menu.categoria === 'pratoPrincipal' ? 1 : 0
  const somaPratos = menus.map(getPrato).reduce(somar,0)
  return contadorPratos.innerHTML = somaPratos
}

const somaSobremesas = () => {
  const getSobremesa = menu => menu.categoria === 'sobremesa' ? 1 : 0
  const somaSobremesas = menus.map(getSobremesa).reduce(somar,0)
  return contadoSobremesas.innerHTML = somaSobremesas
}

const filtraEntrada = () => {
  const somenteEntradas = menus.filter(menu => menu.categoria === 'entrada')
  atualizaListaMenus(somenteEntradas)
}

const filtraPratos = () => {
  const somentePratos = menus.filter(menu => menu.categoria === 'pratoPrincipal')
  atualizaListaMenus(somentePratos)
}

const filtraSobremesa = () => {
  const somenteSobremesas = menus.filter(menu => menu.categoria === 'sobremesa')
  atualizaListaMenus(somenteSobremesas)
}