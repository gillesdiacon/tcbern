# tcbern
BE application for tcbern

## Database Creation, Migration and Seeding

The novice script provides a primitive means of creating, migrating and seeding the database.
See templates located in `database/creations`, `database/migrations` and `database/seeds`.

To create/migrate and seed your database:
```bash
# Create
php novice create

# Migrate
php novice migrate

# Seed
php novice seed

# Create/Migrate then seed
php novice migrate --seed
```
