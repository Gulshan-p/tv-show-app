import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { ICurrentTvShow } from './icurrent-tv-show';
import { ICurrentTvShowData } from './icurrent-tv-show-data';

@Injectable({
  providedIn: 'root'
})

export class TvshowService {

  constructor(private httpClient: HttpClient) { }

  getCurrentTvShow(search: string){

      let uriParams = '';
      if (typeof search === 'string') {
        uriParams = `q=${search}`
      }


     return this.httpClient.get<ICurrentTvShowData[]>(`http://api.tvmaze.com/search/shows?q=${search}`).pipe(
      map(data => data.map(d => this.transformToIcurrentTvShow(d))
      ))
  }

  private transformToIcurrentTvShow(data: ICurrentTvShowData): ICurrentTvShow {
    return {
    name: data.show.name,
    country: data.show.network?.country?.name,
    language: data.show.language,
    genres: data.show.genres,
    rating: data.show.rating?.average,
    weight: data.show.weight,
    summary: data.show.summary,
    image: data.show.image?.medium,
    premiered: data.show.premiered,
    status: data.show.status

    }
  }
}

