const url = "http://localhost:8000/moveis"
const tableBody = document.getElementById("table-body");

async function getmoveis() {
    const request = await fetch(url)
    const response = await request.json()
    response.forEach(movei => {
        tableBody.innerHTML += `
    <tr>
        <td>${movei.name}</td>
        <td>${movei.director}</td>
        <td>${movei.premieredYear}</td>
        <td><button type="button" class="btn btn-light" moveiId ="${movei._id}" data-bs-toggle="modal"
        data-bs-target="#updateData" onclick = "takeId(this)">update</button></td>
    </tr>
    `
    });
}

let id = null
async function takeId(element) {
    const moveiId = element.getAttribute("moveiId")
    id = moveiId

    const request = await fetch(`${url}/${id}`)
    const response = await request.json()
    document.getElementById('newMoveiNameValue').value = response.name;
    document.getElementById('newMoveiDirectorNameValue').value = response.director;
    document.getElementById('newMoveiPremieredYearValue').value = response.premieredYear;
}


async function addNewMovei() {
    const moveiName = document.getElementById("moveiNameValue")
    const directorName = document.getElementById("moveiDirectorNameValue")
    const premieredYear = document.getElementById("moveiPremieredYearValue")
    const request = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            name: moveiName.value,
            director: directorName.value,
            premieredYear: parseInt(premieredYear.value),
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    const response = await request.json()
    console.log(response);
}

async function updateData() {
    const newMovieName = document.getElementById('newMoveiNameValue').value;
    const newDirectorName = document.getElementById('newMoveiDirectorNameValue').value;
    const newPremieredYear = document.getElementById('newMoveiPremieredYearValue').value;

    const payload = {};
    payload.name = newMovieName;
    payload.director = newDirectorName;
    payload.premieredYear = parseInt(newPremieredYear);

    if (Object.keys(payload).length === 0) {
        console.log("No changes to update.");
        return;
    }

    const request = await fetch(`${url}/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(payload),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });

    const response = await request.json();
    console.log("Movie data has been updated");
    console.log(response);

    document.getElementById('newMoveiNameValue').value = "";
    document.getElementById('newMoveiDirectorNameValue').value = "";
    document.getElementById('newMoveiPremieredYearValue').value = "";

}
