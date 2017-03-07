import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  myList = [
    {
      id: 1,
      text : 'eran'
    },
    {
      id: 2,
    },
    {
      id: 3,
      text : 'yael'
    },
    {
      id: 4,
      text : 'hadad'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
