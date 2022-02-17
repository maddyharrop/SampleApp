const fetchMovieData1 = () => {
  return new Promise((resolve, reject) => {
    fetch('http://www.omdbapi.com/?t=Avengers&apikey=52ead547')
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err))
  })
}
const fetchMovieData2 = () => {
  return new Promise((resolve, reject) => {
    fetch('http://www.omdbapi.com/?t=The+Shawshank+Redemption&apikey=a366db93')
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err))
  })
}
const fetchMovieData3 = () => {
  return new Promise((resolve, reject) => {
    fetch('http://www.omdbapi.com/?t=The+Godfather&apikey=a366db93')
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err))
  })
}
const fetchMovieData4 = () => {
  return new Promise((resolve, reject) => {
    fetch('http://www.omdbapi.com/?t=+The+Godfather%3A+Part+II&apikey=a366db93')
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err))
  })
}
const fetchMovieData5 = () => {
  return new Promise((resolve, reject) => {
    fetch('http://www.omdbapi.com/?t=The+Dark+Knight+&apikey=a366db93')
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err))
  })
}
const fetchMovieData6 = () => {
  return new Promise((resolve, reject) => {
    fetch('http://www.omdbapi.com/?t=12+Angry+Men&apikey=a366db93')
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err))
  })
}
const fetchMovieData7 = () => {
  return new Promise((resolve, reject) => {
    fetch('http://www.omdbapi.com/?t=Schindler%27s+List&apikey=a366db93')
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err))
  })
}
const fetchMovieData8 = () => {
  return new Promise((resolve, reject) => {
    fetch('http://www.omdbapi.com/?t=The+Lord+of+the+Rings%3A+The+Return+of+the+King&apikey=a366db93')
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err))
  })
}
const fetchMovieData9 = () => {
  return new Promise((resolve, reject) => {
    fetch('http://www.omdbapi.com/?t=Pulp+Fiction+&apikey=a366db93')
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err))
  })
}
const fetchMovieData10 = () => {
  return new Promise((resolve, reject) => {
    fetch('http://www.omdbapi.com/?t=The+Good%2C+the+Bad+and+the+Ugly&apikey=a366db93')
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err))
  })
}


// async function getMovieData() {
//   const data = await fetchMovieData()
//   return data
//   Remember to change the export
// }

export { fetchMovieData1, fetchMovieData2, fetchMovieData3, fetchMovieData4, fetchMovieData5, fetchMovieData6, fetchMovieData7, fetchMovieData8, fetchMovieData9, fetchMovieData10 }
