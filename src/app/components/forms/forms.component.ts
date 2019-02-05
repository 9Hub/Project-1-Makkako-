import { Component, OnInit, createPlatformFactory } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PrisionerService } from '../servicios/prisioner.service';

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
    private fb: FormBuilder
  ) {}


  ngOnInit() {
    this.service.getPrisioner().subscribe(prisioner => {
      console.log(prisioner);
      this.prisioner = prisioner;
    }, error => console.error(error));
    this.createForm();
  }

  createForm() {
    this.prisionerForm = this.fb.group({
      firstName: [''],
      lastName: ['']
    });
  }

  onSubmit() {
    return this;
  }
  
}
