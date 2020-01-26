/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

// axios
//   .get('https://api.github.com/users/DrewCDoll')
//   .then(response => {
//     const newCard = createCard(response.data);
//     document.querySelector('.cards').appendChild(newCard);

//   })

const followersArray = [
  'https://api.github.com/users/DrewCDoll',
  'https://api.github.com/users/tetondan',
  'https://api.github.com/users/dustinmyers',
  'https://api.github.com/users/justsml',
  'https://api.github.com/users/luishrd',
  'https://api.github.com/users/bigknell',
  'https://api.github.com/users/shanreed',

];




followersArray.forEach(user => {
  axios
    .get(user)
    .then(resp => {
      const newCard = createCard(resp.data);
      document.querySelector('.cards').appendChild(newCard);
    })
})

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

// const followersArray = [
//   'https://api.github.com/users/DrewCDoll',
//   'https://api.github.com/users/tetondan',
//   'https://api.github.com/users/dustinmyers',
//   'https://api.github.com/users/justsml',
//   'https://api.github.com/users/luishrd',
//   'https://api.github.com/users/bigknell',
//   'https://api.github.com/users/shanreed',

// ];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

const createCard = (userObj) => {

  console.log('beginning of cCard userObj', userObj);
  //create elements
  const uCard = document.createElement('div');
  const uImg = document.createElement('img');
  const uCardInfo = document.createElement('div');
  const uName = document.createElement('h3');
  const uNameLong = document.createElement('p');
  const uLoc = document.createElement('p');
  const uProfile = document.createElement('p');
  const uLink = document.createElement('a');
  const uFollowers = document.createElement('p');
  const uFollowing = document.createElement('p');
  const uBio = document.createElement('p');

  //set tree structure
  uCard.appendChild(uImg);
  uCard.appendChild(uCardInfo);
  uCardInfo.appendChild(uName);
  uCardInfo.appendChild(uNameLong);
  uCardInfo.appendChild(uLoc);
  uCardInfo.appendChild(uProfile);
  uProfile.appendChild(uLink);
  uCardInfo.appendChild(uFollowers);
  uCardInfo.appendChild(uFollowing);
  uCardInfo.appendChild(uBio);

  console.log('card set up', uCard);
  //set content
  uImg.src = userObj.avatar_url;
  uName.textContent = userObj.name;
  uNameLong.textContent = userObj.login;
  uLoc.textContent = `Location: ${userObj.location}`;
  uLink.href = userObj.url;
  uLink.textContent = userObj.url;
  uProfile.textContent = `Profile: ${uLink}`;
  uFollowers.textContent = `Followers: ${userObj.followers}`;
  uFollowing.textContent = `Following: ${userObj.following}`;
  uBio.textContent = userObj.bio;


  //set classes
  uCard.classList.add('card');
  uCardInfo.classList.add('card-info');
  uName.classList.add('name');
  uNameLong.classList.add('username');



  return uCard;

}

