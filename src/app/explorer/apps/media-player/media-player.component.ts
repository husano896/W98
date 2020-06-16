import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AppBase } from '../AppBase';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.scss']
})
export class MediaPlayerComponent extends AppBase implements OnInit {
  public static appName = 'Media Player';
  public static icon = 'shell32-199'; // 'settings';
  public static description = '播放的那個三角形';
  public static iconSet = 'shell32';

  @ViewChild('audioPlayer', {static: false}) audioPlayer: ElementRef;
  musics = [{
    path: './assets/music/spring.ogg',
    name: '春の息吹.ogg',
  }, {
    path: './assets/music/midnight.ogg',
    name: '蒼い夜半.ogg',
  }, {
    path: './assets/music/sakura.ogg',
    name: '桜舞風.ogg',
  }];
  selectedIndex: number;
  constructor() { super(); }

  ngOnInit(): void {
  }

  selectAudio(music, index) {
    this.selectedIndex = index;
    console.log(this.selectedIndex, music, this.audioPlayer);

    const elem = (this.audioPlayer.nativeElement as HTMLAudioElement);
    elem.src = this.musics[this.selectedIndex].path;
    elem.play();
  }
}
