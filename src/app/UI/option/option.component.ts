import {Component, Input, signal, ViewEncapsulation, WritableSignal} from '@angular/core';
import {
  MatExpansionPanel,
  MatExpansionPanelTitle,
  MatExpansionModule
} from '@angular/material/expansion';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-option',
  imports: [
    MatExpansionPanel,
    MatExpansionPanelTitle,
    MatExpansionModule,
    NgClass
  ],
  templateUrl: './option.component.html',
  styleUrl: './option.component.css',
})
export class OptionComponent {
  isSelected: WritableSignal<boolean>;  // Declare the signal

  constructor() {
    this.isSelected = signal(false);  // ✅ Initialize inside the constructor
  }
  @Input() Title: string = 'Default';
}
