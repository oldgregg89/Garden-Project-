import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { ZipService } from './../JS Business logic/plants.js';

$(document).ready(function() {
  $(".btn").click(function(event){
    event.preventDefault();
    let zipCode = $("#zip-code").val();
    console.log(zipCode);

    (async () => {
      let newZipCode = new ZipService();
      // console.log(newZipCode);
      let response = await newZipCode.getZip(zipCode);
      console.log(response);  
      getElements(response);
    })();

    function getElements(response) {
      if (response) {
        $(`#showZip`).text(`The Zip is ${zipCode}`);
      } else {
        $(`#showZip`).text(`something else - error`);
      }
    }

    
  });
});