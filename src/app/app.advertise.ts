import {Component} from '@angular/core';
@Component({
    selector:'my-advertise',
template:`<h5 style="text-align: center;padding:0px;"><b>CHECK WHAT'S NEW!</b></h5>
                          
    <div class="carousel" style="margin-top:10px;">
    <div class="carousel-inner">
        <input class="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" checked="checked">
        <div class="carousel-item">
            <img src="https://s-media-cache-ak0.pinimg.com/originals/52/b5/32/52b532c5b2ee13f6ad8b0d71cf7e3906.jpg">
        </div>
        <input class="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="">
        <div class="carousel-item">
            <img src="https://cdn.picodi.com/blogs/es/uploads/2015/11/adidas-botas-de-futbol.jpg">
        </div>
        <input class="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden="">
        <div class="carousel-item">
            <img src="http://www.pensole.com/wp-content/uploads/2015/12/Web-banner-Levis.jpg">
        </div>
        <label for="carousel-3" class="carousel-control prev control-1">‹</label>
        <label for="carousel-2" class="carousel-control next control-1">›</label>
        <label for="carousel-1" class="carousel-control prev control-2">‹</label>
        <label for="carousel-3" class="carousel-control next control-2">›</label>
        <label for="carousel-2" class="carousel-control prev control-3">‹</label>
        <label for="carousel-1" class="carousel-control next control-3">›</label>
        <ol class="carousel-indicators">
            <li>
                <label for="carousel-1" class="carousel-bullet">•</label>
            </li>
            <li>
                <label for="carousel-2" class="carousel-bullet">•</label>
            </li>
            <li>
                <label for="carousel-3" class="carousel-bullet">•</label>
            </li>
        </ol>
    </div>
</div>
              `
})
export class advertiseComponent{}
