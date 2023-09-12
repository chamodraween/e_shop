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
) ENGINE=InnoDB AUTO_INCREMENT=10917918 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `card`
--

LOCK TABLES `card` WRITE;
/*!40000 ALTER TABLE `card` DISABLE KEYS */;
INSERT INTO `card` VALUES (10917910,'Moble card 1','April 14 to May 02','https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x','1234',NULL),(10917911,'Moble card 2','April 14 to May 02','https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286','5880','Connect to another computer\nConnect to another computer\nConnect to another computer\nConnect to another computer'),(10917912,'Moble card 3','April 14 to May 02','https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286','2880',NULL),(10917913,'Moble card 4','April 14 to May 02','https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286','21880',NULL),(10917914,'Moble card 555','April 14 to May 02','https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286','26880','Mobile card description'),(10917915,'Moble card 2','April 14 to May 02','https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x','1290','Node version managers allow you to install and switch between multiple versions of Node.js and npm on your system so you can test your applications on multiple versions of npm to ensure they work for users on different versions.'),(10917916,'Moble Phone card 7','April 14 to May 02','https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286','2033.45','Node version managers allow you to install and switch between multiple versions of Node.js and npm on your system so you can test your applications on multiple versions of npm to ensure they work for users on different versions.');
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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,'Chamod Raween','Aluthgama','Dhargatown','12090','2023-09-09 04:55:27',0.00,'Cash On Delivery','Successful',NULL,NULL),(2,'S.D Meshara Madushanka','No 217, Thalagahawatta','DhargaTown','2090','2023-09-09 04:55:27',0.00,'Cash On Delivery','Successful',NULL,NULL),(3,'S.D Channa kumara','No 217, Thalagahawatta','DhargaTown','2090','2023-09-09 04:55:27',0.00,'Cash On Delivery','Successful',NULL,NULL),(6,'Tharushi Diwanthika','Kotapitiya, Nakandalagoda','Dhargatown','12090','2023-09-09 04:55:27',0.00,'Cash On Delivery','Successful',NULL,NULL),(7,'Chamod Raween','Aluthgama','Aluthgama','22080','2023-09-09 07:37:38',0.00,'Cash On Delivery','Successful',NULL,NULL),(9,'Sadev Amantha','Aluthgama','DhargaTown','12090','2023-09-09 16:18:47',0.00,'Cash On Delivery','Successful',NULL,NULL),(10,'ABC','abc , abc, abc,','xyzxyz','22080','2023-09-10 11:54:26',5880.00,'Cash On Delivery','Successful','Moble card 2',10917911),(12,'Chamod Raween','Aluthgama','Aluthgama','12090','2023-09-10 12:09:52',21880.00,'Cash On Delivery','Successful','Moble card 4',10917913),(14,'Meshara','Thaagahawatta, Malewangoda','Aluthgama','22080','2023-09-10 12:12:23',5880.00,'Cash On Delivery','Successful','Moble card 2',10917911),(15,'Meshara','Thaagahawatta, Malewangoda','Aluthgama','22080','2023-09-10 12:12:23',5880.00,'Cash On Delivery','Successful','Moble card 2',10917911),(16,'Chamod Raween','Aluthgama','Dhargatown','12090','2023-09-10 12:15:06',233.45,'Cash On Delivery','Successful','Moble card 7',10917916),(17,'Isuri bagya','No 217, Thalagahawatta','DhargaTown','2090','2023-09-10 17:20:09',1234.00,'Cash On Delivery','Successful','Moble card 1',10917910),(18,'Kavidu Chamod saranga','No 217, Thalagahawatta','Kotapitiya, Nakandalagoda','3862','2023-09-10 17:45:10',233.45,'Cash On Delivery','Successful','Moble card 7',10917916),(19,'New Customer','No 217, Thalagahawatta','Aluthgama','09789','2023-09-11 16:53:38',1534.00,'Cash On Delivery','Successful','Moble card 1',10917910),(23,'Tharushi diwanthika','Thaagahawatta, Malewangoda','Aluthgama','12090','2023-09-12 08:02:39',1534.00,'Cash On Delivery','Successful','Moble card 1',10917910);
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
INSERT INTO `Users` VALUES (1,'user1','','2023-09-08 18:23:21');
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

-- Dump completed on 2023-09-12 14:13:40
