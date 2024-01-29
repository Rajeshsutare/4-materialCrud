import { Component, Inject, OnInit } from '@angular/core';
import { Ipost } from '../../models/post';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PostService } from '../../services/post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  public postForm !:FormGroup;
  public idArray:Array<number>=[1,2,3,4,5,6,7,8,9]
  isInEditMode :boolean=false;
  getEditId!:Ipost;
  constructor(
    private _postService:PostService,
    private _routes:ActivatedRoute,
    private _router:Router,
    @Inject(MAT_DIALOG_DATA) getEditPost : Ipost,
    private _dialogRef:MatDialogRef<PostFormComponent>) 
    {
      console.log(`Get Edit post Data`,getEditPost);
      
      this.cretaePostForm();
     if(getEditPost){
      this.getEditId=getEditPost;
      this.postForm.patchValue(getEditPost);
      this.isInEditMode=true;
     }
    }


  ngOnInit(): void {
 

  }

  cretaePostForm(){
    this.postForm = new FormGroup({
      title: new FormControl(null,[Validators.required]),
      content: new FormControl(null,[Validators.required]),
      userId: new FormControl(null,[Validators.required]),
    })
  }

  onCloseDilog(){
    this._dialogRef.close()
  }

  onPOstFormSubmit(){
    if(this.postForm.valid){
      let posts = this.postForm.value;
      console.log(posts);
      this._postService.createSinglePost(posts)
        .subscribe(res=>{
          console.log(res);
          this._postService.sendPostObj(posts)
          this._dialogRef.close()
        })
    }
  }

  onUpdatePost(){
    let postObj:Ipost={...this.postForm.value, id:this.getEditId }
    console.log(postObj);
   this._postService.updatePOstObj(postObj)
    .subscribe(res=>{
      console.log(res);
      this._postService.sendupdatePost(postObj)
      this._dialogRef.close()
    })
    
  }

}
