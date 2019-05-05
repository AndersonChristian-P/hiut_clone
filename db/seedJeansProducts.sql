-- Men Products

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
  prod_title VARCHAR(50),
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
  men_denim_type_id INTEGER references men_denim_type
);


INSERT INTO men_denim_type (denim, denim_desc)
VALUES (
  'Selvedge Denim',
  'Selvedge is an investment. Ours is from Kuroki, the artisanal Japanese denim mill. Woven on a 1959 loom. 100% indigo dyed. Unwashed 14.5oz.'
);

INSERT INTO men_product(fit, men_prod_name1, men_prod_name2, price, brief_fit_desc, prod_title, long_desc, prod_desc1, prod_desc2, prod_desc3, prod_desc4, prod_desc5, prod_desc6, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11,men_denim_type_id) 
VALUES (
  'Regular',
  'Work@',
  'Selvedge',
  240,
  'Loose, relaxed fit. Straight leg.',
  'Selvedge Denim Work@',
  'Our regular cut is a true classic 5 pocket straight leg jean expertly cut using every ounce of our cutter’s 40 years of experience. It’s a relaxed, easy fit. And feels great on.',
  '14.5oz Japanese Selvedge Denim',
  'Super tough ecru twill pocket lining',
  'Signature red owl rivet on back pocket',
  'Button fly',
  'Redline selvedge',
  '100% cotton',
  'https://cdn.shopify.com/s/files/1/0065/4242/products/SELREG_1024x1024.jpg?v=1530790345',
  'https://cdn.shopify.com/s/files/1/0065/4242/products/SELREGG_1024x1024.jpg?v=1530790355',
  'https://cdn.shopify.com/s/files/1/0065/4242/products/SELREGGG_1024x1024.jpg?v=1530790373',
  'https://cdn.shopify.com/s/files/1/0065/4242/products/unspecified-4_1024x1024.png?v=1530790395',
  'https://cdn.shopify.com/s/files/1/0065/4242/products/unspecified-7_1024x1024.png?v=1530790406',
  'https://cdn.shopify.com/s/files/1/0065/4242/products/unspecified-6_1024x1024.png?v=1530790416',
  'https://cdn.shopify.com/s/files/1/0065/4242/products/unspecified-5_1024x1024.png?v=1530790433',
  '',
  '',
  '',
  '',
  1
);



-- Women Products


CREATE TABLE women_prod_line (
  women_prod_line_id SERIAL PRIMARY KEY,
  prod_line VARCHAR(25),
  prod_desc text
);

CREATE TABLE women_prod (
  women_prod_id SERIAL PRIMARY KEY,
  fit_desc VARCHAR(25),
  denim_type VARCHAR(25),
  price INTEGER,
  prod_line VARCHAR(25),
  fit VARCHAR(25),
  fit_long_desc1 TEXT,
  fit_long_desc2 TEXT,
  denim_long_desc TEXT,
  details_long_desc TEXT,
  img1 TEXT,
  img2 TEXT,
  img3 TEXT,
  women_prod_line_id INTEGER references women_prod_line
);

INSERT INTO women_prod_line (prod_line, prod_desc)
VALUES (
  'The Coda',
  'A classic slim leg jean, button-fly, mid-rise, not too skinny, not too loose, made with raw denim.'
);

INSERT INTO women_prod (fit_desc, denim_type, price, prod_line, fit, fit_long_desc1, fit_long_desc2, denim_long_desc, details_long_desc, img1, img2, img3, women_prod_line_id)
VALUES (
  'Slim Fit',
  'Raw Denim',
  155,
  'The Coda',
  'Slim',
  'The Coda is a slimmed down version of our men''s fit, with smaller back pockets and a narrower leg. Slim but not skinny, and with a rise that sits just above the hip bone.',
  'Our advice: These jeans are unwashed and will be very stiff when you first get them, as there is no stretch in the fabric. If you are curvy, we recommend sizing up.',
  'When everything is being distressed, bleached and washed to an inch of its life, the Coda is a raw jean full of life. This is a classic blue jean, made with a raw dark blue,13.oz denim from ISKO, Turkey. There''s no stretch in the fabric but it softens with age. Break them in gently and over time they will become your faves for sure.',
  'Authentic five-pocket jean. 100% cotton. 13.oz, raw denim. button fly. Hiut Denim branded leather patch. Fastened with copper rivets on pockets. Signature red owl rivet on left back pocket. For best results, go 6 months without washing. Wash on 30˚C. Do not tumble dry.',
  'https://cdn.shopify.com/s/files/1/0065/4242/products/coda2_1024x1024.jpg?v=1530787011',
  'https://cdn.shopify.com/s/files/1/0065/4242/products/coda3_1024x1024.jpg?v=1530787021',
  'https://cdn.shopify.com/s/files/1/0065/4242/products/coda4_1024x1024.jpg?v=1530787030',
  1
);