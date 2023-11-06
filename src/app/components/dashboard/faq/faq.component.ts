import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Faq } from 'src/app/interfaces/faq';


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


  anchorFAQs = this.dataService.anchorFAQ;
  dealerFAQs = this.dataService.dealerFAQ;

  queriedFAQs:Faq[] = this.filterObjectsByCategory(this.anchorFAQs, 'general');
  faqCategory:string = 'general';



  onCategoryChange(event:Event, faqObjects?:Faq[]){
    const selectElement = event.target as HTMLSelectElement;
    const selectedCategory = selectElement.value;
    console.log(selectedCategory)
    // Call your fetchFAQs method with the selected category
    // this.fetchFAQs(selectedCategory);
    this.queriedFAQs = this.filterObjectsByCategory(this.anchorFAQs, selectedCategory);
    this.faqCategory = selectedCategory;

    if (this.queriedFAQs.length < 1) {
      this.queriedFAQs = this.filterObjectsByCategory(this.anchorFAQs, "general");
      this.faqCategory = "general";
    }
    // console.log(this.anchorFAQs)
  };

   filterObjectsByCategory(objects: Faq[], categoryToFilter: string): Faq[] {
      return objects.filter((obj) => obj.category.toLowerCase() === categoryToFilter.toLowerCase());
  }
}
