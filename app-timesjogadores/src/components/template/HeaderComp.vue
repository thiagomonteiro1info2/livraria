<template>
  <header>
    <div class="menu-esquerdo">
      <span> <RouterLink to="/">Home</RouterLink> </span>
      <span>|</span>
      <span> <RouterLink to="/livros">Livros</RouterLink> </span>
      <span>|</span>
      <span> <RouterLink to="/autores">Autores</RouterLink> </span>
      <span>|</span>
      <span> <RouterLink to="/editoras">Editoras</RouterLink> </span>
      <span>|</span>
      <span> <RouterLink to="/categorias">Categorias</RouterLink> </span>
    </div>
    <div class="menu-direito">
      <span>Sair</span>
    </div>
  </header>
</template>

<style>
header span {
  padding: 0 20px;
}

header {
  background-image: url(https://hfside.com.br/wp-content/uploads/2019/01/fundo-header-300x150.jpg);
  background-size: 100%;
  height: 15%;
  font-size: 1.3rem;
  padding-left: 2rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>