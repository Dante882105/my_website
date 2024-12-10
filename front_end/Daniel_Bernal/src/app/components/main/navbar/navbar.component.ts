import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit{
  @ViewChild('menu', {static:false}) menu!: ElementRef;


  constructor(private renderer2: Renderer2){

  };

  ngAfterViewInit(): void {
    
  };

  show_hide():void{
    const Menu = this.menu.nativeElement;
    console.log(Menu.class)
    if(Menu.className === "col-10 d-sm-none z-2 menu_show"){
      this.renderer2.removeClass(Menu, 'menu_show');
      this.renderer2.addClass(Menu, 'menu_hide');
    }else if(Menu.className === "col-10 d-sm-none z-2 menu_hide"){
      this.renderer2.removeClass(Menu, 'menu_hide');
      this.renderer2.addClass(Menu, 'menu_show');
    };    
  };



}
