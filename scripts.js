const songLyricsArray = "We were at a party, His ear lobe fell in the deep, Someone reached in and grabbed it, It was a rock lobster, Rock lobster, Rock lobster, We were at the beach, Everybody had matching towels, Somebody went under a dock, And there they saw a rock, It wasn\'t a rock, It was a rock lobster, Rock lobster, Rock lobster, Rock lobster, Rock lobster, Motion in the ocean, His air hose broke, Lots of trouble, Lots of bubble, He was in a jam, He\'s in a giant clam, Rock, rock, Rock lobster, Down, down, Underneath the waves, Mermaids wavin\', Wavin\' to mermen, Wavin\' sea fans, Sea horses sailin\', Dolphins wailin\', Rock lobster, Rock lobster, Rock lobster, Rock lobster, Red snappers snappin\', Clam shells clappin\', Mussels flexin\', Flippers flippin\', Rock, rock, Rock lobster, Down, down, Lobster, Rock, Lobster, Rock, Let\'s rock, Boys in bikinis, Girls in surfboards, Everybody\'s rockin\', Everybody\'s frugin\', Twistin\' \'round the fire, Havin\' fun, Bakin\' potatoes, Bakin\' in the sun, Put on your nose guard, Put on the lifeguard, Pass the tannin\' butter, Here comes a stringray, There goes a manta ray, In walked a jelly fish, There goes a dogfish, Chased by a catfish, In flew a sea robin, Watch out for that piranha, There goes a narwhal, Here comes a bikini whale, Rock lobster, Rock lobster, Rock lobster, Rock lobster".split(', ');

// INITIAL REDUX STATE
const initialState = {
  songLyricsArray: songLyricsArray,
  arrayPosition: 0,
}

// REDUCER WILL GO HERE

// JEST TESTS + SETUP WILL GO HERE

// REDUX STORE
const { createStore } = Redux;
const store = createStore(reducer);
console.log(store.getState());

// CLICK LISTENER
const userClick = () => {
  console.log('click');
}
