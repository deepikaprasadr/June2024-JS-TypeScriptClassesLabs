//promise - used to have async computation
//api method => then, catch
function GetData(data: string): Promise<string> {
    //every promise object has 2 blocks, a. resovle-positive output, b. reject-negative output
  let p = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      console.log("step2");
      if (data.length > 7) {
        resolve("Data=" + data);
      } else {
        reject("Error in Length");
      }
    }, 5000); //5seconds
  });
  return p;
}

//then api method; catch api method
console.log("step1");
GetData("DeepikaPrasad")
  .then((resp) => {
    console.log(resp);
  })
  .catch((err) => {
    console.log("Error", err);
  });
console.log("step3");

