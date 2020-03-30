# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Software Engineneering Immersive: Project 4 (group)

This was the third project I built during the General Assembly Software Engineering Immersive course. The project was built in a week. This application was built by myself and Astara Cambata (https://github.com/astara303), Latch Jack, https://github.com/latchjack and Rory Fletcher, (https://github.com/Fletch-7)

**<h1>GeocachR</h1>**
As a team we built a full-stack application. The backend uses an Express API to serve our own data from a Mongo database, and our frontend is built in React.

The app is a geocaching site. Geocaching is a real-world treasure hunting game. Participants navigate to a specific set of GPS coordinates and then attempt to find the geocache container hidden at that location. The user can complete, or make their own.

**<h1>Built With</h1>**
* HTML5
* CSS & Bulma
* Javascript
    * ECMAScript6
    * React.js
    * axios
    * React.js
    * Node.js
    * Express.js
* NoSQL
    * MongoDB    
* GitHub
* API's
    * Uber's React Mapbox-GL API
    * OpenWeather API
* Testing
    * Manual: Insomnia
    * Automated: Mocha & Chai
* Additional Packages:
    * Mongoose
    * Bcrypt
    * JsonWebToken
    * body-parser
    * React Select
    * Font Awesome
    * Affinity Designer

**<h1>Deployment</h1>**

This web app is deployed on Heroku and it can be found here - https://geocacher.herokuapp.com/

**<h1>Getting Started</h1>**
Use the clone button to download the source code. In the terminal enter the following commands...

```javascript
<!-- To install all the packages listed in the package.json: -->
$ yarn

<!-- Run the app in your localhost: -->
$ yarn start

<!-- Check the console for any issues and if there are check the package.json for any dependancies missing  -->
```

**<h1>User experience</h1>**

The user will arrive at the homepage. We have a navbar at the top of the screen with clickable links for the user to explore the site and its functions.

![homepage](https://i.imgur.com/hZxclBI.png)

The user can browse through the index of trails, and solve them using the clues on hand. 

![index](https://i.imgur.com/tOkOOEy.png)

![showpage](https://i.imgur.com/8twNUYF.png)

However they can not save or complete trails, or build a profile, unless they are registered on the site.

User's are able to register to the site via the registration page.

![register page](https://i.imgur.com/zS7sfGU.png)

They are then re-directed to the login page. 

![login page](https://i.imgur.com/99GM217.png)

Once registered a user can log in to the site which will allow them to create, edit and delete a trail. They can also save any trails they would like to take part in, which will then be displayed on the user's profile page.

![profile page](https://i.imgur.com/wqPyaCe.png)

Once the user has added a trail to the site, it will be saved onto their profile page.

![profile with new trail](https://i.imgur.com/XOBuMfc.png)

The user is able to edit their trail at any time via the edit, or delete form. 

![new trail](https://i.imgur.com/p0bL5BA.png)

The edit button will take them to a prepopulated form, where they can easily change any of their previous inputs. 

![edit trail](https://i.imgur.com/HjBHhRJ.png)

The user can also use the 'log book' - a form on the individual trails page, which allows the user to log if they have completed this trail. They can upload a photo, or make a comment, which then appears on the page itself once submitted.

![trail form](https://i.imgur.com/ATwV7Mz.png)

![completed form](https://i.imgur.com/UJ4fghX.png)

There is also a FAQ, About and Contact page, which has a lovely photo of the the team!

![contact page](https://i.imgur.com/2srN3fG.png)

**<h1>Planning</h1>**

We wanted to create a app that would encourage outdoor activity and connection, and decided that the geocache model satisfied both these aims. As well as allowing us to incorporate game elements in our app.

We also wanted to use a MapBox API, as well as our own custom built one.

**<h2>Backend</h2>**
We first got to work on building the backend of the project, for which we used MongoDB. This was essential as we needed to store a lot of information about all of the trails and our users. We designed our models so we knew how our models would connect and then started building.

This diagram displays the relationships between the models within our database.
![backend](https://i.imgur.com/KgkCyDH.png)

**<h2>Frontend</h2>**

We used google sheets to log the pages we wanted in the front end.
![front end](https://i.imgur.com/00KeyM8.png)

We also used googlesheets to ensure that we could keep track of what everyone was working on, as well as set tasks for ourselves and deadlines. 
![working schedule](https://i.imgur.com/FH5xRjw.png)

**<h1>My contributions</h1>**

I worked on a significant amount of the front end for this project, initially taking charge of forms. We realised they would be in an integral part of it's functionality and so I built all components that required user input. This included login, registration, trail edit, new and show.

With regards to forms I dealt with the image upload functions, which enabled the user to add an image of both their new trail and as evidence that they had completed a trail.

```javascript
handleUpload = async ({ target: { files } }) => {
      const data = new FormData
      data.append('file', files[0])
      data.append('upload_preset', 'rksde5wr')
      const res = await axios.post(' https://api.cloudinary.com/v1_1/dbpx50jcj/image/upload', data)
      console.log(res)
      this.setState({ image: res.data.url }, () => {
        this.handleChange({ target: { name: 'image', value: res.data.url } })
      })
    }
```

I also implemented the 'Geocache Logbook' on the trail show page. I ensured that when submitted the form would reload to the page, and then display itself on the page as a prepopulated comment that could be viewed and deleted by the owner.

My code for displaying the information the user inputted into the 'logbook'is below.

```javascript
<h1 className='commentTitle'>Comments on this Geocache!</h1>
              <br />
              <article className="media">
                {this.state.trail.completion.map(complete => {
                  return <div key={complete._id}>
                    <div className='box'>
                      <p>{complete.user.username}</p>
                      <div className="media-left">
                        <figure className="image is-64x64">
                          <img src={complete.image} />
                        </figure>
                      </div>
                      <div className='media-content'>
                        <div className='content'>
                          <p>{complete.text}</p>
                        </div>
                      </div>
                    </div>
                    {this.isCompleteOwner(complete) && <button onClick={() => this.handleCompleteDelete(complete)} className="button is-danger">Delete my comment</button>}
                  </div>
                })
                }
```

I did a lot of styling for the app as well, ensuring the fonts and displays were consistant and clean throughout the site as well as adding in flourishes like icons fron font awesome. 

For the backend I wrote authorisation tests for login and register to ensure they worked correctly. 


**<h1>Key Learnings</h1>**
Working as part of a team, and pushing to the same github without causing clashes was a huge learning. I gained a huge amount of understanding about how all push to the same repository sensibly and responsibly, without loosing work. I also gained a lot of soft skills in terms of team-work, delegation and how clear communication can lead to a successfull end product. 

**<h1>Challenges and Wins</h1>**

I found using the third party cloudinary component tricky at times, as this was my first experience in using it's functionality in different ways. I also find it challening to get the information from logbook completion form to display correctly on the same page (which already had a lot of moving parts), rather then push the user to a new page. I was extremely pleased when I managed to get this to work sucessfully.

**<h1>Future Improvements</h1>**
There were some mobile responsive issues with the map, which remained static when the browser window was shrunk. This would be fixed. Added functions such as adding friends and searching other users would be a bonus, and make the app more fun to use.



