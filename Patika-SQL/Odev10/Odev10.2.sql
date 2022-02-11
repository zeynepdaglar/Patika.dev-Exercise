SELECT payment.payment_id, customer.first_name, customer.last_name FROM payment
RIGHT JOIN customer ON customer.customer_id = payment.customer_id