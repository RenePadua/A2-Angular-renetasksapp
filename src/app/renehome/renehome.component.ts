import { Component, OnInit } from '@angular/core';
import { RenetasksService } from '../renetasks.service';

@Component({
  selector: 'app-renehome',
  templateUrl: './renehome.component.html',
  styleUrls: ['./renehome.component.css']
})
export class RenehomeComponent implements OnInit {

  constructor(public tarefas: RenetasksService) {}

  ngOnInit() {
  }

}