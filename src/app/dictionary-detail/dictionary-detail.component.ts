import {Component, OnDestroy, OnInit} from '@angular/core';
import {IWord} from '../dictionary.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit , OnDestroy{
  word: IWord;
  sub: Subscription;
  constructor(
    private  activateRoute: ActivatedRoute,
    private dictionaryService
  ) { }

  ngOnInit() {
    this.sub = this.activateRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      const key = paramMap.keys('key');
      const meaning = this.dictionaryService.search(key);
      this.word = {
        key,
        meaning
      };
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
