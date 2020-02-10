import { Tamagotchi } from './../src/tamagotchi.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function(){
  let goober = new Tamagotchi("goober");

  
  $("#hungrymeter").html(goober.hunger);
  $("#happymeter").html(goober.happy);
  goober.setHunger();
  goober.setHappy();
  
  let drain = setInterval(function() {
    $("#hungrymeter").text(goober.hunger);
    $("#happymeter").text(goober.happy);
    if(goober.die()){
      clearInterval(drain);
    }
    }, 1000);

    $("#hungry").click(function(event){
      event.preventDefault();
      goober.feed();
    });
    $("#happy").click(function(event){
      event.preventDefault();
      goober.pet();
    });

  })



  


 
