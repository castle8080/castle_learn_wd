import { Component, OnInit } from '@angular/core';
import { ReplaySubject, Subject, Observable, pipe, map, filter, scan } from 'rxjs';
import { GuessGameService } from 'src/app/services/guessgame.service';

@Component({
  selector: 'app-rxintro',
  templateUrl: './guessnum.component.html',
  styleUrls: ['./guessnum.component.scss']
})
export class GuessnumComponent implements OnInit {

  constructor(readonly gameService: GuessGameService) {
  }

  ngOnInit(): void {
  } 

  onGuess(e: Event, v: string) {
    e.preventDefault();
    this.gameService.onGuessInput(v);
  }

  newGame() {
    this.gameService.onNewGame();
  }
}
