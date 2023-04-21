CREATE TABLE Week (
	week_id serial NOT NULL,
	week varchar(255) NOT NULL,
	expectations_id integer NOT NULL,
	resources_id integer NOT NULL,
	day_id integer NOT NULL,
	CONSTRAINT Week_pk PRIMARY KEY (week_id)
);



CREATE TABLE Day (
	day_id serial NOT NULL,
	date DATE NOT NULL UNIQUE,
	lab_id integer NOT NULL,
	demo_id integer NOT NULL,
	challenge_id integer NOT NULL,
	codewars_id integer NOT NULL,
	tools_id integer NOT NULL,
	day_images varchar(65000) NOT NULL,
	CONSTRAINT Day_pk PRIMARY KEY (day_id)
);



CREATE TABLE Lab (
	lab_id serial NOT NULL,
	lab_instructions varchar(10000) NOT NULL,
	lab_file varchar(255) NOT NULL,
	lab_solution varchar(255) NOT NULL,
	CONSTRAINT Lab_pk PRIMARY KEY (lab_id)
);



CREATE TABLE Demo (
	demo_id serial NOT NULL,
	demo_handout varchar(50000) NOT NULL,
	demo_file varchar(255) NOT NULL,
	demo_slideshow varchar(255) NOT NULL,
	CONSTRAINT Demo_pk PRIMARY KEY (demo_id)
);



CREATE TABLE Code_Challenge (
	challenge_id serial NOT NULL,
	challenge_instructions varchar(1000) NOT NULL,
	challenge_soution varchar(1000) NOT NULL,
	CONSTRAINT Code_Challenge_pk PRIMARY KEY (challenge_id)
);



CREATE TABLE Programs_Tools (
	tools_id serial NOT NULL,
	tools_progams varchar(255) NOT NULL,
	tools_sites varchar(255) NOT NULL,
	tools_terms varchar(255) NOT NULL,
	tools_facts varchar(500) NOT NULL,
	CONSTRAINT Programs_Tools_pk PRIMARY KEY (tools_id)
);



CREATE TABLE Expectations (
	expectations_id serial NOT NULL,
	expectations_text varchar(10000) NOT NULL,
	CONSTRAINT Expectations_pk PRIMARY KEY (expectations_id)
);



CREATE TABLE CodeWars (
	codewars_id serial NOT NULL,
	codewars_problem varchar(255) NOT NULL,
	CONSTRAINT CodeWars_pk PRIMARY KEY (codewars_id)
);



CREATE TABLE Resources (
	resources_id serial NOT NULL,
	smm varchar(255) NOT NULL,
	outcomes varchar(255) NOT NULL,
	CONSTRAINT Resources_pk PRIMARY KEY (resources_id)
);



ALTER TABLE Week ADD CONSTRAINT Week_fk0 FOREIGN KEY (expectations_id) REFERENCES Expectations(expectations_id);
ALTER TABLE Week ADD CONSTRAINT Week_fk1 FOREIGN KEY (resources_id) REFERENCES Resources(resources_id);
ALTER TABLE Week ADD CONSTRAINT Week_fk2 FOREIGN KEY (day_id) REFERENCES Day(day_id);

ALTER TABLE Day ADD CONSTRAINT Day_fk0 FOREIGN KEY (lab_id) REFERENCES Lab(lab_id);
ALTER TABLE Day ADD CONSTRAINT Day_fk1 FOREIGN KEY (demo_id) REFERENCES Demo(demo_id);
ALTER TABLE Day ADD CONSTRAINT Day_fk2 FOREIGN KEY (challenge_id) REFERENCES Code_Challenge(challenge_id);
ALTER TABLE Day ADD CONSTRAINT Day_fk3 FOREIGN KEY (codewars_id) REFERENCES CodeWars(codewars_id);
ALTER TABLE Day ADD CONSTRAINT Day_fk4 FOREIGN KEY (tools_id) REFERENCES Programs_Tools(tools_id);















