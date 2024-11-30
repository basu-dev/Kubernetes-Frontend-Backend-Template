import { Component, inject, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
    selector: 'app-user-form',
    imports: [ReactiveFormsModule],
    templateUrl: './user-form.component.html',
    styleUrl: './user-form.component.scss'
})
export class UserFormComponent {

  onSubmit = output<typeof this.form>();

  fb = inject(FormBuilder);

  form = this.fb.group({
    name: ["",Validators.required],
    email: ["",Validators.required]
  });

}
