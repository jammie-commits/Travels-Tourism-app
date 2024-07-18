# TRAVEL AND TOURISM APP FRONT-END
### Date:2024/07/17
#### By *James Mbugua, Munene Lornah*
## Description 
This app is centered to cater for a travel and tourism agency.It allows the user to add various destinations to their company,add new customers(users)and add new trips for the customers(users)once they plan for them.
## Key features

# User Authentication:
Our app allows the user to safely signup and login in order to get this awesome experience
# Wide variety of Destinations
for our users we've decided to toss out the idea of a lousy experience by giving the user a chance to choose from a wide variety of destinations.

# Trip arrangement
Our app also alows the user to plan for a designated trip at their convenience.
# A user-friendly interface
The app has an amazing Navbar and Dashboard which guides the user on different pages of the app

## How the app works
Once the page is loaded on the home page we have a signup and login button
if the user is new to the app they'll have to signup.Once they are signed up the data from the user is added to our users table on the our flask api

On matters of destinations a user can search for a desired destination

Also, when a user would like to see the reviews,the app clearly displays it
Should the user want to plan for a trip, this is enabled in our app

## What exactly does the backend do you may ask?
First of all it has models such as users,destinations and planned trips
The file app.py has all kinds of routes that enable the user to acquire information from our vast database


## Installation requirements
1.Node package manager installed
2.Git

## Installation Instruction
For the front end part :
Clone the repository
### `git@github.com:jammie-commits/Travels-Tourism-app.git`
In the project directory, you can run:
```console
 $ npm install
 $ npm start
 ```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

For the Back end part:
Clone the repository :
### `git@github.com:luvley-dee48/TRAVEL-TOURISM-APP.git`
On the terminal run:
```console
$pipenv install
$pipenv shell
```

Navigate to the `/server` directory and run:
```console
$flask db upgrade 
```
Run the Flask application in the termianal by running:
```console
$ python app.py
```
Each application will run on its own port on `localhost`:

- React: [http://localhost:3000](http://localhost:3000)
- Flask: [http://localhost:5555](http://localhost:5555)
## Technologies used 
Backend :Flask SQLAlchemy 
Frontend :React
## Support and Contact Details
For any clarifications contact:
Munene Lornah : [lornah.munene@student.moringaschool.com]
James Mbugua :[james.mbugua@student.moringaschool.com]
## License
MIT License
Copyright (c)2024 



