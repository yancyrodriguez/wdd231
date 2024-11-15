const membersDiv = document.querySelector("#members");


async function fetchMemberData() {
    const response = await fetch('data/members.json');
    const members = await response.json();
    //console.log(members);
    members.forEach(member => {
        const memberdiv = document.createElement('div');
        memberdiv.classList.add('member-card');
        memberdiv.innerHTML = `
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="${member.website}" target="_blank">${member.website}</a>
        <img src="images/${member.image}" alt="${member.name} logo">

        `;
        membersDiv.append(memberdiv);
    })
    image.setAttribute('src', member.image);
    image.setAttribute('alt', `Image of ${member.name}`);
    image.setAttribute('loading', 'lazy');
    image.setAttribute('width', '250');
    image.setAttribute('height', '250');
}




fetchMemberData();