import axios from "axios"
import { useEffect, useState } from "react";
import { GrMailOption } from "react-icons/gr"
import { BsTelephone } from "react-icons/bs"
import { FiMapPin } from "react-icons/fi"

function App() {
  const [Getdata, SetData] = useState({})
  const url = "https://randomuser.me/api";

  const getUser = async () => {
    const { data } = await axios(url);
    console.log(data.results[0]);
    SetData(data.results[0]);
  }

  useEffect(() => {
    getUser();
  }, []);

  const { name, dob, email, phone, picture, location, registered } = Getdata;
  
  return (
    <div className="h-screen flex flex-col gap-5 items-center bg-gradient-to-bl to-green-800 from-gray-800 justify-center text-white font-medium text-lg">
      <div className="w-[35vw] h-[50vh] flex flex-col bg-gradient-to-bl from-green-600 items-center justify-center to-gray-600 rounded-lg">
        <div className="w-[85%] h-[90%] items-center justify-center flex flex-row">
          <div className="w-[30%] h-[90%] flex flex-col gap-10 items-center">
            <img src={picture?.large} className="rounded-full w-[125px] h-[125px]" alt="profile-image" />
            <GrMailOption size={40}/>
            <BsTelephone color="black" size={40}/>
            <FiMapPin color="black" size={40}/>
          </div>
          <div className="w-[70%] h-[90%] flex flex-col gap-10 items-center">
            <h1 className="font-bold text-xl mt-10">{name?.title}. {name?.first} {name?.last}</h1>
            <h1 className="font-base text-md mt-14">{email}</h1>
            <h1 className="font-base text-md mt-3">+{phone}</h1>
            <h1 className="font-base text-md mt-3">{location?.city}/{location?.country}</h1>
          </div>
        </div>
        <p clas>Register Date :{" "}
          {String(registered?.date).slice(0, 10).replaceAll("-", " / ")}</p>
      </div>
      <button onClick={() => getUser()} className="w-[10vw] h-[7vh] bg-gradient-to-bl from-green-600 to-gray-600 rounded-lg hover:scale-90 transition-all duration-200">Random User</button>
    </div>
  );
}

export default App;
