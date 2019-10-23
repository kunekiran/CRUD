import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
@Injectable({
  providedIn: 'root'
})
export class DbserviceService {

  constructor(public ht:HttpClient) { }
  serGetData(){
    return this.ht.get("http://localhost:1000/getdata")
  }

  serInsData(ob){
    return this.ht.post("http://localhost:1000/insdata",ob)
  }
  serDelAll(){
    return this.ht.delete("http://localhost:1000/delallrec")
  }
  serDelOneRow(obj)
  {
    return this.ht.post("http://localhost:1000/delonerow",obj)
  }
  serUpdateRec(obj){
    return this.ht.post("http://localhost:1000/updaterec",obj)

  }
}
