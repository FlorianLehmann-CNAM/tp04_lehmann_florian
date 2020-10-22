import { Component, EventEmitter,  Input,  OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  @Input() dataToFilter : Observable<Product[]>;
  @Output() onFilteredData : EventEmitter<Product[]>

  constructor() {
    this.onFilteredData = new EventEmitter<Product[]>();

  }

  ngOnInit() {
  }

  onKey(event : any) : void{
    this.dataToFilter.pipe(
      map((products : Product[]) => products.filter((p) => p.title.toLowerCase().includes(event.target.value.toLowerCase())))
    ).subscribe((values) => this.onFilteredData.emit(values));
    
  }

}