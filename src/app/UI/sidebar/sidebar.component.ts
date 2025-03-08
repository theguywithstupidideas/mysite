import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelTitle,
  MatExpansionModule
} from '@angular/material/expansion';
import {NgClass} from '@angular/common';
import {OptionComponent} from '../option/option.component';

@Component({
  selector: 'app-sidebar',
  imports: [
    MatExpansionPanelTitle,
    MatExpansionPanel,
    MatAccordion,
    MatExpansionModule,
    NgClass,
    OptionComponent
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {

}
