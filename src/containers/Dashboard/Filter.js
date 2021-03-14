import React from "react";

const years = [
  2006,
  2007,
  2008,
  2009,
  2010,
  2011,
  2012,
  2013,
  2014,
  2015,
  2016,
  2017,
  2018,
  2019,
  2020,
];

const Filter = (props) => {
  const { year, setYear, launch, setLaunch, landing, setLanding } = props;

  return (
    <>
      <div>
        <h3>Filters</h3>
      </div>
      <div className="subheading">
        <h5>Launch Year</h5>
        <div className="container">
          {years.map((item) => (
            <button
              onClick={(e) => setYear(e.target.value)}
              className={year === item ? "active" : ""}
              value={item}
            >
              {item}
            </button>
          ))}
        </div>
        <h5>Successful Launch</h5>
        <div className="container">
          <button
            onClick={(e) => {
              setLaunch(e.target.value);
            }}
            className={launch === "true" ? "active" : ""}
            value={true}
          >
            True
          </button>
          <button
            onClick={(e) => setLaunch(e.target.value)}
            className={launch === "false" ? "active" : ""}
            value={false}
          >
            False
          </button>
        </div>
        <h5>Successful Landing</h5>
        <div className="container">
          <button
            value={true}
            className={landing === "true" ? "active" : ""}
            onClick={(e) => setLanding(e.target.value)}
          >
            True
          </button>
          <button
            value={false}
            className={landing === "false" ? "active" : ""}
            onClick={(e) => setLanding(e.target.value)}
          >
            False
          </button>
        </div>
      </div>
    </>
  );
};

export default Filter;
