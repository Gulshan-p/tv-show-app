import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TvshowService } from '../tvshow.service';
import {debounce, debounceTime} from 'rxjs/operators';
@Component({
  selector: 'app-name-search',
  templateUrl: './name-search.component.html',
  styleUrls: ['./name-search.component.css']
})
export class NameSearchComponent implements OnInit {
  @Output() searchEvent = new EventEmitter<string>();
  search = new FormControl('', Validators.minLength(3));
  constructor() { }

  ngOnInit(): void {
    this.search.valueChanges
    .pipe(debounceTime(1000))
    .subscribe((searchValue: string) => {
      if (!this.search.invalid){
        this.searchEvent.emit(searchValue)
      }
    })
  }
}
