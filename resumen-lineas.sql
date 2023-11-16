-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 16, 2023 at 09:53 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.4.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `resumen-lineas`
--

-- --------------------------------------------------------

--
-- Table structure for table `areas`
--

CREATE TABLE `areas` (
  `Bloque 1` text NOT NULL,
  `Bloque 2` text NOT NULL,
  `Flow` text NOT NULL,
  `Kutter` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `areas`
--

INSERT INTO `areas` (`Bloque 1`, `Bloque 2`, `Flow`, `Kutter`) VALUES
('101A', '', '', ''),
('101B', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `bloque1`
--

CREATE TABLE `bloque1` (
  `linea` text NOT NULL,
  `ordenes` int(100) NOT NULL,
  `horas` float NOT NULL,
  `defectos` int(100) NOT NULL,
  `opf` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `bloque1`
--

INSERT INTO `bloque1` (`linea`, `ordenes`, `horas`, `defectos`, `opf`) VALUES
('101A', 62, 3, 8, 'Si'),
('101B', 0, 0, 0, ''),
('102A', 0, 0, 0, ''),
('102B', 0, 0, 0, ''),
('102C', 0, 0, 0, ''),
('103A', 0, 0, 0, ''),
('103B', 0, 0, 0, ''),
('103C', 0, 0, 0, ''),
('104A', 0, 0, 0, ''),
('104B', 0, 0, 0, ''),
('104C', 0, 0, 0, ''),
('105A', 0, 0, 0, ''),
('105B', 0, 0, 0, ''),
('106A', 0, 0, 0, ''),
('106B', 0, 0, 0, ''),
('107A', 0, 0, 0, ''),
('107B', 0, 0, 0, ''),
('108A', 0, 0, 0, ''),
('108B', 0, 0, 0, ''),
('109A', 0, 0, 0, ''),
('109B', 0, 0, 0, ''),
('111A', 0, 0, 0, ''),
('111B', 0, 0, 0, ''),
('112A', 0, 0, 0, ''),
('112B', 0, 0, 0, ''),
('113A', 0, 0, 0, ''),
('113B', 0, 0, 0, ''),
('117A', 0, 0, 0, ''),
('117B', 0, 0, 0, ''),
('118A', 0, 0, 0, ''),
('118B', 0, 0, 0, ''),
('119A', 0, 0, 0, ''),
('119B', 0, 0, 0, ''),
('121A', 0, 0, 0, ''),
('121B', 0, 0, 0, ''),
('122A', 0, 0, 0, ''),
('122B', 0, 0, 0, ''),
('123A', 0, 0, 0, ''),
('123B', 0, 0, 0, '');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
