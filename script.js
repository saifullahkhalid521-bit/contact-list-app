const defaultContacts = [
  {
    name:"Aman",
    email:"aman@gmail.com",
    city:"Delhi"

  },
  {
    name:"Rahul",
    email:"rahul@gmail.com",
    city:"Mumbai"
  },
  {
    name:"Priya",
    email:"priya@gmail.com",
    city:"Delhi"
  },
  {
    name:"Sanu",
    email:"sanu@gmail.com",
    city:"Mumbai"
  },
  {
    name:"Raj",
    email:"raj@gmail.com",
    city:"Ranchi"
  },
  {
    name:"Saif",
    email:"saif@gmail.com",
    city:"Ranchi"
  }
];

const contactList = document.getElementById("content_list");

const displayContacts = (data) => {

  contactList.innerHTML = "";

  data.forEach((contact) => {

    contactList.innerHTML += `
    <div class= "contact">
    <h3>${contact.name}</h3>
    <p>${contact.email}</p>
    <p>${contact.city}</p>
    </div>
    `;
  });
};



const savedContacts = localStorage.getItem("contacts");

let contacts;

if (savedContacts) {
  contacts = JSON.parse(savedContacts);
} else {
  contacts = defaultContacts;
}

displayContacts(contacts);


const showAllBtn = document.getElementById("showAll");
const showDelhiBtn = document.getElementById("showDelhi");
const showMumbaiBtn = document.getElementById("showMumbai");
const showRanchiBtn = document.getElementById ("showRanchi");

showAllBtn.addEventListener("click" , () => {
  displayContacts(contacts);
});

showDelhiBtn.addEventListener("click", () => {
  const delhiContacts = contacts.filter((contact) => {
    return contact.city === "Delhi";
  });

  displayContacts(delhiContacts);
});

showMumbaiBtn.addEventListener("click" , () => {
  const mumbaicontacts = contacts.filter((contact)=> {
    return contact.city === "Mumbai";
  });

  displayContacts(mumbaicontacts);
});

showRanchiBtn.addEventListener("click" , () => {
  const ranchicontacts = contacts.filter((contact)=> {
    return contact.city === "Ranchi";
  });
  displayContacts(ranchicontacts);
});

const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const cityInput = document.getElementById("cityInput");
const addContactBtn = document.getElementById("addContactBtn");

addContactBtn.addEventListener("click", () => {
  const newContact = {
    name: nameInput.value,
    email: emailInput.value,
    city: cityInput.value
  };

  contacts.push(newContact);

  localStorage.setItem(
    "contacts", JSON.stringify(contacts)
  );

  displayContacts(contacts);

  nameInput.value = "";
  emailInput.value = "";
  cityInput.value = "";
});

