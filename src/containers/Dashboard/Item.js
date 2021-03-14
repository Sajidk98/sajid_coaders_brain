import React from "react";

const Item = ({ item }) => {
  return (
    <div className="item card">
      <img alt="not found" src={item.links.mission_patch_small} />
      <div className="item-text">
        <p>
          <strong>{item.mission_name}</strong>
        </p>
        {item.mission_id.length !== 0 && (
          <>
            <p>
              <strong>Mission Ids</strong>
            </p>

            <ul>
              {item.mission_id.map((id) => {
                return <li key={id}>{id}</li>;
              })}
            </ul>
          </>
        )}
        <p>
          <strong>Launch Year: </strong>
          <span className="secondary">{item.launch_year}</span>
        </p>
        <p>
          <strong>Successfull Launch: </strong>
          <span className="secondary">
            {item.launch_success ? "True" : "False"}
          </span>
        </p>
        <p>
          <strong>Successfull Landing: </strong>
          <span className="secondary">
            {item.rocket.first_stage.cores[0].land_success ? "True" : "False"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Item;
