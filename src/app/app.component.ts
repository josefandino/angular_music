import { Component , Directive, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angular-audio';

  @ViewChild('audio') audioPlayerRef: ElementRef;
  @ViewChild('play') playElement: ElementRef;

  url: any = 'http://node-25.zeno.fm/tgczfuhzfm8uv?rj-ttl=5&amp;rj-tok=AAABebUVqIoAWr5WY7xEeCGvRw';

  onAudioPlay(){
    if (this.audioPlayerRef.nativeElement.paused || this.audioPlayerRef.nativeElement.ended) {
      this.playElement.nativeElement.querySelector(".pause-btn").classList.toggle("hide");
      this.playElement.nativeElement.querySelector(".play-btn").classList.toggle("hide");
      this.audioPlayerRef.nativeElement.play();
    }else {
      this.audioPlayerRef.nativeElement.pause();
      this.playElement.nativeElement.querySelector(".pause-btn").classList.toggle("hide");
      this.playElement.nativeElement.querySelector(".play-btn").classList.toggle("hide");
    }
  }
}
