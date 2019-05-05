CREATE TABLE men_denim_type (
  men_denim_type_id SERIAL PRIMARY KEY,
  denim VARCHAR(50),
  denim_desc text
);

CREATE TABLE men_product (
  men_prod_id SERIAL PRIMARY KEY,
  fit VARCHAR(25),
  men_prod_name1 VARCHAR(25),
  men_prod_name2 VARCHAR(25),
  price INTEGER,
  brief_fit_desc VARCHAR(50),
  long_desc TEXT,
  prod_desc1 VARCHAR(75), 
  prod_desc2 VARCHAR(75), 
  prod_desc3 VARCHAR(75), 
  prod_desc4 VARCHAR(75), 
  prod_desc5 VARCHAR(75), 
  prod_desc6 VARCHAR(75),
  img1 TEXT,
  img2 TEXT,
  img3 TEXT,
  img4 TEXT,
  img5 TEXT,
  img6 TEXT,
  img7 TEXT,
  img8 TEXT,
  img9 TEXT,
  img10 TEXT,
  img11 TEXT,
  men_denim_type_id INTEGER foreign key references men_denim_type()
);

CREATE TABLE women_prod_line (
  women_prod_line_id SERIAL PRIMARY KEY,
  prod_line VARCHAR(50),
  prod_desc text
);

CREATE TABLE women_prod (
  women_prod_id SERIAL PRIMARY KEY,
  fit_desc VARCHAR(25),
  price INTEGER,
  fit VARCHAR(25),
  fit_long_desc TEXT,
  denim_long_desc TEXT,
  details_long_desc TEXT,
  img1 TEXT,
  img2 TEXT,
  img3 TEXT,
  women_prod_line_id INTEGER foreign key references women_prod_line()
);