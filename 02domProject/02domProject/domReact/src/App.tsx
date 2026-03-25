import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  document.getElementById("");
  //näitab kõiki DOMi elemente, mis on lehel olemas. See on nagu veebilehe struktuuri kaart, mis näitab, 
  //kõiki elemente ja memde suhteud üksteisega. See võib olla kasulik, kui soovite mõista, kuidas leht on 
  //üles ehitatud ja kuidas erinevad elemendid omavahel seotud on.
  //console.log(document);

  //dir näitab kõiki DOMi elemente, mis on lehel olemas, kuid see kuvab need hierarhiliselt, näidates iga 
  //elenemdi lapsi ja vanemaid. See on kasulik, kui soovite näha, kuidas elemendid omavahel seotud on ja 
  //kuidas nad on lehel paigutatud. See võib aidata mõista, kuidas leht on üles ehitatud ja kuidas erinevad 
  //elemendid omavehl seotud on.
  //console.dir(document);

  //Nüüd proovime muuta document title'i, mis on DOMi element. See on nagu veebilehe pealkiri, mis kuvatakse 
  //brauseri vahekaardil. 
  //document.title = "DOMi pealkiri on muudetud"

  //proovime muuta dokumendi body taustavärvi
  //ocument.body.style.backgroundColor = "beige"

  //muudame h1 all olevat teksti, mis on DOMi element. See on nagu veebilehe pealmine pealkiri, mis 
  //kuvatakse lehe sisu ees.
  //document.querySelector("h1")!.textContent = "DOMi peamine pealkiri on muudetud!";

  
  //Nüüd sisestame ue muutuja nimega username. See on nagu vebilehe kasutajanimi, mis võib olla tühi või 
  //sisaldada kasutaje nime. see võib olla kasulik, kui soovite näidata erinevat teksti sõltuvalt sellest, 
  //kas kasutaja on sisse logitud või mitte.

    const username: string = "See ei ole DOM";

    //selliselt ei ole vaja teha
    //const domTitle = document.getElementById("dom-Title");
    //if (domTitle) {
    //    domTitle.textContent +- username === "" ? "Tere, külaline!" : username;
    //}
    
    return ( 
      <>
        <h1 id="dom-Title">
          {username == "" ? "Mis on DOM" : username}
        </h1>
          <p>
            DOM on document object model.
            On võimalik teha staatiline leht dünaamiliseks. JS/TSiga on võimalik manipuleerida DOMi, millega saab muta sisu, struktuuri ja vaadet.
            <br />
            <br />
            Kui vaatate index.html, siis näete erinevaid elemente, mis suhtlevad DOMiga. Näiteks div id="root"  /div on koht, kuhu React rakendus renderdatakse. Kui react rakendus käivitud, siis see loob DOMi elemendid ja renderdab need #root div-i sisse, võimaldades teil näha ja suhelda nende elementidega veebilehel.
            <br />
            <br />
            Nt html sees on head ja title, body sees on h1, p, a jne. Need on kõik DOMi elemendid, mida saab JavaScripti abil manipuleerida.

          </p>
      

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
