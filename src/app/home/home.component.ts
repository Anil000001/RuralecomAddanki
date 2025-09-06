import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  http = inject(HttpClient);
  fb = inject(FormBuilder);

  otpform = this.fb.group({
    usermobilenumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]]
  });

  onSubmit() {
    if (this.otpform.valid) {
      this.http.post('http://localhost:5072/api/Auth', this.otpform.value)
        .subscribe(res => console.log(res));
    }
  }
}

