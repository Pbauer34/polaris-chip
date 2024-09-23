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
    this.description = '';
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      a{
        display: inline-block;
        border-radius: 6px;
        font-size: 16px;
        background-color: black;
        color: gold;
        text-decoration: none;
      }

      #card{
        padding: 10px;
        margin: auto;
        width: 300px;
        border: 10px solid gold;
      }

      #cardlist{
        display: flex;
  
      }

      #button_section
      {
      float: right;
      margin: 20px;
        
      }
      #title
      {
        text-align: center;
      }
      

      div img
      {
        width: 300px;
        height: 200px;
        
        
        
      }
      .img{
        border: 10px solid black;
      }
      #description_section
      {
      
        border-style: double;
        border-radius: 10px;
      }

      p
      {
        font-size: 15px;
        text-align: center;
      }




    `;
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
        <div id="description_section">
          <p>${this.description}</p>
        </div>
  </div>
  </div>
    
    
    
    
    
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      link: { type: String },
      image: { type: String},
      description: { type: String }
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
