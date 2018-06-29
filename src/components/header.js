
import { html, render } from 'lit-html/lib/lit-extended';
import { router } from './../libs/routing';
import './logo';
import './link';

export default class BitrockHeader extends HTMLElement {
  static get observedAttributes() { 
    return ['menu', 'tags', 'active']; 
  }

  _render(menu = [], tags = [], active = false) {
    const _active = active ? 'active' : '';

    const markup = html`
      <header class$="${_active}">
        <div class="logo">
          <bitrock-logo></bitrock-logo>
        </div>
      
        <i class="fas fa-bars"></i>
      
        <nav>
          <div class="logo">
            <bitrock-logo></bitrock-logo>
          </div>
          <ul>
            ${menu.map(e => 
              html`<li><rock-link
                label$="${e.title}"
                url$="${e.url}"
              ></rock-link></li>`)}
          </ul>
          <hr>
          <ul class="tags">
            ${tags.map(e =>
              html`<li><a href="${e.slug}">#${e.name}</a></li>`)}
          </ul>
        </nav>
      </header>
    `;

    render(markup, this);
  }

  _mobileNav(){
    const nav = this.querySelector('nav');
    const ham = this.querySelector('.fa-bars');

    ham.addEventListener('click', evt => {
      nav.classList.add('open');
    });

    nav.addEventListener('click', evt => {
      nav.classList.remove('open');
    });
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // console.log(name, newValue);
    switch(name){
      case 'active':
        this.active = newValue === 'true';
        break;
      case 'menu':
      case 'tags':
        this[name] = JSON.parse(newValue) || [];
        break;
    }

    this._render(this.menu, this.tags, this.active);
  }

  connectedCallback(){
    this._render();
    this._mobileNav();
  }
}

customElements.define('bitrock-header', BitrockHeader);