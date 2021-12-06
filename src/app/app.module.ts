import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RenetasksComponent } from './renetasks/renetasks.component';
import { RenetasksService } from './renetasks.service';
import { RouterModule } from '@angular/router';
import { RenehomeComponent } from './renehome/renehome.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: RenehomeComponent },
      { path: 'renetasks', component: RenetasksComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    RenehomeComponent,
    NavbarComponent,
    RenetasksComponent,
  ],
  bootstrap: [AppComponent],
  providers: [RenetasksService]
})
export class AppModule {}
