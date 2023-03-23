import { Component, OnInit } from '@angular/core';
import { instanceToPlain, plainToInstance, Type }from 'class-transformer';

import { z } from "zod";

const PetSchema = z.object({
  type: z.string(),
  name: z.string(),
  birthday: z.date()
});

const PersonSchema = z.object({
  name: z.string(),
  birthday: z.date(),
  pets: z.array(PetSchema)
});

type PersonT = z.infer<typeof PersonSchema>;
type Pet = z.infer<typeof PetSchema>;

const testZodSer = () => {

  const p: PersonT = {
    name: "Bryan Castillo",
    birthday: new Date(1977, 2, 3),
    pets: [
      { type: 'dog', name: 'bailey', birthday: new Date(2014, 7, 4) }
    ]
  };

  const serializedP = JSON.stringify(p);
  console.log(serializedP);

  const rehydrated = PersonSchema.safeParse(serializedP) as unknown as PersonT;
  console.log("rehydrated: ", rehydrated);

};



class PersonC {

  public readonly name: string;

  @Type(() => Date)
  public readonly birthday: Date;

  constructor(
    name: string,
    birthday: Date
  ) {
    this.name = name;
    this.birthday = birthday;
  }
}

interface Person {
  name: string;
  birthday: Date;
}

const createDateReviver = (dateKeyRegex: RegExp) => {
  return (key: string|number|symbol, value: any) => {
    if (typeof(key) === "string" && dateKeyRegex.test(key)) {
      return new Date(String(value));
    }
    else {
      return value;
    }
  }
}

const serializePersonTest = (): Person => {
  const dtReviver = createDateReviver(new RegExp("birthday"));

  const p: Person = { name: 'Bryan Castillo', birthday: new Date(1977, 2, 3) };

  const serializedP = JSON.stringify(p);
  const rehydratedPerson = JSON.parse(serializedP, dtReviver) as Person;

  console.log(rehydratedPerson);
  console.log(rehydratedPerson.birthday.getTime());

  return rehydratedPerson;
};


@Component({
  selector: 'app-jsonser',
  templateUrl: './jsonser.component.html',
  styleUrls: ['./jsonser.component.scss']
})
export class JsonserComponent implements OnInit {

  constructor() {
    serializePersonTest();
    testZodSer();
  }

  ngOnInit(): void {
  }

}
