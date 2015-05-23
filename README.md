# tcbern
BE application for tcbern

## Update autoloading scripts

After updating composer.json (new dependency or ...), or after creating a new
model in private/models, run this command to update autoloading scripts
```bash
php composer.phar update
```

## Database Creation, Migration and Seeding

The novice script provides a primitive means of creating, migrating and seeding the database.
See templates located in `database/creations`, `database/migrations` and `database/seeds`.

To create/migrate and seed your database:
# Create
```bash
php novice create
```

# Migrate
```bash
php novice migrate
```

# Seed
```bash
php novice seed
```

# Create/Migrate then seed
```bash
php novice migrate --seed
```
