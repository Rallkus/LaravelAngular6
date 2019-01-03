import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
import { BuffsModule } from './buffs/buffs.module';
import { GuildsModule } from './guilds/guilds.module';
import { ContactModule } from './contact/contact.module';
import { LogoutModule } from './logout/logout.module';
import {
  FooterComponent,
  HeaderComponent,
  SharedModule
} from './shared';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { PlayersModule } from './players/players.module';
import { PlayerDetailsModule } from './playerDetails/playerDetails.module';

@NgModule({
  declarations: [AppComponent, FooterComponent, HeaderComponent],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    HomeModule,
    BuffsModule,
    GuildsModule,
    ContactModule,
    AuthModule,
    PlayersModule,
    PlayerDetailsModule,
    LogoutModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
