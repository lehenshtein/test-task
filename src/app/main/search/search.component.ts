import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {SearchService} from '../../search.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Posts} from '../../models/posts.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {
  @Output() sendData = new EventEmitter<Object>();

  form: FormGroup;

  constructor(private searchService: SearchService) { }
  ngOnInit() {
    this.form = new FormGroup({
      search: new FormControl('')
    });
  }

  onSubmit() {
    this.searchService.search(this.form.value.search.toLowerCase())
      .subscribe(
        (data: Posts[]) => {
          this.sendData.emit(data);
        },
        (err: HttpErrorResponse) => {
          alert(err.statusText +  err.status);
        }
      );
  }

}
