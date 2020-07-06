import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { ZipService } from './../JS Business logic/plants.js';

$(document).ready(function() {
  $(".btn").click(function(event){
    event.preventDefault();
    let zipCode = $("#zip-code").val();
    $("#zip-code").val("")

    (async () => {
      let newZipCode = new ZipService();
      // console.log(newZipCode);
      let response = await newZipCode.getZip(zipCode);
      getElements(response);
    })();

    function getElements(response) {
      if (response) {
        $(`#showZip`).text(`Your Zip is ${zipCode} and your zone is ${response.zone} which is a temperature range of ${response.temperature_range}°C`);
      } else {
        $(`#showZip`).text(`something else - error`);
      }
    }

    
  });
});