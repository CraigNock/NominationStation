
# Nomination Station

Welcome to the *Nomination Station*!

An application for users to browse for and select their favourite films for award nomination!

## Live Here: https://nominationstation.herokuapp.com/

---

Built with **TypeScript**, **JavaScript**, and **React**.

Front end Build is served by a small Express.js server.

---

## Screenshots
<div display='flex' flexDirection='row' justifyContent='center' >
<img width='80%' src='client\src\assets\screenshots\screen1.png'/>
<img width='40%' src='client\src\assets\screenshots\mobile.gif'/>
<img width='40%' src='client\src\assets\screenshots\loader.gif'/>
<img width='80%' src='client\src\assets\screenshots\responsive.gif'/>
<img width='40%' src='client\src\assets\screenshots\screen2.png'/>
<img width='40%' src='client\src\assets\screenshots\screen3.png'/>
</div>

---

## Installing

 Prerequisites:

- Before you begin, it is best to have installed the latest version of Typescript, Node.js and Yarn.

1. Open up your favourite code editor (such as Visual Studio Code) and git clone the repository.
2. Change directory to the project folder and open the terminal there.
3. In the terminal enter **$yarn install**
4. Change to the **client** directory **$cd client**
5. Enter **$yarn install** 
6. Enter **$yarn build**
7. Head over to http://www.omdbapi.com/apikey.aspx and grab a **API KEY**
8. In the client folder create a .env file and in it write  **REACT_APP_OMDB_API_KEY=*YOUR API KEY FROM STEP 7***
7. On completion of build, simply navigate terminal back to the **parent** directory and enter *$yarn start*
8. In your browser navigate to "http://localhost:8000/", your app should be waiting! 

---

## Features

**Saves your nominations!**
- Your nomination list will be kept in your browser's local storage. This will ensure you never lose your selections on refresh or even browser closure!
- On full nomination selection, be rewarded with an informative banner.

**Search for Films!**
- Using the OMDb API, the app will search for your films based on title key words. Searches as you type and comes with a convenient **clear** button!

**Search More and More and More...**
- Get more results on your screen by simply pressing "Show More"! No refetching results and no sluggishly large initial amounts of results!

**Responsive Layout**
- Mobile to Tablet to Desktop to even Widescreen, change on the go and increase how many results are visible! You can rest easy knowing that your great experience will be uninterrupted. 

**Get the deets!**
- Click on any film card to bring up that movies' finer details! This convenient overlay will not affect your search progress.

**Loading...**
- The Nomination Station is swift, so you might not catch it, but look out for the quaint loading animation.

**Luxury!**
- Nominate in the comfort of an art-deco, silver screen era inspired look and smooth animations. Includes custom Browser tab Icon for the discerning user.

---

## Contact

If you wish to contact the creator you can reach me by:
- Email: craigwnockels@gmail.com
- LinkedIn: https://www.linkedin.com/in/craig-nockels/

Or check out my other projects at https://github.com/CraigNock