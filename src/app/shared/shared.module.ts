import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormErrorComponent } from './components/form-error/form-error.component';
import {FormsModule} from '@angular/forms';



@NgModule({
    declarations: [
        FormErrorComponent
    ],
    exports: [
        FormErrorComponent,
        FormsModule
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class SharedModule { }
