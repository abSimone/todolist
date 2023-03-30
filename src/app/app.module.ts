import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemComponent } from './item/item.component';
import { UrgentTaskDirective } from './directives/urgent-task.directive';
import { TaskComponent } from './tasks/task/task.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    ItemComponent,
    UrgentTaskDirective,
    TaskComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
