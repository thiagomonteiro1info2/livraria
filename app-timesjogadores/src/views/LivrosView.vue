<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      livros: [
        {
          id: "001",
          nome: "1808",
          isbn: "34548495",
          quantidade: "5", 
          preco: "R$25,00",
        },
        {
          id: "002",
          nome: "Livro do Desassossego",
          isbn: "37928465",
          quantidade: "15", 
          preco: "R$36,00",
        },
        {
          id: "003",
          nome: "Até que nada mais importe",
          isbn: "09567373",
          quantidade: "20", 
          preco: "R$52,00",
        },
        {
          id: "004",
          nome: "1984",
          isbn: "98536710",
          quantidade: "7", 
          preco: "R$ 22,90",
        },
        {
          id: "005",
          nome: "Conectados com Deus",
          isbn: "3454363452",
          quantidade: "1", 
          preco: "25",
        },
        {
          id: "006",
          nome: "O Alquimista",
          isbn: "7538039",
          quantidade: "15", 
          preco: "$25,00",
        },
        {
          id: "007",
          nome: "O povo brasileiro",
          isbn: "3454363452",
          quantidade: "3", 
          preco: "R$62,90",
        },
      ],
      novo_livro: "",

    };
  },
  methods: {
    salvar() {
      if (this.novo_livros !== "" || this.novo_isbn !=="" || this.novo_quantidade !=="" || this.novo_preco !=="") {
        const novo_id = uuidv4();
        this.livros.push({
          id: novo_id,
          nome: this.novo_livro,
          isbn: this.novo_isbn,
          quantidade: this.novo_quantidade,
          preco: this.novo_preco,
        });
        this.novo_livro = "";
        this.novo_isbn = "";
        this.novo_quantidade = "";
        this.novo_preco = "";
      }
    },
    excluir(livro) {
      const indice = this.livros.indexOf(livro);
      this.livros.splice(indice, 1);
    },
  },
};
</script>
<template>
  <main>
    <div class="container">
      <div class="title">
        <h2> Gerenciamento de Livros </h2>
      </div>
      <div class="form-input">
        <input type="text" 
        id="inp"
        v-model="novo_livro" 
        placeholder="Livro..."
        />
        <input type="text"
        id="inp" 
        v-model="novo_isbn" 
        placeholder="ISBN..."
        />
        <input type="text"
        id="inp" 
        v-model="novo_quantidade" 
        placeholder="Quantidade..."
        />
        <input type="text"
        id="inp" 
        v-model="novo_preco" 
        placeholder="Preço..."
        />
        <button @click="salvar">Salvar</button>
      </div>
      <div class="list-livros">
        <table>
          <thead>
            <tr>
              <th> ID </th>
              <th> Livro </th>
              <th> ISBN </th>
              <th> Quantidade </th>
              <th> Preço </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="livro in livros" :key="livro.id">
              <td class="ide">{{ livro.id }}</td>
              <td>{{ livro.nome }}</td>
              <td> {{ livro.isbn }}</td>
              <td> {{ livro.quantidade }} </td>
              <td> {{ livro.preco }} </td>
              <td class="acao">
                <button>Editar</button>
                <button @click="excluir(livro)">Excluir</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>

<style>

#inp {
  width: 15%;
}

.ide {
  width: 20%;
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
  font-weight: bold;
  color: black;
  cursor: pointer;
}

.list-livros {
  display: flex;
  justify-content: center;
}

.list-livros table {
  width: 80%;
  margin: 0 auto;
  border-collapse: collapse;
}

table, tr, th, td {
  border: 2px solid black;
  padding: 10px;
}
main{
  background-image: url();
}
</style>
