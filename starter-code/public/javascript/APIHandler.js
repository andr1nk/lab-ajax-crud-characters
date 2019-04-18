class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    document.querySelector('.characters-container').innerHTML = "";
    return axios.get(`${this.BASE_URL}/characters`).then(response => {
      const { data } = response;
      return data
    });
  }

  getOneRegister() {
    document.querySelector('.characters-container').innerHTML = "";
    return axios.get(`${this.BASE_URL}/characters/${document.getElementById("fetch-one-input").value}`).then(response => {
      const { data } = response;
      return data;
    });
  }

  createOneRegister() {
    const name = document.getElementById('name').value;
    const occupation = document.getElementById('occupation').value;
    const weapon = document.getElementById('weapon').value;
    const cartoon = document.getElementById('cartoon').value;
    console.log(axios.post(`${this.BASE_URL}/characters`, {name, occupation, weapon, cartoon }))
    axios.post(`${this.BASE_URL}/characters`, {name, occupation, weapon, cartoon })
  }

  updateOneRegister() {
    const id = document.getElementById('id-upd').value;
    const name = document.getElementById('name-upd').value;
    const occupation = document.getElementById('occupation-upd').value;
    const weapon = document.getElementById('weapon-upd').value;
    const cartoon = document.getElementById('cartoon-upd').value;
    axios.put(`${this.BASE_URL}/characters/${id}`, {name, occupation, weapon, cartoon })
  }

  deleteOneRegister() {
    document.querySelector('.characters-container').innerHTML = "";
    axios.delete(`${this.BASE_URL}/characters/${document.getElementById("delete-one-input").value}`)
  }
}
