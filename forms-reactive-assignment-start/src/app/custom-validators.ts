import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";

export class CustomValidators {
    // static invalidProjectName(control: FormControl): {[s: string]: boolean} {
    //     let val: string = control.value;

    //     if (val !== null) {
    //         let lower: string = "";
    //         for (let x = 0; x<val.length; x++) {
    //             lower += val[x].toLowerCase();
    //         }

    //         if (lower.includes("test")) { 
    //             return {"invalidProjectName": true}
    //         } else {
    //             return null;
    //         }
    //     } else {
    //         return null;
    //     }
    // } //not asynchronous

    static invalidProjectName(control: FormControl): {[s: string]: boolean} {
        if (control.value === "Test") {
            return {"invalidProjectName": true}
        } 
        return null;
    } //not asynchronous

    // static asyncInvalidProjectName(control: FormControl): Promise<any> | Observable<any> {
    //     const promise = new Promise((resolve, reject) => {
    //         let val: string = control.value;
    //         if (val !== null) {
    //             setTimeout(() => {
    //                 // if (control.value === 'test') {
    //                 //     resolve({'invalidProjectName': true})
    //                 // } else {
    //                 //     resolve(null);
    //                 // }
    //                 if (val !== null) {
    //                     let lower: string = "";
    //                     for (let x = 0; x<val.length; x++) {
    //                         lower += val[x].toLowerCase();
    //                     }

    //                     if (lower.includes("test")) { 
    //                         resolve({"invalidProjectName": true})
    //                     } else {
    //                         resolve(null);
    //                     }
    //                 }
    //             },2000);
    //         } else {
    //             resolve(null);
    //         }
    //     });
    //     return promise;
    // }

    static asyncInvalidProjectName(control: FormControl): Promise<any> | Observable<any> {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === "Testproject") {
                    resolve({"invalidProjectName": true})
                } else {
                    resolve(null);
                }
            }, 2000);
        });
        return promise;
    }
}

/*  NOTES:
    logic of if (val.includes("test")) (executes if true)
    same as this: if (val.indexOf("test") > -1) (executes if true, it will be true if the position returned is 0, which is greater than -1)
*/