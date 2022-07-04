<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      categorias: [
        {
          id: "001",
          categorias: "História do Brasil",
        },
        {
          id: "002",
          categorias: "Fantasia",
        },
        {
          id: "003",
          categorias: "Aventura",
        },
        {
          id: "004",
          categorias: "Biografia",
        },
        {
          id: "005",
          categorias: "Ficção Científica",
        },
        {
          id: "006",
          categorias: "Romance",
        },
        {
          id: "007",
          categorias: "Poesia",
        },
      ],
      novo_categoria: "",
    };
  },
  methods: {
    salvar() {
      if (this.novo_categorias !== "") {
        const novo_id = uuidv4();
        this.categorias.push({
          id: novo_id,
          categorias: this.novo_categoria,
        });
        this.novo_categoria = "";
      }
    },
    excluir(categoria) {
      const indice = this.categorias.indexOf(categoria);
      this.categorias.splice(indice, 1);
    },
  },
};
</script>

<template>
  <main>
    <div class="container">
      <div class="title">
        <h2>Gerenciamento de Categorias</h2>
      </div>
      <div class="form-input">
        <input
          type="text"
          v-model="novo_categoria"
          placeholder="Categoria..."
        />
        <button @click="salvar">Salvar</button>
      </div>
      <div class="list-categorias">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th> Categoria </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="categoria in categorias" :key="categoria.id">
              <td class="ide">{{ categoria.id }}</td>
              <td>{{ categoria.categorias }}</td>
              <td class="acao">
                <button>Editar</button>
                <button @click="excluir(categoria)">Excluir</button>
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
  background-color: #0064bb;
  color: rgb(255, 255, 255);
  font-weight: bold;
  cursor: pointer;
}

.list-categorias {
  display: flex;
  justify-content: center;
}

.list-categorias table {
  width: 80%;
  margin: 0 auto;
  border-collapse: collapse;
}

table tr td {
  border: 1px solid rgb(211, 211, 211);
  padding: 10px;
}
</style>
