<script>
import {v4 as uuidv4} from "uuid";
export default {
  data() {
    return {
      autores: [
        {
          id: "001",
          autores: "Laurentino Gomes",
        },
        {
          id: "002",
          autores: "Fernando Pessoa",
        },
        {
          id: "003",
          autores: "Luciano Subirá",
        },
        {
          id: "004",
          autores: "George Orwell",
        },
        {
          id: "005",
          autores: "Max Lucado",
        },
        {
          id: "006",
          autores: "Paulo Coelho",
        },
        {
          id: "007",
          autores: "Darcy Ribeiro",
        },
      ],
      novo_autor: "",
    };
  },
  methods: {
    salvar () {
      if (this.novo_autores !== "") {
        const novo_id = uuidv4();
        this.autores.push({
          id: novo_id,
          nome: this.novo_autor,
        });
        this.novo_autor = "";
      }
    },
    excluir(autor) {
      const indice = this.autores.indexOf(autor);
      this.autores.splice(indice, 1);
    },
  },
};
</script>
<template>
  <main>
    <div class="container">
      <div class="title">
        <h2> Gerenciamento de Autores </h2>
      </div>
      <div class="form-input">
        <input type="text" v-model="novo_autor" placeholder="Autor..."/>
        <button @click="salvar"> Salvar </button>
      </div>
      <div class="list-autores">
        <table>
          <thead>
            <tr>
              <th> ID </th>
              <th> Autor </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="autor in autores" :key="autor.id">
              <td class="ide">{{ autor.id }}</td>
              <td>{{ autor.autores }}</td>
              <td class="acao">
                <button> Editar </button>
                <button @click="excluir(autor)">Excluir</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>

<style>

.ide {
  width: 25%;
}

.acao {
  width: 20%;
}

.title {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

.form-input {
  margin-top: 10px;
  display: flex;
  justify-content: center;
}

.form-input input {
  width: 60%;
  height: 40px;
  border: 1px solid rgb(147, 147, 147);
  border-radius: 10px;
  padding: 0 10px;
}

.form-input button {
  margin-left: 1px;
  width: 20%;
  height: 40px;
  border: 1px solid rgb(211, 211, 211);
  border-radius: 10px;
  background-color: #004a85;
  color: rgb(255, 255, 255);
  font-weight: bold;
  cursor: pointer;
}

.list-autores {
  display: flex;
  justify-content: center;
}

.list-autores table {
  width: 80%;
  margin: 0 auto;
  border-collapse: collapse;
}

table tr td {
  border: 1px solid rgb(211, 211, 211);
  padding: 10px;
}
</style>
