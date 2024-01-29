import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ipost } from '../../models/post';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {

  @Input() postObj !:Ipost;
  @Output() editObj:EventEmitter<Ipost>=new EventEmitter<Ipost>();
  constructor() { }
  ngOnInit(): void {

  }
  onEdit(){
    console.log(this.postObj);
    this.editObj.emit(this.postObj)
  }

}
