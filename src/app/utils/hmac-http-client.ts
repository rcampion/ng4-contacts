import {Injectable} from '@angular/core';
import {HttpModule, Http, Response, RequestOptionsArgs, Headers, RequestOptions, ConnectionBackend} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {SecurityToken} from '../../models/securityToken';
import * as AppUtils from './app.utils';
import {AccountEventsService} from '../../services/account.events.service';
import {ErrorService} from '../../services/error.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/share';
import {Observer} from 'rxjs/Observer';
import * as CryptoJS from 'crypto-js';

///<reference path="../../../../../typings/cryptojs/cryptojs.d.ts" />

@Injectable()
export class HmacHttpClient extends Http {
  http: Http;
  accountEventsService: AccountEventsService;
  errorService: ErrorService;
  constructor(_backend: ConnectionBackend, _defaultOptions: RequestOptions, accountEventsService: AccountEventsService, errorService: ErrorService) {
    super(_backend, _defaultOptions);
    this.accountEventsService = accountEventsService;
    this.errorService = errorService;
  }
  addSecurityHeader(url: string, method: string, options: RequestOptionsArgs, body: any): void {
    this.errorService.changeMessage('');

    if (AppUtils.UrlMatcher.matches(url)) {

      // const securityToken: SecurityToken = new SecurityToken(JSON.parse(localStorage.getItem(AppUtils.STORAGE_SECURITY_TOKEN)));
      const securityToken: SecurityToken = new SecurityToken(JSON.parse(this.getFromStorage(AppUtils.STORAGE_SECURITY_TOKEN)));

      const date: string = new Date().toISOString();
      const secret: string = securityToken.publicSecret;

      let message = '';
      if (method === 'PUT' || method === 'POST' || method === 'PATCH') {
        message = method + body + url + date;
      } else {
        message = method + url + date;
      }
      options.headers.set(AppUtils.CSRF_CLAIM_HEADER, localStorage.getItem(AppUtils.CSRF_CLAIM_HEADER));
      // rkc set this as default
      // options.headers.set(AppUtils.HEADER_X_DIGEST, CryptoJS.HmacSHA256(message, secret).toString());
      if (securityToken.isEncoding('HmacSHA256')) {
        options.headers.set(AppUtils.HEADER_X_DIGEST, CryptoJS.HmacSHA256(message, secret).toString());
      } else if (securityToken.isEncoding('HmacSHA1')) {
        options.headers.set(AppUtils.HEADER_X_DIGEST, CryptoJS.HmacSHA1(message, secret).toString());
      } else if (securityToken.isEncoding('HmacMD5')) {
        options.headers.set(AppUtils.HEADER_X_DIGEST, CryptoJS.HmacMD5(message, secret).toString());
      }
      options.headers.set(AppUtils.HEADER_X_ONCE, date);

      console.log('url', url);
      console.log('message', message);
      console.log('secret', secret);
      console.log('hmac message', options.headers.get(AppUtils.HEADER_X_DIGEST));
    }

  }
  setOptions(options?: RequestOptionsArgs): RequestOptionsArgs {
    if (!options) {
      options = {};
    }
    if (!options.headers) {
      options.headers = new Headers();
    }
    return options;
  }
  mapResponse(res: Response, observer: Observer<Response>): void {
    if (res.ok && res.headers) {
      // const securityToken: SecurityToken = new SecurityToken(JSON.parse(localStorage.getItem(AppUtils.STORAGE_SECURITY_TOKEN)));
     const securityToken: SecurityToken = new SecurityToken(JSON.parse(this.getFromStorage(AppUtils.STORAGE_SECURITY_TOKEN)));
      if (securityToken) {
        // localStorage.setItem(AppUtils.STORAGE_SECURITY_TOKEN, JSON.stringify(securityToken));
        this.setToStorage(AppUtils.STORAGE_SECURITY_TOKEN, securityToken);
      }
    }
    observer.next(res);
    observer.complete();
  }
  catchResponse(res: Response, observer: Observer<Response>): void {
    if (res.status === 401) {
      console.log('Unauthorized request:', res.text());
      this.accountEventsService.logout({error: res.text()});
      // this.errorService.handleError(res);
      this.errorService.changeMessage('Unauthorized request: ' + res.text());
      // return Observable.throw('Unauthorized');
    }

    if (res.status === 403) {
      const errorMsg = 'Unauthorized request!' ;
      console.log(errorMsg  + res.text());
      this.accountEventsService.logout({error: res.text()});
      // this.errorService.handleError(res);
      alert(errorMsg);
      this.errorService.changeMessage(errorMsg);
    }
    observer.complete();
  }
  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    options = this.setOptions(options);
    this.addSecurityHeader(url, 'GET', options, null);

    return Observable.create((observer: Observer<Response>) => {
      super.get(url, options)
        .subscribe((res: Response) => {
          this.mapResponse(res, observer);
        }, (res: Response) => {
          this.catchResponse(res, observer);
        });
    });
  }
  post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    options = this.setOptions(options);
    this.addSecurityHeader(url, 'POST', options, body);

    return Observable.create((observer: Observer<Response>) => {
      super.post(url, body, options)
        .subscribe((res: Response) => {
          this.mapResponse(res, observer);
        }, (res: Response) => {
          this.catchResponse(res, observer);
        });
    });
  }
  put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    options = this.setOptions(options);
    this.addSecurityHeader(url, 'PUT', options, body);

    return Observable.create((observer: Observer<Response>) => {
      super.put(url, body, options)
        .subscribe((res: Response) => {
          this.mapResponse(res, observer);
        }, (res: Response) => {
          this.catchResponse(res, observer);
        });
    });
  }
  delete(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    options = this.setOptions(options);
    this.addSecurityHeader(url, 'DELETE', options, body);

    return Observable.create((observer: Observer<Response>) => {
      super.delete(url, options)
        .subscribe((res: Response) => {
          this.mapResponse(res, observer);
        }, (res: Response) => {
          this.catchResponse(res, observer);
        });
    });
  }
  private setToStorage(key: string, value: any): void {
    const elem: any = localStorage.getItem(key);
    if (!elem) {
      sessionStorage.setItem(key, JSON.stringify(value));
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }
  private getFromStorage(key: string): any {
    const elem: any = localStorage.getItem(key);
    if (!elem) {
      return sessionStorage.getItem(key);
    }
    return elem;
  }
}
