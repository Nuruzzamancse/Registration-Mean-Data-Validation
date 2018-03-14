import { Component, OnInit } from "@angular/core";
import { Item } from '../item';
import { DataService } from "../data.service";

@Component({
    templateUrl: './dashboard.component.html',
    styleUrls: [
        './dashboard.component.css'
    ]
})
export class DashboardComponent implements OnInit {
    shoppingItemList: Item[] = [];

    selectedItem: Item;

    toggleForm: boolean = false;

    registerForm: boolean = false;

    adminForm: boolean = false;
    
    constructor(private dataService: DataService) {}
    
    getItems(){
        this.dataService.getShoppingItems()
          .subscribe( items => {
            this.shoppingItemList = items;
            console.log('Data from dataservice: '+this.shoppingItemList[0].itemName);
          })
      }
    
      ngOnInit() {
        this.getItems();
      }
}
