import { Component, OnInit } from '@angular/core';

interface CarDataInterface {
  id: number;
  licencePlate: string;
  brand: string;
  model: string;
  color: string;
  rentalPrice: 0;
  kmPrice: number;
  horsePower: number;
  urlImg: string;
}

const xhr = new XMLHttpRequest();

// 2. Configure it: GET-request for the URL /article/.../load
xhr.open('GET', 'http://localhost:8080/api/v1/vehicles');

// 3. Send the request over the network
xhr.send();

// 4. This will be called after the response is received
xhr.onload = function() {
  if (xhr.status != 200) { // analyze HTTP status of the response
    alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
    return;
  }
  const data = JSON.parse(xhr.response) as CarDataInterface[];

  const responseHTML = document.getElementById("response") as HTMLTableElement;
  for(let car of data) {
    const row = responseHTML.insertRow();
      row.insertCell().innerText = String(car.id);
      row.insertCell().innerText = car.licencePlate;
      row.insertCell().innerText = car.brand;
      row.insertCell().innerText = car.model;
      row.insertCell().innerText = car.color;
      row.insertCell().innerText = String(car.rentalPrice);
      row.insertCell().innerText = String(car.kmPrice);
      row.insertCell().innerText = String(car.horsePower);

      const img = document.createElement("img") as HTMLImageElement;

      img.alt = "Image de la voiture " + car.licencePlate;
      img.src = car.urlImg;

      row.insertCell().appendChild(img);
  }
};

xhr.onprogress = function(event) {
  if (event.lengthComputable) {
    console.log(`Received ${event.loaded} of ${event.total} bytes`);
  } else {
    console.log(`Received ${event.loaded} bytes`); // no Content-Length
  }

};

xhr.onerror = function() {
  console.log("Request failed");
};


@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
