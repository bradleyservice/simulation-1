CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(25),
    price INT,
    img TEXT
);

INSERT INTO products
(name, price, img)
VALUES
('Jacket', 100, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSdwo_1Igc4YRcHVAx528Kd5y6Rx390NxacGQ&usqp=CAU'),
('Jorts', 200, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTC_g6JmQalJByC9RlxjRuHckb3KjKuUp8TitIVsG0C2gxnHCNFd4ki4w8dL2TmjrsjdweCMWY&usqp=CAc'),
('Jeggings', 15, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ19RmYyHStnlhVvL6XwI0ot7jnkST74MJFb1lNXoH2TpVrl2Z5h53yVpvtfW1ys6czZMA6wMOgWw&usqp=CAc');