function countElement() {
  const elements = document.getElementsByClassName("element").length;
  document.getElementById("element-count").innerText = "There are " + elements + " elements on this page.";
}

function countId1() {
  const id1Elements = document.getElementById("tag1").getElementsByClassName("element").length;
  document.getElementById("id1-count").innerText = "There are " + id1Elements + " elements in ID 1.";
}

function countId2() {
  const id2Elements = document.getElementById("tag2").getElementsByClassName("element").length;
  document.getElementById("id2-count").innerText = "There are " + id2Elements + " elements in ID 2.";
}