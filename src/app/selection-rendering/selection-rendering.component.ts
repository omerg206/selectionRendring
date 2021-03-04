import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Data } from '../app.component';

@Component({
  selector: 'app-selection-rendering',
  templateUrl: './selection-rendering.component.html',
  styleUrls: ['./selection-rendering.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectionRenderingComponent implements OnInit {

  @Input() data: Data[] | null = null;

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
  }


  trackByFunc(index: number, item: Data) {
    return item.name;
  }
}
