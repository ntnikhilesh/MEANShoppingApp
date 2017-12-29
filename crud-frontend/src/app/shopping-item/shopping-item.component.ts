import { Component, OnInit } from '@angular/core';
import {Item} from '../item'
import {DataServiceService} from '../data-service.service'

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css']
})
export class ShoppingItemComponent implements OnInit {
  
  //shoppingItemList:Item[]=[];
  shoppingItemList:any;
  constructor(private dataService:DataServiceService) { }


  ngOnInit() {
    this.getItems()
  }

  addItem(form){
    console.log(form.value)
    let obj={};
    obj['itemName']=form.value.itemName;
    obj['itemQuantity']=form.value.itemQuantity;
    obj['itemBought']=false;
    console.log(obj)
    this.dataService.addShoppingItems(obj).subscribe(items=>{
      console.log('Data added succussfully...:',items)
      this.getItems()
    })

  }

  getItems(){
    this.dataService.getShoppingItems().subscribe(items=>{
      this.shoppingItemList=items;
      console.log('data from data service:',this.shoppingItemList)
    })
  }

}
