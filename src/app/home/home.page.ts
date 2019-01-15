import { Component } from '@angular/core';
import { Insomnia } from '@ionic-native/insomnia/ngx';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
constructor(private insomnia: Insomnia, private nativeAudio: NativeAudio) { }
minutes: number;

start() {
  this.insomnia.keepAwake()
  .then(
    () => console.log('success'),
    () => console.log('error')
  );
  $('.fade').fadeOut();
  $('.content').css('background', 'black');
  console.log(this.minutes);
  const task = setInterval(() => {
    this.minutes--;
    if (this.minutes === 0) {
    this.nativeAudio.preloadSimple('lieb', 'assets/l.mp3');
    this.nativeAudio.play('lieb');
    $('.content').removeAttr('style');
    $('.fade').fadeIn();
    $('#fade').fadeIn();
    this.insomnia.allowSleepAgain()
    .then(
    () => console.log('success'),
    () => console.log('error')
  );
    clearInterval(task);
    }
  }, 60000);
}
}
