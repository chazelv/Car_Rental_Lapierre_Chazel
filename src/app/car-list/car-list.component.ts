import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    loadCars(new URL("http://localhost:8080/api/v1/vehicles"));
  }
}

interface CarInterface {
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

/** Return table of all cars if success; otherwise it will return undefined and call alert */
function loadCars(theURL: URL): void {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", theURL, true);
    xhr.send();
    xhr.onload = () => {
        if (xhr.status != 200) {
            alert(`Error ${xhr.status}: ${xhr.statusText}\nIs the backend server is running locally?`);
            return;
        }
        const cars = JSON.parse(xhr.response) as CarInterface[];

        const table = document.createElement("table");
        table.tHead = createTableHeader();
        populateTableBody(table.createTBody(), cars);
        displayTable(table);
    };
}

/** Create a <thead> dom element describing car table content. Pure function  */
function createTableHeader(): HTMLTableSectionElement {
    const head = document.createElement("thead");
    const row = head.insertRow();
    ["Licence Plate", "Brand", "Model", "Color", "Price", "Price per Km", "Horse Power", "Image"].map(x => row.insertCell().innerText = x);
    return head;
}

/** Self describing name, fille the give tbody with cars.
 *  I really wanted to create a pure function, but no methods exist in DOM to do something like table.tBody = pureFunction so curses  */
function populateTableBody(tbody: HTMLTableSectionElement, cars: CarInterface[]): void {
    for (let car of cars) {
        const row = tbody.insertRow();
        row.insertCell().innerText = car.licencePlate;
        row.insertCell().innerText = car.brand;
        row.insertCell().innerText = car.model;
        row.insertCell().innerText = car.color;
        row.insertCell().innerText = (car.rentalPrice * 1000) + " €";
        row.insertCell().innerText = String(car.kmPrice);
        row.insertCell().innerText = String(car.horsePower);
        const img = document.createElement("img");
        img.alt = "Picture of the car " + car.licencePlate;
        img.src = car.urlImg;
        row.insertCell().appendChild(img);
    }
}

function displayTable(table: HTMLTableElement): void {
    document.getElementById("car-list-main")?.appendChild(table);
}
