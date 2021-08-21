// set local variable populated by the environment variable $DOCKER_USERNAME
const USER_NAME = process.env.DOCKER_USERNAME;

// edit comment and commit to trigger Travis
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log(`Hello, ${USER_NAME}!`);
    await sleep(5000);
  }
}

main();
