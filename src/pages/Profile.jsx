import React from "react";

//import fetch hook
import useDataFetch from "../hooks/useDataFetch";

const Profile = ({ userName }) => {
  const [profile, loading, error] = useDataFetch(`https://api.github.com/users/${userName}`);

  console.log(profile);

  const items = [
    { field: "Name", value: profile.name },
    { field: "Bio", value: profile.bio },
    { field: "Email", value: "kvngnathan8420@gmail.com" },
    { field: "Repos No", value: profile.public_repos },
    { field: "Hireable", value: "Open to Work" },
  ];

  return (
    <div className="md:container m-8 ">
      {loading || error ? (
        <div className="flex items-center justify-center h-[65vh]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-900"></div>
      </div>
      ) : (
        <div className="grad h-[65vh] w-[96%] md:w-[70%] mx-auto rounded-[8px] flex flex-col 
        md:flex-row justify-around items-center p-[1.5rem] md:p-10">
          <div className="img w-full flex items-center justify-center overflow-hidden">
            <img
              className=" w-[220px] h-[220px] md:w-[250px] md:h-[250px] rounded-[8px] mb-4 md:mb-0"
              src={profile.avatar_url}
              alt="img"
            />
          </div>

          {/* text */}
          <div className="w-full h-full flex flex-col  justify-center">
            {items.map((item) => (
              <div className=" mb-2 md:mb-4 " key={profile.id}>
                {item.field == "Name" && <span>&#128526; </span>}
                {item.field == "Bio" && <span>&#128220; </span>}
                {item.field == "Repos No" && <span>&#x1F44D; </span>}
                {item.field == "Hireable" && (
                  <span>&#x1F468;&#x200D;&#x1F4BB; </span>
                )}
                {item.field == "Email" && <span>&#x1F4EC; </span>}
                <span>{item.field} - </span>
                <span>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
