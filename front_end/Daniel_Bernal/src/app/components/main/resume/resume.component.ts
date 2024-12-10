import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Data } from 'src/app/models/model_skills';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements AfterViewInit {
  @ViewChild('skill',{ static: false }) status!: ElementRef;
  @ViewChild('lenguages', {static:false}) lenguages!: ElementRef;
  public Data:any = Data;

  constructor( private render2: Renderer2){

  };

  ngAfterViewInit(): void {
    this.prueba();
  };

  prueba(){
    for (let i = 0; i < this.Data.develop_skills.length; i++) {
      const Div = this.render2.createElement('div');
      this.render2.addClass(Div, 'mb-2');
      this.render2.addClass(Div, 'd-flex');
      this.render2.addClass(Div, 'flex-row');
      this.render2.addClass(Div, 'align-items-center');
      this.render2.addClass(Div, 'justify-content-center');

      let logoDiv = this.render2.createElement('div');
      this.render2.addClass(logoDiv, 'logo');

      let img = this.render2.createElement('img');
      this.render2.setAttribute(img, 'src', this.Data.develop_skills[i].url);
      this.render2.addClass(img, 'img-fluid');

      this.render2.appendChild(logoDiv, img);
      this.render2.appendChild(Div, logoDiv);
      
      let progressContainer = this.render2.createElement('div');
      this.render2.addClass(progressContainer, 'ms-2');
      this.render2.addClass(progressContainer, 'd-flex');
      this.render2.addClass(progressContainer, 'align-items-center');
      this.render2.addClass(progressContainer, 'justify-content-start');
      this.render2.addClass(progressContainer, 'col-10');

      let statusDiv = this.render2.createElement('div');
      this.render2.addClass(statusDiv, 'col-4');
      let statusText = this.render2.createElement('small');
      const Text = this.render2.createText(this.Data.develop_skills[i].status);
      this.render2.appendChild(statusText, Text);
      this.render2.addClass(statusText, 'text-fourth');
      this.render2.appendChild(statusDiv, statusText);
      this.render2.appendChild(progressContainer, statusDiv);

      let progressDiv = this.render2.createElement('div');
      this.render2.addClass(progressDiv, 'progress');
      this.render2.addClass(progressDiv, 'col-8');
      this.render2.addClass(progressDiv, 'bg-primary');
      this.render2.setStyle(progressDiv, 'height', '5px');
      this.render2.setAttribute(progressDiv, 'role', 'progressbar');
      this.render2.setAttribute(progressDiv, 'aria-valuemin', '0');
      this.render2.setAttribute(progressDiv, 'aria-valuemax', '100');

      let progressBar = this.render2.createElement('div');
      this.render2.addClass(progressBar, 'progress-bar');
      this.render2.addClass(progressBar, 'bg-tertiary');
      this.render2.setStyle(progressBar, 'width', `0%`);

      this.render2.appendChild(progressDiv, progressBar);
      this.render2.appendChild(progressContainer, progressDiv);

      this.render2.appendChild(Div, progressContainer);

      // Adjuntar todo al contenedor padre
      this.render2.appendChild(this.status.nativeElement, Div);
      setTimeout(() => {
        this.render2.setStyle(progressBar, 'width', `${this.Data.develop_skills[i].percent}%`);
      }, 2000);
    };

    for (let i = 0; i < this.Data.lenguages.length; i++) {
      const Div = this.render2.createElement('div');
      this.render2.addClass(Div, 'mb-2');
      this.render2.addClass(Div, 'd-flex');
      this.render2.addClass(Div, 'flex-row');
      this.render2.addClass(Div, 'align-items-center');
      this.render2.addClass(Div, 'justify-content-center');

      let logoDiv = this.render2.createElement('div');
      this.render2.addClass(logoDiv, 'logo');

      let img = this.render2.createElement('img');
      this.render2.setAttribute(img, 'src', this.Data.lenguages[i].url);
      this.render2.addClass(img, 'img-fluid');

      this.render2.appendChild(logoDiv, img);
      this.render2.appendChild(Div, logoDiv);
      
      let progressContainer = this.render2.createElement('div');
      this.render2.addClass(progressContainer, 'ms-2');
      this.render2.addClass(progressContainer, 'd-flex');
      this.render2.addClass(progressContainer, 'align-items-center');
      this.render2.addClass(progressContainer, 'justify-content-start');
      this.render2.addClass(progressContainer, 'col-10');

      let statusDiv = this.render2.createElement('div');
      this.render2.addClass(statusDiv, 'col-4');
      let statusText = this.render2.createElement('small');
      const Text = this.render2.createText(this.Data.lenguages[i].level);
      this.render2.appendChild(statusText, Text);
      this.render2.addClass(statusText, 'text-fourth');
      this.render2.appendChild(statusDiv, statusText);
      this.render2.appendChild(progressContainer, statusDiv);

      let progressDiv = this.render2.createElement('div');
      this.render2.addClass(progressDiv, 'progress');
      this.render2.addClass(progressDiv, 'col-8');
      this.render2.addClass(progressDiv, 'bg-primary');
      this.render2.setStyle(progressDiv, 'height', '5px');
      this.render2.setAttribute(progressDiv, 'role', 'progressbar');
      this.render2.setAttribute(progressDiv, 'aria-valuemin', '0');
      this.render2.setAttribute(progressDiv, 'aria-valuemax', '100');

      let progressBar = this.render2.createElement('div');
      this.render2.addClass(progressBar, 'progress-bar');
      this.render2.addClass(progressBar, 'bg-tertiary');
      this.render2.setStyle(progressBar, 'width', `0%`);

      this.render2.appendChild(progressDiv, progressBar);
      this.render2.appendChild(progressContainer, progressDiv);

      this.render2.appendChild(Div, progressContainer);

      // Adjuntar todo al contenedor padre
      this.render2.appendChild(this.lenguages.nativeElement, Div);
      setTimeout(() => {
        this.render2.setStyle(progressBar, 'width', `${this.Data.lenguages[i].percent}%`);
      }, 1500);
    };
    
  }
}
