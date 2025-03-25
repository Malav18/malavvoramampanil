import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import emailjs from '@emailjs/browser';
import { RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  userForm: FormGroup;
  isLoading: boolean = false;  // Control the loading spinner visibility

  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.userForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      mobileNo: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      district: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      description: [''],
      companyName: [''],
    });
  }

  openModal(content: any) {
    this.modalService.open(content, { centered: true, size: 'lg' });
  }

  sendEmail(modal: any) {
    if (this.userForm.invalid) {
      return;
    }

    this.isLoading = true;  // Show the loader

    const formData = {
      fullName: this.userForm.value.fullName,
      mobileNo: this.userForm.value.mobileNo,
      district: this.userForm.value.district,
      email: this.userForm.value.email,
      description: this.userForm.value.description == '' ? null : this.userForm.value.description,
      companyName: this.userForm.value.companyName == '' ? null : this.userForm.value.companyName,
    };

    emailjs
      .send('service_a2ndmup', 'template_vpqkaue', formData, '2-Rls7QmqI9DZ8w8y')
      .then(
        (response) => {
          this.toastr.success('Email sent successfully!');
          modal.close();
          this.userForm.reset();
          this.isLoading = false; 
        },
        (error) => {
          this.toastr.error('Failed to send email: ' + error.text);
          this.isLoading = false; 
        }
      );
  }

  // Helper function to check if the field is invalid
  isFieldInvalid(field: string): any {
    const control = this.userForm.get(field);
    return control?.invalid && (control?.touched || control?.dirty);
  }
}
