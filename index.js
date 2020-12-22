const input = document.getElementById("inputSearch");
const iframe = document.getElementById("ytplayer");
const btnSearch = document.getElementById("buttonSearch");

btnSearch.onclick = SearchRule666;

function SearchRule666(){
  let rule666 = input.value + " metal cover";
  iframe.src = "https://www.youtube.com/embed?enablejsapi=1&autoplay=1&listType=search&list=" + encodeURI(rule666);
}