import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JokeApiService } from './joke-api.service';
import { Joke } from './joke';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  item: Joke | null = null;

  jokeHolder: any

  constructor(private JokeApiService: JokeApiService) { }

  ngOnInit() {
    this.getUser('1');  // Replace '1' with the actual user ID
  }

  getUser(id: string) {

    this.jokeHolder = this.JokeApiService.getUser(id).subscribe(
      (data: Joke) => this.item = data,
      error => console.error('There was an error!', error)
    );
    console.log(this.jokeHolder.item?.joke);

  }




  refresh() {
    window.location.reload()

    console.warn('click');

  }


}
