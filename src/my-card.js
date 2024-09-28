import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = 'Card Title';
    this.link = '#';
    this.image ='';
    this.caption = '';
    this.description = '';
    this.fancy = false;
  }

  static get styles() {
    return css`
      :host {
        display: inline-flex;
        padding: 0 8px;
        margin-left: 120px;
        align-items: center;
      }

      :host([fancy]) {
        display: block;
        background-color: pink;
        border: 2px solid fuchsia;
        box-shadow: 10px 5px 5px red;
      }

      a{
        margin-top: 10px;
        display: inline-block;
        border-radius: 8px;
        border-color: gold;
        font-size: 14px;
        background-color: gold;
        color: black;
        text-decoration: none;
        padding: 5px;
        font-weight: 5px;
        
        
      }

      #card{
        padding: auto;
        margin: 60px;
        width: 400px;
        border: 10px solid black;
        background-color: gold;
      }


      #button_section
      {
      float: right;
      margin: 20px;
    
        
      }
      #title
      {
        text-align: left;
        padding-left: 8px;
        font-size: 35px;
        color: white;
        background-color: black;
        
      }
      

      div img
      {
        width: 400px;
        height: 300px;
        
        
        
      }
     
      #caption_section
      {
      
        color: black;
        padding: 8px;
      }

      p
      {
        font-size: 20px;
        text-align: center;
      }

      details summary {
        text-align: left;
        font-size: 20px;
        padding: 8px 0;
        color: black;
        margin: 8px;
      }

      details[open] summary {
        font-weight: bold;
      
      }
      
      details div {
        border: 2px solid black;
        text-align: center;
        padding: 8px;
        height: 140px;
        overflow: auto;
        background-color: white;
      }




    `;
  }

  openChanged(e) {
    console.log(e.newState);
    if (e.newState === "open") {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
  }

  render() {
    return html`
  <div id="card" class="card">
    <div id="button_section">
      <a href="${this.link}">Details</a>
    </div>
    <div id="title_section">
    <h1 id="title" class="card-title">${this.title}</h1>
    </div>
      <div>
        <img class="card-image" src="${this.image}">
      </div>
        <div id="caption_section">
          <p>${this.caption}</p>
        </div>
        <details ?open="${this.fancy}" @toggle="${this.openChanged}">
          <summary>Description</summary>
          <div>
          <slot>${this.description}</slot>
          </div>
      </details>
  </div>
  </div>
    
    
    
    
    
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      link: { type: String },
      image: { type: String},
      caption: {type: String },
      description: { type: String },
      fancy: { type: Boolean, reflect: true }
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
