-- MySQL dump 10.13  Distrib 8.1.0, for macos13 (arm64)
--
-- Host: localhost    Database: e_shop
-- ------------------------------------------------------
-- Server version	8.1.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `card`
--

DROP TABLE IF EXISTS `card`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `card` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `price` varchar(1020) DEFAULT NULL,
  `description` varchar(1020) DEFAULT NULL,
  PRIMARY KEY (`id`)
); ENGINE=InnoDB AUTO_INCREMENT=10917931 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `card`
--

LOCK TABLES `card` WRITE;
/*!40000 ALTER TABLE `card` DISABLE KEYS */;
INSERT INTO `card` VALUES (10917918,'Roasted Curry Powder 100g','Tuesday, 12 September 2023','https://spicelk.com/wp-content/uploads/2023/05/6-e1684835813769.jpg','140.00','Our Roasted Curry Powder is a delightful blend of aromatic spices carefully roasted to perfection, creating a rich and flavorful seasoning for your culinary creations. This 100g jar of curry powder is a must-have in any kitchen, adding depth and complexity to a wide range of dishes. \n\nIts balanced combination of spices imparts a warm, earthy, and slightly smoky essence to your curries, stews, marinades, and more. Elevate your cooking with the tantalizing taste of our Roasted Curry Powder – a spice blend that will transport your taste buds on a journey through the exotic flavors of South Asia.'),(10917919,'Roasted Curry Powder 100g','Tuesday, 13 September 2023','https://spicelk.com/wp-content/uploads/2023/05/22-e1684836090397-300x300.jpg','185.50','Introducing our exquisite Roasted Curry Powder in a convenient 100g package!\n\nThis spice blend is a culinary treasure, carefully crafted to enhance your dishes with its rich, aromatic flavors.\n\n We\'ve roasted a harmonious blend of premium spices to perfection, resulting in a robust, slightly smoky curry powder that will elevate your cooking to new heights. Perfect for curries, soups, stir-fries, and more, our Roasted Curry Powder is your passport to a world of delectable, exotic cuisine. Unlock the secrets of sensational flavor with this 100g jar of culinary magic!'),(10917921,'Sanstha Tea 200g – (100)','Tuesday, 14 September 2023','https://spicelk.com/wp-content/uploads/2023/06/InShot_20230620_085836485-scaled.jpg','1300.00','Experience the ultimate tea indulgence with our Sanstha Tea, now available in a generous 200g pack containing 100 tea bags! \n\nSavor the perfect cup of tea every time with the convenience of our individually wrapped tea bags. Our blend is meticulously crafted to deliver a harmonious infusion of flavors and aromas, creating a soothing and delightful tea experience. \n\nWhether you prefer it hot or iced, our Sanstha Tea is your go-to choice for a moment of relaxation and rejuvenation. Enjoy the essence of pure, quality tea in every sip with our 200g pack of 100 tea bags.'),(10917922,'Chicken Curry Powder 100g','Tuesday, 15 September 2023','https://spicelk.com/wp-content/uploads/2023/03/5-chicken-curry-powder-100g.jpg','210.00','Introducing our Chicken Curry Powder in a convenient 100g jar! Elevate your poultry dishes to a new level of flavor with this specially crafted blend of aromatic spices. \n\nOur Chicken Curry Powder is designed to enhance the natural taste of chicken, infusing it with a harmonious mix of seasonings that create a mouthwatering curry experience. \n\nWhether you\'re making a classic chicken curry, marinading chicken for grilling, or experimenting with new recipes, our 100g jar of Chicken Curry Powder is your secret ingredient for delicious, savory, and satisfying meals. Discover the perfect balance of spices in every bite with our Chicken Curry Powder – a kitchen essential for chicken lovers.'),(10917923,'Mustard seeds 50g','Tuesday, 16 September 2023','https://spicelk.com/wp-content/uploads/2023/04/mustard.jpeg','60.00','Elevate your culinary creations with our premium Mustard Seeds, now available in a convenient 50g package! \n\nThese tiny powerhouses of flavor are a versatile and essential addition to your spice collection. Our Mustard Seeds are carefully selected for their quality and freshness, ensuring they deliver a pungent, slightly spicy, and nutty taste to your dishes. \n\nWhether you\'re pickling vegetables, making homemade mustard, or adding depth to your curries and sauces, our 50g pack of Mustard Seeds is perfect for both occasional and regular use. Unlock a world of culinary possibilities with these small but mighty seeds.'),(10917924,'Cinnamon 20g','Tuesday, 17 September 2023','https://spicelk.com/wp-content/uploads/2023/03/9-cinnamon-20g.jpg','105.00','Indulge your senses with the warm and inviting aroma of our high-quality Cinnamon, now available in a convenient 20g package!\n\nOur Cinnamon is sourced from the finest cinnamon bark, carefully ground to preserve its natural sweetness and spice.\n\n Whether you\'re baking mouthwatering cinnamon rolls, spicing up your morning oatmeal, or adding depth to your savory dishes, our 20g pack of Cinnamon is the perfect addition to your kitchen. Embrace the rich, comforting flavors of this beloved spice and let it transport your taste buds to a world of culinary delights. With our premium Cinnamon, you have the secret ingredient to make your recipes truly unforgettable.'),(10917925,'Fennel Seeds 80g','Tuesday, 18 September 2023','https://spicelk.com/wp-content/uploads/2023/03/3-Fennel-seed-80g-600x600.jpg','175.10','Enhance your culinary creations with the delightful flavor of our Fennel Seeds, now available in a generous 80g package! \n\nThese aromatic seeds are carefully selected to bring you the freshest and most authentic fennel taste. Known for their sweet and slightly licorice-like flavor, fennel seeds add a unique and aromatic twist to a wide range of dishes.\n\nWhether you\'re using them to season meats, infuse sauces, or craft homemade bread, our 80g pack of Fennel Seeds is perfect for both occasional and regular use. Elevate your cooking with the captivating aroma and taste of this versatile spice. Explore the world of culinary possibilities and let our premium Fennel Seeds become your kitchen staple for adding a touch of exotic flair to your recipes.'),(10917926,'Turmeric Powder 1kg','Tuesday, 19 September 2023','https://spicelk.com/wp-content/uploads/2023/03/22-turmeric-powder-1-kg-300x300.jpg','1000.00','Introducing our premium Turmeric Powder, now available in a generous 1kg package! \n\nThis vibrant and aromatic spice is renowned for its earthy flavor and vibrant golden hue. Sourced from the finest turmeric roots and ground to perfection, our Turmeric Powder is a must-have for your kitchen.\n\nTurmeric is known for its versatility, whether you\'re using it to add depth to curries, season roasted vegetables, or craft healing turmeric lattes. With our 1kg pack of Turmeric Powder, you have an abundant supply of this superfood spice to fuel your culinary adventures and provide you with its potential health benefits.\n\nUnlock the rich, warm flavors and potential health benefits of turmeric in your cooking with our premium 1kg pack. Elevate your dishes and savor the distinctive taste of this exotic spice.'),(10917927,'Roasted curry powder 100g','Tuesday, 20 September 2023','https://spicelk.com/wp-content/uploads/2023/03/1-1.png','185.00','Introducing our exquisite Roasted Curry Powder in a convenient 100g jar! This specially crafted blend of aromatic spices has been roasted to perfection, enhancing its depth and complexity of flavors. Our Roasted Curry Powder adds a warm, earthy, and slightly smoky essence to your dishes, making it perfect for curries, stews, marinades, and more.\n\nElevate your culinary creations with the tantalizing taste of our Roasted Curry Powder. It\'s a versatile spice blend that will transport your taste buds on a journey through the exotic flavors of South Asia. Whether you\'re a seasoned chef or an aspiring home cook, this 100g jar of Roasted Curry Powder is your secret ingredient for creating dishes bursting with authentic and aromatic flavors.'),(10917928,'Pepper Powder 100g','Tuesday, 21 September 2023','https://spicelk.com/wp-content/uploads/2023/04/WhatsApp-Image-2023-04-02-at-3.11.07-PM-1-600x600.jpeg','260.22','Discover the bold and fiery flavor of our Pepper Powder, now available in a convenient 100g package! This finely ground pepper is a versatile spice that adds a kick of heat and a burst of pungent flavor to your dishes.\n\nOur Pepper Powder is sourced from premium peppercorns, ensuring a robust and authentic taste that elevates your cooking to the next level. Whether you\'re seasoning grilled meats, enhancing soups and sauces, or sprinkling it on your favorite dishes, our 100g pack of Pepper Powder is the perfect addition to your spice collection.\n\nExperience the zesty and invigorating taste of this classic spice with our Pepper Powder. It\'s the ideal choice for adding a touch of boldness to your culinary creations, making every bite a memorable one.'),(10917929,'Curry Powder 250g','Tuesday, 22 September 2023','https://spicelk.com/wp-content/uploads/2023/05/21-e1684834270892-300x300.jpg','405','Introducing our aromatic and flavorful Curry Powder, now available in a generous 250g package! This exquisite blend of spices brings the essence of South Asian cuisine to your kitchen, making it a versatile addition to your spice collection.\n\nOur Curry Powder is meticulously crafted from a harmonious combination of premium spices, ensuring a balanced and authentic flavor profile. Whether you\'re whipping up a classic curry dish, seasoning rice, or experimenting with new recipes, our 250g pack of Curry Powder provides you with an ample supply of this essential spice blend.\n\nElevate your culinary creations and transport your taste buds on a journey through the vibrant and diverse flavors of curry with our Curry Powder. This generous 250g package ensures you have enough to explore a wide range of dishes and culinary adventures.'),(10917930,'Chilli Pods 1Kg','Tuesday, 23 September 2023','https://spicelk.com/wp-content/uploads/2023/03/3-300x300.png','1300','Spice up your culinary endeavors with our premium Chilli Pods, now available in a generous 1kg package! These vibrant and fiery chilli pods are perfect for adding heat and flavor to your dishes.\n\nSourced from the finest chilli peppers, our Chilli Pods are carefully selected to deliver the ideal level of spiciness and rich, smoky notes. Whether you\'re making hot sauces, chili pastes, or simply want to infuse your recipes with bold and invigorating heat, our 1kg pack of Chilli Pods is the perfect choice.\n\nEmbrace the exciting world of spicy cuisine and explore the possibilities with our Chilli Pods. With this ample supply, you can craft a wide range of dishes that cater to your heat preferences. Elevate your cooking and add a fiery kick to your favorite recipes with our premium Chilli Pods.');
/*!40000 ALTER TABLE `card` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `uname` varchar(255) DEFAULT NULL,
  `uaddress` varchar(255) DEFAULT NULL,
  `ucity` varchar(55) DEFAULT NULL,
  `uzip` varchar(20) DEFAULT NULL,
  `order_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `price` decimal(10,2) DEFAULT '0.00',
  `payment_method` varchar(50) DEFAULT 'Cash On Delivery',
  `status` varchar(50) DEFAULT 'Successful',
  `title` varchar(250) DEFAULT NULL,
  `item_id` int DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
); ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (24,'S.D Chamod Raween','Aluthgama','DhargaTown','12090','2023-09-12 12:49:47',440.00,'Cash On Delivery','Successful','Roasted Curry Powder 100g',10917918,NULL),(25,'S.D Yasintha Rajini Wimalasinghe','Aluthgama','DhargoTown','12090','2023-09-12 16:30:37',485.50,'Cash On Delivery','Successful','Roasted Curry Powder 100g',10917919,NULL),(26,'Tharushi Divanthika','Kotapitiya','DhargoTown','12090','2023-09-12 16:33:36',485.00,'Cash On Delivery','Successful','Roasted curry powder 100g',10917927,NULL),(27,'S.D Meshara Madhushanka','Aluthgama','DhargoTown','12090','2023-09-12 16:36:53',1600.00,'Cash On Delivery','Successful','Sanstha Tea 200g – (100)',10917921,NULL),(28,'S.D Chnna Kumara','Aluthgama','DhargaTown','12090','2023-09-13 04:04:09',485.50,'Cash On Delivery','Successful','Roasted Curry Powder 100g',10917919,'wimalasinghe355@gmail.com'),(29,'S.D Yasintha Rajini Wimalasinghe','Thaagahawatta, Malewangoda','DhargaTown','12090','2023-09-13 04:19:25',560.22,'Cash On Delivery','Successful','Pepper Powder 100g',10917928,'nadeekaslweragoda@gmail.com'),(30,NULL,NULL,NULL,NULL,'2023-09-13 10:55:55',NULL,'Cash On Delivery','Successful',NULL,NULL,'staff@candhora.com'),(31,NULL,NULL,NULL,NULL,'2023-09-13 10:56:43',NULL,'Cash On Delivery','Successful',NULL,NULL,'candhora@gmail.com'),(32,NULL,NULL,NULL,NULL,'2023-09-13 10:58:26',NULL,'Cash On Delivery','Successful',NULL,NULL,'candhora@gmail.com'),(33,NULL,NULL,NULL,NULL,'2023-09-13 11:02:46',NULL,'Cash On Delivery','Successful',NULL,NULL,'candhora@gmail.com'),(34,NULL,NULL,NULL,NULL,'2023-09-13 11:25:51',NULL,'Cash On Delivery','Successful',NULL,NULL,NULL),(35,NULL,NULL,NULL,NULL,'2023-09-13 11:28:11',NULL,'Cash On Delivery','Successful',NULL,NULL,'staff@candhora.com'),(36,NULL,NULL,NULL,NULL,'2023-09-13 11:35:15',NULL,'Cash On Delivery','Successful',NULL,NULL,'wimalasinghe355@gmail.com'),(37,NULL,NULL,NULL,NULL,'2023-09-13 11:38:45',NULL,'Cash On Delivery','Successful',NULL,NULL,NULL),(38,NULL,NULL,NULL,NULL,'2023-09-13 11:39:14',NULL,'Cash On Delivery','Successful',NULL,NULL,NULL),(39,NULL,NULL,NULL,NULL,'2023-09-13 11:39:16',NULL,'Cash On Delivery','Successful',NULL,NULL,NULL);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES (1,'user1','Chamod@217','2023-09-08 18:23:21');
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-13 18:04:10
