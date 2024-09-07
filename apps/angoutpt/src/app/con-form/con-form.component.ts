import { Component ,EventEmitter,Input, OnInit, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import {ReactiveFormsModule} from '@angular/forms';
import {FormGroup, FormControl,Validators} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';


@Component({
  selector: 'app-con-form',
  standalone: true,
  imports: [CommonModule,ButtonModule,ReactiveFormsModule,InputTextModule,InputTextareaModule],
  templateUrl: './con-form.component.html',
  styleUrl: './con-form.component.css',
})
export class ConFormComponent implements OnInit{
  
  @Input({required:true}) formtitle = "Con Form";
  @Output() formdata = new EventEmitter<{ firstName: string | null; lastName: string | null; msg: string | null }>();  // Output event emitter with the correct type
  conform = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    msg: new FormControl('', Validators.required)
  });
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log("output ininted init");
  }
  onsubmit(){
     if (this.conform.valid) {
      this.formdata.emit(this.conform.getRawValue());
    }
  }

}
