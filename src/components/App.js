
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const allCitiesInIndia = [
  "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Ahmedabad", "Chennai", "Kolkata", "Surat", "Pune", "Jaipur",
  "Lucknow", "Kanpur", "Nagpur", "Indore", "Thane", "Bhopal", "Visakhapatnam", "Patna", "Vadodara", "Ghaziabad",
  "Ludhiana", "Agra", "Nashik", "Faridabad", "Meerut", "Rajkot", "Kalyan-Dombivli", "Vasai-Virar", "Varanasi",
  "Srinagar", "Aurangabad", "Dhanbad", "Amritsar", "Navi Mumbai", "Prayagraj", "Howrah", "Ranchi", "Jabalpur",
  "Gwalior", "Coimbatore", "Vijayawada", "Chandigarh", "Mysore", "Gurgaon", "Bhubaneswar", "Noida", "Kochi",
  "Thiruvananthapuram", "Dehradun", "Jodhpur", "Madurai", "Raipur", "Kota", "Guwahati", "Bhubaneswar", "Solapur",
  "Tiruchirappalli", "Bareilly", "Moradabad", "Guntur", "Bikaner", "Saharanpur", "Gorakhpur", "Bhiwandi", "Jamshedpur",
  "Cuttack", "Firozabad", "Amravati", "Ujjain", "Jhansi", "Nellore", "Jammu", "Belgaum", "Mangalore", "Kurnool",
  "Malegaon", "Gaya", "Tirupati", "Udaipur", "Davanagere", "Kozhikode", "Akola", "Kurnool", "Rajahmundry", "Bokaro",
  "South Dumdum", "Bellary", "Muzaffarpur", "Kollam", "Bhilai", "Ahmednagar", "Rourkela", "Bardhaman", "Kakinada",
  "Nanded", "Bhavnagar", "Warangal", "Durgapur", "Shimoga", "Tumkur", "Mathura", "Chandrapur", "Darbhanga", "Panipat"
];

  const [input,setInput] = useState("");
  const [suggestionsOff,setSuggestionsOff] = useState(false);
  return (
    <div style={{display:"flex",alignItems:"center", justifyContent:"center",height:"100vh"}}>
      <div style={{border:"1px solid black",padding:"10px"}}>
        <h3>Search Cites</h3>
        <input type="text" value={input} onChange={(e)=>{
          setInput(e.target.value);
          setSuggestionsOff(false);
        }} placeholder="Enter a city name"/> 
        <ul style={{overflowY:"scroll",maxHeight:"30vh"}}>
          {input!==''&&!suggestionsOff&&allCitiesInIndia.filter((ele)=>ele.toLowerCase().includes(input.toLowerCase())).map((ele)=><li className="item" onClick={()=>{
            setInput(ele);
            setSuggestionsOff(true);
          }}>{ele}</li>)}
        </ul>
      </div>
    </div>
  )
}

export default App
