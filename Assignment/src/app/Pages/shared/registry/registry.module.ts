import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from "@ionic/angular";
import { RegistryComponent } from "./registry.component";

@NgModule({
    declarations: [RegistryComponent],
    imports: [
        IonicModule.forRoot(),
        CommonModule,
        FormsModule,
        IonicModule,
    ],
    exports: [RegistryComponent]
})

export class RegistryModule { }
