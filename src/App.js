import { useEffect, useState } from 'react';
import './App.css';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set, onValue } from "firebase/database";
import firebaseConfig from './firebase.config';



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Get a reference to the database service
const db = getDatabase(app);

function App() {
  const [inputData, setInputData] = useState([])
  const [data, setData] = useState(null)
  const [userName, setUserName] = useState("");

  console.log(inputData);
  const writeUserData = async () => {
    setInputData(prev => { return( [ ...prev, {
        username: userName,
        email: `${userName}@gmail.com`
      } ] ) })
    // set(ref(db, 'users/'), {
    //   username: name,
    //   email: `${name}@gmail.com`
    // })
    //   .then(() => {
    //     console.log('successful');
    //   })
    //   .catch((error) => {
    //     // const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.log("errorMessage --------", errorMessage);
    //   });
  }

  const changeHandler = (event) => {
    setUserName(event.target.value)
  }
  useEffect(() => {
    const starCountRef = ref(db, 'users/');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      setData(data);
      // updateStarCount(postElement, data);
    });
  }, [])

  return (
    <div className="App">
      <input type="text" onChange={changeHandler} />
      <button onClick={() => writeUserData()}>Add</button>
      <div>
        <h3>{data?.username}</h3>
      </div>
    </div>
  );
}
export default App;
