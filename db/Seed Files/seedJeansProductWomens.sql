CREATE TABLE women_prod_line (
  women_prod_line_id SERIAL PRIMARY KEY,
  prod_line VARCHAR(50),
  prod_desc text
);

CREATE TABLE women_product (
  women_prod_id SERIAL PRIMARY KEY,
  id_text VARCHAR(50),
  fit_desc VARCHAR(50),
  denim_type VARCHAR(50),
  price INTEGER,
  prod_title VARCHAR(50),
  fit VARCHAR(50),
  fit_long_desc1 TEXT,
  fit_long_desc2 TEXT,
  denim_long_desc TEXT,
  details_long_desc TEXT,
  img0 TEXT,
  img1 TEXT,
  img2 TEXT,
  img3 TEXT,
  women_prod_line_id INTEGER references women_prod_line
);

INSERT INTO women_prod_line (prod_line, prod_desc)
VALUES (
  'The Coda',
  'A classic slim leg jean, button-fly, mid-rise, not too skinny, not too loose, made with raw denim.'
), (
  'The Girlfriend Jean',
  'Lower in the rise, sitting just above the ankle. 13.oz denim. It has quickly become the most sought after cut of the year.'
), (
  'The Dina',
  'High waist, skinny fit. Understated. Classic. Made with a beautiful raven black stretch denim from Candiani, Italy.'
), (
  'The Stelsby',
  'The Stelsby is the result of 18 months spent perfecting our new Skinny cut. Our first stretch denim using Isko''s super innovative ''Reform'' denim. Looks good. Feels good.'
), (
  'The Stelsby - High Waist',
  'We''ve tweaked our women''s skinny fit jean to add three centimeters to the rise, making these the perfect fit if you have a cury shape and find our classic Stelsby a little too boyish.'
);

