// LYRIC INFO
const songList = {
  1: "Somebody said you got a new friend; Does she love you better than I can?; It's a big black sky over my town; I know where you at, I bet she's around; Yeah, I know it's stupid, I just gotta see it for myself; I'm in the corner, watching you kiss her, oh; I'm right over here, why can't you see me? Oh; I'm giving it my all; But I'm not the girl you're taking home, ooh; I keep dancing on my own; (I keep dancing on my own); I'm just gonna dance all night; I'm all messed up, I'm so outta line; Stilettos and broken bottles; I'm spinning around in circles; I'm in the corner, watching you kiss her, ohh; I'm right over here, why can't you see me, ohh; I'm giving it my all; But I'm not the girl you're taking home, ooh; I keep dancing on my own; I keep dancing on my own; So far away, but still so near; (The lights go on, the music dies); But you don't see me standing here; (I just came to say goodbye); I'm in the corner, watching you kiss her, ohh; I'm right over here, why can't you see me, ohh; I'm giving it my all; But I'm not the girl you're taking home, ooo; I keep dancing on my own; I keep dancing on my own; I'm in the corner, watching you kiss her, ohh; I'm right over here, why can't you see me, ohh; I'm giving it my all; But I'm not the girl you're taking home, ooo; I keep dancing on my own; I keep dancing on my own; I keep dancing on my own".split('; '),
  2: "Came in from the city; Walked into the door; I turned around when I heard; The sound of footsteps on the floor; Love just like addiction; Now I'm hooked on you; I need some time to get it right; Your love's gonna see me through; Can't stop now; Don't you know?; I ain't never gonna let you go; Don't go; Oh, baby; Make your mind up; Give me what you got; Fix me with your loving; Shut the door; And turn the lock; Hey, go get the doctor; Doctor came too late; Another night; I feel all right; My love for you can't wait; Can't stop now; Don't you know?; I ain't never gonna let you go; Don't go; Came in from the city; Walked into the door; I turned around when I heard; The sound of footsteps on the floor; Said he was a killer; Now I know it's true; I'm dead when you walk out the door; Hey, babe; I'm hooked on you; Can't stop now; Don't you know?; I ain't never gonna let you go; Don't go; Can't stop now; Don't you know?; I ain't never gonna let you go; Don't go; Can't stop now; Don't you know?; I ain't never gonna let you go; Don't go; Can't stop now; Don't you know?; I ain't never gonna let you go; Don't go; Can't stop now; Don't you know?; I ain't never gonna let you go; Don't go; Can't stop now; Don't you know?; I ain't never gonna let you go; Don't go; Can't stop now; Don't you know?; I ain't never gonna let you go; Don't go; Can't stop now; Don't you know?; I ain't never gonna let you go; Don't go; Don't go; Don't go; Don't go; Don't go".split('; '),
  3: "I've got the brains, you've got the looks; Let's make lots of money; You've got the brawn, I've got the brains; Let's make lots of...; I've had enough of scheming; And messing around with jerks; My car is parked outside; I'm afraid it doesn't work; I'm looking for a partner; Someone who gets things fixed; Ask yourself this question:; Do you want to be rich?; I've got the brains, you've got the looks; Let's make lots of money; You've got the brawn, I've got the brains; Let's make lots of money; You can tell I'm educated; I studied at the Sorbonne; Doctored in mathematics; I could have been a don; I can program a computer; Choose the perfect time; If you've got the inclination; I have got the crime; Oh, there's a lot of opportunities; If you know when to take them; You know, there's a lot of opportunities; If there aren't you can make them; Make or break them; I've got the brains, you've got the looks; Let's make lots of money; Let's make lots of; Money; You can see I'm single-minded; I know what I could be; How'd you feel about it?; Come and take a walk with me; I'm looking for a partner; Regardless of expense; Think about it seriously; You know it makes sense; Let's make; Got the brains, got the looks; Let's make lots of money; Money; Let's make; You've got the brawn, I've got the brains; Ooh; Let's make lots of money; Money; I've got the brains, you've got the looks; Got the brains, got the looks; Let's make lots of money; Ooh money".split('; ')
};

