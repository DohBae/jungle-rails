# Jungle

A mini e-commerce application built with Rails 6.1 for purposes of teaching Rails by example.

## Setup

1. Run `bundle install` to install dependencies
2. Create `config/database.yml` by copying `config/database.example.yml`
3. Create `config/secrets.yml` by copying `config/secrets.example.yml`
4. Run `bin/rails db:reset` to create, load and seed db
5. Create .env file based on .env.example
6. Sign up for a Stripe account
7. Put Stripe (test) keys into appropriate .env vars
8. Run `bin/rails s -b 0.0.0.0` to start the server

## Database

If Rails is complaining about authentication to the database, uncomment the user and password fields from `config/database.yml` in the development and test sections, and replace if necessary the user and password `development` to an existing database user.

## Stripe Testing

Use Credit Card # 4111 1111 1111 1111 for testing success scenarios.

More information in their docs: <https://stripe.com/docs/testing#cards>

## Dependencies

- Rails 6.1 [Rails Guide](http://guides.rubyonrails.org/v6.1/)
- Bootstrap 5
- PostgreSQL 9.x
- Stripe

![Add item to cart](https://github.com/DohBae/jungle-rails/blob/master/docs/add_item_cart.png?raw=true)
![Admin Categories](https://github.com/DohBae/jungle-rails/blob/master/docs/admin_categories.png?raw=true "Title")
![Admin Products](https://github.com/DohBae/jungle-rails/blob/master/docs/admin_products.png?raw=true "Title")
![Cart](url "Title")
![Credit Card Payment](https://github.com/DohBae/jungle-rails/blob/master/docs/cc_payment.png?raw=true(https://github.com/DohBae/jungle-rails/blob/master/docs/cart.png?raw=true) "Title")
![Completed Order](https://github.com/DohBae/jungle-rails/blob/master/docs/completed_order.png?raw=true "Title")
![Home Page](https://github.com/DohBae/jungle-rails/blob/master/docs/home_page.png?raw=true "Title")
![User Logged In](https://github.com/DohBae/jungle-rails/blob/master/docs/user_logged_in.png?raw=true "Title")
