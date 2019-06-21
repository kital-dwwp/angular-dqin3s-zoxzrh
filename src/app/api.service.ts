// APIService.service.ts
import { Injectable } from '@angular/core';

// interface WordPressObject {

// }

interface WPObjectMeta {
  _price: number;
}

interface WPObjectRendered {
  rendered: string;
}

export interface WordPressObject {
  id: number;
  meta: WPObjectMeta;
  title: WPObjectRendered;
  excerpt: WPObjectRendered;
}

@Injectable({
  providedIn: 'root',
})
export class APIService {

  /*@TODO: APIService instances BASE_URL should be configurable */
  protected BASE_URL: string = "http://localhost/cours/wp-json/wp/v2/";

  public list(collection: string): Promise<WordPressObject[]> {
    return this.fetch(collection);
  }

  public get(collection: string, id: number): Promise<WordPressObject> {
    return this.fetch(`${collection}/${id}`);
  }

  /*@TODO: Typings for APIService instances fetch method options argument */
  protected fetch(path: string, options: any = {}){ 
    /*@NOTE: Should we secure this concatenation to avoid doubles '/' ? */
    return fetch(this.BASE_URL + path, {
      "Content-type": "application/json",
      ...options
    })
    .then(res => res.json())
  }
}
