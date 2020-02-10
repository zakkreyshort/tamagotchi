import { Tamagotchi } from './../src/tamagotchi.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function(){
  let goober = new Tamagotchi("goober");

  $("#startGame").click(function(event){
    event.preventDefault();
    let tamagotchiName = $("#tamagotchiname").val();
    $("#displayname").append(tamagotchiName);
    $(".main").show();
    goober.feed();
    goober.pet();
    $("#splash").hide();
  });

  $("#hungrymeter").html(goober.hunger);
  $("#happymeter").html(goober.happy);
  goober.setHunger();
  goober.setHappy();
  
  let drain = setInterval(function() {
    $("#hungrymeter").text(goober.hunger);
    $("#hunger-bar").css("width", goober.hunger + "%");
    $("#happymeter").text(goober.happy);
    $("#happy-bar").css("width", goober.happy + "%");
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



  


 
