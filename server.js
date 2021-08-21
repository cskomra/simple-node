// set local variable populated by the environment variable $DOCKER_USERNAME
const THE_NAME = process.env.NAME;
//const THE_NAME = "Connie S"

// edit comment and commit to trigger Travis
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log(`Hello, ${THE_NAME}!`);
    await sleep(5000);
  }
}

main();
