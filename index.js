const compareStartTimes = ((eventA, eventB) => eventA.start > eventB.start ? true : false);

class Event {
  constructor({start, end, title, location}) {
    title = title || "Sample Item";
    location = location || "Sample Location";
    let newEvent = document.createElement('div');
    let newItemTitle = document.createElement('div');
    let newItemLocation = document.createElement('div');
    newEvent.className = "event";
    newItemTitle.innerText = title;
    newItemTitle.className = "item-title";
    newItemLocation.innerText = location;
    newItemLocation.className = "item-location";
    newEvent.appendChild(newItemTitle);
    newEvent.appendChild(newItemLocation);
    newEvent.style.position = "absolute";
    newEvent.style.top = start + "px";
    newEvent.style.height = Math.min((end - start), 720 - start) + "px";
    return newEvent;
  }
}

const layOutDay = function(events) {
  let container = document.getElementById('container');
  while (container.hasChildNodes()) {
    container.removeChild(container.lastChild);
  }
  events = events.sort((a, b) => a.start > b.start);
  let domElements = events.map((event) => new Event(event));
  let currentSide = "left";
  let overlap = false;
  for (let i = 0; i < events.length; i++) {
    if (events[i + 1] && events[i].end > events[i+1].start) {
      overlap = true;
      if (currentSide === "left") {
        domElements[i].className = "event-half-left";
        currentSide = "right";
      } else {
        domElements[i].className = "event-half-right";
        currentSide = "left";
      }
    } else {
      if (overlap) {      
        if (currentSide === "right") {
          domElements[i].className = "event-half-right";
          currentSide = "left";
        } else if (currentSide === "left") {
          domElements[i].className = "event-half-left";
          overlap = false;
        }
      }
    }
    container.appendChild(domElements[i]);
  }
}

layOutDay([ {start: 30, end: 150}, {start: 540, end: 600}, {start: 560, end: 620}, {start: 610, end: 670} ]);

console.log(`The function 'layOutDay' is
  available to be invoked.
  layOutDay expects an array of
  events that has the properties
  'start' and 'end'. However, 
  it can also accept events
  with the propertiies of 
  'title' and 'location'
  to provide greater detail.`);