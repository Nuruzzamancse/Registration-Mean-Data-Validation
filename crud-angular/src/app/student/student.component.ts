import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { DataService } from '../data.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  providers: [DataService]
})
export class StudentComponent implements OnInit {

  shoppingItemList: Item[] = [];

  selectedItem: Item;

  toggleForm: boolean = false;

  registerForm: boolean = false;

  adminForm: boolean = false;

  constructor(private dataService: DataService) { }

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

      showRegisterForm(){
        this.registerForm = true;
        this.adminForm = false;
      }

      showAdminForm(){
        this.registerForm = false;
        this.adminForm = true;
      }

}
