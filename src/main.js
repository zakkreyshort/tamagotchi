import { Tamagotchi } from './../src/tamagotchi.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function(){
  let goober = new Tamagotchi("goober");

  
  $("#hungrymeter").html(goober.hunger);
  $("#happymeter").html(goober.happy);
  

  $("#hungry").click(function(event){
    event.preventDefault();
    console.log("something");

  $("#happy").click(function(event){
    event.preventDefault();
  })
  })
});