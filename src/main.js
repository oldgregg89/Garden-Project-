import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import $ from "jquery";
import { ZipService } from "./../JS Business logic/zipservice.js";
import { PlantService } from "./../JS Business logic/plants.js";

window.onscroll = function() {navBar()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function navBar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

$(document).ready(function () {
  $("#buttonAbout").click(function () {
    $("#about").show();
    $("#resources,#savedLists,#definitions").hide();
  });
  $("#buttonResources").click(function () {
    $("#resources").show();
    $("#savedLists,#about,#definitions").hide();
  });
  $("#buttonSavedLists").click(function () {
    $("#savedLists").show();
    $("#definitions,#resources,#about").hide();
  });
  $("#buttonDefinitions").click(function () {
    $("#definitions").show();
    $("#savedLists,#resources,#about").hide();
  });
  $("#zip-btn").click(function () {
    let zipCode = $("#zip-code").val();

    (async () => {
      let newZipCode = new ZipService();
      let response = await newZipCode.getZip(zipCode);
      getElements(zipCode, response);
    })();

    function getElements(zipCode, response) {
      if (response) {
        $(`#showZip`).text(
          `Your Zip is ${zipCode} and your zone is ${response.zone} which is a temperature range of ${response.temperature_range}°F`
        );
        $("#showMap").show();
      } else {
        $(`#showZip`).text(`Error - please check your zipcode.`);
      }
    }
  });
  $("#plant-btn").click(function () {
    let containerProp = $("#hometype").val();
    let flowers = $("#flower").val();
    let water = $("#water").val();
    let life = $("#life").val();
    let shade = $("#shade").val();
    let durability = $("#durability").val();
    
    (async () => {
      let plantsReturn = new PlantService();
      let plantsResponse = await plantsReturn.getPlant(containerProp, flowers, water, life, shade, durability);
      showPlants(plantsResponse);
      plantsReturn.getPrices(plantsResponse)
    })();
    
    function showPlants(plantsResponse) {
      console.log("Response: ", plantsResponse);
      if (plantsResponse) {
        let htmlInfo;
        for (let i = 0; i < plantsResponse.length; i++) {
          htmlInfo = `<a id="${plantsResponse[i].id}" href="#">                        
              <div class="card1">
              <h5 class="common-name">${plantsResponse[i].common_name}</h5>   
                <img class="card-img-top1" src="https://bs.floristic.org/image/o/a135ee66843ed8f745e7cf627b91d369aa95d8ae" style="width: 9rem" alt="Card image cap">
                <p class="year-title">Plant ID: ${plantsResponse[i].id}</p>
              </div>     
            </a>`;
          $('.plant-output').append(`${htmlInfo}`);
        }
      } else {
        $('.plant-output').text(`There was an error handling your request.`);
      }
    }
  });
});
