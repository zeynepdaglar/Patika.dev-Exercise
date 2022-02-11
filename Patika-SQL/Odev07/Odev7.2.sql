SELECT COUNT(*),replacement_cost FROM film
GROUP BY replacement_cost
HAVING COUNT(*)>50