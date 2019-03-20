import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HerosService } from 'src/app/heros.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss']
})
export class HerosComponent implements OnInit {
  addHeroForm: FormGroup;
  constructor(private _formBuilder: FormBuilder, private herosService: HerosService) { }

  ngOnInit() {
    this.addHeroForm = this._formBuilder.group({
      name: ['', Validators.required],
    });
  }


  addHero(heroName: any) {
    this.herosService.createHero(heroName);

    // if (this.addHeroForm.valid) {
    //   console.log(heroName.value);
    // }
  }







}
