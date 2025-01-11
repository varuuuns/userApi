import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { CardComponent } from "./Card";

function UserComponent() {
    const [users, setUsers] = useState([]);
    const temp=useRef(null);

    // uses API to get a random user
    async function getUser() {
        const temp = await axios.get("http://localhost:3000/");
        const response = temp.data;

        setUsers([...users, response]);
    }

    // scrolls the window page to bottom
    useEffect(() => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
        });
    }, [users]);

    // maps users array to CardComponent
    const toCard=users.map((user,index)=>(
        <CardComponent
            key={index}
            title={user.title}
            firstName={user.firstName}
            lastName={user.lastName}
            image={user.image}
        />
    ));

    // fucking styles
    return (
        <div style={{ textAlign:"center", padding:20}}>
            <h1 style={{
                marginBottom: 20, 
                fontFamily: "Arial, sans-serif" 
            }}>
                Random Users
            </h1>
            <div ref={temp} style={{ 
                display: "flex", 
                flexWrap: "wrap", 
                gap: "20px", 
                justifyContent: "center"
            }}>
                {toCard}
            </div>
            <button
                onClick={getUser}
                style={{
                    marginTop: 20,
                    padding: "10px 20px",
                    fontSize: 16,
                    borderRadius: 5,
                    border: "1px solid gray",
                    backgroundColor: "white",
                    cursor: "pointer",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                }}
            >
                Load More Users
            </button>
        </div>
    );
}

function App() {
    return (
        <>
            <UserComponent />
        </>
    );
}

export default App;