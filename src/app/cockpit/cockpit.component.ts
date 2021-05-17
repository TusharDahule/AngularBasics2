import { ElementRef, ViewChild } from '@angular/core';
import { Output } from '@angular/core';
import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName:string,serverContent:string}>(); //custom event with event data structure
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName:string,serverContent:string}>(); //custom event with alias name bpCreated

 // newServerName = '';
  // newServerContent = '';
  
  @ViewChild('serverContentInput',{static:true}) serverContentInput : ElementRef; //selects the value of local reference
  constructor() { }

  ngOnInit(): void {
  }
/*   onAddServer() {
    this.serverCreated.emit({ //emits javascript object with event data structure
      serverName: this.newServerName,
      serverContent:this.newServerContent
    }  
    );
  } */
  onAddServer(serverNameInput: HTMLInputElement ) {
    this.serverCreated.emit({ //emits javascript object with event data structure
      serverName:serverNameInput.value, //using local reference
      serverContent:this.serverContentInput.nativeElement.value
    }  
    );
  }
  
  onAddBlueprint(serverNameInput: HTMLInputElement) {
    this.blueprintCreated.emit({ //emits javascript object with event data structure
      serverName: serverNameInput.value,
      serverContent:this.serverContentInput.nativeElement.value
    }  
    );
    
  }

}
