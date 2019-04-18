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
      console.log(data)
      return data;
    });
    // let oneId = document.getElementById("fetch-one-input").value
    // axios.get(`${this.BASE_URL}/characters/${oneId}`)
    //   .then(response => {
    //     const { data } = response;
    //     const { id, name, occupation, weapon, cartoon } = data;
    //     console.log(id, name, occupation)

    //     const newCharacterHTML = `
    //         <div class="character-info" id ="character-info">
    //             <div class =${id}>ID: ${id}</div>
    //             <div class =${name}>Name: ${name}</div>
    //             <div class =${occupation}>: Occupation: ${occupation}</div>
    //             <div class =${weapon}>Waepon: ${weapon}</div>
    //             <div class =${cartoon}>Cartoon: ${cartoon}</div>
    //           </div>
    //         `;
    //     document.getElementById('character-info').remove();
    //     document.getElementById('characters-container').innerHTML += newCharacterHTML;
    //   })
  }

  createOneRegister() {

  }

  updateOneRegister() {

  }

  deleteOneRegister() {

  }
}
