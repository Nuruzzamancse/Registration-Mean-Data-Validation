import { Component } from "@angular/core";
import { DataService } from "../data.service";
import { Router } from '@angular/router';

@Component({
    templateUrl: './login.component.html'
})
export class LoginComponent {
    constructor(private dataService: DataService, private router: Router) {}

    editItem(form){

         let itemName = form.value.email;

         console.log(itemName);

         let itemQuantity = form.value.password;

         console.log(itemQuantity);

         let email = itemName,
            password = itemQuantity;

        const myObj = {
            email: email,
            password: password
        };

        this.dataService.checkAuth(myObj).subscribe((data) => {
            console.log(data);
            if (data.success) {
                this.router.navigate(['dashboard']);
            } else {

            }
        });
          
     
      }
}