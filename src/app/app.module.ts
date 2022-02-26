import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from "@angular/router";

import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
//shared
import { MenuComponent } from './shared/menu/menu.component';
import { ContentComponent } from './shared/content/content.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { SettingComponent } from './shared/setting/setting.component';
import { ComidasComponent } from './componentes/comidas/comidas.component';
import { CompaComponent } from './compa/compa.component';


const routes: Routes = [
  {path: '',redirectTo: '/home',pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'comidas', component: ComidasComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    ContentComponent,
    FooterComponent,
    HeaderComponent,
    SettingComponent,
    ComidasComponent,
    CompaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
