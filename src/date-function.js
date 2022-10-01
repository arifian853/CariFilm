class GetDate extends HTMLElement {
    connectedCallback() {
        this.insertDate = new Date();
        this.innerHTML = `
        <p> ${this.insertDate} </p>
        `
    }
}

customElements.define('get-date', GetDate);