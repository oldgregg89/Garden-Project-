import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import $ from "jquery";
import { ZipService } from "./../JS Business logic/plants.js";
import { PlantService } from "./../JS Business logic/plants.js";

// import { PlantDescription } from "./../JS Business logic/plants.js";

$(document).ready(function() {
  $('#buttonAbout').click(function() {
    $('#about').show();
    $('#resources,#savedLists,#definitions').hide();
  });
  $('#buttonResources').click(function() {
    $('#resources').show();
    $('#savedLists,#about,#definitions').hide();
  });
  $('#buttonSavedLists').click(function() {
    $('#savedLists').show();
    $('#definitions,#resources,#about').hide();
  });
  $('#buttonDefinitions').click(function() {
    $('#definitions').show();
    $('#savedLists,#resources,#about').hide();
  });
  $("#zip-btn").click(function() {
    let zipCode = $("#zip-code").val();

    (async () => {
      let newZipCode = new ZipService();
      let response = await newZipCode.getZip(zipCode);
      getElements(zipCode, response);
    })();

    function getElements(zipCode, response) {
      if (response) {
        $(`#showZip`).text(`Your Zip is ${zipCode} and your zone is ${response.zone} which is a temperature range of ${response.temperature_range}°F`);
        $('#showMap').show();
      } else {
        $(`#showZip`).text(`Error - please check your zipcode.`);
      }
    }
  });
  $("#plant-btn").click(function(){
    let containerProp = $('#hometype').val();
    let flowers = $('#flower').val();
    let water = $('#water').val();
    let life = $('#life').val();
    let shade = $('#shade').val();
    (async () => {
      let plantsReturn = new PlantService();
      let plantsResponse = await plantsReturn.getPlant(containerProp, flowers, water, life, shade);
      showPlants(plantsResponse);
      console.log(plantsResponse);
    })();

    function showPlants(plantsResponse) {
      if (plantsResponse) {
        $(".plant-output").text(`Here is a list of plants ${plantsResponse[1].common_name} ${plantsResponse[2].common_name} ${plantsResponse[3].common_name} ${plantsResponse[4].common_name} ${plantsResponse[5].common_name}`);
      } else {
        $(".plant-output").text(`Error`);
      }
    }
  });
  $("#saveList-btn").click(function() {
    myStorage = window.localStorage;
    let lists_serialized = JSON.stringify(lists);
    localStorage.setitem("lists",lists_serialized);
    let lists_deserislized = JSON.parse(localStorage.getitem("lists"))
  });
});