let friends={data:[{image:"friend1.png",username:"josephinmiller",email:" josephinmiller@gmail.com",status:"online"},{image:"friend2.png",username:"archibaldcaro",email:" archibaldcaro@gmail.com",status:"online"},{image:"friend3.png",username:"brittneyhasen",email:" brittneyhasen@gmail.com",status:"online"},{image:"friend4.png",username:"chiaramullins",email:" chiaramulllins@gmail.com",status:"online"},{image:"friend5.png",username:"dianebradford",email:" dianebadford@gmail.com",status:"ofline"},{image:"friend6.png",username:"elisabethhunt",email:" elisabethhunt@gmail.com",status:"ofline"},{image:"friend7.png",username:"franceskahuff",email:" franceskahuff@gmail.com",status:"online"},{image:"friend8.png",username:"haydenlleferd",email:" haydenlleferd@gmail.com",status:"online"},{image:"friend9.png",username:"iisakhumphre",email:" iisakhumphre@gmail.com",status:"online"},{image:"friend10.png",username:"grettaberooks",email:" grettaberooks@gmail.com",status:"online"},{image:"friend11.png",username:"katarinebrock",email:" katarinebrock@gmail.com",status:"ofline"},{image:"friend12.png",username:"laurcervantes",email:" laurcervantes@gmail.com",status:"online"},{image:"friend13.png",username:"michealrotson",email:" michealrotson@gmail.com",status:"online"},{image:"friend14.png",username:"nikitajenkinss",email:" nikitaajenkinss@gmail.com",status:"ofline"},{image:"friend15.png",username:"oscardavives",email:" oscardaviivees@gmail.com",status:"ofline"},{image:"friend16.png",username:"princemendoz",email:" princmendoz@gmail.com",status:"online"},{image:"friend17.png",username:"quangshhahe",email:" quangshhahe@gmail.com",status:"ofline"},{image:"friend18.png",username:"rebeccahann",email:" rebeccahanne@gmail.com",status:"ofline"},{image:"friend19.png",username:"scarlettorren",email:" scaarllettorren@gmail.com",status:"online"},{image:"friend20.png",username:"timothypierce",email:" timothypierce@gmail.com",status:"online"},{image:"friend21.png",username:"ustinyayaang",email:" ustinyayaang@gmail.com",status:"ofline"},{image:"friend22.png",username:"vicentelacoma",email:" vicenacoma@gmail.com",status:"online"},{image:"friend23.png",username:"willabebradley",email:" willabradley@gmail.com",status:"ofline"},{image:"friend24.png",username:"xanthesanoval",email:" xantesanova@gmail.com",status:"ofline"},{image:"friend25.png",username:"yakovcallahan",email:" yakcallahan@gmail.com",status:"ofline"},{image:"friend26.png",username:"zaydenabbott",email:" zaydenabbott@gmail.com",status:"online"}]};function loadSelectedFriends(){let e=sessionStorage.getItem("selectedFriends");if(e){e=JSON.parse(e);for(let n of e){let e=document.getElementById(n.username);if(e){let n=e.querySelector(".add-button"),t=e.querySelector(".delete-button");n.style.display="none",t.style.display="block",document.getElementById("adfriend").appendChild(e)}}}}function saveSelectedFriends(){let e=[],n=document.querySelectorAll(".card");for(let t of n){let n=t.querySelector(".friends-username").innerText.toLowerCase();"none"===t.querySelector(".add-button").style.display&&e.push({username:n})}sessionStorage.setItem("selectedFriends",JSON.stringify(e))}function showFriendList(){document.getElementById("friendsmy").style.display="block"}function searchFriends(){let e=document.getElementById("search-input").value.toLowerCase(),n=document.querySelectorAll(".card");for(let t of n){t.querySelector(".friends-username").innerText.toLowerCase().includes(e)?t.style.display="flex":t.style.display="none"}}document.querySelector(".search_f").addEventListener("click",showFriendList),document.getElementById("search-input").addEventListener("keyup",searchFriends);let infoPanel=document.createElement("div");infoPanel.classList.add("info-panel"),infoPanel.style.display="flex",infoPanel.style.justifyContent="space-between";let labels=["Photo","Username","E-mail Address","Status","Action"];for(let e of labels){let n=document.createElement("h5");n.classList.add("info-label"),n.innerText=e,infoPanel.appendChild(n)}document.getElementById("friendsmy").appendChild(infoPanel);for(let e of friends.data){let n=document.createElement("div");n.classList.add("card",e.status),n.id=e.username;let t=document.createElement("div");t.classList.add("container"),t.style.display="flex",t.style.justifyContent="space-between",t.style.alignItems="center";let a=document.createElement("div");a.classList.add("img-container");let i=document.createElement("img");i.setAttribute("src",e.image),a.appendChild(i),t.appendChild(a);let l=document.createElement("div");l.style.display="flex",l.style.justifyContent="space-between",l.style.alignItems="center";let s=document.createElement("h5");s.classList.add("friends-username"),s.innerText=e.username.toLowerCase(),l.appendChild(s);let d=document.createElement("h5");d.classList.add("email"),d.innerText=e.email.toLowerCase(),l.appendChild(d);let m=document.createElement("h5");m.classList.add("status"),m.innerText=e.status.toLowerCase(),l.appendChild(m),t.appendChild(l),n.appendChild(t);let r=document.createElement("button");r.classList.add("add-button"),r.innerText="Add",r.addEventListener("click",function(){let e=this.parentNode.parentNode.parentNode;document.getElementById("adfriend").appendChild(e),r.style.display="none",o.style.display="block",saveSelectedFriends()}),l.appendChild(r);let o=document.createElement("button");o.classList.add("delete-button"),o.innerText="Delete",o.style.display="none",o.addEventListener("click",function(){let e=this.parentNode.parentNode.parentNode;e.remove(),document.getElementById("friendsmy").appendChild(e),o.style.display="none",r.style.display="block",saveSelectedFriends()}),l.appendChild(o),document.getElementById("friendsmy").appendChild(n),document.getElementById("friendsmy").style.display="none";var closeButton=document.getElementById("closebutton"),friendsmy=document.getElementById("friendsmy");function showFriendList(){document.getElementById("friendsmy").style.display="block"}document.querySelector(".search_f").addEventListener("click",function(){closeButton.style.display="block"}),closeButton.addEventListener("click",function(){friendsmy.style.display="none",closeButton.style.display="none"}),document.querySelector(".search_f").addEventListener("click",showFriendList)}loadSelectedFriends();