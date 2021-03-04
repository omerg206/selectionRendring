import { Component, OnDestroy, OnInit } from '@angular/core';

export interface Data {
 speed: number,
 name: string,
 date: Date
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  data: Data[] | null = null;
  timerId: null |any = null;

  ngOnInit(): void {
    this.timerId = setInterval(() => {
      this.data =[ {
        date: new Date(),
        name: 'key1',
        speed: Math.random()
      },
      {
        date: new Date(),
        name: 'key2',
        speed: Math.random()
      },
      {
        date: new Date(),
        name: 'key3',
        speed: Math.random()
      }]
    }, 2000)
  }

  ngOnDestroy(): void {
   if (this.timerId) {
     clearInterval(this.timerId)
   }
  }

}
