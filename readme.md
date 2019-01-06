This is an application made with angular6 as a frontend technology and laravel as a backend technology.

It's a simple app based on thinkster project with more functionality with study purposes.

Which this does is:

Laravel:
- Uses traits such a Slug or Filter
- Each controller has his own model
- Uses transformers and request
- Mailgun as a provider to send emails
- Validates contact request
- Creates the database migrations and uses Faker as a dummies generator
- The seeds are created based on the factory and the db is populated

Angular:
- Uses subjects and JWT
- Has his own routing and accepts parameters such a slug in players and playerDetails modules
- Has a list that does nothing just to familiarize with angular/laravel (buffs)
- Guilds has a details which is a list of the players it has and each player has his own details that is painted with @input
- Guilds has a pagination that can be filtered by "Max members"
- Guilds has a config that saves the filters in order to be sended to the backend.
- Header contains the nav and it checks if is someone logged and it changes if it is or it's not
- Toaster


In functionality it has a buffs list and a guilds list that are showed in 50 pack due to pagination config. Each guild has his list with his players and that list has a details of the player of your choice; A contact that sends you an email and validates in laravel and in angular, a login/register and a logout that shows up in nav if you are logged.