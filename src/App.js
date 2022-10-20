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
    <div className="h-screen flex flex-col gap-5 items-center bg-gradient-to-bl to-green-800 from-gray-800 justify-center text-black font-medium text-lg">
      <div className="desk:w-[600px] desk:h-[500px] mobile:w-[350px] mobile:h-[400px] flex flex-col bg-gradient-to-bl from-green-600 items-center justify-center to-gray-600 rounded-lg">
        <div className="w-[85%] h-[90%] gap-10 items-center flex flex-col">
          <div className="w-[90%] h-[125px] flex items-center justify-between">
            <img src={picture?.large} className="rounded-full desk:w-[125px] desk:h-[125px] mobile:w-[75px] mobile:h-[75px]" alt="profile-image" />
            <h1 className="font-bold desk:text-xl mobile:text-sm">{name?.title}. {name?.first} {name?.last}</h1>
          </div>
          <div className="w-[90%] h-[50px] flex items-center justify-between" title={`${email?.length > 40 ? `${email}`:""}`}>
            <GrMailOption color="black" className="desk:ml-10 mobile:ml-5" size={window.innerWidth > 600 ? "40":"30"}/>
            <a className="font-base desk:text-lg mobile:text-sm">{email?.length > 40 ? "":`${email}`}</a>
          </div>
          <div className="w-[90%] h-[50px] flex items-center justify-between">
            <BsTelephone color="black" className="desk:ml-10 mobile:ml-5" size={window.innerWidth > 600 ? "40":"30"}/>
            <h1 className="font-base desk:text-lg mobile:text-sm">+{phone}</h1>
          </div>
          <div className="w-[90%] h-[50px] flex items-center justify-between">
            <FiMapPin color="black" className="desk:ml-10 mobile:ml-5" size={window.innerWidth > 600 ? "40":"30"}/>
            <h1 className="font-base desk:text-lg mobile:text-sm desk:mt-3">{location?.city}/{location?.country}</h1>
          </div>
          <p clas>Register Date :{" "}
          {String(registered?.date).slice(0, 10).replaceAll("-", " / ")}</p>
        </div>    
      </div>
      <button onClick={() => getUser()} className="w-[200px] h-[60px] bg-gradient-to-bl from-green-600 to-gray-600 rounded-lg hover:scale-90 transition-all duration-200">Random User</button>
    </div>
  );
}

export default App;
