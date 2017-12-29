import { Component, OnInit } from '@angular/core';
import {Item} from '../item'
import {DataServiceService} from '../data-service.service'

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css']
})
export class ShoppingItemComponent implements OnInit {
  shoppingItemList:Item[]=[];
  constructor(private dataService:DataServiceService) { }


  ngOnInit() {
    this.getItems()
  }

  getItems(){
    this.dataService.getShoppingItems().subscribe(items=>{
      this.shoppingItemList=items;
      console.log('data from data service:',this.shoppingItemList)
    })
  }

}
