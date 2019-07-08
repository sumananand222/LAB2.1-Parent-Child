import { Component } from '@angular/core';

@Component({
    selector: 'add-emp',
    templateUrl: 'app.addemp.html'
})

export class AddEmployeeComponent {

    empId:number;
    empName:string;
    empSal:number;
    empDep:string;
    status:boolean=false;
    empAll:any[]=[];
/*empAll:String="String Text";
    */

    addEmployee():any{
        this.status=true;
        this.empAll.push({empId:this.empId,empName:this.empName,empSal:this.empSal,empDep:this.empDep});
      }
 }