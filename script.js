
const evtSource = new EventSource("app.php");

evtSource.onmessage = function(event) {
    const newElement = document.createElement("li");
    const eventList = document.querySelector('.list');
    newElement.innerHTML = "message: " + event.data;
    eventList.appendChild(newElement);
  }