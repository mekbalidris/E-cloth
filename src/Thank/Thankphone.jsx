import styles from "./Thankphone.module.css";

function Thankphone(){
    return(
        <div 
        style={{
            height:"100vh",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            flexDirection:"column",
            gap:"5vw",
            fontSize:"8vw",
        }}>
            <div>Thanks For Chosing E-Cloth</div>
            <div>Shippment on the way!!</div>
        </div>
    )
}

export default Thankphone;