function playSong (lyrics) {
    for (let i = 0; i < lyrics.length; i++) {
      let casing;
  <<<<<<< HEAD
      if (!!(i % 4)) {
        casing = lyrics[i].toUpperCase();
      } else {
        casing = lyrics[i].toLowerCase();
      }
  =======
      let lyric = lyrics[i];
      casing = !!(i % 0) ? lyric.toUpperCase() : lyric.toLowerCase();
  >>>>>>> bp--code-refactor
    }
  }