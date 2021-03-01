import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs/operators';
import { ICurrentTvShow } from '../icurrent-tv-show';
import { TvshowService } from '../tvshow.service';

@Component({
  selector: 'app-current-inf-tvshow',
  templateUrl: './current-inf-tvshow.component.html',
  styleUrls: ['./current-inf-tvshow.component.css']
})
export class CurrentInfTvshowComponent implements OnInit {
  current: ICurrentTvShow

  constructor(private tvshowService: TvshowService) {
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
    this.tvshowService.getCurrentTvShow('kenan').subscribe(data => this.current = data);
  }

}
