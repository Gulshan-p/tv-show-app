import { Component } from '@angular/core';
import { ICurrentTvShow } from './icurrent-tv-show';
import { TvshowService } from './tvshow.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title = 'local-tvshow-app';
  // currentTvShow: ICurrentTvShow;
  shows: ICurrentTvShow[];

  constructor(private tvShowService: TvshowService) {}

  doSearch(searchValue) {
    if (searchValue) {
      const userInput = searchValue;
      this.tvShowService.getCurrentTvShow(

        userInput.length > 1 ? userInput : undefined).subscribe(data =>this.shows = data)
    }

  }
}
