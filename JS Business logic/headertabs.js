function openTabs(tabcontent) {
  var i, tabcontent,
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  document.getElementById(tabcontent).style.display = "block";

}

document.getElementById("defaultOpen").click();