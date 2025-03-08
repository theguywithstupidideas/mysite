import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelTitle,
  MatExpansionModule
} from '@angular/material/expansion';
import {NgClass} from '@angular/common';
import {OptionComponent} from '../option/option.component';
import {GoRouteService} from '../../base/routing/go-route.service';

@Component({
  selector: 'app-sidebar',
  imports: [
    MatAccordion,
    MatExpansionModule,
    OptionComponent
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  constructor( protected router: GoRouteService ) { }
}
