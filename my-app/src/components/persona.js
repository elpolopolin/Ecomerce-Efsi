import { useParams } from "react-router-dom";

const Persona = () => {
 const { personaId } = useParams();
 
 return (
   <div>
   <h1>ID: {personaId} </h1>
   </div>
 );
};
export default Persona;

