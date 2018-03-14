import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {



  constructor(private http: Http) { }

  getShoppingItems(){
    return this.http.get('http://localhost:3000/api/student')
      .map(res=> res.json());
  }

  addShoppingItem(newItem){
    let headers = new Headers();

    headers.append('content-type','application/json');
    return this.http.post('http://localhost:3000/api/student',newItem,{headers: headers})
      .map(res => res.json());
  }

  deleteShoppingItem(id){
    return this.http.delete('http://localhost:3000/api/student/'+id)
      .map( res=>res.json());
  }

  updateShoppingItem(newItem){


    let headers = new Headers();
    headers.append('content-type','application/json');

    return this.http.put('http://localhost:3000/api/student/'+newItem._id,newItem,{headers: headers})
      .map( res => res.json());

  }

  checkAuth(myObj) {
    let headers = new Headers();
    headers.append('content-type','application/json');
    let options = new RequestOptions({headers: headers});
    return this.http.post('http://localhost:3000/api/auth', JSON.stringify(myObj), options).map(res => res.json()); 
  }

}
