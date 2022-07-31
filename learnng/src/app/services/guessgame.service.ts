import { Injectable } from '@angular/core';
import { ReplaySubject, Subject, Observable, pipe, map, filter, scan } from 'rxjs';
import { CallbackActionProcessor } from '../action-processor';

/**
 * Represents a number guessing game.
 * The game is immutable.
 * Methods return the new game state.
 */
export class GuessGame {

  constructor(readonly target: number, readonly guesses: number[]) {
  }

  statusDisplay() {
    if (this.guesses.length == 0) {
      return null;
    }
    else if (this.target < this.guesses[0]) {
      return "Too high";
    }
    else if (this.target > this.guesses[0]) {
      return "Too low";
    }
    else {
      return "Correct";
    }
  }

  hasGuess() {
    return this.guesses.length > 0;
  }

  /** Get the last guess. */
  lastGuess() {
    return (this.guesses.length == 0) ? null : this.guesses[0];
  }

  /** Make a new guess. */
  guess(v: number): GuessGame {
    return new GuessGame(this.target, [v, ...this.guesses]);
  }

  /** Handle input for a guess. */
  handleInput(input: string): GuessGame {
    try {
      return this.guess(parseInt(input));
    }
    catch(e) {
      console.log(`Invalid guess: ${e}`);
      return this;
    }
  }

  /** Start a new game. */
  static create(): GuessGame {
    return new GuessGame(
      Math.floor(Math.random() * 100) + 1,
      []
    );
  }
}

/**
 * Service for a guess game.
 */
@Injectable({
  providedIn: 'root'
})
export class GuessGameService extends CallbackActionProcessor<GuessGame> {

  constructor() {
    super(GuessGame.create());
    // Create a new game on init.
    this.onNewGame();
  }

  /** When a new guess input occurs. */
  onGuessInput(v: string) {
    this.apply(g => g.handleInput(v));
  }

  /** Trigger a new game. */
  onNewGame() {
    this.apply(g => GuessGame.create());
  }
}