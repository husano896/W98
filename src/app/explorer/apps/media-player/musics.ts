interface IMusic {
  path: string;
  name?: string;
  jacket?: string;
}

export const Musics: IMusic[] = [{
  path: './assets/music/ryu_kazauta.mp3',
  name: '命ゆくもの、ほしに来るもの',
  jacket: './assets/kaze/bg_home.jpg'
},
{
  path: './assets/music/spring.mp3',
  name: '春の向日葵',
  jacket: './assets/kaze/bg_welcome.jpg'
},
{
  path: './assets/music/calm.mp3',
  name: '春の息吹',
  jacket: './assets/kaze/bg_home.jpg'
},
{
  path: './assets/music/question.mp3',
  name: 'question.mp3',
  jacket: './assets/kaze/bg_ryu.jpg'
},
{
  path: './assets/music/midnight.mp3',
  name: '蒼い夜半',
  jacket: './assets/kaze/bg_home.jpg'
},
{
  path: './assets/music/sakura.mp3',
  name: '桜舞風',
  jacket: './assets/kaze/bg_godend.jpg'
},
{
  path: './assets/music/victim.mp3',
  name: '......',
  jacket: './assets/kaze/bg_badend.jpg'
}];
