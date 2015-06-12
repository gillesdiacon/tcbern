# tcbern
BE application for tcbern

## Update autoloading scripts

After updating composer.json (new dependency or ...), or after creating a new
model in private/models, run this command to update autoloading scripts
```bash
php composer.phar update
# if the update does not work run install
php composer.phar install
```

## Database Creation, Migration and Seeding

The novice script provides a primitive means of creating, migrating and seeding the database.
See templates located in `database/creations`, `database/migrations` and `database/seeds`.

To create/migrate and seed your database:
#### Create
```bash
php novice create
```

#### Migrate
```bash
php novice migrate
```

#### Seed
```bash
php novice seed
```

## Webapp

The application is built with [npm](https://www.npmjs.com/) and [bower](http://bower.io/).

- Install
```bash
cd webapp
npm install
bower install
```
- Start
```bash
# Start locally a Node.js server listening on the port 8000
npm start
```

[http://localhost:8000/app/index.html](http://localhost:8000/app/index.html)

### Install the application on mobile devices

#### Android (Android Browser)

1. Access the webapp in the android browser
2. Once displayed, add it to the browser's favorites
3. Press and hold the dongle in the favorite's list and select "Add a shortcut"

#### iOS (native browser)

1. Access the webapp in the browser
2. Select the favorite icon next to the url box
3. Select "Add to the homescreen"