// fucking styles
const style={
    width:150,
    backgroundColor:"white",
    borderRadius:10,
    border:"1px solid gray",
    padding:10,
    textAlign:"center",
    boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)",
};

// creates a card CardComponent using children
export function CardComponent({title, firstName, lastName, image}){
    return(
        <div style={style}>
            <img
                src={image}
                alt="profile"
                style={{
                    width:70, height:70, borderRadius:"50%", marginBottom:10,
                }}
            />
            <div style={{fontSize: 14, fontWeight:"bold", marginBottom: 5 }}>
                {title} {firstName} {lastName}
            </div>
        </div>
    );
}