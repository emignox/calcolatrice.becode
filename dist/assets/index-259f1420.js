(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();const style="";document.addEventListener("DOMContentLoaded",function(){let numeroSelezionato=!1,calcoloEseguito=!1;function aggiungiTesto(e){let n=document.getElementById("resu");n.innerText+=e,numeroSelezionato=!0}function calcola(){let display=document.getElementById("resu");if(numeroSelezionato){let risultato=eval(display.innerText);display.innerText=risultato,calcoloEseguito=!0}}function resetta(){let e=document.getElementById("resu");e.innerText="",numeroSelezionato=!1,calcoloEseguito=!1}for(let e=0;e<=9;e++)document.getElementById("btn"+e).addEventListener("click",function(){aggiungiTesto(e)});document.getElementById("plus").addEventListener("click",function(){numeroSelezionato&&aggiungiTesto("+")}),document.getElementById("sub").addEventListener("click",function(){numeroSelezionato&&aggiungiTesto("-")}),document.getElementById("molt").addEventListener("click",function(){numeroSelezionato&&aggiungiTesto("*")}),document.getElementById("division").addEventListener("click",function(){numeroSelezionato&&aggiungiTesto("/")}),document.getElementById("btn.").addEventListener("click",function(){numeroSelezionato&&aggiungiTesto(".")}),document.getElementById("reset").addEventListener("click",function(){resetta()}),document.getElementById("percent").addEventListener("click",function(){let e=document.getElementById("resu"),i=parseFloat(e.innerText)/100;e.innerText=i}),document.getElementById("result").addEventListener("click",function(){calcola()}),document.getElementById("result").addEventListener("click",function(){if(calcoloEseguito){const e=Math.floor(Math.random()*3)+1,n=document.getElementById("img"+e);n.style.bottom="50px",setTimeout(function(){n.style.bottom="-300px"},4e3)}calcoloEseguito=!1});const curiosites=document.querySelectorAll(".curiosite");function mostraCuriositeCasuale(){const e=Math.floor(Math.random()*curiosites.length),n=curiosites[e];curiosites.forEach(function(i){i.style.display="none"}),n.style.display="block",setTimeout(function(){n.style.display="none"},7e3)}document.getElementById("result").addEventListener("click",mostraCuriositeCasuale)});
