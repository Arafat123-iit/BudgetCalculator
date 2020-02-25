import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import {NgForm} from '@angular/forms';
import { BudgetItem } from '../shared/budget-item.model';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.css']
})
export class AddItemFormComponent implements OnInit {


  isNewItem: boolean;
  @Input() item: BudgetItem;
  @Output() formSubmit: EventEmitter<BudgetItem>=new EventEmitter<BudgetItem>(); 
  constructor() { }

  ngOnInit(): void {

    if(this.item){
      this.isNewItem=false;
    }
    else{
      this.isNewItem=true;
      this.item=new BudgetItem('',null);
    }
  }

  onSubmit(form: NgForm){
    this.formSubmit.emit(form.value);
    form.reset();
  }

}
