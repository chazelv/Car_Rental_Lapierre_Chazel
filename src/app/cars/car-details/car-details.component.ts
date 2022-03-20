import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
    // can't be put as private bc it's used by searchLicensePlate outside of the class
    #input!: HTMLInputElement;
    #output!: HTMLOutputElement;

    constructor() {
    }

    ngOnInit(): void {
        this.#input = document.getElementById("license-plate-input") as HTMLInputElement;
        this.#output = document.getElementById("license-plate-output") as HTMLOutputElement;

        const form = document.getElementById("license-plate-form") as HTMLFormElement;
        form.oninput = this.searchLicensePlateTemplate();
    }

    /** Stupid workaround to have reference to this */
    searchLicensePlateTemplate(): () => void {
        return () => {
            this.#output.innerText = this.#input.value;
        }
    }
}