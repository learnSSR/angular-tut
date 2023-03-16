import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectiveTutDirective } from './views/directive-tut/directive-tut.directive';
import { CustomPipePipe } from './views/pipe-tut/custom-pipe.pipe';
import { FarhCelConvPipe } from './views/pipe-tut2/farh-cel-conv.pipe';
import { HostlistenerDirective } from './views/hostListener-tut/hostlistener.directive';
import { UserComponentComponent } from './views/component-tut/user-component.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectiveTutDirective,
    CustomPipePipe,
    FarhCelConvPipe,
    HostlistenerDirective,
    UserComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
