import { Component, OnInit, createPlatformFactory } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PrisionerService } from '../servicios/prisioner.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})

export class FormsComponent implements OnInit {
  prisioner: any;
  prisionerForm: FormGroup;

  constructor(
    private service:PrisionerService,
    private fb: FormBuilder,
    private router: Router,
  ) {}


  ngOnInit() {
    this.createForm();
    
  }

  createForm() {
    this.prisionerForm = this.fb.group({
      name: [''],
      lastName: [''],
      age:[''],
      ci:[''],
      gende:[''],
      charges:[''],
      background:[''],
      crimePriority:['']
    });
  }

  onSubmit() {
    if(this.prisionerForm.invalid){
      return console.log(this.prisionerForm.value)
    }
    
    this.service.addPricioner(this.prisionerForm.value).subscribe(prisioner => {
      if(this.prisionerForm.invalid){
        console.log("dato invalido");
      }else{
        console.log("add new pricioner!");
      }
    }, error => console.error(error));
  }
}
