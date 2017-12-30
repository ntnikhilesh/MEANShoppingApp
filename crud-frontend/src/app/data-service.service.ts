import { Injectable } from '@angular/core';
import { Http,Response,Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class DataServiceService {

  constructor(private http:Http) { }

  getShoppingItems(){
    return this.http.get('api/get_items')
    .map(res=>res.json());
  }

  addShoppingItems(newItem){
    let headers=new Headers();
    headers.append('Content-Type','application/json')
    return this.http.post('api/add_items',newItem,{headers:headers})
    .map(res=>res.json());
  }

  deleteItems(id){
    return this.http.delete('api/delete_item/'+id)
    .map(res=>res.json());
  }

  

  updateShoppingItems(id,newItem){
    let headers=new Headers();
    headers.append('Content-Type','application/json')
    return this.http.put('api/update_item/'+id,newItem,{headers:headers})
    .map(res=>res.json());
  }
}
