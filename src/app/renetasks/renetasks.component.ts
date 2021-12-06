import { Component, OnInit } from '@angular/core';
import { RenetasksService } from '../renetasks.service';

@Component({
  selector: 'app-renetasks',
  templateUrl: './renetasks.component.html',
  styleUrls: ['./renetasks.component.css']
})
export class RenetasksComponent implements OnInit {
  constructor(public tarefas: RenetasksService) {}

  ngOnInit() {}
}
