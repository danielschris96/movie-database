USE movies_db;

INSERT INTO movies (name)
VALUES ('The Shawshank Redemption'),
       ('The Godfather'),
       ('The Dark Knight'),
       ('Pulp Fiction'),
       ('Forrest Gump');

INSERT INTO reviews (review, movie_id)
VALUES ('This movie is a masterpiece!', 1),
       ('One of the best movies ever made.', 1),
       ('A classic that everyone should see.', 2),
       ('The Godfather is a true masterpiece.', 2),
       ('Heath Ledger is amazing in this movie.', 3),
       ('The Joker steals the show!', 3),
       ('Great soundtrack and amazing characters.', 4),
       ('Pulp Fiction is a classic.', 4),
       ('This movie always makes me cry.', 5);