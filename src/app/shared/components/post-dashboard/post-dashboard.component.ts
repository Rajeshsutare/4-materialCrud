import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PostFormComponent } from '../post-form/post-form.component';
import { Ipost } from '../../models/post';

@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.scss']
})
export class PostDashboardComponent implements OnInit {

    postData!:Array<Ipost>;
  constructor(private _postService:PostService,
              private _matdialog:MatDialog
    ) { }

  ngOnInit(): void {
    this._postService.getAllPosts()
    .subscribe(res=>{
      console.log(res);
      this.postData=res;
    })

    this._postService.postObjObs$
      .subscribe(res=>{
        console.log(res);
        this.postData.push(res)
      })

    this._postService.updateObjPost$
      .subscribe(res=>{
        console.log(res);
        this.postData.forEach(obj=>{
          if(obj.id === res.id){
            obj.title=res.title;
            obj.content=res.content;
            obj.userId=res.userId;
            return;
          }
          
        })
      })
  }

  onAddPost(){
  const matConfig = new MatDialogConfig();
  matConfig.disableClose=true;
  const  matdilogRef = this._matdialog.open(PostFormComponent,matConfig)
  }

  onEditObj(editPost:Ipost){
    console.log(editPost);
    this.onAddPost();
    const matConfig = new MatDialogConfig();
  matConfig.disableClose=true;
  matConfig.autoFocus=true;
  matConfig.data=editPost;
  const  matdilogRef = this._matdialog.open(PostFormComponent,matConfig)

  }

}
