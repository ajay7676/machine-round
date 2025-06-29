import React, { useEffect, useState } from "react";

const RefreshDashboard = () => {
  const [userList, setUserList] = useState([]);

  const fetchUserData = async () => {
    try {
      const response = await fetch(
        `https://67f506be913986b16fa2e2c0.mockapi.io/user`
      );
      const data = await response.json();
      setUserList(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);
   console.log(userList)

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="card grid grid-cols-1 gap-4 sm:grid-cols-2  md:grid-cols-3 bg-white text-slate-700  w-[760px] min-h-[450px] rounded-2xl p-5">
          {userList.length > 0 ? (
            <>
              {
                userList.map((user) =>  (
                    <div key={user.id} className="bg-[#eaeaea] flex flex-col items-center justify-center rounded-md border-1 border-gray-200">
                    <p className="">Name : {user.name}</p>
                    <p className='py-9 text-3xl'>Email: {user.email}</p>
                    <p className='py-9 text-3xl'>Gender: {user.gender}</p>
                    <p className='py-9 text-3xl'>Age: {user.age}</p>
                </div>
                ) )
              }
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default RefreshDashboard;
