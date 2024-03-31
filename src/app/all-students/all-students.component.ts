import { Component } from '@angular/core';
import { AllStudentsService } from '../all-students.service';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css'],
})
export class AllStudentsComponent {
  public term: string = '';
  public order: string = '';
  public column: string = '';
  public pageNo: number = 0;
  public limit: number = 10;
  public allStudents: any = [];

  constructor(private _allStudentsService: AllStudentsService) {
    _allStudentsService.getallstudentdata().subscribe(
      (data: any) => {
        this.allStudents = data;
      },
      (err: any) => {
        alert('error server failed');
      }
    );
  }

  filterStudents() {
    this._allStudentsService.filterStudents(this.term).subscribe(
      (data: any) => {
        this.allStudents = data;
      },
      (err: any) => {
        alert('internal server error');
      }
    );
  }

  onPaginationChange() {
    this._allStudentsService.getallstudentdata1(this.pageNo).subscribe(
      (data: any) => {
        this.allStudents = data;
      },
      (err: any) => {
        alert('internal server error');
      }
    );
  }

  getSortedAllstudents() {
    this._allStudentsService
      .getSortedallstudentsdata(this.column, this.order)
      .subscribe(
        (data: any) => {
          this.allStudents = data;
        },
        (err: any) => {
          alert('created successfully');
        }
      );
  }
  delet(i: string) {
    console.log(i);
    this._allStudentsService.delete(i).subscribe(
      (data: any) => {
        alert('successfully deleted');
        location.reload();
      },
      (err: any) => {
        alert('error');
      }
    );
  }
}
