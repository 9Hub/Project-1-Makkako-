import { FormBuilder, FormGroup } from '@angular/forms';

class PostPricionerService{
    public form: FormGroup;
    constructor(private formBuilder: FormBuilder) {}
    public ngOnInit() {
        this.form = this.formBuilder.group({});
    }


}