import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.scss']
})
export class PagingComponent implements OnInit {

  @Input() itemsPerPage : number;
  @Input() totalItemsCount : number;
  @Output() E_pageChanged = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  OnPagingChange(event:any){
  this.E_pageChanged.emit(event.page);
}

}
