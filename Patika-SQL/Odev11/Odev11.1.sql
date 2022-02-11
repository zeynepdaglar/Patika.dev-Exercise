(
  SELECT first_name FROM actor
)
UNION ALL
(
  SELECT first_name FROM customer
);

	