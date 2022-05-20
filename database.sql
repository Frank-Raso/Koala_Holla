CREATE TABLE koalas(
	"id" serial PRIMARY KEY,
	"name" varchar(16),
	"gender" varchar(16),
	"age" varchar(128),
	"ready_to_transfer" varchar(2),
	"notes" varchar(128)
);



INSERT INTO koalas (name, gender, age,  notes) VALUES ( 'Scotty', 'M', '4', 'Born in Guatemala');
INSERT INTO koalas (name, gender, age,  notes) VALUES ( 'Jean', 'F', '5', 'Allergic to lots of lava');
INSERT INTO koalas (name, gender, age,  notes) VALUES ( 'Ororo', 'F', '7', 'Loves listening to Paula(Abdul)');
INSERT INTO koalas (name, gender, age,  notes) VALUES ( 'Logan', 'M', '15', 'Loves the sauna');
INSERT INTO koalas (name, gender, age,  notes) VALUES ( 'Charlie', 'M', '9', 'Favorite band is Nirvana');
INSERT INTO koalas (name, gender, age,  notes) VALUES ( 'Neil', 'N', '4', 'Has a pet Eucalyptus Leaf');

