import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NotesComponent } from './components/notes/notes.component';
import { SearchInputComponent } from './components/search-input/search-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SearchInputComponent, NotesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
}
