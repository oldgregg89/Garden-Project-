export function openTabs() {
  $(document).ready(function() {
    $('#buttonAbout').click(function() {
      $('#about').show();
    });
    $('#buttonResources').click(function() {
      $('#resources').show();
    });
    $('#buttonSavedLists').click(function() {
      $('#savedLists').show();
    });
    $('#buttonDefinitions').click(function() {
      $('#definitions').show();
    });
  });
}


