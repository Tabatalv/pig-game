(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))b(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&b(i)}).observe(document,{childList:!0,subtree:!0});function v(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function b(e){if(e.ep)return;e.ep=!0;const r=v(e);fetch(e.href,r)}})();document.querySelector("#app").innerHTML=`
 <main>
      <section class="player player--0 player--active">
        <h2 class="name" id="name--0">Player 1</h2>
        <p class="score" id="score--0">43</p>
        <div class="current">
          <p class="current-label">Current</p>
          <p class="current-score" id="current--0">4</p>
        </div>
      </section>
      <section class="player player--1">
        <h2 class="name" id="name--1">Player 2</h2>
        <p class="score" id="score--1">24</p>
        <div class="current">
          <p class="current-label">Current</p>
          <p class="current-score" id="current--1">5</p>
        </div>
      </section>

      <img src="dice-5.png" alt="Playing dice" class="dice" />
      <button class="btn btn--new">🔄 New game</button>
      <button class="btn btn--roll">🎲 Roll dice</button>
      <button class="btn btn--hold">📥 Hold</button>
    </main>
 

`;let o=document.querySelector(".player--0"),s=document.querySelector(".player--1");const a=document.querySelector("#score--0"),u=document.querySelector("#score--1");let y=document.querySelector("#current--0"),m=document.querySelector("#current--1");const L=document.querySelector(".btn--new"),f=document.querySelector(".btn--roll"),g=document.querySelector(".btn--hold");let d=document.querySelector(".dice"),t,c;const h=()=>{t=0,c=0,a.textContent=0,u.textContent=0,y.textContent=0,m.textContent=0,d.classList.add("hidden"),f.style.display="block",o.classList.remove("player--winner"),s.classList.remove("player--winner"),o.classList.add("player--active"),s.classList.remove("player--active")};function p(){S(),s.classList.toggle("player--active"),o.classList.toggle("player--active"),c=c===0?1:0}function S(){t=0,c===0?y.textContent=t:m.textContent=t}const C=()=>{let n=Math.floor(Math.random()*6)+1;d.src=`dice-${n}.png`,d.classList.remove("hidden"),n!==1?q(n):p()};function q(n){t+=n,c===0?y.textContent=t:m.textContent=t}function x(){c===0?(t=Number(a.textContent)+t,a.textContent=t,t>=20?(o.classList.add("player--winner"),f.style.display="none"):p()):(t=Number(u.textContent)+t,u.textContent=t,t>=20?s.classList.add("player--winner"):p())}function w(){x()}h();L.addEventListener("click",h);f.addEventListener("click",C);g.addEventListener("click",w);
