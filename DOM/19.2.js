const users = [
    {
        id: 167464,
        firstName: "Jimmy",
        lastName: "Arnold",
        email: "jimmya@gmail.com",
    },
    {
        id: 578447,
        firstName: "Martha",
        lastName: "Goldman",
        email: "gold@hotmail.com",
    },
    {
        id: 864578,
        firstName: "Tim",
        lastName: "Burton",
        email: "timmy.hotmail.com",
    },
];

const ol = document.getElementsByTagName('ol');

//mdn Array.forEach;
users.forEach((e) => {
    let newLi = document.createElement('li');
    newLi.innerHTML = e.firstName + ' ' + e.lastName;
    newLi.setAttribute('data-id', e.id) ;
    ol[0].appendChild(newLi);
});

ol[0].style.cssText = "list-style-type :none";