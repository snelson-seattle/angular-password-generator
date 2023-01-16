import { Component } from '@angular/core';

const specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];

const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const lowercaseLetters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

const uppercaseLetters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

function getRandom(array: string[]) {
  return array[Math.floor(Math.random() * array.length)]
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  length = 0;
  includeLowers = false;
  includeUppers = false;
  includeNumbers = false;
  includeSpecials = false;
  password = '';

  onButtonClick() {
    let generatedPassword = "";
    let characterSet: string[] = [];

    if(this.length === 0) {
      return;
    }

    if (this.includeLowers) {
      characterSet = characterSet.concat(lowercaseLetters);
    }

    if(this.includeUppers) {
      characterSet = characterSet.concat(uppercaseLetters);
    }

    if(this.includeNumbers) {
      characterSet = characterSet.concat(numericCharacters);
    }

    if(this.includeSpecials) {
      characterSet = characterSet.concat(specialCharacters);
    }

    for(let i = 0; i < this.length; i++) {
      generatedPassword += getRandom(characterSet);
    }

    this.password = generatedPassword;

  }

  onChangeLength(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    const parsedInput = parseInt(value);

    if (!isNaN(parsedInput)) {
      this.length = parsedInput;
    } else {
      this.length = 0;
    }
  }

  onChangeUseLowercase() {
    this.includeLowers = !this.includeLowers;
  }

  onChangeUseUppercase() {
    this.includeUppers = !this.includeUppers;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSpecials() {
    this.includeSpecials = !this.includeSpecials;
  }


}
