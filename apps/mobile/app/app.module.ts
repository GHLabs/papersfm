// angular
import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from '@angular/core';

// nativescript
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptHttpModule } from 'nativescript-angular/http';
import { NSModuleFactoryLoader } from 'nativescript-angular/router';

// app
import { CoreModule } from './modules/core/core.module';
import { SharedModule } from './modules/shared/shared.module';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

@NgModule({
  imports: [NativeScriptModule, NativeScriptHttpModule, CoreModule, SharedModule, AppRoutingModule],
  providers: [
    // this allows standard Angular route lazy load syntax across whole project
    {
      provide: NgModuleFactoryLoader,
      useClass: NSModuleFactoryLoader,
    },
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule {}
