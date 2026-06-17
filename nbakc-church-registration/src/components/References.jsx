
const cssURL = "https://getcssscan.com/css-buttons-examples";
const dotENVURL = "https://www.npmjs.com/package/dotenv";
const googleOAuthURL = "https://www.npmjs.com/package/@react-oauth/google";
const evnYTVideoURL ="https://youtu.be/17UVejOw3zA?si=rr8TzSyiTWl1Vdi9";
const googleOauthVideoURL = "https://youtu.be/GuHN_ZqHExs?si=zsbxx3jXpt4UU8JQ";



const References = () => {
     const openCSSURL = () =>{
        window.open(cssURL, '_blank', 'noopener', 'noreopener')
    }
    const openDOTENVURL = () =>{
        window.open(dotENVURL, '_blank', 'noopener', 'noreopener')
    }
     const openGoogleOAuthURL = () =>{
        window.open(googleOAuthURL, '_blank', 'noopener', 'noreopener')
    }
     const openENVYTVideoURL = () =>{
        window.open(evnYTVideoURL, '_blank', 'noopener', 'noreopener')
    }
     const openGoogleOauthVideoURL = () =>{
        window.open(googleOauthVideoURL, '_blank', 'noopener', 'noreopener')
    }

    return (
        <div className="references-page">
            <h1>References</h1>
            <button className="new-visitor-sheet-button" onClick={openGoogleOauthVideoURL}>React Google Login: Easy Authentication Tutorial </button>
            <button className="new-visitor-sheet-button" onClick={openGoogleOAuthURL}>@react OAuth2 | Google </button>
            <button className="new-visitor-sheet-button" onClick={openENVYTVideoURL}>3.4 Hiding API Keys with Environment Variables (dotenv) and Pushing Code to GitHub</button>
            <button className="new-visitor-sheet-button" onClick={openDOTENVURL}>dotEnv-npm</button>
            <button className="new-visitor-sheet-button" onClick={openCSSURL}>Button CSS Examples</button>
        </div>
    )
}

export default References;