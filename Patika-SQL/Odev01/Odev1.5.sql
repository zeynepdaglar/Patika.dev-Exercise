SELECT length,rental_rate FROM film 
WHERE length < 50 AND NOT(rental_rate = 2.99 OR  rental_rate = 4.99) 