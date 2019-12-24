import { Injectable } from '@angular/core';

export class IWord {
  key: string;
  meaning: string;
}
@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  private words: IWord[] = [{
    key: 'service',
    meaning: 'dịch vụ'
  }, {
    key: 'sercive provider',
    meaning: 'nhà cung cấp dịch vụ'
  }, {
    key: 'provide',
    meaning: 'cung cấp'
  }, {
    key: 'eficient',
    meaning: 'hiệu quả'
  }, {
    key: 'snow',
    meaning: 'tuyết'
  }];

  constructor() { }
  search(word: string): string {
    if (!word) {
      return '';
    }
    const w = this.words.find(iterm => iterm.key === word.toLowerCase());
    if (w) {
      return w.meaning;
    }
    return 'not found';
  }
  getAll(): IWord[] {
    return this.words;
  }
}
