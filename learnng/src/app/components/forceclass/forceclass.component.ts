import { Component, OnInit } from '@angular/core';

// I wanted to play around with taking object literals and "force" casting to a class
// by setting the prototype.
// It would probably be better look at json serialization libraries.

class Money {
    constructor(
        public amount: number,
        public currency: string
    ) {}

    invest() {
        return new Money(this.amount * 10, this.currency);
    }
}

let m: Money = Object.setPrototypeOf(JSON.parse(`
    {
        "amount": 3.14,
        "currency": "PHP"
    }
`), Money.prototype);

console.log(m.invest());


interface IntelligentBeing {
    type$: string;

    getGreeting(): string;
}

class Dog implements IntelligentBeing {
    type$ = "dog";

    constructor(public name: string) {
    }

    getGreeting() {
        return `Woof! I am ${this.name}!`;
    }
}

class GPT3 implements IntelligentBeing {
  type$ = "gpt3";

  constructor(public parameters: number) {
  }

  getGreeting() {
      return `I am really an intelligent thing here with ${this.parameters} parameters.`;
  }
}

class Tardigrade implements IntelligentBeing {
  type$ = "tardigrade";

  getGreeting() {
      return "I will survive.";
  }
}

const intelligentBeingMap: Map<string, object> = new Map<string, object>([
    ["dog", Dog.prototype],
    ["gpt3", GPT3.prototype],
    ["tardigrade", Tardigrade.prototype]
]);

function getIntelligentBeingFromObject(obj: object): IntelligentBeing {
    // Look up the class prototype to use.
    let ibType: string = (obj as any)["type$"];
    let proto = intelligentBeingMap.get(ibType)!;

    // Make a copy of the object and set the copies prototype.
    // This bypasses normal construction.
    return Object.setPrototypeOf(Object.assign({}, obj), proto) as IntelligentBeing;
}

function runIt() {
    let beings = [
        {
            type$: 'dog',
            name: 'Ollie'
        },
        {
            type$: 'tardigrade'
        },
        {
            type$: 'gpt3',
            parameters: 2000000001
        },
    ];

    beings.forEach(b => {
        let ib = getIntelligentBeingFromObject(b);
        console.log(ib.getGreeting());
    });
}

@Component({
  selector: 'app-forceclass',
  templateUrl: './forceclass.component.html',
  styleUrls: ['./forceclass.component.scss']
})
export class ForceclassComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      runIt();
  }

}
