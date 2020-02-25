import { Component, OnInit } from '@angular/core';
import { BudgetItem } from '../shared/budget-item.model';
import { UpdateEvent } from '../budget-item-list/budget-item-list.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {


  totalBudget: number=0;
  budgetItems: BudgetItem []=new Array<BudgetItem>();
  constructor() { }

  ngOnInit(): void {
  }

  addItem(newItem: BudgetItem){
    this.budgetItems.push(newItem);
    this.totalBudget+= newItem.Amount;

  }

  deleteItem(item: BudgetItem){
    
    let index=this.budgetItems.indexOf(item);
    this.budgetItems.splice(index,1);
    this.totalBudget-= item.Amount;
  }
  updateItem(updateEvent: UpdateEvent){

    this.budgetItems[this.budgetItems.indexOf(updateEvent.old)]=updateEvent.new;
    this.totalBudget-=updateEvent.old.Amount;
    this.totalBudget+=updateEvent.new.Amount;

  }

}
