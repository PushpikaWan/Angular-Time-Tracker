import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";

@Injectable()
export class MyToastService{
    
    constructor(private toastr: ToastrService){
    }

    showSuccess(msg: string, title: string =''){
        this.toastr.success(title,msg);
    }

    showDanger(msg: string, title: string =''){
        this.toastr.error(title,msg);
    }

    showWarning(msg: string, title: string =''){
        this.toastr.warning(title,msg);
    }

    showInfo(msg: string, title: string =''){
        this.toastr.info(title,msg);
    }
}