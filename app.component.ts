import { Component, Inject } from '@angular/core';
import { DbserviceService } from './dbservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tmpid:number=0
  constructor(@Inject(DbserviceService) private ser){
    this.funget()
  }
  txt1:string="hi";txt2:string="abcd"
  table_data:object;t1:string;t2:string;tmp:boolean=false
  funins(){
    var obj={uname:this.t1,city:this.t2}
    this.ser.serInsData(obj).subscribe(dt=>{
      alert(dt.result)
      this.funget()
      this.t1=this.t2=""
    })
  }
  funget(){
    this.ser.serGetData().subscribe(dt=>{
      this.table_data=dt
      if(dt.length==0)
      this.tmp=false
      else
      this.tmp=true
    })
  }
  fundel(){
    this.ser.serDelAll().subscribe(dt=>{
      alert(dt.result)
      this.funget()
    })
  }
  fundelrow(rowid){
    var rv=window.confirm("You want to delete?")
    if(rv)
    {
      this.ser.serDelOneRow({rid:rowid}).subscribe(dt=>{
        this.funget()
        alert(dt.result)
      })
    }
  }
  funedit(rowobj){
    this.tmpid=rowobj._id
    this.txt1=rowobj.uname
    this.txt2=rowobj.city
  }
  funsave()
  {
    this.ser.serUpdateRec({rid:this.tmpid,un:this.txt1,ct:this.txt2}).subscribe(dt=>{
      alert(dt.result)
      this.funget()
      this.tmpid=0
    })
  }
}
