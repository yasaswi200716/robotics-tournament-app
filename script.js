let teams = JSON.parse(localStorage.getItem("teams")) || [];

updateLeaderboard();

function saveTeams() {
  localStorage.setItem("teams", JSON.stringify(teams));
}

function addTeam() {
  const name = document.getElementById("teamName").value.trim();

  if (!name) {
    alert("Enter a team name");
    return;
  }

  if (teams.some(t => t.name === name)) {
    alert("Team already exists");
    return;
  }

  teams.push({ name, score: 0 });
  document.getElementById("teamName").value = "";

  saveTeams();
  updateLeaderboard();
}

function addScore() {
  const name = document.getElementById("scoreTeam").value.trim();
  const score = Number(document.getElementById("scoreValue").value);

  const team = teams.find(t => t.name === name);

  if (!team) {
    alert("Team not found");
    return;
  }

  team.score += score;

  saveTeams();
  updateLeaderboard();
}

function updateLeaderboard() {
  const leaderboard = document.getElementById("leaderboard");
  leaderboard.innerHTML = "";

  teams
    .sort((a, b) => b.score - a.score)
    .forEach(team => {
      const li = document.createElement("li");
      li.innerHTML = `<span>${team.name}</span><span>${team.score} pts</span>`;
      leaderboard.appendChild(li);
    });
}
