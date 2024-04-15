import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private _http: HttpClient) { }
  newsapiurl="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0e87879d15344f93a4b3f395a4e94bcf"
  newsapiurlsalu="https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=0e87879d15344f93a4b3f395a4e94bcf"
  newsapiurldepor="https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=0e87879d15344f93a4b3f395a4e94bcf"
  newsapiurlcien="https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=0e87879d15344f93a4b3f395a4e94bcf"


  getNoticias(parametros:  any): Observable<any>{
    const URL ='https://newsapi.org/v2/top-headlines?country='
    + parametros.pais+'&category='+parametros.categoria+'&apiKey=0e87879d15344f93a4b3f395a4e94bcf';


    return this._http.get(URL);
  }

  topHeading():Observable<any> {
    return this._http.get(this.newsapiurl)
  }
  saludHeading():Observable<any> {
    return this._http.get(this.newsapiurlsalu)
  }
  deporHeading():Observable<any> {
    return this._http.get(this.newsapiurldepor)
  }
  cienHeading():Observable<any> {
    return this._http.get(this.newsapiurlcien)
  }


  
}
