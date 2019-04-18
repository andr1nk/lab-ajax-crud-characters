const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready(() => {
  document.getElementById('fetch-all').onclick = event => {
    event.preventDefault();
    charactersAPI.getFullList().then(data => {
      data.forEach(character => {
        const { id, name, occupation, weapon, cartoon } = character;
        console.log(id, name, occupation, weapon, cartoon)
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

  document.getElementById('fetch-one').onclick = event => {
    event.preventDefault();
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

  document.getElementById('delete-one').onclick = event => {
    event.preventDefault();
    charactersAPI.deleteOneRegister()
  }

  document.getElementById('edit-character-form').onsubmit = function() { 
    event.preventDefault();
    charactersAPI.updateOneRegister()
  }

  document.getElementById('new-character-form').onsubmit = event => {
    event.preventDefault();
    console.log("creatd one")
    charactersAPI.createOneRegister()
  }
})
