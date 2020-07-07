import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { ZipService } from '../JSBusinesslogic/plants.js';
import { openTabs } from '../JSBusinesslogic/headertabs.js';

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
        $('#showMap').show();
      } else {
        $(`#showZip`).text(`Error - please check your zipcode.`);
      }
    }    
  });
});