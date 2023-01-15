import { Component } from '@angular/core';

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
    this.password = 'PASSWORD';
    console.log(this.length);
  }

  onChangeLength(event: Event ) {
    const value = (event.target as HTMLInputElement).value;  
    const parsedInput = parseInt(value);

    if(!isNaN(parsedInput)) {
      this.length = parsedInput;
    }else {
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
