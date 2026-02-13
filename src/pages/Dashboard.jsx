import { useEffect, useState } from "react";
import "../style/Dashboard.css";
import { getUserName } from "../auth/authUtils";

function Dashboard() {
  const [name, setName] = useState(""); // new state for user name
  const [matches, setMatches] = useState([
    { id: 1, home: "Arsenal", away: "Chelsea", date: "2024-09-12", thumbnail: "/thumbnail_1.png" },
    { id: 2, home: "Barcelona", away: "Real Madrid", date: "2024-09-18", thumbnail: "/thumbnail_2.png" },
    { id: 3, home: "Tottenham", away: "Everton", date: "2024-09-22", thumbnail: "/thumbnail_2.png" }
  ]);

  useEffect (() => {
    async function loadUser() {
      try {
        const userName = await getUserName();
        setName(userName);
      } catch (err)  {
        console.error("Error loading user:", err);
        setName("Guest");
      }
    }
    loadUser();
  }, []);

    return (
        <div>
            <nav>
                <ul>
                    <li id="liHome">Home</li>
                    <li id="liDash">Dashboard</li>
                    <li id="liProf">Profile</li>
                </ul>
            </nav>

            <h2>{name}</h2>

            <div id="library">
                {matches.map(match => (
                    <div key={match.id} className="match-card">
                        <img src={match.thumbnail} alt={`${match.home} vs ${match.away}`} />
                        <h3>{match.home} vs {match.away}</h3>
                        <p>{match.date}</p>
                    </div>
                ))}
            </div>
          <div id="sidebar">
            <div id="logoContainer">
                <img src="./SoccerVis_logo2.png"/>
            </div>
            <aside id="sidebar">
            
            </aside>

          </div>
        </div>
    );
}

export default Dashboard;