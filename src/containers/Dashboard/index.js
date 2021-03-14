import React from "react";
import SideBar from "../../components/SideBar";
import Filter from "./Filter";
import Item from "./Item";
import "./styles.css";

const Home = (props) => {
  const [year, setYear] = React.useState(null);
  const [landing, setLanding] = React.useState(null);
  const [launch, setLaunch] = React.useState(null);
  const [mission, setMission] = React.useState([]);
  const [isLoading, setLoading] = React.useState(false);


  React.useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.spacexdata.com/v3/launches?limit=100${
        launch ? "&launch_success=" + launch : ""
      }${landing ? "&land_success=" + landing : ""}${
        year ? "&launch_year=" + year : ""
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        setMission(data);
        setLoading(false);
      });
  }, [launch, landing, year]);

  return (
    <div className="container">
      <SideBar>
        <Filter
          year={year}
          setYear={setYear}
          launch={launch}
          setLaunch={setLaunch}
          landing={landing}
          setLanding={setLanding}
        />
      </SideBar>

      <div className="main">
        <div className="item-container">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <>
              {mission.length === 0 ? (
                <h3>No Mission found</h3>
              ) : (
                mission.map((item) => {
                  return <Item key={item.flight_number} item={item} />;
                })
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
