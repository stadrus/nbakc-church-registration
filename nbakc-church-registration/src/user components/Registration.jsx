const newVisitorFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSe3BAZe-PCNF82yp1A5R-weMueqFU0fs9heFRcKJDHdk1Fu6g/viewform?usp=header"
const newFoodPantryFormUrl ="https://docs.google.com/forms/d/e/1FAIpQLSeoo3t3P2gnjEaH0H2SX95-smcfIzaubntWRCV0KQKFANTqVQ/viewform?usp=header"

const Registration = () => {
    const openVisitorForm = () =>{
        window.open(newVisitorFormUrl, '_blank', 'noopener', 'noreopener')
    }
    const openFoodPantryForm = () =>{
        window.open(newFoodPantryFormUrl, '_blank', 'noopener', 'noreopener')
    }

    return (
        <div>
            <h2>What brings you to church today?</h2>
            <button className="new-visitor-button" onClick={openVisitorForm}>New Visitor </button>
            <button className="food-pantry-button" onClick={openFoodPantryForm}>Food Pantry</button>
        </div>
    )
}
export default Registration;