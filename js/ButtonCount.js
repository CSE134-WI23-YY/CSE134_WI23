class buttonCount extends HTMLElement {
  
    constructor() {
        super();
    //   this.innerHTML = `<button>CLick me</button>`;
        //this.innerHTML = `<button-count><button> CLickme </button></button-count>`;

        const button1 = document.createElement("elementName");

        var count = 0;

        // button1.innerHTML = `<button>Times clicked: <output></output> </button>`;
        button1.innerHTML = `<button>Times clicked: ${count}</button>`;
        // this.appendChild(button1);

        // this.contentEditable.appendChild(button1);

        // const output1 = button1.getElementsByTagName('button');

        // output1.value= count;


        const shadowRoot = this.attachShadow({ mode: "open" }).appendChild(button1);


        button1.addEventListener('click', ()=> {
            count++;
            // console.log('count', count);
            // output1.value= 1;
            button1.innerHTML = `<button>Times clicked: ${count}</button>`;
        });

        // output1.addEventListener()
    }

}

customElements.define('button-count', buttonCount);