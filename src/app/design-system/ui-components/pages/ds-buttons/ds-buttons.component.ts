import { Component } from '@angular/core';

@Component({
  selector: 'app-ds-buttons',
  templateUrl: './ds-buttons.component.html',
  styleUrl: './ds-buttons.component.scss'
})
export class DsButtonsComponent {

  isDisabled = false;
  buttonColor = 'neutral';
  buttonCodeSnippet = this.generateButtonCodeSnippet();

  constructor() {}

  setDisabled(disabled: boolean): void {
    this.isDisabled = disabled;
    this.updateButtonCodeSnippet();
  }

  setColor(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.buttonColor = selectElement.value;
    this.updateButtonCodeSnippet();
  }

  updateButtonCodeSnippet(): void {
    this.buttonCodeSnippet = this.generateButtonCodeSnippet();
  }

  generateButtonCodeSnippet(): string {
    return `<eds-button [color]="${this.buttonColor}" [disabled]="${this.isDisabled}">Presioname</eds-button>`;
  }

}
