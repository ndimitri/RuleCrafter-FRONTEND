import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {
  Alignment,
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
import {toArray} from 'rxjs';

@Component({
  selector: 'app-character-form',
  templateUrl: './character-form.component.html',
  styleUrl: './character-form.component.scss'
})
export class CharacterFormComponent {

  characterForm : FormGroup;
  descriptionForm: FormGroup;
  statsForm : FormGroup;

  fullForm : FormGroup;

  selectedClasses: string[] = [];


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
      feats: this.formBuilder.array([]),
    });

    this.addFeat();

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
    })
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
        // console.log(this.races);
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
        // console.log(this.stats);
      },
      error: err =>{
        console.log(err);
      }
    })
  }

  // Getter pour récupérer le FormArray
  get feats(): FormArray {
    return this.characterForm.get('feats') as FormArray;
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

    if(this.descriptionForm.invalid) {
      console.log("Invalid Description Form");
      return;
    }

    console.log("Valid form");


    // let character : CharacterForm = this.characterForm;
    // console.log(character);

  }

  // Fonction pour ajouter un feat au FormArray
  addFeat() {
    const featForm = this.formBuilder.group({
      name: ['', Validators.required],
      notes: ['', Validators.required],
      rollableProps: this.formBuilder.array([]),
    });

    this.feats.push(featForm);
    console.log(this.feats)
  }

  // Suppression d'une feat
  removeFeat(index: number) {
    this.feats.removeAt(index);
  }

  // Getter pour le FormArray des rollableProps d'une feat donnée
  getRollableProps(featIndex: number): FormArray {
    return this.feats.at(featIndex).get('rollableProps') as FormArray;
  }

  // Ajout d'une RollableProp dans une feat
  addRollableProp(featIndex: number) {
    const rollablePropForm = this.formBuilder.group({
      name: ['', Validators.required],
      magnitude: ['', Validators.required],
      magnitudeType: ['', Validators.required],
    });

    this.getRollableProps(featIndex).push(rollablePropForm);
  }

  // Suppression d'une RollableProp d'une feat donnée
  removeRollableProp(featIndex: number, propIndex: number) {
    this.getRollableProps(featIndex).removeAt(propIndex);
  }


  // addClass() {
  //   if(this.classes.length >=2 ){
  //     return;
  //   }
  //   this.classes.push(new FormControl(null));
  //   console.log(this.classes.controls[0].value)
  //   // this.selectedClasses.push(this.classes.)
  // }

  get classesB (){
    return this.APIclasses?.results.filter(c => c.name !== 'Barbarian')
  }

  protected readonly toArray = toArray;
}
