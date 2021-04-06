import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from '../common/toastr.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm:FormGroup;
  private firstName:FormControl;
  private lastName:FormControl;

  constructor(private auth:AuthService, private router:Router, private toastrService: ToastrService) { }

  ngOnInit() {
    this.firstName = new FormControl(this.auth.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z]*')]);
    this.lastName = new FormControl(this.auth.currentUser.lastName, Validators.required);
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    })
  }

  cancel(){
    this.router.navigate(['events']);
  }

  logout(){
    this.auth.logout().subscribe( () => {
      this.router.navigate(['/user/login']);
    });
  }

  saveProfile(formValues){
    if(this.profileForm.valid){
      this.auth.updateCurrentUser(formValues.firstName, formValues.lastName)
      .subscribe(()=>{
        this.toastrService.success('Profile Saved');
      });
    }
  }

  validateFirstName():boolean{
    return this.firstName.valid || this.firstName.untouched;
  }

  validateLastName():boolean{
    return this.lastName.valid || this.lastName.untouched;
  }
  
}
