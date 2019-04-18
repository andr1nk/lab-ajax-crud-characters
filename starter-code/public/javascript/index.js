const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready(() => {
  document.getElementById('fetch-all').onclick = function () {
    charactersAPI.getFullList().then(data => {
      data.forEach(character => {
        const { id, name, occupation, weapon, cartoon } = character;
        // console.log(id, name, occupation, weapon, cartoon)
        const newCharacterHTML = `
            <div class="character-info" id="character-info">
              <div class =${id}>ID: ${id}</div>
              <div class =${name}>Name: ${name}</div>
              <div class =${occupation}>Occupation: ${occupation}</div>
              <div class =${weapon}>Waepon: ${weapon}</div>
              <div class =${cartoon}>Cartoon: ${cartoon}</div>
            </div>
          `;
        document.getElementById('characters-container').innerHTML += newCharacterHTML;
      });
    })
  }

  document.getElementById('fetch-one').onclick = function () {
    charactersAPI.getOneRegister().then(data => {
      const { id, name, occupation, weapon, cartoon } = data;
      console.log(id, name, occupation, weapon, cartoon)
      const newCharacterHTML = `
        <div class="character-info" id ="character-info">
          <div class =${id}>ID: ${id}</div>
            <div class =${name}>Name: ${name}</div>
            <div class =${occupation}>Occupation: ${occupation}</div>
            <div class =${weapon}>Waepon: ${weapon}</div>
            <div class =${cartoon}>Cartoon: ${cartoon}</div>
          </div>
        `;
      document.getElementById('characters-container').innerHTML += newCharacterHTML;
    })
  }

  document.getElementById('delete-one').onclick = function () {

  }

  document.getElementById('edit-character-form').onsubmit = function () {

  }

  document.getElementById('new-character-form').onsubmit = function () {

  }
})
