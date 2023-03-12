const { exec, spawn } = require("child_process");
exec("g++ code.cpp", (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }

  const child = spawn("./a"); //where a is the exe file generated on compiling the code.
  child.stdin.write("6 6");
  child.stdin.end();
  child.stdout.on("data", (data) => {
    console.log(`child stdout:\n${data}`);
  });
});