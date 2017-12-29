import { Injectable } from '@angular/core';
import { Http,Response,Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class DataServiceService {

  constructor(private http:Http) { }

  getShoppingItems(){
    return this.http.get('http://localhost:3000/api/get_items')
    .map(res=>res.json());
  }

  addShoppingItems(newItem){
    let headers=new Headers();
    headers.append('Content-Type','application/json')
    return this.http.post('http://localhost:3000/api/add_items',newItem,{headers:headers})
    .map(res=>res.json());
  }

  deleteItems(id){
    return this.http.delete('http://localhost:3000/api/delete_item/'+id)
    .map(res=>res.json());
  }

  
  updateShoppingItems(id,newItem){
    let headers=new Headers();
    headers.append('Content-Type','application/json')
    return this.http.put('http://localhost:3000/api/update_item/'+id,newItem,{headers:headers})
    .map(res=>res.json());
  }
}
