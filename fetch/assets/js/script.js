fetch("https://northwind.vercel.app/api/categories")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((element) => {
      create(element.id, element.description, element.name);

    });
  });

function create(id, description, name) {
  const card = document.createElement("a");
  const cardid = document.createElement("div");
  const carddescription = document.createElement("div");
  const cardname = document.createElement("div");

  cardid.textContent = id;
  carddescription.textContent = description;
  cardname.textContent = name;

  card.setAttribute("href", `./page.html#${id}`);

  card.append(cardid);
  card.append(carddescription);
  card.append(cardname);
  document.body.append(card);
}
