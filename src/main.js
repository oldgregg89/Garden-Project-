import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import $ from "jquery";
import { ZipService } from "./../JS Business logic/plants.js";
import { PlantService } from "./../JS Business logic/plants.js";

$(document).ready(function () {
  $(".btn").click(function (event) {
    event.preventDefault();
    let zipCode = $("#zip-code").val();

    (async () => {
      let newZipCode = new ZipService();
      let response = await newZipCode.getZip(zipCode);
      getElements(zipCode, response);
      console.log(zipCode, response);
    })();

    function getElements(zipCode, response) {
      if (response) {
        $(`#showZip`).text(
          `Your Zip is ${zipCode} and your zone is ${response.zone} which is a temperature range of ${response.temperature_range}°F`
        );
      } else {
        $(`#showZip`).text(`something else - error`);
      }
    }

    (async () => {
      let plantsReturn = new PlantService();
      let plantsResponse = await plantsReturn.getPlant();
      showPlants(plantsResponse);
      console.log(plantsResponse);
    })();

// zip code - zone, temp range

// complete true - 
// temp = 32
// return - a list of objects with arrays

// http://trefle.io/api/plants/126957

// "temperature_minimum": {
//   "deg_c": -33.333333333333336,
//   "deg_f": -28.0

// "growth": {
//   "anaerobic_tolerance": "None",
//   "caco_3_tolerance": "Medium",
//   "cold_stratification_required": null,
//   "drought_tolerance": "Medium",

// print the first 5 items to the DOM

    // function showPlants(plantsResponse) {
    //   if (plantsResponse) {
    //     $("#show-plants").text(
    //       `Heres a response ${plantsResponse[0].common_name}`
    //     );
    //   } else {
    //     $(`#show-plants`).text(`plant api error`);
    //   }
    // }

    // (async () => {
    //   let plantsReturn = new PlantService2();
    //   let plantsResponse = await plantsReturn.getPlant();
    //   showPlants(plantsResponse);
    //   console.log(plantsResponse);
    // })();


  });
});
