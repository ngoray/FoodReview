CREATE DATABASE  IF NOT EXISTS `beststandard` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci */;
USE `beststandard`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: beststandard
-- ------------------------------------------------------
-- Server version	5.5.5-10.1.25-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `search`
--

DROP TABLE IF EXISTS `search`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `search` (
  `_id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `thumb` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `avaliability` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `link` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `video1` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`_id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `search`
--

LOCK TABLES `search` WRITE;
/*!40000 ALTER TABLE `search` DISABLE KEYS */;
INSERT INTO `search` VALUES (1,'Si Chuan Dou Hua','Images/si.jpg','chinese','http://www.sichuandouhua.com/','yjVkFqotKwE'),(2,'Zaffron Kitchen','Images/z.jpg','indian','https://www.facebook.com/zaffronkitchen/photos/a.668196876573341.1073741828.256508461075520/1514925825233771/?type=3','EdEHa6-HF78'),(3,'PapaRich','Images/pa.jpg','malay','http://papparichnz.co.nz/','BCOLxBta_yg'),(4,'Jai Siam','Images/jai.png','thai','http://www.jai-thai.com/','Kh254B83uH8'),(15,'KBBQ','https://i.ytimg.com/vi/lXzGNt8SOK0/maxresdefault.jpg','korean','https://www.facebook.com/kcooksg/','1hLJTqRpcEE'),(16,'Swee Choon','http://thesmartlocal.com/media/reviews/photos/original/84/fe/5a/_dim-sum-1334822523.jpg','chinese','https://www.sweechoon.com/','2AI68DQd0xE'),(18,'Genki sushi','http://d33sibjczatcj.cloudfront.net/t/1372970077/public/files/533/383/assets/428275/GS_LOGO.jpg','japanese','http://genkisushi.com.sg/','rP5vPHV8xEg'),(19,'Saizeriya','https://www.saizeriya.com.sg/wp-content/uploads/2015/07/Saizeriya-logo.png','italian','https://www.saizeriya.com.sg/','39ryyhljpMk'),(20,'Astons','http://www.astons.com.sg/wp-content/uploads/2017/01/Astons-General.png','western','http://www.astons.com.sg/','VteTysPxm_g');
/*!40000 ALTER TABLE `search` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-02-19 10:55:51
