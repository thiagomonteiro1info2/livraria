<script>
import {v4 as uuidv4} from "uuid";
export default {
  data() {
    return {
      editoras: [
        {
          id: "001",
          editoras: "Antofágica",
          site: " ",
        },
        {
          id: "002",
          editoras: "Companhia das Letras",
          site: " ",
        },
        {
          id: "003",
          editoras: "Buzz",
          site: " ",
        },
        {
          id: "004",
          editoras: "Amoler",
          site: " ",
        },
        {
          id: "005",
          editoras: "Aleph",
          site: " ",
        },
        {
          id: "006",
          editoras: "GloboLivros",
          site: " ",
        },
        {
          id: "007",
          editoras: "Saraiva",
          site: " ",
        },
      ],
      novo_editora: "",
      novo_site: ""
    };
  },
  methods: {
    salvar () {
      if ((this.novo_editora !== "" || this.novo_site !== "")){
        const novo_id = uuidv4();
        this.editoras.push({
          id: novo_id,
          editoras: this.novo_editora,
          site: this.novo_site,
        });
        this.novo_editora = "";
        this.novo_site = "";
      }
    },
    excluir(editora) {
      const indice = this.editoras.indexOf(editora);
      this.editoras.splice(indice, 1);
    }, 
  },
};
</script>
<template>
  <main>
    <div class="container">
      <div class="title">
        <h2> Gerenciamento de Editoras </h2>
      </div>
      <div class="form-input">
        <input
          id="ed" 
          type="text" 
          v-model="novo_editora" 
          placeholder="Editora..." 
        />
        <input 
          id="si" 
          type="url" 
          v-model="novo_site" 
          placeholder="Site..." 
        />
        <button @click="salvar"> Salvar </button>
      </div>
      <div class="list-editoras">
        <table>
          <thead>
            <tr>
              <th> ID </th>
              <th> Editora </th>
              <th> Site </th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="editora in editoras" :key="editora.id">
              <td class="ide">{{ editora.id }}</td>
              <td>{{ editora.editoras }}</td>
              <td>{{ editora.site }}</td>
              <td class="acao">
                <button> Editar </button>
                <button @click="excluir(editora)"> Excluir </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>

<style>

#si {
  width: 30%;
  margin-left: 2px;
  margin-bottom: 20px ;
}

#ed {
  width: 30%;
  margin-right: 2px;
}

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

.form-input button {
  margin-left: 2px;
  width: 20%;
  height: 40px;
  border: 1px solid rgb(211, 211, 211);
  border-radius: 10px;
  background-color: #0064bb;
  color: rgb(255, 255, 255);
  font-weight: bold;
  cursor: pointer;
}

.list-editoras {
  display: flex;
  justify-content: center;
}

.list-editoras table {
  width: 80%;
  margin: 0 auto;
  border-collapse: collapse;
}

table tr td {
  border: 1px solid rgb(211, 211, 211);
  padding: 10px;
}
</style>
