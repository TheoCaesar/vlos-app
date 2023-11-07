import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Faq } from 'src/app/interfaces/faq';
// import {MatTabsModule} from '@angular/material/tabs';


@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})

export class FaqComponent {
  orange:string = "var(--solv-orange)";
  editIcon:string = './../../../../assets/icons/dashboard/edit.svg';
  deleteIcon:string = './../../../../assets/icons/dashboard/delete.svg';

  constructor (private dataService: DataService){}

  isAnchorTab = true;
  isDealerTab = false;

  switchtoAnchorTab() {
    this.isAnchorTab = true;
    this.isDealerTab = false;
 }

  switchtoDealerTab() {
    this.isAnchorTab = false;
    this.isDealerTab = true;
  }

  anchorFAQs = this.dataService.anchorFAQ;
  dealerFAQs = this.dataService.dealerFAQ;

  queriedAnchorFAQs:Faq[] = this.filterObjectsByCategory(this.anchorFAQs, 'general');
  queriedDealerFAQs:Faq[] = this.filterObjectsByCategory(this.dealerFAQs, 'general');

  faqCategory:string = 'general';



  onCategoryChange(event:Event, faqObjects?:Faq[]){
    const selectElement = event.target as HTMLSelectElement;
    const selectedCategory = selectElement.value;
    console.log(selectedCategory)

    this.queriedAnchorFAQs = this.filterObjectsByCategory(this.anchorFAQs, selectedCategory);
    this.faqCategory = selectedCategory;

    if (this.queriedAnchorFAQs.length < 1) {
      this.queriedAnchorFAQs = this.filterObjectsByCategory(this.anchorFAQs, "general");
      this.faqCategory = "general";
    }
    // console.log(this.anchorFAQs)
  };

   filterObjectsByCategory(objects: Faq[], categoryToFilter: string): Faq[] {
      return objects.filter((obj) => obj.category.toLowerCase() === categoryToFilter.toLowerCase());
  }
}
