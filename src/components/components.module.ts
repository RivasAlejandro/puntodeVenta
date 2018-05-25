import { NgModule } from '@angular/core';
import { ListaComponent } from './lista/lista';
import { HeaderComponent } from './header/header';
@NgModule({
	declarations: [ListaComponent,
    HeaderComponent],
	imports: [],
	exports: [ListaComponent,
    HeaderComponent]
})
export class ComponentsModule {}