INSERT INTO women_product (id_text, fit_desc, denim_type, price, prod_title, fit, fit_long_desc1, fit_long_desc2, denim_long_desc, details_long_desc, img0, img1, img2, img3, women_prod_line_id)
VALUES (
  'coda',
  'Slim Fit',
  'Raw Denim',
  129,
  'The Coda',
  'Slim',
  'The Coda is a slimmed down version of our men''s fit, with smaller back pockets and a narrower leg. Slim but not skinny, and with a rise that sits just above the hip bone.',
  'Our advice: These jeans are unwashed and will be very stiff when you first get them, as there is no stretch in the fabric. If you are curvy, we recommend sizing up.',
  'When everything is being distressed, bleached and washed to an inch of its life, the Coda is a raw jean full of life. This is a classic blue jean, made with a raw dark blue,13.oz denim from ISKO, Turkey. There''s no stretch in the fabric but it softens with age. Break them in gently and over time they will become your faves for sure.',
  'Authentic five-pocket jean. 100% cotton. 13.oz, raw denim. button fly. Hiut Denim branded leather patch. Fastened with copper rivets on pockets. Signature red owl rivet on left back pocket. For best results, go 6 months without washing. Wash on 30˚C. Do not tumble dry.',
  'https://s3.us-east-2.amazonaws.com/hiut-clone/Womens_Line/CODA/CODA_000.jpg',
  'https://s3.us-east-2.amazonaws.com/hiut-clone/Womens_Line/CODA/CODA_001.jpg',
  'https://s3.us-east-2.amazonaws.com/hiut-clone/Womens_Line/CODA/CODA_002.jpg',
  'https://s3.us-east-2.amazonaws.com/hiut-clone/Womens_Line/CODA/CODA_003.jpg',
  1
), (
  'the-girlfriend-jean',
  'Slim',
  'Rinse Washed',
  129,
  'The Girlfriend Jean',
  'Slim',
  'The Girlfriend jean has quickly become the most sought-after cut. Slimmer and more feminine than a relaxed boyfriend cut, the Girlfriend jean has a slim straight leg, and a medium-low rise, with a fitted hip. They’re comfortable but still flattering. If you’re looking for an alternative to your skinny jeans, The Girlfriend jean is a good place to start.',
  'Our advice: If you want a tighter fit, size down.',
  'We chose a classic 13.oz, dark blue denim from ISKO, Turkey. It has been rinsed washed once to make them more comfortable and to give them a slightly worn look and feel.',
  'Authentic five-pocket jean. 100% cotton. 13.oz denim. Rinsed washed. Zip fly. Hiut Denim branded leather patch. Fastened with copper rivets on pockets. Signature red owl rivet on left back pocket. Wash on 30˚C. Do not tumble dry.',
  'https://s3.us-east-2.amazonaws.com/hiut-clone/Womens_Line/GIRLFRIEND/girlfriend_000.jpg',
  'https://s3.us-east-2.amazonaws.com/hiut-clone/Womens_Line/GIRLFRIEND/girlfriend_001.jpg',
  'https://s3.us-east-2.amazonaws.com/hiut-clone/Womens_Line/GIRLFRIEND/girlfriend_002.jpg',
  'https://s3.us-east-2.amazonaws.com/hiut-clone/Womens_Line/GIRLFRIEND/girlfriend_003.jpg',
  2
), (
  'the-dina',
  'Skinny Fit - High Waist',
  'Stretch',
  154,
  'The Dina',
  'Skinny Fit - High Waist',
  'High waist. Fits close to hips. Skinny leg. Slim ankle. Creates a classic silhouette. They’re understated. A wardrobe staple.',
  'Our advice: If skinny jeans are often tight on your thighs, we recommend sizing up.',
  'We chose a beautiful 12.5 oz raven black stretch denim from Candiani, Italy.  They look like a classic black jean. But they give. Just a little. Enough to help make them easier to wear and allow the jeans to sit comfortably on your waist. Unlike other stretch denim, this premium stretch denim will not lose its shape. No saggy knees here.',
  'A five-pocket jean. Zip fly. Hiut Denim branded leather patch. Fastened with copper rivets on pockets. Signature black owl rivet on left back pocket. Made with 92% Cotton 6% EME and 2% Elastane. Wash on 30˚C. Do not tumble dry.',
  'https://s3.us-east-2.amazonaws.com/hiut-clone/Womens_Line/DINA/dina_000.jpg',
  'https://s3.us-east-2.amazonaws.com/hiut-clone/Womens_Line/DINA/dina_001.jpg',
  'https://s3.us-east-2.amazonaws.com/hiut-clone/Womens_Line/DINA/dina_002.jpg',
  'https://s3.us-east-2.amazonaws.com/hiut-clone/Womens_Line/DINA/dina_003.jpg',
  3
), (
  'the-stelsby-low-waist',
  'Skinny Fit',
  'Stretch',
  125,
  'The Stelsby',
  'Skinny Fit',
  'The Stelsby is our go-to skinny jean. Sitting low on the waist, close to the hip with a skinny fit leg, it does exactly what a skinny jean should. Look and feel great.',
  'Our advice: Fits true to size.',
  'Finding a stretch denim that still looks like an authentic denim has taken us all around the world. Worth it. But not easy. This reform stretch denim by ISKO, Turkey, is super comfortable and retains its shape.',
  'Authentic five-pocket jean. Rinsed washed. Zip fly. Super soft pocket lining. Hiut Denim branded leather patch. Fastened with copper rivets on pockets. Signature red owl rivet on left back pocket. 93% cotton, 6% polyester and 1% lycra. Wash on 30˚C. Do not tumble dry.',
  'https://s3.us-east-2.amazonaws.com/hiut-clone/Womens_Line/STELSBY/stelsby_000.jpg',
  'https://s3.us-east-2.amazonaws.com/hiut-clone/Womens_Line/STELSBY/stelsby_001.jpg',
  'https://s3.us-east-2.amazonaws.com/hiut-clone/Womens_Line/STELSBY/stelsby_002.jpg',
  'https://s3.us-east-2.amazonaws.com/hiut-clone/Womens_Line/STELSBY/stelsby_003.jpg',
  4
), (
  'the-stelsby-high-waist',
  'Skinny Fit - High Waist',
  'Stretch',
  125,
  'High Waist',
  'Skinny Fit - High Waist',
  'High rise. Skinny fit. Our all day, everyday jean.  Sitting just below the belly button, this is the best fit for the curvier woman who tends to get a gape in the back of their jeans, or find a low rise a little too boyish. The high waist gives you a classy and classic silhouette. Slimming the waist and lengthening the leg. A necessity in any woman’s denim collection.',
  'Our advice: Fits true to size.',
  'Finding a stretch denim that still looks like an authentic denim has taken us all around the world. Worth it. But not easy. This ''reform'' stretch denim by ISKO, Turkey, is super comfortable and retains its shape.',
  'Authentic five-pocket jean. Rinsed washed. Zip fly. Super soft pocket lining. Hiut Denim branded leather patch. Fastened with copper rivets on pockets. Signature red owl rivet on left back pocket. 93% cotton, 6% polyester and 1% lycra. Wash on 30˚C. Do not tumble dry.',
  'https://s3.us-east-2.amazonaws.com/hiut-clone/Womens_Line/STELSBY_HW/stelsby_hw_000.jpg',
  'https://s3.us-east-2.amazonaws.com/hiut-clone/Womens_Line/STELSBY_HW/stelsby_hw_001.jpg',
  'https://s3.us-east-2.amazonaws.com/hiut-clone/Womens_Line/STELSBY_HW/stelsby_hw_002.jpg',
  'https://s3.us-east-2.amazonaws.com/hiut-clone/Womens_Line/STELSBY_HW/stelsby_hw_003.jpg',
  5
);