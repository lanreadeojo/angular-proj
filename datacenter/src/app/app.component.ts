import { Component , ViewChild,ViewContainerRef,ComponentRef} from '@angular/core';
import { DashboardComponent} from './dashboard/dashboard.component';
import {AlertComponent} from './alert/alert.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
 
})
export class AppComponent {
  title = 'datacenter';
  alertRef ?: ComponentRef<AlertComponent> 
  @ViewChild(DashboardComponent) dashboard : DashboardComponent = new DashboardComponent();
  @ViewChild('alertBox', {read : ViewContainerRef}) alertBox ?: ViewContainerRef;
  
  alert(date : any){
    if(!this.alertRef){
      this.alertRef = this.alertBox?.createComponent(AlertComponent);
    }
    else if(this.alertRef){
    this.alertRef.instance.date = date;
    this.alertRef.changeDetectorRef.detectChanges();

    setTimeout(()=>this.destroyAlert(), 5000)
    }
  }
    
  destroyAlert(){
      if(this.alertRef){
      this.alertRef.destroy();
      delete this.alertRef;
      }
    }

  
  refresh(){
    this.dashboard.generateData();
  }
}
