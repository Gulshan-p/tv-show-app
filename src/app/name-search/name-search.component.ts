import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TvshowService } from '../tvshow.service';
import {debounce, debounceTime} from 'rxjs/operators';
@Component({
  selector: 'app-name-search',
  templateUrl: './name-search.component.html',
  styleUrls: ['./name-search.component.css']
})
export class NameSearchComponent implements OnInit {
  search = new FormControl();
  constructor(private TvshowService: TvshowService) { }

  ngOnInit(): void {
    this.search.valueChanges
    .pipe(debounceTime(1000))
    .subscribe((searchValue: string) => {
      if (searchValue) {
        const userInput = searchValue;
        this.TvshowService.getCurrentTvShow(
          userInput.length > 1 ? userInput : undefined).subscribe(data => console.log(data))
      }
    
    })
  }
}
