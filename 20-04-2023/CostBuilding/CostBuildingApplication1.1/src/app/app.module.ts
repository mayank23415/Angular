import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { dataReducer, /*questionReducer*/ } from './store/reducer/data.reducer';
import { DataEffects } from './store/effects/data.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { DataService } from './services/data.service';
import { MenuComponent } from './components/menu/menu.component';
import { QuestionsComponent } from './components/questions/questions.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    QuestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({data:dataReducer,question:dataReducer}, {}),
    EffectsModule.forRoot([DataEffects]),
    HttpClientModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
