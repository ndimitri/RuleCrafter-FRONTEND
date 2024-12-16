import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {
  Alignment, CharacterClass, Feat,
  ItemRarity,
  ItemType,
  MagicSchool,
  SpellLevel
} from '../../models/character.model';
import {nonNullPositiveNumber} from '../../validators/non-null-positive-number';
import {APIClassesResult} from '../../models/APIClassesResult';
import {ApiService} from '../../services/api.service';
import {APIRacesResult} from '../../models/APIRacesResult';
import {APIStatsResult} from '../../models/APIStatsResult';
import {Observable, toArray} from 'rxjs';
import {CharacterForm} from '../../models/form/CharacterForm';

@Component({
  selector: 'app-character-form',
  templateUrl: './character-form.component.html',
  styleUrl: './character-form.component.scss'
})
export class CharacterFormComponent {

  characterForm : FormGroup;
  descriptionForm: FormGroup;
  statsForm : FormGroup;
  featsForm : FormGroup;

  fullForm : FormGroup;

  //Enums
  protected readonly Alignment = Alignment;
  protected readonly ItemRarity = ItemRarity;
  protected readonly  ItemType= ItemType;
  protected readonly  MagicSchool= MagicSchool;
  protected readonly  SpellLevel= SpellLevel;

  //Enums from API :
  APIclasses?: APIClassesResult;
  races?: APIRacesResult;
  stats?: APIStatsResult;

  //Tests
  featsList : Feat[] = [];


  constructor(private formBuilder: FormBuilder, private _apiService: ApiService) {
    this.characterForm = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(2),Validators.maxLength(123)]],
      hp : [null, [Validators.required, nonNullPositiveNumber()]],
      race : [null, [Validators.required]],
      alignment : [null, [Validators.required]],
      backstory: [null, [Validators.required]],
      background: [null, [Validators.required]],
      classes: this.formBuilder.array([
        new FormControl(null)
      ]),
    });

    this.featsForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      notes: [null, [Validators.required]],
    })

    this.descriptionForm = this.formBuilder.group({
      age : [null, [Validators.required, nonNullPositiveNumber()]],
      height : [null, [Validators.required, nonNullPositiveNumber()]],
      weight : [null, [Validators.required, nonNullPositiveNumber()]],
      eyes : [null, [Validators.required, Validators.maxLength(30)]],
      skin : [null, [Validators.required, Validators.maxLength(30)]],
      hair : [null, [Validators.required, Validators.maxLength(30)]]
    });

    this.statsForm = this.formBuilder.group({
      int: [null, [Validators.required, nonNullPositiveNumber()]],
      wis: [null, [Validators.required, nonNullPositiveNumber()]],
      dex: [null, [Validators.required, nonNullPositiveNumber()]],
      cha: [null, [Validators.required, nonNullPositiveNumber()]],
      str: [null, [Validators.required, nonNullPositiveNumber()]],
      con: [null, [Validators.required, nonNullPositiveNumber()]],
    })


    this.fullForm = this.formBuilder.group({
      characterForm : this.characterForm,
      descriptionForm : this.descriptionForm,
      statsForm : this.statsForm,
    });


  }


  ngOnInit() : void{
    this.getClasses();
    this.getRaces();
    this.getStats();

  }


  getClasses() : void {
    this._apiService.getClasses().subscribe({
      next : (res : APIClassesResult) => {
        this.APIclasses = res;
        console.log(this.APIclasses);
      },
      error: err =>{
        console.log(err);
      }
    });
  }


  getRaces() : void {
    this._apiService.getRaces().subscribe({
      next : (res : APIRacesResult) => {
        this.races = res;
      },
      error: err =>{
        console.log(err);
      }
    })
  }

  getStats() : void {
    this._apiService.getStats().subscribe({
      next : (res : APIStatsResult) => {
        this.stats = res;
      },
      error: err =>{
        console.log(err);
      }
    })
  }


  get classes() : FormArray{
    return this.characterForm.get('classes') as FormArray;
  }


  submit() {
    this.fullForm.markAllAsTouched();


    //Validation des forms
    if(this.characterForm.invalid){
      console.log("Invalid Character Form");
      return;
    }


    if(this.statsForm.invalid){
      console.log("Invalid Stats Form");
      return;
    }

    // if(this.descriptionForm.invalid) {
    //   console.log("Invalid Description Form");
    //   return;
    // }

    console.log("Valid form");


    //Build Classes
    let classesList : CharacterClass[] = [];

    for (let classe of this.classes.value) {
      let newClasse : CharacterClass = {
        name: classe,
        level: 1
      }
      classesList.push(newClasse);
    }

    // let character : CharacterForm = this.characterForm;
    let character : CharacterForm = {
      name: this.characterForm.get('name')?.value,
      hp: this.characterForm.get('hp')?.value,
      race: this.characterForm.get('race')?.value,
      backstory: this.characterForm.get('backstory')?.value,
      feats: this.featsList,
      classes: classesList,
      stats: this.statsForm.value,

    };
    console.log(character);

  }

  addFeat() {
    this.featsForm.markAllAsTouched();

    let name = this.featsForm.get('name')?.value;
    let notes = this.featsForm.get('notes')?.value

    let feat : Feat = {
      name: name,
      notes: notes,
      rollableProps: undefined,
    }


    this.featsList.push(feat);
    this.featsForm.reset();


  }

  // Suppression d'une feat
  // removeFeat(index: number) {
  //   this.feats.removeAt(index);
  // }



  addClass() {
    if(this.classes.length >=2 ){
      return;
    }

    this.classes.push(new FormControl());
    console.log(this.classes.controls[0].value)
  }

  get classesB (){
    return this.APIclasses?.results.filter(c => c.name !== 'Barbarian')
  }

  isClassSelected(classIndex: string): boolean {
    return this.classes.value.includes(classIndex);
  }


  protected readonly toArray = toArray;
}