// INITIAL REDUX STATE
const initialState = {
  currentSongId: null,
  songsById: {
    1: {
      title: 'Dancing On My Own',
      artist: 'Robyn',
      songId: 1,
      songArray: songList[1],
      arrayPosition: 0
    },
    2: {
      title: 'Don\'t Go',
      artist: 'Yaz',
      songId: 2,
      songArray: songList[2],
      arrayPosition: 0
    },
    3: {
      title: 'Opportunities (Let\'s Make Lots Of Money)',
      artist: 'Pet Shop Boys',
      songId: 3,
      songArray: songList[3],
      arrayPosition: 0
    }
  }
};

// REDUX REDUCER
const lyricChangeReducer = (state = initialState.songsById, action) => {
  let newArrayPosition;
  let newSongsByIdEntry;
  let newSongsByIdStateSlice;
  switch (action.type) {
    case 'NEXT_LYRIC':
      newArrayPosition = state[action.currentSongId].arrayPosition + 1;
      newSongsByIdEntry = Object.assign({}, state[action.currentSongId], {
        arrayPosition: newArrayPosition
      });
      newSongsByIdStateSlice = Object.assign({}, state, {
        [action.currentSongId]: newSongsByIdEntry
      });
      return newSongsByIdStateSlice
    case 'RESTART_SONG':
      newSongsByIdEntry = Object.assign({}, state[action.currentSongId], {
        arrayPosition: 0
      });
      newSongsByIdStateSlice = Object.assign({}, state, {
        [action.currentSongId]: newSongsByIdEntry
      });
      return newSongsByIdStateSlice;
    default:
      return state;
  }
};

const songChangeReducer = (state = initialState.currentSongId, action) => {
  switch (action.type) {
    case 'CHANGE_SONG':
      return action.newSelectedSongId
    default:
      return state;
  }
};

// JEST TESTS + SETUP

const { expect } = window;

expect(lyricChangeReducer(initialState.songsById, { type: null })).toEqual(initialState.songsById);

expect(lyricChangeReducer(initialState.songsById, { type: 'NEXT_LYRIC', currentSongId: 2 })).toEqual({
  1: {
    title: 'Dancing On My Own',
    artist: 'Robyn',
    songId: 1,
    songArray: songList[1],
    arrayPosition: 0
  },
  2: {
    title: 'Don\'t Go',
    artist: 'Yaz',
    songId: 2,
    songArray: songList[2],
    arrayPosition: 1
  },
  3: {
    title: 'Opportunities (Let\'s Make Lots Of Money)',
    artist: 'Pet Shop Boys',
    songId: 3,
    songArray: songList[3],
    arrayPosition: 0
  }
});

expect(lyricChangeReducer(initialState.songsById, { type: 'RESTART_SONG', currentSongId: 1 })).toEqual({
  1: {
    title: 'Dancing On My Own',
    artist: 'Robyn',
    songId: 1,
    songArray: songList[1],
    arrayPosition: 0
  },
  2: {
    title: 'Don\'t Go',
    artist: 'Yaz',
    songId: 2,
    songArray: songList[2],
    arrayPosition: 0
  },
  3: {
    title: 'Opportunities (Let\'s Make Lots Of Money)',
    artist: 'Pet Shop Boys',
    songId: 3,
    songArray: songList[3],
    arrayPosition: 0
  }
});

expect(songChangeReducer(initialState, { type: 'CHANGE_SONG', newSelectedSongId: 1 })).toEqual(1);

// REDUX STORE
const { createStore } = Redux;
const store = createStore(lyricChangeReducer);
console.log(store.getState());

// // RENDERING STATE IN DOM
// const renderLyrics = () => {
//   const lyricsDisplay = document.getElementById('lyrics');
//   while (lyricsDisplay.firstChild) {
//     lyricsDisplay.removeChild(lyricsDisplay.firstChild);
//   }
//   const currentLine = store.getState().songLyricsArray[store.getState().arrayPosition];
//   const renderedLine = document.createTextNode(currentLine);
//   document.getElementById('lyrics').appendChild(renderedLine);
// }
//
// window.onload = function() {
//   renderLyrics();
// }
//
// // CLICK LISTENER
// const userClick = () => {
//   const currentState = store.getState();
//   if (currentState.arrayPosition === currentState.songLyricsArray.length - 1) {
//     store.dispatch({ type: 'RESTART_SONG' });
//   } else {
//     store.dispatch({ type: 'NEXT_LYRIC' });
//   }
// }
//
// // SUBSCRIBE TO REDUX STORE
// store.subscribe(renderLyrics);
