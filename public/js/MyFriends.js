let friends = {
  data: [
    {
      image: "friend1.png",
      username: "josephinmiller",
      email: " josephinmiller@gmail.com",
      status: "online"
    },
    {
      image: "friend2.png",
      username: "archibaldcaro",
      email: " archibaldcaro@gmail.com",
      status: "online"
    },
    {
      image: "friend3.png",
      username: "brittneyhasen",
      email: " brittneyhasen@gmail.com",
      status: "online"
    },
    {
      image: "friend4.png",
      username: "chiaramullins",
      email: " chiaramulllins@gmail.com",
      status: "online"
    },
    {
      image: "friend5.png",
      username: "dianebradford",
      email: " dianebadford@gmail.com",
      status: "ofline"
    },
    {
      image: "friend6.png",
      username: "elisabethhunt",
      email: " elisabethhunt@gmail.com",
      status: "ofline"
    },
    {
      image: "friend7.png",
      username: "franceskahuff",
      email: " franceskahuff@gmail.com",
      status: "online"
    },
    {
      image: "friend8.png",
      username: "haydenlleferd",
      email: " haydenlleferd@gmail.com",
      status: "online"
    },
    {
      image: "friend9.png",
      username: "iisakhumphre",
      email: " iisakhumphre@gmail.com",
      status: "online"
    },
    {
      image: "friend10.png",
      username: "grettaberooks",
      email: " grettaberooks@gmail.com",
      status: "online"
    },
    {
      image: "friend11.png",
      username: "katarinebrock",
      email: " katarinebrock@gmail.com",
      status: "ofline"
    },
    {
      image: "friend12.png",
      username: "laurcervantes",
      email: " laurcervantes@gmail.com",
      status: "online"
    },
    {
      image: "friend13.png",
      username: "michealrotson",
      email: " michealrotson@gmail.com",
      status: "online"
    },
    {
      image: "friend14.png",
      username: "nikitajenkinss",
      email: " nikitaajenkinss@gmail.com",
      status: "ofline"
    },
    {
      image: "friend15.png",
      username: "oscardavives",
      email: " oscardaviivees@gmail.com",
      status: "ofline"
    },
    {
      image: "friend16.png",
      username: "princemendoz",
      email: " princmendoz@gmail.com",
      status: "online"
    },
    {
      image: "friend17.png",
      username: "quangshhahe",
      email: " quangshhahe@gmail.com",
      status: "ofline"
    },
    {
      image: "friend18.png",
      username: "rebeccahann",
      email: " rebeccahanne@gmail.com",
      status: "ofline"
    },
    {
      image: "friend19.png",
      username: "scarlettorren",
      email: " scaarllettorren@gmail.com",
      status: "online"
    },
    {
      image: "friend20.png",
      username: "timothypierce",
      email: " timothypierce@gmail.com",
      status: "online"
    },
    {
      image: "friend21.png",
      username: "ustinyayaang",
      email: " ustinyayaang@gmail.com",
      status: "ofline"
    },
    {
      image: "friend22.png",
      username: "vicentelacoma",
      email: " vicenacoma@gmail.com",
      status: "online"
    },
    {
      image: "friend23.png",
      username: "willabebradley",
      email: " willabradley@gmail.com",
      status: "ofline"
    },
    {
      image: "friend24.png",
      username: "xanthesanoval",
      email: " xantesanova@gmail.com",
      status: "ofline"
    },
    {
      image: "friend25.png",
      username: "yakovcallahan",
      email: " yakcallahan@gmail.com",
      status: "ofline"
    },
    {
      image: "friend26.png",
      username: "zaydenabbott",
      email: " zaydenabbott@gmail.com",
      status: "online"
    }
  ]
};

function loadSelectedFriends() {
  let selectedFriends = sessionStorage.getItem("selectedFriends");
  if (selectedFriends) {
    selectedFriends = JSON.parse(selectedFriends);
    for (let friend of selectedFriends) {
      let friendCard = document.getElementById(friend.username);
      if (friendCard) {
        let addButton = friendCard.querySelector(".add-button");
        let deleteButton = friendCard.querySelector(".delete-button");
        addButton.style.display = "none";
        deleteButton.style.display = "block";
        document.getElementById("adfriend").appendChild(friendCard);
      }
    }
  }
}

// Save selected friends to sessionStorage
function saveSelectedFriends() {
  let selectedFriends = [];
  let friendCards = document.querySelectorAll(".card");
  for (let card of friendCards) {
    let username = card.querySelector(".friends-username").innerText.toLowerCase();
    let addButton = card.querySelector(".add-button");
    if (addButton.style.display === "none") {
      selectedFriends.push({ username: username });
    }
  }
  sessionStorage.setItem("selectedFriends", JSON.stringify(selectedFriends));
}

// Function to handle click event on the search_f div
function showFriendList() {
  // Display the friend list
  document.getElementById("friendsmy").style.display = "block";
}

