const newVisitorSheetUrl = "https://docs.google.com/spreadsheets/d/1IJByfa7lQC5S7r-eOB3HzJdVFMCDbJuEqewI90ZYpAU/edit?usp=sharing"
const newFoodPantrySheetUrl ="https://docs.google.com/spreadsheets/d/1i3mF6yyyWpJ3-hTyFNNvUpb4WQY0td-LqOOIlbg2LtY/edit?usp=sharing"

const GoogleSheets = () => {
    const openVisitorSheet = () =>{
        window.open(newVisitorSheetUrl, '_blank', 'noopener', 'noreopener')
    }
    const openFoodPantrySheet = () =>{
        window.open(newFoodPantrySheetUrl, '_blank', 'noopener', 'noreopener')
    }

    return (
        <div className="google-sheets">
            <h2 className="google-sheets-title">Google Sheets</h2>
            <button className="new-visitor-sheet-button" onClick={openVisitorSheet}>Todays Visitors </button>
            <button className="food-pantry-sheet-button" onClick={openFoodPantrySheet}>Food Pantry Registry</button>
        </div>
    )
}
export default GoogleSheets;