import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProgressoComponent } from './progresso/progresso.component';
import { TentativaComponent } from './tentativa/tentativa.component';
import { TopoComponent } from './topo/topo.component';
import { PainelComponent } from './painel/painel.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgressoComponent,
    TentativaComponent,
    TopoComponent,
    PainelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