// Add click event listener to the search_f div
document.querySelector(".search_f").addEventListener("click", showFriendList);

// Function to handle search event
function searchFriends() {
  // Get the search input value
  let searchValue = document.getElementById("search-input").value.toLowerCase();

  // Get all friend cards
  let friendCards = document.querySelectorAll(".card");

  // Loop through friend cards
  for (let card of friendCards) {
    // Get the username from the friend card
    let username = card.querySelector(".friends-username").innerText.toLowerCase();

    // Check if the username matches the search value
    if (username.includes(searchValue)) {
      card.style.display = "flex"; // Display the friend card if it matches
    } else {
      card.style.display = "none"; // Hide the friend card if it doesn't match
    }
  }
}

// Add keyup event listener to the search input
document.getElementById("search-input").addEventListener("keyup", searchFriends);


// Create panel with information labels
let infoPanel = document.createElement("div");
infoPanel.classList.add("info-panel");
infoPanel.style.display = "flex";
infoPanel.style.justifyContent = "space-between";

let labels = ["Photo", "Username", "E-mail Address", "Status", "Action"];

for (let label of labels) {
  let infoLabel = document.createElement("h5");
  infoLabel.classList.add("info-label");
  infoLabel.innerText = label;
  infoPanel.appendChild(infoLabel);
}

document.getElementById("friendsmy").appendChild(infoPanel);

for (let friend of friends.data) {
  // Create friend card
  let card = document.createElement("div");
  card.classList.add("card", friend.status);
  card.id = friend.username;

  // Container
  let container = document.createElement("div");
  container.classList.add("container");
  container.style.display = "flex";
  container.style.justifyContent = "space-between";
  container.style.alignItems = "center";

  // Image
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");

  let image = document.createElement("img");
  image.setAttribute("src", friend.image);
  imgContainer.appendChild(image);

  container.appendChild(imgContainer);

  // Friend info
  let infoContainer = document.createElement("div");
  infoContainer.style.display = "flex";
  infoContainer.style.justifyContent = "space-between";
  infoContainer.style.alignItems = "center";

  let username = document.createElement("h5");
  username.classList.add("friends-username");
  username.innerText = friend.username.toLowerCase();
  infoContainer.appendChild(username);

  let email = document.createElement("h5");
  email.classList.add("email");
  email.innerText = friend.email.toLowerCase();
  infoContainer.appendChild(email);

  let status = document.createElement("h5");
  status.classList.add("status");
  status.innerText = friend.status.toLowerCase();
  infoContainer.appendChild(status);

  container.appendChild(infoContainer);

  card.appendChild(container);

  // Add button
  let addButton = document.createElement("button");
  addButton.classList.add("add-button");
  addButton.innerText = "Add";
  addButton.addEventListener("click", function() {
    // Get selected friend
    let selectedFriend = this.parentNode.parentNode.parentNode;

    // Move selected friend to "My Friends"
    document.getElementById("adfriend").appendChild(selectedFriend);

    // Hide button "Add"
    addButton.style.display = "none";

    // Show button "Delete"
    deleteButton.style.display = "block";

    // Save updated friend data to sessionStorage
    saveSelectedFriends();
  });

  infoContainer.appendChild(addButton);

  // Delete button
  let deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-button");
  deleteButton.innerText = "Delete";
  deleteButton.style.display = "none";
  deleteButton.addEventListener("click", function() {
    // Get parent element (friend card)
    let friendCard = this.parentNode.parentNode.parentNode;

    // Delete friend from "My Friends"
    friendCard.remove();

    // Return friend to main list of friends
    document.getElementById("friendsmy").appendChild(friendCard);

    // Hide button "Delete"
    deleteButton.style.display = "none";

    // Show button "Add"
    addButton.style.display = "block";

    // Save updated friend data to sessionStorage
    saveSelectedFriends();
  });

  infoContainer.appendChild(deleteButton);

  document.getElementById("friendsmy").appendChild(card);
  // CSS styles for hiding the friend list initially
  document.getElementById("friendsmy").style.display = "none";

  //hide and show close button
  const closeButton = document.getElementById("closebutton");
  let friendsmy = document.getElementById("friendsmy");

  document.querySelector(".search_f").addEventListener("click", function() {
    closeButton.style.display = "block"; /* show button */
  });

  closeButton.addEventListener("click", function() {
    friendsmy.style.display = "none"; /* hide friendsmy */
    closeButton.style.display = "none"; /* hide button closebutton */
  });


  // Function to handle click event on the search_f div
  function showFriendList() {
    // Display the friend list
    document.getElementById("friendsmy").style.display = "block";
  }

  // Add click event listener to the search_f div
  document.querySelector(".search_f").addEventListener("click", showFriendList);

}
// Load selected friends f
loadSelectedFriends();
