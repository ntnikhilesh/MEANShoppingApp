import { Component, OnInit } from '@angular/core';
import {Item} from '../item'
import {DataServiceService} from '../data-service.service'

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css']
})
export class ShoppingItemComponent implements OnInit {
  selectedItem:any;
  toogleEditForm=false;
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

  deleteItems(id){
    this.dataService.deleteItems(id).subscribe(result=>{
      console.log('data deleted succ:',result)
      this.getItems()
      if(result.n=='1'){
        // this.getItems();
        console.log('show final item')
      }
    })
  }

  showEditForm(selectedItem){
    this.selectedItem=selectedItem;
    this.toogleEditForm=true;
  }

  
  updateItem(form){
    console.log(form.value);
    console.log(this.selectedItem);
    let obj={};
    obj['id']=this.selectedItem._id;
    obj['itemName']=form.value.itemName;
    obj['itemQuantity']=form.value.itemQuantity;
    obj['itemBought']=false;
    console.log(obj)
    this.dataService.updateShoppingItems(this.selectedItem._id,obj).subscribe(items=>{
      console.log('Data updated succussfully...:',items)
      this.getItems()
    })
    this.toogleEditForm=!this.toogleEditForm;
  }



  updateItemCheckBox(item){
    console.log(item);
    item.itemBought=!item.itemBought;
    console.log(item);
    this.dataService.updateShoppingItems(item._id,item).subscribe(items=>{
      console.log('Checkbox updated succussfully...:',items)
      this.getItems()
    })
  }
}
