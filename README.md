# tcbern
BE application for tcbern

## Database Creation/Migration and Seeding

The novice script provides a primitive means of creating/migrating and seeding the database.
See templates located in `app/database/migrations` and `app/database/seeds`.

To create/migrate and seed your database:
```bash
# Create/Migrate
php novice migrate

# Seed
php novice seed

# Create/Migrate then seed
php novice migrate --seed
```
