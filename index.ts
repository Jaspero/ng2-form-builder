import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {JasperoBuilder} from './src/jaspero-builder.service';

export * from './src/jaspero-builder.service';
export * from './src/interfaces/options';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    providers: [
        JasperoBuilder
    ]
})
export class FormBuilderModule {}