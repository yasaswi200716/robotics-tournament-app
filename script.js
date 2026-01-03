let teams = [];

function addTeam() {
  const name = document.getElementById("teamName").value.trim();

  if (name === "") {
    alert("Enter a team name");
    return;
  }

  const exists = teams.find(team => team.name === name);
  if (exists) {
    alert("Team already exists");
    return;
  }

  teams.push({ name: name, score: 0 });
  document.getElementById("teamName").value = "";
  updateLeaderboard();
}

function addScore() {
  const name = document.getElementById("scoreTeam").value.trim();
  const score = Number(document.getElementById("scoreValue").value);

  const team = teams.find(team => team.name === name);

  if (!team) {
    alert("Team not found");
    return;
  }

  team.score += score;
  document.getElementById("scoreValue").value = "";
  updateLeaderboard();
}

function updateLeaderboard() {
  const leaderboard = document.getElementById("leaderboard");
  leaderboard.innerHTML = "";

  teams
    .sort((a, b) => b.score - a.score)
    .forEach(team => {
      const li = document.createElement("li");
      li.textContent = `${team.name} - ${team.score} pts`;
      leaderboard.appendChild(li);
    });
}
