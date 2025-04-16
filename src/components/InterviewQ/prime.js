const myPromise = new Promise((resolve, reject) => {
    let success = false;
  
    if (success) {
      resolve("Data loaded ✅");
    } else {
      reject("Something went wrong ❌");
    }
  });
  
  myPromise
    .then((res) => console.log(res))   // ✅ Success
    .catch((err) => console.log(err)); 