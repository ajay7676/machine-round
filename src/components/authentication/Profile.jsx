import axios from "axios";
import { useEffect, useState } from "react";

const Profile = () => {
  const [profileData, setProfileData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUserProfile = async () => {
    const token = await JSON.parse(localStorage.getItem("platzi-token"));
    setLoading(true);
    const header = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await axios.get(
        "https://api.escuelajs.co/api/v1/auth/profile",
        header
      );
      setLoading(false);
      setProfileData(response?.data);
      return response.data;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getUserProfile();
  }, []);

  console.log(profileData);
  const { email, updatedAt, password, name, role, avatar } = profileData;
  const date = new Date(updatedAt);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const formattedDate = `${day} - ${month} - ${year} ${hours}:${minutes}:${seconds}`;
  return (
    <>
      {loading ? (
        <h1> Data is Loading ...</h1>
      ) : (
        profileData && (
          <div className="w-full h-[calc(100vh-50px)] flex items-center justify-center">
            <div className="max-w-sm w-full lg:max-w-full lg:flex">
              <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                  <p className="text-sm text-gray-600 flex items-center">
                    <svg
                      className="fill-current text-gray-500 w-3 h-3 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                    </svg>
                    {email}
                  </p>
                  <div className="text-gray-900 font-bold text-xl mb-2">
                    Can coffee make you a better developer?
                  </div>
                </div>
                <div className="flex items-center">
                  <img
                    className="w-10 h-10 rounded-full mr-4"
                    src={avatar}
                    alt="Avatar of Jonathan Reinink"
                  />
                  <div className="text-sm">
                    <p className="text-gray-900 leading-none ">name : {name}</p>
                    <p className="text-gray-600">Password : {password}</p>
                    <p className="text-gray-600">Role Type : {role}</p>
                    <p className="text-gray-600">Date : {date.toString()}</p>
                    <p className="text-gray-600">
                      Date Format :: {formattedDate}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default Profile;
