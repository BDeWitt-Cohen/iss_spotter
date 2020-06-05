const { nextISSTimesForMyLocation } = require('./iss');
//Used the code from the reveal because it was cleaner and I got stuck for a couple hours and obviously didn't read
//the time boxing notes. I understand every line of code on both my code and the code that was provided
//The extra console logs in here are because I'd like to have this spit out the time in minutes and seconds

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    // const durationRemainder = (duration % 60).toFixed(2);
    
    // const durationInMins = (duration / 60) - (durationRemainder / 100);
    // console.log(durationRemainder);
    // console.log(durationInMins);
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});






// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log('It worked! Returned IP:', ip);

//   fetchCoordsByIP(ip, (error, latAndLong) => {
//     if (error) {
//       console.log("Network error: ", error);
//       return;
//     }

//     console.log('It worked! Your lat and long, as an object:', latAndLong);
      
//     fetchISSFlyOverTimes(latAndLong, (error, passTimes) => {
//       if (error) {
//         console.log("It didn't work!" , error);
//         return;
//       }
//     for (const pass of passTimes){
// console.log(pass);
//     }
//       // console.log('It worked! Returned flyover times:' , passTimes);
//     });
//   })

// });

// const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');
