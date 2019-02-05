Don't Send That Email!
=====================


*Don’t Send That Email* helps users send messages to coworkers, family or friends that convey the right tone. Sometimes it's hard to intepret the emotional message of an email or text.
*DSTE* uses an AI to preview the emotional tone of a message. Users can avoid sending a work email that sounds too casual. They can send personal messages that avoid negativity or hostility.
This puts a barrier between you and a bad email or messaging experience. We'll help you send a good email that conveys the right emotional tone.


##### Set up instructions

To clone the app to your local machine, follow these instructions.

1. Go to your command line and type `git clone https://github.com/Lambda-School-Labs/dont-send-that-email.git`
   This will clone the app onto your local machine.

2. `cd` into `dont-send-that-email`. You will find a list of files. The two you will be using are `client` and `server`.
   In both `client` and `server` directories you need to type `npm install` to get all the libraries that help run the app.

3. In both the `client` and `server` directories you will find a file called `dotenv` change those files to `.env`.  It has to have the period before `env`.

4. In the `.env` files you will see a list of the secret keys we use. Some of them are missing. You will need to get your own versions of those keys.  See the next step on getting those secret keys.

*An example of the server .env file*

> STRIPE\_API\_KEY=paste your own key here

>AUTH0\_CLIENT\_ID=paste your own key here

>AUTH0\_DOMAIN=dont-send-that-email.auth0.com

>AUTH0\_CLIENT\_SECRET=paste your own key here

>AUTH0\_CALLBACK\_URL=http://localhost:5000/auth/callback

>API\_KEY=paste your own Watson key here

>REACT\_APP\_BACKEND\_URL="http://localhost:5000"

>FRONT\_END\_URL="http://localhost:3000"


*An example of the client .env file*
>REACT\_APP\_LOGIN\_URL="http://localhost:5000/auth/login"

>REACT\_APP\_PROFILE_URL="http://localhost:5000/auth/profile"

>REACT\_APP\_EMAILS_URL="http://localhost:5000/emails/"

>REACT\_APP\_PAYMENT_SERVER_URL="http://localhost:5000/billing"

>REACT\_APP\_STRIPE\_API\_PUBLISH\_KEY="paste your own key here"

>REACT\_APP\_BACKEND\_URL="http://localhost:5000"

>FRONT\_END\_URL="http://localhost:3000"



5. You will need to make three accounts for three keys. See below on how to get these keys.
  * [IBM Watson Tone Analysis API key](docs/watson_instructions.md)
  * [The Stripe key]()
  * [Auth0 key](docs/auth0)

6. In the `server` directory you need to get Knex. It's a library we use to manage our databases.
  Get it by typing `npm install knex`. This will install knex so you can install the database.

8. After you have Knex. In the `server` directory type `knex migrate:latest`.

7. Once you have your keys copied into the `.env` file in both `client` and `server` directories, you can run `npm start` in both directories.
  You should see `Server running on port: 5000` in the `server` directory.
  You should see `something` in the `client` directory.





Live Page URL: https://dont-send-that-email.netlify.com/



Click 'Get Started' on the Landing Page.

Log in with a google account.

This takes us to the home page, where documents are displayed. We can navigate to the create email page by clicking the 'Create Email' button. 

On the create email page, there are three input fields. From top to bottom, they are: the title of the email; the addressee of the email; and the body of the email.
We can click the 'Previous' or 'Next' arrow buttons to switch between versions of emails we have written. We can click on the 'Analyze' button to have our email analyzed for emotion analysis. We can click on the 'Save' button to save any changes made to their email. Lastly, we can send an email using the 'Send' button.

We can navigate to the Profile page to see user info and comparisons between free and paid services for the app. The 'Subscribe 30 Days' button can be clicked to add payment details and pay for a month of subscription.

Tech Used:
    Front End: React, React Router, Reactstrap, Axios

    Back End : Express, Node, Passport, Knex, Bcrypt

    APIs     : IBM Watson, Stripe, OAuth

    Libraries: Paper Kit 2 (Bootstrap V4)

    Services : Netlify, Heroku

#Collaborators

[Tai Le](https://github.com/Ta1grr)

[Richard Verdier](https://github.com/rverdi642)

[Jared Cuffe](https://github.com/jcuffe)

[Fred Sohn](https://github.com/fron12)

[Chad Jemmett](https://github.com/ceejaay)

[Will Kwon](https://github.com/wtkwon)

Project Manager: [Thomas Greenhalgh](https://github.com/tgreenhalgh)


v>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"                 title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"                 title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
