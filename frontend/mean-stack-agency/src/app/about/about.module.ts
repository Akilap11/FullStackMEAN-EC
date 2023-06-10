import {NgModule} from '@angular/core';
import { AboutComponent } from './about.component';

@NgModule({
    declarations: [AboutComponent],   //components, directives, and pipes
    imports: [],        //other modules whose exported classes are needed by component templates declared in this module
    exports: [AboutComponent],        //subset of declarations that should be visible and usable in the component templates of other modules
    providers: [],      //creators of services that this module contributes to the global collection of services
})
export class AboutModule {}
