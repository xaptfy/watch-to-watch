import {AuthorizationStatus, FILMS_IN_LIST_LIMIT_MIN, Genre} from './consts';

const filmsMocks = [
  {
    description: `Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.`,
    rating: 3.3,
    director: `Justin Kurzel`,
    starring: [
      `Michael Fassbender`,
      `Marion Cotillard`,
      `Jack Madigan`
    ],
    genre: `Drama`,
    released: 2015,
    id: 1,
    title: `Macbeth`,
    posterImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Macbeth.jpg`,
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/macbeth.jpg`,
    backgroundImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Macbeth.jpg`,
    backgroundColor: `#F1E9CE`,
    scoresCount: 48798,
    runTime: 113,
    isFavorite: true,
    videoLink: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  },
  {
    description: `Vicenarian Richard travels to Thailand and finds himself in possession of a strange map. Rumours state that it leads to a solitary beach paradise, a tropical bliss. Excited and intrigued, he sets out to find it.`,
    rating: 3.3,
    director: `Danny Boyle`,
    starring: [
      `Leonardo DiCaprio`,
      `Daniel York`,
      `Patcharawan Patarakijjanon`
    ],
    genre: `Adventure`,
    released: 2000,
    id: 2,
    title: `Beach`,
    posterImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/beach.jpg`,
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/beach.jpg`,
    backgroundImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/beach.jpg`,
    backgroundColor: `#EBC996`,
    scoresCount: 207824,
    runTime: 119,
    isFavorite: true,
    videoLink: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  },
  {
    description: `A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.`,
    rating: 3.6,
    director: `Wes Anderson`,
    starring: [
      `Owen Wilson`,
      `Adrien Brody`,
      `Jason Schwartzman`
    ],
    genre: `Adventure`,
    released: 2007,
    id: 3,
    title: `Dardjeeling Limited`,
    posterImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Dardjeeling_Limited.jpg`,
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/dardjeeling_limited.jpg`,
    backgroundImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Dardjeeling_Limited.jpg`,
    backgroundColor: `#AD9F8B`,
    scoresCount: 165106,
    runTime: 91,
    isFavorite: true,
    videoLink: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  },
  {
    description: `Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.`,
    rating: 4.1,
    director: `Ethan Coen`,
    starring: [
      `Tommy Lee Jones`,
      `Javier Bardem`,
      `Josh Brolin`
    ],
    genre: `Crime`,
    released: 2007,
    id: 4,
    title: `No Country for Old Men`,
    posterImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/No_Country_for_Old_Men.jpg`,
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/no-country-for-old-men.jpg`,
    backgroundImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/No_Country_for_Old_Men.jpg`,
    backgroundColor: `#BDAD8F`,
    scoresCount: 764976,
    runTime: 122,
    isFavorite: true,
    videoLink: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
    previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    description: `In 1954, a U.S. Marshal investigates the disappearance of a murderer, who escaped from a hospital for the criminally insane.`,
    rating: 4.1,
    director: `Martin Scorsese`,
    starring: [
      `Leonardo DiCaprio`,
      `Emily Mortimer`,
      `Mark Ruffalo`
    ],
    genre: `Thriller`,
    released: 2010,
    id: 5,
    title: `Shutter Island`,
    posterImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Shutter_Island.jpg`,
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/shutter-island.jpg`,
    backgroundImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Shutter_Island.jpg`,
    backgroundColor: `#977461`,
    scoresCount: 1002557,
    runTime: 138,
    isFavorite: true,
    videoLink: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
    previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
];

const oneFilmMock = {
  description: `Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.`,
  rating: 3.3,
  director: `Justin Kurzel`,
  starring: [
    `Michael Fassbender`,
    `Marion Cotillard`,
    `Jack Madigan`
  ],
  genre: `Drama`,
  released: 2015,
  id: 1,
  title: `Macbeth`,
  posterImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Macbeth.jpg`,
  previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/macbeth.jpg`,
  backgroundImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Macbeth.jpg`,
  backgroundColor: `#F1E9CE`,
  scoresCount: 48798,
  runTime: 113,
  isFavorite: true,
  videoLink: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
  previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
};

const promoMock = {
  description: `Vicenarian Richard travels to Thailand and finds himself in possession of a strange map. Rumours state that it leads to a solitary beach paradise, a tropical bliss. Excited and intrigued, he sets out to find it.`,
  rating: 3.3,
  director: `Danny Boyle`,
  starring: [
    `Leonardo DiCaprio`,
    `Daniel York`,
    `Patcharawan Patarakijjanon`
  ],
  genre: `Adventure`,
  released: 2000,
  id: 2,
  title: `Beach`,
  posterImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/beach.jpg`,
  previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/beach.jpg`,
  backgroundImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/beach.jpg`,
  backgroundColor: `#EBC996`,
  scoresCount: 207824,
  runTime: 119,
  isFavorite: true,
  videoLink: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
  previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
};

const reviewsMocks = [
  {
    id: 1,
    user: {
      id: 15,
      name: `Kendall`
    },
    rating: 6,
    comment: `I personally found this movie to be boring. Definitely one of the most boring movies I've ever seen.`,
    date: `2021-02-15T08:04:28.658Z`
  },
  {
    id: 2,
    user: {
      id: 15,
      name: `Kendall`
    },
    rating: 6,
    comment: `I personally found this movie to be boring. Definitely one of the most boring movies I've ever seen.`,
    date: `2021-02-15T08:04:28.658Z`
  },
  {
    id: 3,
    user: {
      id: 15,
      name: `Kendall`
    },
    rating: 6,
    comment: `I personally found this movie to be boring. Definitely one of the most boring movies I've ever seen.`,
    date: `2021-02-15T08:04:28.658Z`
  }
];

const oneReviewMock = {
  id: 1,
  user: {
    id: 15,
    name: `Kendall`
  },
  rating: 6,
  comment: `I personally found this movie to be boring. Definitely one of the most boring movies I've ever seen.`,
  date: `2021-02-15T08:04:28.658Z`
};

const favoritesMock = [
  {
    description: `Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.`,
    rating: 3.3,
    director: `Justin Kurzel`,
    starring: [
      `Michael Fassbender`,
      `Marion Cotillard`,
      `Jack Madigan`
    ],
    genre: `Drama`,
    released: 2015,
    id: 1,
    title: `Macbeth`,
    posterImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Macbeth.jpg`,
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/macbeth.jpg`,
    backgroundImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Macbeth.jpg`,
    backgroundColor: `#F1E9CE`,
    scoresCount: 48798,
    runTime: 113,
    isFavorite: true,
    videoLink: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  },
  {
    description: `Vicenarian Richard travels to Thailand and finds himself in possession of a strange map. Rumours state that it leads to a solitary beach paradise, a tropical bliss. Excited and intrigued, he sets out to find it.`,
    rating: 3.3,
    director: `Danny Boyle`,
    starring: [
      `Leonardo DiCaprio`,
      `Daniel York`,
      `Patcharawan Patarakijjanon`
    ],
    genre: `Adventure`,
    released: 2000,
    id: 2,
    title: `Beach`,
    posterImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/beach.jpg`,
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/beach.jpg`,
    backgroundImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/beach.jpg`,
    backgroundColor: `#EBC996`,
    scoresCount: 207824,
    runTime: 119,
    isFavorite: true,
    videoLink: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  },
  {
    description: `A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.`,
    rating: 3.6,
    director: `Wes Anderson`,
    starring: [
      `Owen Wilson`,
      `Adrien Brody`,
      `Jason Schwartzman`
    ],
    genre: `Adventure`,
    released: 2007,
    id: 3,
    title: `Dardjeeling Limited`,
    posterImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Dardjeeling_Limited.jpg`,
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/dardjeeling_limited.jpg`,
    backgroundImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Dardjeeling_Limited.jpg`,
    backgroundColor: `#AD9F8B`,
    scoresCount: 165106,
    runTime: 91,
    isFavorite: true,
    videoLink: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  },
  {
    description: `Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.`,
    rating: 4.1,
    director: `Ethan Coen`,
    starring: [
      `Tommy Lee Jones`,
      `Javier Bardem`,
      `Josh Brolin`
    ],
    genre: `Crime`,
    released: 2007,
    id: 4,
    title: `No Country for Old Men`,
    posterImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/No_Country_for_Old_Men.jpg`,
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/no-country-for-old-men.jpg`,
    backgroundImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/No_Country_for_Old_Men.jpg`,
    backgroundColor: `#BDAD8F`,
    scoresCount: 764976,
    runTime: 122,
    isFavorite: true,
    videoLink: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
    previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
  {
    description: `In 1954, a U.S. Marshal investigates the disappearance of a murderer, who escaped from a hospital for the criminally insane.`,
    rating: 4.1,
    director: `Martin Scorsese`,
    starring: [
      `Leonardo DiCaprio`,
      `Emily Mortimer`,
      `Mark Ruffalo`
    ],
    genre: `Thriller`,
    released: 2010,
    id: 5,
    title: `Shutter Island`,
    posterImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Shutter_Island.jpg`,
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/shutter-island.jpg`,
    backgroundImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Shutter_Island.jpg`,
    backgroundColor: `#977461`,
    scoresCount: 1002557,
    runTime: 138,
    isFavorite: true,
    videoLink: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
    previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
  },
];

const storeInitialMock = {
  DATA: {
    films: [],
    genres: [],
    promo: {},
    favorites: [],
    reviewsForSelectedFilm: [],
    isFilmsLoaded: false,
    isPromoLoaded: false,
    isFavoritesLoaded: false,
    isReviewsLoaded: false,
    selectedGenre: Genre.ALL,
    filmsLimit: FILMS_IN_LIST_LIMIT_MIN,
    shownFilmsCount: 0,
  },
  USER: {
    authorizationStatus: AuthorizationStatus.UNKNOWN,
    authInfo: {},
    errorMessage: null,
    isFormDisabled: false,
  },
};

const storeFilledMock = {
  DATA: {
    films: filmsMocks,
    genres: [Genre.ALL, `genreOne`, `genreTwo`, `genreThree`],
    promo: promoMock,
    favorites: favoritesMock,
    reviewsForSelectedFilm: reviewsMocks,
    isFilmsLoaded: true,
    isPromoLoaded: true,
    isFavoritesLoaded: true,
    isReviewsLoaded: true,
    selectedGenre: Genre.ALL,
    filmsLimit: FILMS_IN_LIST_LIMIT_MIN,
    shownFilmsCount: 8,
  },
  USER: {
    authorizationStatus: AuthorizationStatus.AUTH,
    authInfo: {
      [`avatar_url`]: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/3.jpg`,
      email: `user@mail.ru`,
      id: 1,
      name: `UserOne`,
    },
    errorMessage: null,
    isFormDisabled: false,
  },
};

const filmsResponseMock = [
  {
    "name": `name`,
    "poster_image": `poster_image`,
    "preview_image": `preview_image`,
    "background_image": `background_image`,
    "background_color": `background_color`,
    "description": `description`,
    "rating": 0,
    "scores_count": 0,
    "director": `director`,
    "starring": [],
    "run_time": 0,
    "genre": `genre`,
    "released": 0,
    "id": 1,
    "is_favorite": false,
    "video_link": `video_link`,
    "preview_video_link": `preview_video_link`,
  }
];

const adaptedFilmsResponseMock = [
  {
    title: `name`,
    posterImage: `poster_image`,
    previewImage: `preview_image`,
    backgroundImage: `background_image`,
    backgroundColor: `background_color`,
    description: `description`,
    rating: 0,
    scoresCount: 0,
    director: `director`,
    starring: [],
    runTime: 0,
    genre: `genre`,
    released: 0,
    id: 1,
    isFavorite: false,
    videoLink: `video_link`,
    previewVideoLink: `preview_video_link`,
  }
];

const collectedGenresMock = [Genre.ALL, `genre`];

const promoResponseMock = {
  "name": `name`,
  "poster_image": `poster_image`,
  "preview_image": `preview_image`,
  "background_image": `background_image`,
  "background_color": `background_color`,
  "description": `description`,
  "rating": 0,
  "scores_count": 0,
  "director": `director`,
  "starring": [],
  "run_time": 0,
  "genre": `genre`,
  "released": 0,
  "id": 1,
  "is_favorite": false,
  "video_link": `video_link`,
  "preview_video_link": `preview_video_link`,
};

const adaptedPromoResponseMock = {
  title: `name`,
  posterImage: `poster_image`,
  previewImage: `preview_image`,
  backgroundImage: `background_image`,
  backgroundColor: `background_color`,
  description: `description`,
  rating: 0,
  scoresCount: 0,
  director: `director`,
  starring: [],
  runTime: 0,
  genre: `genre`,
  released: 0,
  id: 1,
  isFavorite: false,
  videoLink: `video_link`,
  previewVideoLink: `preview_video_link`,
};

const favoritesResponseMock = [
  {
    "name": `name`,
    "poster_image": `poster_image`,
    "preview_image": `preview_image`,
    "background_image": `background_image`,
    "background_color": `background_color`,
    "description": `description`,
    "rating": 0,
    "scores_count": 0,
    "director": `director`,
    "starring": [],
    "run_time": 0,
    "genre": `genre`,
    "released": 0,
    "id": 1,
    "is_favorite": true,
    "video_link": `video_link`,
    "preview_video_link": `preview_video_link`,
  }
];

const adaptedFavoritesResponseMock = [
  {
    title: `name`,
    posterImage: `poster_image`,
    previewImage: `preview_image`,
    backgroundImage: `background_image`,
    backgroundColor: `background_color`,
    description: `description`,
    rating: 0,
    scoresCount: 0,
    director: `director`,
    starring: [],
    runTime: 0,
    genre: `genre`,
    released: 0,
    id: 1,
    isFavorite: true,
    videoLink: `video_link`,
    previewVideoLink: `preview_video_link`,
  }
];

const commentToSendMock = {
  rating: 5,
  comment: `this is the comment text`,
};

export {
  filmsMocks,
  oneFilmMock,
  promoMock,
  favoritesMock,
  reviewsMocks,
  oneReviewMock,
  storeInitialMock,
  storeFilledMock,
  filmsResponseMock,
  adaptedFilmsResponseMock,
  collectedGenresMock,
  promoResponseMock,
  adaptedPromoResponseMock,
  favoritesResponseMock,
  adaptedFavoritesResponseMock,
  commentToSendMock,
};
