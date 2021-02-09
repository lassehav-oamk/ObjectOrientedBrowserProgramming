const contactData = [
  {
    id: "rg2-ggsv-h675",
    name: "John Doe",
    image: "images/profileExampleImage2.jpg",
    phone: "+234 4554 66475472",
    location: {
      street: "Example Road 1",
      postalCode: 020303,
      city: "Oulu",
      country: "FI"
    }
  },
  {
    id: "23-fes-227-88kk",
    name: "Dexter Moore",
    image: "images/profileExampleImage3.jpg",
    phone: "+465 1233 000012",
    location: {
      street: "Junction Street 20",
      postalCode: 45235,
      city: "Sacramento",
      country: "US"
    }
  },
  {
    id: "ut-hee-34v-2ac-vfsd",
    name: "Juliett Hanse",
    image: "images/profileExampleImage1.jpg",
    phone: "+010 125 465789",
    location: {
      street: "Werffenstrase 55",
      postalCode: 5633,
      city: "Berlin",
      country: "DE"
    }
  },
];

function createContactItem(contact) {
  return `
    <div class="contactItem" onClick="showDetailView('${contact.id}')">
      <div class="contactProfileImage">
        <img src="${contact.image}">
      </div>
      <div class="contactName">${contact.name}</div>
      <div class="contactExtraInfo">${contact.location.city}, ${contact.location.country}</div>
    </div>`;
}

function showDetailView(contactId) {
  console.log(contactId);
  const contact = contactData.find(contactElement => contactElement.id === contactId);
  if(contact === undefined) {
    console.log("Error: Contact not found")
    return;
  }

  const body = document.querySelector('body');
  body.innerHTML = `
    <div id="detailView">
      <button onclick="showContactListView()">Back</button>
      <div class="contactBasicInfo">
        <img src="${contact.image}">
        <div>
          <h1>${contact.name}</h1>
          Contact Information
          <div>
            <div>${contact.phone}</div>
            <div>${contact.location.street}</div>
            <div>${contact.location.postalCode}</div>
            <div>${contact.location.city}</div>
            <div>${contact.location.country}</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

let searchString = "";
function showContactListView() {
  const body = document.querySelector('body');

  let viewHtml = `
    <input type="text" id="searchString" value="${searchString}" oninput="search()">
    <button onclick="search()">Search</button>
    <button onclick="clearSearch()">Clear</button>
    `;
  body.innerHTML = viewHtml + contactData.filter(c => c.name.includes(searchString))
                                         .map(c => createContactItem(c))
                                         .join("");
}

function search() {
  searchString = document.querySelector('input#searchString').value;
  showContactListView();
}

function clearSearch() {
  searchString = "";
  showContactListView();
}
