import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AlifeFileToBase64Module } from 'alife-file-to-base64';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';


@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		HeaderComponent,
		ProfileComponent,
		SkillsComponent,
		EducationComponent,
		ExperienceComponent,
		ProjectsComponent,
		FooterComponent,
		LoginComponent,
		PortfolioComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		AppRoutingModule,
		HttpClientModule,
		RouterModule,
		AlifeFileToBase64Module
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
