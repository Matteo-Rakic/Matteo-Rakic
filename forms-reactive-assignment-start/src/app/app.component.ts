import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  pForm: FormGroup;
  submitted = false; 

  // defaultStauts = "default value"; this is only with TD approach

  ngOnInit() {
    this.pForm = new FormGroup({
      "name": new FormControl(
        null, 
        [
          Validators.required, 
          CustomValidators.invalidProjectName, 
          CustomValidators.asyncInvalidProjectName/*, this.forbiddenNames.bind(this)*/
        ]),
      "email": new FormControl(
        null, 
        [
          Validators.required, 
          Validators.email
        ]),
      "projectStatus": new FormControl("stable")
    });

    this.pForm.statusChanges.subscribe(
      (status) => console.log(status)
    );
  }

  onCreate() {
    console.log(this.pForm.value);
    this.submitted = true;
  }

  onReset() {
    this.pForm.reset();
    this.submitted = false;
  }

  // forbiddenNames(control: FormControl): {[s: string]: boolean} {
  //   let val: string = control.value;
  //   val = val.toLowerCase();
  //   if (val.indexOf("test") > -1) {
  //     return({"nameIsForbidden": true});
  //   }  
  //   return(null);
  // }

  /*forbiddenNames(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve) => {
      setTimeout(() => {
        if (!control.value === null) {
          let val: string = control.value;
          val = val.toLowerCase();
          if (val.indexOf("test") > -1) {
            resolve({"nameIsForbidden": true});
          } else {
            resolve(null)
          }
        } else {
          resolve(null)
        }
      },1500);
    });
    return promise;
  }*/

  // forbiddenNames(control: FormControl): Promise<any> | Observable<any> {
  //   const promise = new Promise<any>((resolve) => {
  //     setTimeout(() => {
  //       if (control.value === "test") {
  //         resolve({"nameIsForbidden": true});
  //       } else {
  //         resolve(null)
  //       }
  //     },1500);
  //   });
  //   return promise;
  // }
}
