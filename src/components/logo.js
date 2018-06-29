
import { html, render } from 'lit-html/lib/lit-extended';
import { router, routes } from './../libs/routing';
import './link';

export default class BitrockLogo extends HTMLElement {
  _navigate(evt){
    console.log(evt);
    router.navigate(routes[0].path);
  }

  connectedCallback() {
    const markup = html`
      <svg on-click=${this._navigate} width="154px" height="37px" viewBox="0 0 154 37" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <!-- Generator: Sketch 50.2 (55047) - http://www.bohemiancoding.com/sketch -->
        <desc>Created with Sketch.</desc>
        <defs></defs>
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="BtR_S02_375B" transform="translate(-17.000000, -24.000000)">
            <g id="Page-1" transform="translate(17.000000, 24.000000)">
              <path d="M50,28 L50,8 L55.2002374,8 C56.3195763,8 57.3214025,8.09641722 58.2069028,8.28925167 C59.0912162,8.48318177 59.8651388,8.77681604 60.5286706,9.17125014 C61.1922023,9.56568423 61.7026114,10.0861181 62.0598977,10.7336474 C62.4159971,11.3811767 62.5940467,12.1371754 62.5940467,12.9994522 C62.5940467,14.2495891 62.2735573,15.2006136 61.6325785,15.8514298 C60.9915997,16.5022461 60.0028305,16.9810453 58.667458,17.285636 C60.1108473,17.6800701 61.1945763,18.2585735 61.917458,19.0211461 C62.6391527,19.7837186 63,20.8716994 63,22.2850882 C63,24.0490851 62.3792001,25.4427523 61.1387874,26.464994 C59.8971877,27.4883313 58.2069028,28 56.0667458,28 L50,28 Z M53.4672206,16.571272 L55.2002374,16.571272 C58.0893901,16.571272 59.5339664,15.3813959 59.5339664,12.9994522 C59.5339664,12.6050181 59.4746165,12.2576969 59.3571037,11.9563931 C59.2407779,11.6550893 59.1007122,11.4041854 58.9380935,11.2025857 C58.7754748,11.0020817 58.5297663,10.8333516 58.1997809,10.6952997 C57.8697955,10.5572477 57.570672,10.4509697 57.2988495,10.3764654 C57.028214,10.3030569 56.6424397,10.2482744 56.1415267,10.2154048 C55.6406136,10.1814397 55.2227904,10.161718 54.889244,10.1540484 C54.5545106,10.1463789 54.0808985,10.1419963 53.4672206,10.1419963 L53.4672206,16.571272 Z M53.4672206,25.8569081 L55.2002374,25.8569081 C56.6982286,25.8569081 57.7962016,25.572039 58.4905953,25.0033965 C59.186176,24.4336584 59.5339664,23.5286513 59.5339664,22.2850882 C59.5339664,21.0426208 59.186176,20.1376137 58.4905953,19.5678755 C57.7962016,18.999233 56.6982286,18.714364 55.2002374,18.714364 L53.4672206,18.714364 L53.4672206,25.8569081 Z"
                id="Fill-1" fill="#FFFFFF"></path>
              <polygon id="Fill-3" fill="#FFFFFF" points="67 28 70 28 70 8 67 8"></polygon>
              <polygon id="Fill-4" fill="#FFFFFF" points="79.2860497 28 79.2860497 10.5440999 75 10.5440999 75 8 87 8 87 10.5440999 82.7151242 10.5440999 82.7151242 28"></polygon>
              <g id="Group-11" transform="translate(91.000000, 8.000000)" fill="#FFFFFF">
                <path d="M0.0766804293,20.3760789 L0.0766804293,0.307815789 L6.21082755,0.307815789 C6.98551243,0.307815789 7.66746131,0.400657895 8.25441233,0.587447368 C8.84249428,0.774236842 9.31748355,1.02071053 9.67824921,1.32797368 C10.0390149,1.63523684 10.330794,2.01655263 10.5535866,2.47081579 C10.7763792,2.92618421 10.9290543,3.39592105 11.0138738,3.88223684 C11.0986933,4.36744737 11.1416685,4.90571053 11.1416685,5.49702632 C11.1416685,8.05460526 10.0729427,9.67492105 7.93436004,10.3590789 L11.4888631,20.3760789 L9.32426911,20.3760789 L5.96994014,10.5812368 L2.10782501,10.5812368 L2.10782501,20.3760789 L0.0766804293,20.3760789 Z M2.10782501,9.15765789 L6.19725643,9.15765789 C6.77629097,9.15765789 7.26598228,9.05707895 7.66746131,8.85481579 C8.0678094,8.65255263 8.36863594,8.36518421 8.56880999,7.99160526 C8.77011497,7.61913158 8.91034989,7.23007895 8.9906457,6.82555263 C9.06981058,6.42213158 9.11052394,5.95902632 9.11052394,5.43844737 C9.11052394,5.01071053 9.08564355,4.62607895 9.0370137,4.28344737 C8.98725292,3.94192105 8.8979097,3.60813158 8.77011497,3.28097368 C8.64005838,2.95492105 8.46928843,2.68081579 8.25441233,2.45865789 C8.04179809,2.23760526 7.76132823,2.06076316 7.41300277,1.92813158 C7.06580823,1.79660526 6.6598055,1.73028947 6.19725643,1.73028947 L2.10782501,1.73028947 L2.10782501,9.15765789 Z"
                  id="Fill-5"></path>
                <path d="M16.9729534,14.5572 L16.9729534,6.14946316 C16.9729534,5.44209474 17.0328926,4.79330526 17.1527708,4.20198947 C17.27378,3.61177895 17.4762159,3.05362105 17.7612094,2.52862105 C18.046203,2.00362105 18.4069687,1.56041053 18.8435064,1.20009474 C19.2800442,0.837568421 19.8364602,0.552410526 20.5138853,0.342410526 C21.1913105,0.132410526 21.9659954,0.0274105263 22.8390709,0.0274105263 C23.7121464,0.0274105263 24.4879622,0.132410526 25.1642565,0.342410526 C25.8416816,0.552410526 26.3980976,0.837568421 26.8346354,1.20009474 C27.2711732,1.56041053 27.6319388,2.00362105 27.9169324,2.52862105 C28.2019259,3.05362105 28.4054928,3.61177895 28.525371,4.20198947 C28.6452492,4.79330526 28.7063193,5.44209474 28.7063193,6.14946316 L28.7063193,14.5572 C28.7063193,18.6466737 26.7498159,20.6914105 22.8390709,20.6914105 C18.9283259,20.6914105 16.9729534,18.6466737 16.9729534,14.5572 M26.6751747,14.9539895 L26.6751747,5.75267368 C26.6751747,2.88451579 25.3960965,1.44988421 22.8390709,1.44988421 C20.2820453,1.44988421 19.004098,2.88451579 19.004098,5.75267368 L19.004098,14.9539895 C19.004098,17.8298842 20.2820453,19.2678316 22.8390709,19.2678316 C25.3960965,19.2678316 26.6751747,17.8298842 26.6751747,14.9539895"
                  id="Fill-7"></path>
                <path d="M34.8181872,14.5572 L34.8181872,6.14946316 C34.8181872,5.43435789 34.8713407,4.78556842 34.9787788,4.20198947 C35.0850859,3.61951579 35.2739507,3.06356842 35.546504,2.53525263 C35.8179265,2.00583158 36.1673829,1.56041053 36.5948732,1.20009474 C37.0234945,0.837568421 37.5686012,0.552410526 38.2324553,0.342410526 C38.8963093,0.132410526 39.6642086,0.0274105263 40.5372841,0.0274105263 C44.1358933,0.0274105263 45.9363288,2.06883158 45.9363288,6.14946316 L45.9363288,6.96625263 L43.9990512,6.96625263 L43.9990512,5.75267368 C43.9990512,5.10830526 43.9436357,4.53688421 43.831674,4.03951579 C43.7197122,3.54214737 43.5353712,3.09230526 43.2775198,2.6922 C43.0185376,2.29209474 42.6600338,1.98483158 42.2020084,1.77041053 C41.7417212,1.55709474 41.1875671,1.44988421 40.5372841,1.44988421 C39.9492022,1.44988421 39.4368923,1.52283158 39.0003546,1.66651579 C38.5649477,1.8102 38.2098367,2.00583158 37.9384143,2.25451579 C37.6669918,2.50430526 37.448723,2.81488421 37.2836076,3.18735789 C37.1184923,3.56093684 37.0053996,3.9522 36.9431987,4.36004211 C36.8798668,4.76788421 36.8493317,5.23209474 36.8493317,5.75267368 L36.8493317,14.9539895 C36.8493317,15.6149368 36.9024853,16.1874632 37.0099234,16.6737789 C37.1162305,17.1600947 37.3017025,17.6066211 37.5640775,18.0144632 C37.8275835,18.4223053 38.2075749,18.7339895 38.7063136,18.9473053 C39.2061833,19.1617263 39.8157528,19.2678316 40.5372841,19.2678316 C41.1875671,19.2678316 41.7417212,19.1617263 42.2020084,18.9473053 C42.6600338,18.7339895 43.0185376,18.4245158 43.2775198,18.0199895 C43.5353712,17.6165684 43.7197122,17.1656211 43.831674,16.6682526 C43.9436357,16.1708842 43.9990512,15.5994632 43.9990512,14.9539895 L43.9990512,13.5779368 L45.9363288,13.5779368 L45.9363288,14.5572 C45.9363288,15.2645684 45.887699,15.9100421 45.7893083,16.4925158 C45.6909177,17.0760947 45.515624,17.6342526 45.2611655,18.1658842 C45.0078379,18.6986211 44.6798691,19.1451474 44.279521,19.5076737 C43.878042,19.8690947 43.3623394,20.1564632 42.7290203,20.3708842 C42.0968322,20.5842 41.3662535,20.6914105 40.5372841,20.6914105 C39.6461138,20.6914105 38.8646434,20.5842 38.1928728,20.3708842 C37.5199714,20.1564632 36.9714718,19.8690947 36.5485052,19.5076737 C36.1255386,19.1451474 35.7817368,18.6986211 35.5193618,18.1658842 C35.2569868,17.6342526 35.0737766,17.0783053 34.9719932,16.4991474 C34.8690789,15.9199895 34.8181872,15.2723053 34.8181872,14.5572"
                  id="Fill-9"></path>
              </g>
              <polygon id="Fill-12" fill="#FFFFFF" points="151.196252 8 145.791089 18.5165767 145.791089 8 144 8 144 28 145.791089 28 145.791089 20.9452583 147.768564 17.4360612 152.103259 28 154 28 148.852985 16.2509087 153.045151 8"></polygon>
              <path d="M33,13 L31.9035967,9.70777034 C28.545723,-0.37938578 20.2185951,-3.03476147 13.3035017,3.77543204 L12,5.0589545"
                id="Fill-13" fill="#F29100"></path>
              <polyline id="Fill-15" fill="#EE7D00" points="34 16 33.3427404 14.0955407 11.2443372 6 10 7.18207817"></polyline>
              <g id="Group-20" transform="translate(0.000000, 8.000000)">
                <path d="M8.41197381,0.187113971 L3.82633732,4.78081731 C-3.07477482,11.6940696 -0.384623162,20.0200877 9.83773208,23.3770673 L35.1786512,13.5120645 L34.091096,10.1883003"
                  id="Fill-16" fill="#EB6608"></path>
                <path d="M11.5112849,23.9262302 L23.3417629,27.8102291 C33.5608024,31.1672087 39.1312068,25.5892195 35.779017,15.3477743 L35.6342307,14.9060082"
                  id="Fill-18" fill="#E74E0F"></path>
              </g>
            </g>
          </g>
        </g>
      </svg>
    `;

    render(markup, this);

    // this.addEventListener('click', evt => {
    //   console.log('/');
      
    //   import('./../libs/routing').then(module => {
    //     console.log(module);
    //     module.router.navigate(module.routes[0].path);
    //   })
    // });
  }
}

customElements.define('bitrock-logo', BitrockLogo);