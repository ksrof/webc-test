const apiUrl = "https://restcountries.com/v3.1/name/bolivia";

class Country extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    await fetch(apiUrl)
      .then((resp) => resp.json())
      .then((country) => {
        for (let i = 0; i < country.length; i++) {
          this.shadow.innerHTML = `
            <div>
              <h1>${country[i].name.common}</h1>
              <ul>
                <p>Language: <b>${country[i].languages.spa}</b></p>
                <p>Population: <b>${country[i].population}</b></p>
                <p>Continent: <b>${country[i].continents}</b></p>
              </ul>
            </div>
          `;
        }
      });
  }
}

customElements.define("country-details", Country);
