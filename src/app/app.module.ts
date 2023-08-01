import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PostAttiviComponent } from './components/post-attivi/post-attivi.component';
import { PostInattiviComponent } from './components/post-inattivi/post-inattivi.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';

const routes: Route[] = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "attivi",
        component: PostAttiviComponent
    },
    {
        path: "inattivi",
        component: PostInattiviComponent
    }
]

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        PostAttiviComponent,
        PostInattiviComponent,
        NavbarComponent,
        CardComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
