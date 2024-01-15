const resultContainer = document.getElementById('table-results');
//  global variable
//  let currentSeason = season
//  let currentRound = round
async function getFone(season, round) {
    const response = await fetch(`http://ergast.com/api/f1/${season}/${round}/driverstandings.json`);
    const data = await response.json();

// loop through length in the the table lenght of array. or for OF loop. 
    resultContainer.innerHTML = '';


    for (let i = 0; i < 10; i++) {
        resultContainer.innerHTML += `
            <tr class="driverRow">
                <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].position}</td>
                <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.givenName} ${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.familyName}</td>
                <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Constructors[0].name}</td>
                <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.nationality}</td>
                <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].points}</td>
            </tr> 
        `;
    }

    // display the user search via textContent
    const displaySeasonId = document.getElementById('displaySeasonId');
    const displayRoundId = document.getElementById('displayRoundId');

    displaySeasonId.textContent = "Season Year: " + season;
    displayRoundId.textContent = "Round: " + round;
}

// function to submit results to apit via getFone 
const formulaSearchForm = document.getElementById('formulaOneSearch');

formulaSearchForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const idInputOne = formulaSearchForm.querySelector('#seasonId').value;
    const idInputTwo = formulaSearchForm.querySelector('#roundId').value;
    getFone(idInputOne, idInputTwo);
    idInputOne.value = '';
    idInputTwo.value = '';
});

const reloadform = document.querySelector('#reload');
reloadform.addEventListener('click', () => {
    window.location.reload(true);
});






