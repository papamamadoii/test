const calculate = arrStr => {
  let score = 0;
  let obj = {};

  const arr = arrStr;
  const fArr = [];

  let scoreTrack = {};

  //use obj for speed (hash)
  for (let i = 0; i < arr.length; i++) {
    let currentStrScore = 0;

    for (let j = 0; j < arr[i].length; j++) {
      if (!obj[arr[i][j]]) {
        obj = {
          ...obj,
          [arr[i][j]]: {
            score
          }
        };
        currentStrScore += score;
        score += 1;
      } else {
        currentStrScore += obj[arr[i][j]].score;
      }
    }

    if (!scoreTrack["a" + currentStrScore]) {
      scoreTrack = {
        ...scoreTrack,
        ["a" + currentStrScore]: currentStrScore
      };
    }

    fArr.push({
      val: arr[i],
      score: currentStrScore
    });
  }

  const mainArr = [];

  for (const property in scoreTrack) {
    const x = [];

    for (let j = 0; j < fArr.length; j++) {
      if (fArr[j].score === scoreTrack[property]) {
        x.push(fArr[j].val);
      }
    }
    mainArr.push(x);
  }

  return mainArr;
};

const resultArr = calculate([
  "ddddd",
  "AMOR",
  "AMRO",
  "asdf",
  "sdaf",
  "ddddd",
  "JAPONES",
  "ESPONJA"
]);

console.log(resultArr);
