import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BusinessquestionService {

  constructor(private  httpClient: HttpClient) { }

  API_URL = 'http://localhost:8086';

  getStateByPeriod(startDate:any, endDate: any): Promise<any> {
    let headers = new HttpHeaders();
    headers = headers.set('startdate', startDate).set('enddate', endDate);

    return new Promise( (resolve, reject) => {
      this.httpClient.get(`${this.API_URL}/api/state-by-period`, {headers}).subscribe(
        (response) => {
          resolve(response);
        }, (err) => {
          reject(err);
        });
    });
  }

  getLoadTypeByPeriod(startDate:any, endDate: any): Promise<any> {
    let headers = new HttpHeaders();
    headers = headers.set('startdate', startDate).set('enddate', endDate);

    return new Promise( (resolve, reject) => {
      this.httpClient.get(`${this.API_URL}/api/load-type-by-period`, {headers}).subscribe(
        (response) => {
          resolve(response);
        }, (err) => {
          reject(err);
        });
    });
  }

  getShipByMonth(state: string): Promise<any> {
    let headers = new HttpHeaders();
    headers = headers.set('state', state);

    return new Promise( (resolve, reject) => {
      this.httpClient.get(`${this.API_URL}/api/ship-by-month`, {headers}).subscribe(
        (response) => {
          resolve(response);
        }, (err) => {
          reject(err);
        });
    });
  }

  getShipByStatePeriod(startDate:any, endDate: any): Promise<any> {
    let headers = new HttpHeaders();
    headers = headers.set('startdate', startDate).set('enddate', endDate);

    return new Promise( (resolve, reject) => {
      this.httpClient.get(`${this.API_URL}/api/ship-by-state-period`, {headers}).subscribe(
        (response) => {
          resolve(response);
        }, (err) => {
          reject(err);
        });
    });
  }

  getLoadTypeWeekRelation(state: string): Promise<any> {
    let headers = new HttpHeaders();
    headers = headers.set('state', state);

    return new Promise( (resolve, reject) => {
      this.httpClient.get(`${this.API_URL}/api/load-type-week-relation`, {headers}).subscribe(
        (response) => {
          resolve(response);
        }, (err) => {
          reject(err);
        });
    });
  }

  getLoadTypeByWeekend(): Promise<any> {
    return new Promise( (resolve, reject) => {
      this.httpClient.get(`${this.API_URL}/api/load-type-by-weekend`).subscribe(
        (response) => {
          resolve(response);
        }, (err) => {
          reject(err);
        });
    });
  }

  getWeekDayTraffic(): Promise<any> {
    return new Promise( (resolve, reject) => {
      this.httpClient.get(`${this.API_URL}/api/weekday-traffic`).subscribe(
        (response) => {
          resolve(response);
        }, (err) => {
          reject(err);
        });
    });
  }

  getFrequentEntitiesNews(): Promise<any> {
    return new Promise( (resolve, reject) => {
      this.httpClient.get(`${this.API_URL}/api/entities-news`).subscribe(
        (response) => {
          resolve(response);
        }, (err) => {
          reject(err);
        });
    });
  }

  getEntitiesTwitter(): Promise<any> {
    return new Promise( (resolve, reject) => {
      this.httpClient.get(`${this.API_URL}/api/entity-twitter`).subscribe(
        (response) => {
          resolve(response);
        }, (err) => {
          reject(err);
        });
    });
  }

  getSentimentHistory(sentiment:any, startDate:any, endDate: any): Promise<any> {
    let headers = new HttpHeaders();
    headers = headers.set('sentiment', sentiment).set('startdate', startDate).set('enddate', endDate);

    return new Promise( (resolve, reject) => {
      this.httpClient.get(`${this.API_URL}/api/sentiment-history`, {headers}).subscribe(
        (response) => {
          resolve(response);
        }, (err) => {
          reject(err);
        });
    });
  }

  getTweetsBySentiment(sentiment:any, startDate:any, endDate: any): Promise<any> {
    let headers = new HttpHeaders();
    headers = headers.set('sentiment', sentiment).set('startdate', startDate).set('enddate', endDate);

    return new Promise( (resolve, reject) => {
      this.httpClient.get(`${this.API_URL}/api/random-sentiment-tweets`, {headers}).subscribe(
        (response) => {
          resolve(response);
        }, (err) => {
          reject(err);
        });
    });
  }

  getDBPediaListEntity(): Promise<any> {
    return new Promise( (resolve, reject) => {
      this.httpClient.get(`${this.API_URL}/api/bdpedia-list-entity`).subscribe(
        (response) => {
          resolve(response);
        }, (err) => {
          reject(err);
        });
    });
  }

  getEntityInfoCard(entity: string, state: string, resource: string): Promise<any> {
    let headers = new HttpHeaders();
    headers = headers.set('entity', entity).set('state', state).set('resource', resource);

    return new Promise( (resolve, reject) => {
      this.httpClient.get(`${this.API_URL}/api/bdpedia-info-card`, {headers}).subscribe(
        (response) => {
          resolve(response);
        }, (err) => {
          reject(err);
        });
    });
  }
  getTweetsNews(): Promise<any> {
    return new Promise( (resolve, reject) => {
      this.httpClient.get(`${this.API_URL}/api/tweets-news`).subscribe(
        (response) => {
          resolve(response);
        }, (err) => {
          reject(err);
        });
    });
  }


  getSentimentEntities(tipo:string): Promise<any> {
    let headers = new HttpHeaders();
    headers = headers.set('state', tipo);

    return new Promise( (resolve, reject) => {
      this.httpClient.get(`${this.API_URL}/api/sentiment-by-entities`, {headers}).subscribe(
        (response) => {
          resolve(response);
        }, (err) => {
          reject(err);
        });
    });
  }

}
