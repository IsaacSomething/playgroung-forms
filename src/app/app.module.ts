import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from '@angular/cdk/layout';
import { ToolbarModule } from '@base/components/toolbar';
import { MenuModule } from '@base/components/menu';
import { MatNativeDateModule } from '@angular/material/core';
const moduleImports = [
  BrowserModule,
  BrowserAnimationsModule,
  AppRoutingModule,
  LayoutModule,
  ToolbarModule,
  MenuModule,
  MatNativeDateModule
];

import { MatSidenavModule } from '@angular/material/sidenav';
const materialImports = [MatSidenavModule];

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [...materialImports, ...moduleImports],
  bootstrap: [AppComponent]
})
export class AppModule {}
