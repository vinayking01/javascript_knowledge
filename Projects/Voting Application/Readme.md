Voting Application - User can vote

//Technologies Used
Node.js
Express.js
MongoDB
JSON Web Tokens (JWT) for authentication
Installation


What We Want to achieve?

Voting app functionality

1. user sign in / sign up
2. See the list of candidate
3. vote one of the candidate after voting , user can't vote again.
4. there is a route which shows the list of candidates and their live vote count sorted by their vote count.
5.  user data must contain their one unique id proof : addhar card number
6. there should be one admin who can only maintain the table of candidate and he can't able to vote at all.
7. user can change their password.
8. user can login only with addhar card and password.


----------------------------------------------

Routes
User Authentication 
  /singup POST - Create a new user account.
  / login POST - log in to an exiting account , adhhar card , password

Voting : 

  / candidate : GET - Get the list of candidate
  / Votes/candidateID   POST:  vote for specific candidate

Vote Counts:

    ./profile  GET - Ge the users's profile information
    /Profile/password  PUT- chg the user's password

Admin Candidate Management

    /Candidates - Create a new candidate
    /Candidate/:candidateId PUT - update ans existing candidate.
    /candidate/:candidateId DELETE  - Delete a candidate from the list.