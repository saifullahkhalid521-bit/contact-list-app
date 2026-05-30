const contacts = [
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

  data.map((contact) => {

    contactList.innerHTML += `
    <div class= "contact">
    <h3>${contact.name}</h3>
    <p>${contact.email}</p>
    <p>${contact.city}</p>
    </div>
    `;
  });
};

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
})