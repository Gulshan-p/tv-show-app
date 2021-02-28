import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';
import { subscribeOn } from 'rxjs/operators';
import { ICurrentTvShow } from '../icurrent-tv-show';

@Component({
  selector: 'app-current-inf-tvshow',
  templateUrl: './current-inf-tvshow.component.html',
  styleUrls: ['./current-inf-tvshow.component.css']
})
export class CurrentInfTvshowComponent implements OnInit {
  @Input() current: ICurrentTvShow

  constructor() {
    // this.current = {
    //   name: '',
    //   country: '',
    //   language: '',
    //   genres: ['fe','ef'],
    //   rating: 0,
    //   weight: 0,
    //   summary: '',
    //   image: '',
    //   premiered: new Date(),
    //   status: ''
    // };
    
   }

  ngOnInit(): void {
    
  }

}
