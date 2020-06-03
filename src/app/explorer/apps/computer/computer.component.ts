import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComputerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
