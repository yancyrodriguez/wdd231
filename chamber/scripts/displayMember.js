const membersDiv = document.querySelector("#members");


async function fetchMemberData() {
    const response = await fetch('data/members.json');
    const members = await response.json();
    //console.log(members);
    members.forEach(member => {
        
    })

}




fetchMemberData();