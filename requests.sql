SELECT * from transactions
SELECT * from budgets
SELECT * from users

INSERT INTO transactions (user_id, budget_id, amount, description, category, transaction_type)
VALUES (1, 1, 90, 'New Iphone15', 'Smartphone', 'Expense');


INSERT INTO transactions (user_id, budget_id, amount, description, category, transaction_type)
VALUES (2, 1, 1234, 'TeslaY', 'Car', 'Expense');

INSERT INTO transactions (user_id, budget_id, amount, description, category, transaction_type)
VALUES 
(2, 1, 5000000, 'Appartment', 'Housing', 'Expense'),
(2, 1, 1250000, 'Appartment Rental', 'Housing', 'Income');

INSERT INTO users (username, email, password_hash, first_name, last_name, phone_number)
VALUES 
('Edmon0324', 'edmoros@gmaaail.com', '*Polldss', 'Edmond', 'Polignac', '06434534'),
('EdenBZ', 'edenbz@gmaaail.com', '*Edebnzz', 'Eden', 'Ben Zaken', '054434534');

INSERT INTO budgets (user_id, name, budget_limit, category)
VALUES 
(2, 'testblabla', 1234, 'Expense'),
(2, 'Roquefort', 434, 'Income');

