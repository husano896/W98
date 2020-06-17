import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { AppBase } from '../AppBase';
import { Musics } from './musics';


@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.scss']
})

export class MediaPlayerComponent extends AppBase implements OnInit, OnDestroy {
  public static appName = 'Media Player';
  public static icon = 'shell32-199'; // 'settings';
  public static description = '播放的那個三角形';
  public static iconSet = 'shell32';

  private refreshInterval: NodeJS.Timeout;
  @ViewChild('audioPlayer', { static: false }) audioPlayer: ElementRef;
  @ViewChild('jacket', { static: false }) jacket: ElementRef;
  musics = Musics;
  selectedIndex: number;
  constructor(private changeDectetionRef: ChangeDetectorRef) { super(); }

  ngOnInit(): void {
  }

  ngOnDestroy() {
  }

  selectAudio(index) {

    const elem = (this.audioPlayer.nativeElement as HTMLAudioElement);
    const jacket = (this.jacket.nativeElement as HTMLImageElement);
    jacket.classList.remove('animate__fadeIn');
    this.selectedIndex = index;
    elem.src = this.musics[this.selectedIndex].path;
    elem.play();

    // 封面動畫事件
    setTimeout(() => {
      jacket.classList.add('animate__fadeIn');
    }, 1);

  }

  updateTime() {
    if (!this.audioPlayer) {
      return;
    }
    const elem = (this.audioPlayer.nativeElement as HTMLAudioElement);
    return elem.currentTime || 0;
  }
}
