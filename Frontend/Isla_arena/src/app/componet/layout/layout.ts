import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterLink,CommonModule],
  templateUrl: './layout.html',
  styleUrls: ['./layout.css']
 
})
export class Layout {
  currentIndex = 0;
  totalSlides = 4;
  private intervalId: any;


   mostrarCarrusel = true;
  
  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000); // Cambia cada 5 segundos
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
    this.updateCarousel();
  }

  updateCarousel() {
    const carouselInner = document.querySelector('.carrusel-inner') as HTMLElement;
    if (carouselInner) {
      carouselInner.style.transform = `translateX(-${this.currentIndex * 100}%)`;
    }
  }  
}

