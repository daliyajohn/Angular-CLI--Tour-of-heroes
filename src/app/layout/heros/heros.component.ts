import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss']
})
export class HerosComponent implements OnInit {
  addHeroForm: FormGroup;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.addHeroForm = this._formBuilder.group({
      name: ['', Validators.required],
    });
  }


  addHero(heroName: any) {
    // if (this.addHeroForm.valid) {
    //   console.log(heroName.value);
    // }
  }







}
