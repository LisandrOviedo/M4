/* ¡Escribe tus comandos en este archivo! */

const ejercicio02 = "select * from movies where duration < 90;";

const ejercicio03 = "select * from movies where year between 1930 and 1940;";

const ejercicio04 = "select * from movies where title like '%til%';";

const ejercicio05 = "select * from movies where cardinality(actors)=1;";

const ejercicio06 =
  "select title, avg(rating) from movies, unnest(ratings) as rating group by title;";

const ejercicio07 =
  "select actors from movies where title like '%Fast and%' and year = 2016;";

module.exports = {
  ejercicio02,
  ejercicio03,
  ejercicio04,
  ejercicio05,
  ejercicio06,
  ejercicio07,
};
