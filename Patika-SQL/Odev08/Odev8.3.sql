UPDATE employee
SET name = 'Rasmus',
    birthday = '1999-06-04',
    email = 'rasmusandersen@gmail.com'
WHERE id = 10
RETURNING *;
