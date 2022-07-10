import React, { Component } from "react";

// const Home = () =>{
// const [userName, setUserName] = useState('');
//  const userHomePage= async () => {
//     try{
//        const res = await fetch('/getdata',{
//       method: "GET",
//       headers: {
//         "Content-type": "application/json"
//        },
//        });
//        const data = await res.json();
//        console.log(data);
//        setUserName(data.fname);

//     }catch (err) {
    
//       console.log(err);
//     }
//   }

//   useEffect(() => {
//     userHomePage();
//   }, []);
class Home extends Component {
  render() {
  return (
      <>
        <div className="divbg">
          <main>
            
            <h2 className="wlcm1"> Welcome to </h2>
            <h1 className="wlcm2">Happy Trip</h1>
          </main>
        </div>
      </>
    );
  }
}

export default Home;
