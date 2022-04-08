import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

@NgModule({
  declarations: [TestComponent],
  exports: [TestComponent]
})
export class TestComponentModule { }
