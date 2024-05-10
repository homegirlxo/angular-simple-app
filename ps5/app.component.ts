import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  searchForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      searchTerm: ['', [Validators.required, Validators.minLength(2)]] // Using Validators.minLength(2) to ensure input is longer than 1 character
    });
  }

  onSubmit(): void {
    if (this.searchForm.valid) {
      const searchTerm = this.searchForm.get('searchTerm').value;
      // Call a method to handle query submission with searchTerm
      console.log('Query submitted with search term:', searchTerm);
    }
  }
}