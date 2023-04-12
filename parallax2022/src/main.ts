import './style.css'
import {
  ParallaxTiming,
  ParallaxSpeed,
  ParallaxFit
}from 'scroll-parallax-effect'
import { easing } from 'scroll-parallax-effect/dist/scroll-parallax-effect/utils/easing'

new ParallaxTiming('#websaite')
new ParallaxTiming('#design')
new ParallaxTiming('#illust')

new ParallaxSpeed('.box', {
  style:['top', 'left'],
  speed: 3
})

new ParallaxSpeed('.box', {
  style: 'transform',
  contentScrollPositionStyleValue:'rotata(0deg)',
  speed: 3
})

new ParallaxFit('.box2', [
  {
    start: 0,
    end: 100,
    toStyle: {
      top: '100px',
      left: '300px'
    }
  },
  {
    end: 300,
    toStyle: {
      top: '200px',
      left: '10px'
    },
    easing: 'easeInOutBounce'
  }
])

// import typescriptLogo from './typescript.svg'
// import { setupCounter } from './counter'

// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="/vite.svg" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://www.typescriptlang.org/" target="_blank">
//       <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
//     </a>
//     <h1>Vite + TypeScript</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite and TypeScript logos to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
