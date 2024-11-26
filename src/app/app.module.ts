import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './views/medium/nav/nav.component';
import { FooterComponent } from './views/medium/footer/footer.component';
import { PortfolioComponent } from './views/medium/portfolio/portfolio.component';
import { HeaderComponent } from './views/medium/header/header.component';
import { AboutComponent } from './views/medium/about/about.component';
import { TechnologiesComponent } from './views/medium/technologies/technologies.component';
import { ReferralsComponent } from './views/medium/referrals/referrals.component';
import { WhitepaperComponent } from './views/medium/whitepaper/whitepaper.component';
import { SmallButtonComponent } from './views/small/small-button/small-button.component';
import { MenuLinkComponent } from './views/small/menu-link/menu-link.component';
import { ScrollButtonComponent } from './views/small/scroll-button/scroll-button.component';
import { IconComponent } from './views/small/font-awesome-icon/font-awesome-icon.component';
import { LineComponent } from './views/small/header-line/header-line.component';
import { MatIconModule } from '@angular/material/icon';
import { HomepageComponent } from './views/large/Homepage/homepage.component';
import { TechnologyLeftComponent } from './views/small/technology-left/technology-left.component';
import { TechnologyRightComponent } from './views/small/technology-right/technology-right.component';
import { UnorderedListComponent } from './views/small/unordered-list/unordered-list.component';
import { WhitepaperInputComponent } from './views/small/text-input/text-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PortfolioCardComponent } from './views/small/portfolio-card/portfolio-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    PortfolioComponent,
    HeaderComponent,
    AboutComponent,
    TechnologiesComponent,
    ReferralsComponent,
    WhitepaperComponent,
    SmallButtonComponent,
    MenuLinkComponent,
    ScrollButtonComponent,
    IconComponent,
    LineComponent,
    HomepageComponent,
    TechnologyLeftComponent,
    TechnologyRightComponent,
    UnorderedListComponent,
    WhitepaperInputComponent,
    PortfolioCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
