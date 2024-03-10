import { useState } from "react";

function demo() {
  console.log("Hiiii")
} 
//Making components reusable by section component
export const Section = ({ title, description, isvisible, setIsVisible,saikiran }) => {
  return (
    <div className="border border-black p-2 m-2  ">
      <h1 className="font-bold text-xl">{title}</h1>
      {isvisible ? (
        <button
          className="cursor-pointer underline"
          onClick={() => {
            setIsVisible();
            saikiran();
            
            demo();
                   }}
        >
          Hide
        </button>
      ) : (
        <button
          className="cursor-pointer underline"
          onClick={() => {
            setIsVisible();
          }}
        >
          show
        </button>
      )}
      {isvisible && <p>{description}</p>} 
    </div>
  );
};

const Instamart = () => {
  const [visible,setVisibleSection] = useState('');
  return (
    <div className="bg-gray-200">
      <h1 className="font-bold text-3xl p-2 m-2">Instamart</h1>
      <Section
        title={"About Instamart"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices lacus at ante congue, non viverra metus pharetra. Integer ac ante eget augue condimentum ullamcorper ut vel magna. Quisque porta gravida ex eget mattis. Proin euismod volutpat leo. Proin sed ex sit amet nisi ultrices facilisis eu et nunc. Maecenas lacinia mi lacus, quis dictum lectus congue vel. In nec arcu non enim rhoncus pharetra. Morbi et auctor ex. Nullam mollis eros ac iaculis mollis. Curabitur in gravida odio, in rhoncus mi."
        }
        isvisible={visible==='about'}
        setIsVisible={() =>
          setVisibleSection('about')
        }
        saikiran={()=>{
          setVisibleSection("")
        }}
      /> 
      <Section
        title={"Careers Instamart"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices lacus at ante congue, non viverra metus pharetra. Integer ac ante eget augue condimentum ullamcorper ut vel magna. Quisque porta gravida ex eget mattis. Proin euismod volutpat leo. Proin sed ex sit amet nisi ultrices facilisis eu et nunc. Maecenas lacinia mi lacus, quis dictum lectus congue vel. In nec arcu non enim rhoncus pharetra. Morbi et auctor ex. Nullam mollis eros ac iaculis mollis. Curabitur in gravida odio, in rhoncus mi."
        }
        isvisible={visible==='careers'}
        setIsVisible={()=>setVisibleSection('careers')
        }
        saikiran={()=>{
          setVisibleSection('')
        }}
      />
      <Section
        title={"Team Instamart"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices lacus at ante congue, non viverra metus pharetra. Integer ac ante eget augue condimentum ullamcorper ut vel magna. Quisque porta gravida ex eget mattis. Proin euismod volutpat leo. Proin sed ex sit amet nisi ultrices facilisis eu et nunc. Maecenas lacinia mi lacus, quis dictum lectus congue vel. In nec arcu non enim rhoncus pharetra. Morbi et auctor ex. Nullam mollis eros ac iaculis mollis. Curabitur in gravida odio, in rhoncus mi."
        }
        isvisible={visible==='team'}
        setIsVisible={() =>
          setVisibleSection('team')
        }
        saikiran={()=>{
          setVisibleSection('')
        }}
      />
    </div>
  );
};
export default Instamart;
