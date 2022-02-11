SELECT city.city, country.country FROM city
LEFT  JOIN country ON  city.country_id = country.country_id