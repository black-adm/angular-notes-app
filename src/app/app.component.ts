import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchInputComponent } from './components/search-input/search-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SearchInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.style.scss',
})
export class AppComponent {
}
