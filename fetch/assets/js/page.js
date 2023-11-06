let hash = window.location.hash;
hash = hash.substring(1);


fetch(`https://northwind.vercel.app/api/categories/${hash}`)
  .then((res) => res.json())
  .then((data) => {
    seedetails(data.id, data.description, data.name);
  });

function seedetails(id, description, name) {
  let pageid = document.querySelector("div");
  let pagedescription = document.querySelector("h4");
  let pagename = document.querySelector("p");

  pageid.textContent = id;
  pagedescription.textContent = description;
  pagename.textContent = name;
}
 