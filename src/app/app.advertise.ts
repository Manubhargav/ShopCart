import {Component} from '@angular/core';
@Component({
    selector:'my-advertise',
template:`<h5 style="text-align: center;padding:0px;"><b>CHECK WHAT'S NEW!</b></h5>
                    <div id="myCarousel" class="carousel slide" data-ride="carousel">
                          <!-- Indicators -->
                          <ol class="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>
                            <li data-target="#myCarousel" data-slide-to="2"></li>
                          </ol>

                          <!-- Wrapper for slides -->
                          <div class="carousel-inner">

                            <div class="item active">
                              <img src="https://s-media-cache-ak0.pinimg.com/originals/52/b5/32/52b532c5b2ee13f6ad8b0d71cf7e3906.jpg" alt="Los Angeles" style="width:100%;">
                              <div class="carousel-caption">
                                <h2><b>Timeless Collections</b></h2>
                                <p><b>Upto 12% Off on Selected Brands</b></p>
                              </div>
                            </div>

                            <div class="item">
                              <img src="https://cdn.picodi.com/blogs/es/uploads/2015/11/adidas-botas-de-futbol.jpg" alt="Chicago"  style="width:100%">
                              <div class="carousel-caption">
                                <h2><b>Mens Active & Sports Wear</b></h2>
                                <p><b>25% Off on selected Brands !</b></p>
                              </div>
                            </div>
                          
                            <div class="item">
                              <img src="http://www.pensole.com/wp-content/uploads/2015/12/Web-banner-Levis.jpg" alt="New York"  style="width:100%;">
                              <div class="carousel-caption">
                                <h2><b>Denim Sale</b></h2>
                                <p><b>Flat 40% Off on all brands</b></p>
                              </div>
                            </div>
                        
                          </div>

                          <!-- Left and right controls -->
                          <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                            <span ></span>
                            <span class="sr-only">Previous</span>
                          </a>
                          <a class="right carousel-control" href="#myCarousel" data-slide="next">
                            <span></span>
                            <span class="sr-only">Next</span>
                          </a>
              </div>`
})
export class advertiseComponent{}