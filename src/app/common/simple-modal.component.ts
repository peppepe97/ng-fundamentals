import { Component, ElementRef, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { $ } from 'protractor';
import { JQ_TOKEN } from './jQuery.service';

@Component({
  selector: 'app-simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.css']
})
export class SimpleModalComponent implements OnInit {

  @Input() title:string;
  @Input() elementId:string;
  @ViewChild('modalContainer') containerEl: ElementRef;
  
  constructor(@Inject(JQ_TOKEN) private $:any) { }

  ngOnInit() {
  }

  closeModal(){
    this.$(this.containerEl.nativeElement).modal('hide');
  }

}
