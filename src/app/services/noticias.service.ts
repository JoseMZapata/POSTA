import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  getNoticias(parametros:  any): Observable<any>{
    const URL ='https://newsapi.org/v2/top-headlines?country='
    + parametros.pais+'&category='+parametros.categoria+'&apiKey=0e87879d15344f93a4b3f395a4e94bcf';


    return this.http.get(URL);
  }


  
}
