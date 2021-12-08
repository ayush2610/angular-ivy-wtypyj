import { Component } from '@angular/core';

interface Option2 {
  text: string;
  isCorrect: boolean;
  marks: number;
  hasUserSelected: boolean;
}

interface Question2 {
  statement: string;
  options: Option2[];
}

@Component({
  selector: 'test2', // custom HTML Tag

  styles: [
    `
    .wrong { 
      font-size: 8pt ;
      color: red ; 
    }

    .correct { 
      font-size: 8pt ;
      color: green ; 
    }

    .nomarks { 
      font-size: 8pt ;
      color: black ; 
    }
    `,
  ],

  template: `
  <div class="row">
  
    <ng-container>
      <div class="col-12" *ngFor="let question of questions">

        <div class="card mt-2 mb-2">

          <div class="card-header">
            {{question.statement}}
          </div>

          <div class="card-body" *ngFor="let option of question.options">
            <label>
              <input type="checkbox" [(ngModel)]="option.hasUserSelected" [disabled]="isTestOver" />
              {{option.text}}
              
              <span *ngIf="isTestOver">
               
                <span *ngIf="option.isCorrect && option.hasUserSelected" class="wrong">
                  Correct: +{{option.marks}}
                </span>

                <span *ngIf="!option.isCorrect && option.hasUserSelected" class="correct">
                  Wrong: -{{option.marks}}
                </span>

                <span *ngIf="!option.hasUserSelected" class="nomarks">
                  No Marks
                </span>

              </span>
              
            </label>
          </div>

        </div>
      </div>
    </ng-container>

    <div class="col-12" *ngIf="!isTestOver">
      <button class="btn btn-primary" (click)="finish()">Finish</button>
    </div>

    <div class="col-12" *ngIf="isTestOver">
      <div class="card">
        <div class="card-header">
          Test Result
        </div>
        <div class="card-body">
          You obtained {{userMarks}} out of {{totalMarks}}.
        </div>
      </div>
    </div>

  </div>
  `,
})
export class Test2Component {
  public isTestOver = false;
  public userMarks = 0;
  public totalMarks = 0;

  public finish(/* this = reference of an object */) {
    this.userMarks = this.totalMarks = 0;

    for (let question of this.questions) {
      for (let option of question.options) {
        if (option.isCorrect && option.hasUserSelected) {
          this.userMarks += option.marks;
        } else if (!option.isCorrect && option.hasUserSelected) {
          this.userMarks -= option.marks;
        }
        if (option.isCorrect) {
          this.totalMarks += option.marks;
        }
      }
    }
    this.isTestOver = true;
  }

  public questions: Question2[] = [
    {
      statement: 'AAA',
      options: [
        { text: 'A1', isCorrect: false, marks: 2, hasUserSelected: false },
        { text: 'A2', isCorrect: true, marks: 3, hasUserSelected: false },
      ],
    },

    {
      statement: 'BBB',
      options: [
        { text: 'B1', isCorrect: false, marks: 2, hasUserSelected: false },
        { text: 'B2', isCorrect: true, marks: 4, hasUserSelected: false },
        { text: 'B3', isCorrect: true, marks: 5, hasUserSelected: false },
      ],
    },
  ];
}
