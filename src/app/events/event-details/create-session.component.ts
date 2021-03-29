import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EventService, ISession, restrictedWords } from '../shared/index';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {

  name:FormControl;
  presenter:FormControl;
  duration:FormControl;
  level:FormControl;
  abstract:FormControl;

  newSessionForm:FormGroup;

  @Output() saveNewSession = new EventEmitter();
  @Output() cancelAddSession = new EventEmitter();


  constructor() { }

  ngOnInit() {
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), restrictedWords(['foo', 'bar'])]);

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
    })
  }

  saveSession(formValues){
    let session:ISession = {
      id:undefined,
      name:formValues.name,
      duration:+formValues.duration,
      level:formValues.level,
      abstract:formValues.abstract,
      presenter:formValues.presenter,
      voters: []
    }

    this.saveNewSession.emit(session)
  }

  cancel(){
    this.cancelAddSession.emit();
  }
}
