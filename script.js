const music = new Audio('audio/1.mp3');
// music.play();

const songs = [
    {
        id: 1,
        songName: `Agar Tum Saath Ho<br>
        <div class="subtitle">Alka Yagnik , Arijit Singh</div>`,
        poster: "img/1.jpg"
    },
    {
        id: 2,
        songName: `Kesariya<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "img/3.jpg"
    },
    {
        id: 3,
        songName: `Hamari Adhuri Kahani>
        <div class="subtitle">Arijit Singh Jeet Gannguli</div>`,
        poster: "img/4.jpg"
    },
    {
        id: 4,
        songName: `Tera Yaar Hoon Main<br>
        <div class="subtitle"> Arijit Singh</div>`,
        poster: "img/5.jpg"
    },
    {
        id: 5,
        songName: `Ae dil hai mushkil<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "img/6.jpg"
    },
    {
        id: 6,
        songName: `Channa Mereya<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "img/7.jpg"
    },
    {
        id: 7,
        songName: `Tum Hi Ho<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "img/8.jpg"
    },
    {
        id: 8,
        songName: `Apna Bana Le<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "img/2.jpg"
    },
    {
        id: 9,
        songName: `Phir Bhi Tumko Chaahunga<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "img/9.jpg"
    },
    {
        id: 10,
        songName: `Bobhana Se Bobhana<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "img/10.jpg"
    },
    {
        id: 11,
        songName: `Bhalobashar Morshum<br>
        <div class="subtitle">Arijit Singh , Shreya Ghoshal</div>`,
        poster: "img/11.jpg"
    },
    {
        id: 12,
        songName: `Deva Deva<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "img/12.jpg"
    },
    {
        id: 13,
        songName: `Tujh Mein Rab Dikhta Hai<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "img/13.jpg"
    },
    {
        id: 14,
        songName: `Kichhu Kichhu Kotha<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "img/14.jpg"
    },
    {
        id: 15,
        songName: `Ki Kore Toke Bolbo<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "img/15.jpg"
    },
    {
        id: 16,
        songName: `Chaleya<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "img/16.jpg"
    },
    {
        id: 17,
        songName: `Egiye De<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "img/17.jpg"
    },
    {
        id: 18,
        songName: `Sawaar Loon<br>
        <div class="subtitle">Monali Thakur</div>`,
        poster: "img/18.jpg"
    },
    {
        id: 19,
        songName: `Raataan Lambiyan<br>
        <div class="subtitle">Jubin Nautiyal</div>`,
        poster: "img/19.jpg"
    },
    {
        id: 20,
        songName: `Nazm Nazm<br>
        <div class="subtitle">Arkapravo Mukherjee</div>`,
        poster: "img/20.jpg"
    },
    {
        id: 21,
        songName: `Tere sang yaara<br>
        <div class="subtitle">Atis Aslam</div>`,
        poster: "img/21.jpg"
    },
    {
        id: 22,
        songName: `Tomake Chai<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "img/22.jpg"
    },
    {
        id: 23,
        songName: `Bolna<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "img/23.jpg"
    },
    {
        id: 24,
        songName: `Khariyat<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "img/24.jpg"
    },
    {
        id: 25,
        songName: `Jab Tak<br>
        <div class="subtitle">Armaan Malik</div>`,
        poster: "img/25.jpg"
    },
    {
        id: 26,
        songName: `Sab Tera<br>
        <div class="subtitle">Shraddha Kapoor</div>`,
        poster: "img/26.jpg"
    },
    {
        id: 27,
        songName: `Amake Amar Moto Thakte Dao<br>
        <div class="subtitle">Anupam Roy</div>`,
        poster: "img/27.jpg"
    },
    {
        id: 28,
        songName: `Dekha Hazaro Dafa<br>
        <div class="subtitle">Plak Muchhal , Arijit Singh</div>`,
        poster: "img/28.jpg"
    },
    {
        id: 29,
        songName: `Abhi Mujh Mein Kahi<br>
        <div class="subtitle">Sonu Nigam</div>`,
        poster: "img/29.jpg"
    },
    {
        id: 30,
        songName: `Ik Vaari Aa<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "img/30.jpg"
    },
    {
        id: 31,
        songName: `chaka chak<br>
        <div class="subtitle">Shreya Ghoshal</div>`,
        poster: "img/31.jpg"
    },
    {
        id: 32,
        songName: `Tere Vaste<br>
        <div class="Varun Jain, Shadab Faridi, Altamash Faridi</div>`,
        poster: "img/32.jpg"
    },
    {
        id: 33,
        songName: `Param Sundari<br>
        <div class="subtitle">Shreya Ghoshal</div>`,
        poster: "img/33.jpg"
    },
    {
        id: 34,
        songName: `Char Kadam<br>
        <div class="subtitle">shreya ghosal , shaan</div>`,
        poster: "img/34.jpg"
    },
    {
        id: 35,
        songName: `Desi Boys<br>
        <div class="subtitle">KK</div>`,
        poster: "img/35.jpg"
    },
    {
        id: 36,
        songName: `Sooraj Dooba Hain<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "img/36.jpg"
    },
    {
        id: 37,
        songName: `Sri Valli<br>
        <div class="subtitle">sid sriram</div>`,
        poster: "img/37.jpg"
    }
]


let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
});
pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
});

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let item = document.getElementsByClassName('item')[0];

pop_art_right.addEventListener('click', () => {
    item.scrollLeft += 330;
});
pop_art_left.addEventListener('click', () => {
    item.scrollLeft -= 330;
});


Array.from(document.getElementsByClassName('songItem')).forEach((e , i)=>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    // e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})
let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    } else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
});

const makeAllplays = () => {
    Array.from(document.getElementsByClassName('playListplay')).forEach((el) => {
        el.classList.add('bi-play-circle-fil');
        el.classList.remove('bi-pause-circle-fill');
    })
}

const makeAllBackground = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
        el.computedStyleMap.background = 'rgb(105, 105, 105, .0)';
    })
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
Array.from(document.getElementsByClassName('playListplay')).forEach((e)=>{
    e.addEventListener('click', (el)=>{
        index = el.target.id;
        // console.log(index);
        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitles = songs.filter((els) => {
            return els.id == index;
        });

        songTitles.forEach(elss => {
            let {songName} = elss;
            title.innerHTML = songName;
        });
        makeAllBackground();
        // Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background="rgb(105, 105, 105, .1)";
        
// play-pause symbol chage hoche na,not done
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fil');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
    });
})
let current_time = document.getElementById('current_time');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', ()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);

    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;
    
    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);
    if (sec2 < 10) {
        sec2 = `0${sec2}`;
    }
    current_time.innerText = `${min2}:${sec2}`;

// timing er pointer ta egoy na , not done 
    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
})
seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration / 100;
});

vol_icon = document.getElementById('vol_icon');
vol = document.getElementById('vol');
vol_bar = document.getElementsByClassName('vol_bar')[0];
vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change', () => {
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
});
