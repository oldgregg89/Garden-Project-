import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { ZipService } from './../JS Business logic/plants.js';

$(document).ready(function() {
  $(".btn").click(function(event){
    event.preventDefault();
    let zipCode = $("#zip-code").val();

    (async () => {
      let newZipCode = new ZipService();
      let response = await newZipCode.getZip(zipCode);
      getElements(zipCode, response);
    })();

    function getElements(zipCode, response) {
      if (response) {
        $(`#showZip`).text(`Your Zip is ${zipCode} and your zone is ${response.zone} which is a temperature range of ${response.temperature_range}°F`);
      } else {
        $(`#showZip`).text(`something else - error`);
      }
    }    
  });
});