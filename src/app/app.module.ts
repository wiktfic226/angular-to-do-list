import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { AppComponent } from './app.component';
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import { TodoItemComponent } from './todoitem/todo-item.component';
import { MatRadioModule } from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { DoneTasksFilterPipe } from './donetasksfilter/donetasksfilter.pipe';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDividerModule} from '@angular/material/divider';
import { DisplayDateTooltipDirective } from './displaydaytooltip/display-date-tooltip.directive';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    DoneTasksFilterPipe,
    DisplayDateTooltipDirective
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatListModule,
    MatCardModule,
    MatCheckboxModule,
    MatRadioModule,
    MatIconModule,
    ScrollingModule,
    MatTooltipModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
