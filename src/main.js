import { Tamagotchi } from './../src/tamagotchi.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function(){
  let goober = new Tamagotchi();
  let tamagotchiName;
  $("#startGame").click(function(event){
    event.preventDefault();
    tamagotchiName = $("#tamagotchiname").val();
    $("#displayname").append(tamagotchiName);
    $(".main").show();
    goober.start();
    $("#splash").hide();
    let drain = setInterval(function() {
      $("#hungrymeter").text(goober.hunger);
      $("#happymeter").text(goober.happy);
      $("#hunger-bar").css("width", goober.hunger + "%");
      $("#happy-bar").css("width", goober.happy + "%");
      if (goober.pikaConfused()){
        $("#happypika").hide();
        $("#confusedpika").show();
      }
      if (goober.pikaSad()){
        $("#confusedpika").hide();
        $("#sadpika").show();
      }
      if (goober.showConfused()){
        $("#confusedpika").show();
        $("#sadpika").hide();
        $("#happypika").hide();
      }
      if (goober.showHappy()){
        $("#confusedpika").hide();
        $("#sadpika").hide();
        $("#happypika").show();
      }
      if(goober.die()){
        $("#displayName").text(goober.name);
        $("#dead").show();
        let deadname = tamagotchiName;
        $("#displayName").text(deadname);
        clearInterval(drain);
      }
      }, 1000);
  });
  
  $("#hungrymeter").html(goober.hunger);
  $("#happymeter").html(goober.happy);
  goober.setHunger();
  goober.setHappy();
  

    $("#hungry").click(function(event){
      event.preventDefault();
      goober.feed();
    });
    $("#happy").click(function(event){
      event.preventDefault();
      goober.pet();
    });

  })



  


 
