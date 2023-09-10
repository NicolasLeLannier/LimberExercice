import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NewComponentComponent } from './new-component/new-component.component';
import { ReadingJsonFilesComponent } from './reading-json-files.component';

@NgModule({
    declarations: [
        AppComponent,
        NewComponentComponent
    ],
    providers: [ReadingJsonFilesComponent],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ]
})
export class AppModule { }
